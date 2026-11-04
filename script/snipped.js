document.addEventListener("DOMContentLoaded", async function () {
  const holder = document.getElementById("snipped-holder");

  if (!holder) {
    return;
  }

  /* =====================================================
       ARTICLE INDEX
       ===================================================== */

  const articles = [
    "le-corbusier-more-than-just-designs",
    "the-buildings-behind-the-internet",
    "the-camera-that-came-back-from-the-moon",
    "the-planet-that-shouldnt-exist",
    "when-more-becomes-the-product",
    "why-good-design-disappears",
    "the-city-that-disappears",
    "the-things-we-build-and-never-see",
    "the-internet-has-a-physical-shape",
    "why-fast-food-keeps-turning-into-pop-culture",
    "the-architecture-of-security",
    "the-universe-is-mostly-made-of-something-we-cannot-see",
    "the-library-where-ai-became-open",
    "the-day-ai-stopped-being-a-tool",
    "the-strange-shape-at-the-bottom-of-saturn",
    "the-internet-was-built-for-humans",
    "why-coffee-shops-all-look-the-same",
    "why-being-still-feels-so-difficult",
    "the-equations-we-still-cannot-fully-solve",
    "why-apple-events-still-feel-like-events",
    "the-new-shape-of-apple",
    "the-future-of-work",
    "why-everything-is-becoming-a-subscription",
    "why-nature-rarely-builds-in-straight-lines",
    "the-vodka-that-learned-to-be-expensive",
    "the-proteinification-of-everything",
  ];

  /* =====================================================
       ARTICLE CACHE & FETCHER
       ===================================================== */

  const articleCache = new Map();

  function fetchArticle(slug) {
    if (articleCache.has(slug)) {
      return articleCache.get(slug);
    }

    const promise = (async () => {
      try {
        const response = await fetch(`/articles/${slug}/article.js`);

        if (!response.ok) {
          throw new Error(`Unable to load ${slug}/article.js`);
        }

        const source = await response.text();
        const article = extractArticleData(source);

        if (!article) {
          throw new Error(`Article data not found: ${slug}`);
        }

        article.slug = slug;

        if (article.sections && article.sections[0]?.data?.image) {
          article.sections[0].data.image = article.sections[0].data.image.replace(/^\.?\//, "");
        }

        return article;
      } catch (error) {
        console.error(`Error loading article "${slug}":`, error);
        return null;
      }
    })();

    articleCache.set(slug, promise);
    return promise;
  }

  /* =====================================================
       SNIPPET TEMPLATE
       ===================================================== */

  let snippetTemplateFn = null;
  let snippetTemplatePromise = null;

  async function getSnippetTemplate() {
    if (snippetTemplateFn) {
      return snippetTemplateFn;
    }

    if (!snippetTemplatePromise) {
      snippetTemplatePromise = fetch("/component/snipped.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Unable to fetch /component/snipped.html");
          }
          return response.text();
        })
        .then((text) => {
          snippetTemplateFn = new Function("obj", "return `" + text + "`;");
          return snippetTemplateFn;
        })
        .catch((error) => {
          console.error("Error loading snippet template:", error);
          snippetTemplatePromise = null;
          return null;
        });
    }

    return snippetTemplatePromise;
  }

  /* =====================================================
       SKELETON BUILDER
       ===================================================== */

  function createSkeleton(index) {
    const el = document.createElement("div");
    el.className = "flex row snipped snipped-skeleton";
    el.setAttribute("data-index", index);
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = `
      <div class="flex row left">
          <div class="skeleton-image skeleton-shimmer"></div>
          <div class="flex column text">
              <div class="skeleton-title skeleton-shimmer"></div>
              <div class="skeleton-desc skeleton-desc-1 skeleton-shimmer"></div>
              <div class="skeleton-desc skeleton-desc-2 skeleton-shimmer"></div>
          </div>
      </div>
      <div class="flex row right">
          <div class="skeleton-category skeleton-shimmer"></div>
      </div>
    `;
    return el;
  }

  /* =====================================================
       CATEGORY STATE
       ===================================================== */

  const params = new URLSearchParams(window.location.search);
  let currentCategory = normalizeCategory(params.get("category") || "all");
  let currentRenderId = 0;

  /* =====================================================
       DROPDOWN
       ===================================================== */

  const categorySelect = document.querySelector(".category-select");
  const categoryButton = document.getElementById("category-select-button");
  const selectedCategory = document.getElementById("selected-category");
  const categoryOptions = document.querySelectorAll(".category-options button");

  const categoryNames = {
    all: "Category: All",
    tech: "Category: Tech",
    design: "Category: Design",
    science: "Category: Science",
    lifestyle: "Category: Lifestyle",
  };

  function updateCategoryLabel(category) {
    if (!selectedCategory) {
      return;
    }

    selectedCategory.textContent = categoryNames[category] || categoryNames.all;
  }

  function openDropdown() {
    if (!categorySelect) {
      return;
    }

    categorySelect.classList.add("open");
    categoryButton.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    if (!categorySelect) {
      return;
    }

    categorySelect.classList.remove("open");
    categoryButton.setAttribute("aria-expanded", "false");
  }

  if (categoryButton) {
    categoryButton.addEventListener("click", function () {
      const isOpen = categorySelect.classList.contains("open");

      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });
  }

  categoryOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      const category = this.dataset.category;
      setCategory(category);
      closeDropdown();
    });
  });

  document.addEventListener("click", function (event) {
    if (categorySelect && !categorySelect.contains(event.target)) {
      closeDropdown();
    }
  });

  /* =====================================================
       SET CATEGORY
       ===================================================== */

  async function setCategory(category) {
    currentCategory = normalizeCategory(category);

    const newUrl =
      currentCategory === "all"
        ? window.location.pathname
        : `${window.location.pathname}?category=${currentCategory}`;

    window.history.pushState({}, "", newUrl);

    updateCategoryLabel(currentCategory);
    await renderArticles();
  }

  /* =====================================================
       RENDER ARTICLES (ONE BY ONE SEQUENTIAL LOAD)
       ===================================================== */

  async function renderArticles() {
    const renderId = ++currentRenderId;
    holder.innerHTML = "";

    const MAX_ARTICLES = 10;

    // 1. Enter page / set category: insert 10 skeleton placeholders covering the full layout
    for (let i = 0; i < MAX_ARTICLES; i++) {
      holder.appendChild(createSkeleton(i));
    }

    // 2. Fetch the snippet template
    const template = await getSnippetTemplate();
    if (renderId !== currentRenderId) {
      return;
    }

    // 3. Scan articles newest first; fetch one by one sequentially
    const candidates = articles.slice().reverse();
    let loadedCount = 0;

    for (const slug of candidates) {
      if (loadedCount >= MAX_ARTICLES) {
        break;
      }

      if (renderId !== currentRenderId) {
        return;
      }

      // Sequential fetch: wait for current fetch to respond before moving on
      const article = await fetchArticle(slug);

      if (renderId !== currentRenderId) {
        return;
      }

      if (!article) {
        continue;
      }

      // Check category match
      const matchesCategory =
        currentCategory === "all" ||
        (article.category &&
          normalizeCategory(article.category) === currentCategory);

      if (!matchesCategory) {
        continue;
      }

      // Replace the respective skeleton placeholder
      const placeholder = holder.querySelector(
        `.snipped-skeleton[data-index="${loadedCount}"]`
      );

      if (placeholder && placeholder.parentNode === holder) {
        const temp = document.createElement("div");
        temp.innerHTML = template(article).trim();
        const snippet = temp.firstElementChild;

        if (snippet) {
          snippet.classList.add("snipped-loaded");
          snippet.style.cursor = "pointer";

          snippet.addEventListener("click", function () {
            window.location.href = `/articles/${article.slug}/`;
          });

          holder.replaceChild(snippet, placeholder);
        }
      }

      loadedCount++;
    }

    if (renderId !== currentRenderId) {
      return;
    }

    // Remove any remaining unused skeleton placeholders
    const remainingSkeletons = holder.querySelectorAll(".snipped-skeleton");
    remainingSkeletons.forEach(function (skel) {
      skel.remove();
    });

    // If no articles found for this category
    if (loadedCount === 0) {
      holder.innerHTML = `
        <p class="no-articles">
            No articles found in this category.
        </p>
      `;
    }
  }

  /* =====================================================
       TRENDING CATEGORIES
       ===================================================== */

  const trendingCategories = document.querySelectorAll(".cat-holder .cat");

  trendingCategories.forEach(function (categoryCard) {
    categoryCard.addEventListener("click", function () {
      const category = this.dataset.category;

      if (!category) {
        return;
      }

      setCategory(category);

      document
        .getElementById("headings")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* =====================================================
       BROWSER BACK / FORWARD
       ===================================================== */

  window.addEventListener("popstate", async function () {
    const p = new URLSearchParams(window.location.search);
    currentCategory = normalizeCategory(p.get("category") || "all");
    updateCategoryLabel(currentCategory);
    await renderArticles();
  });

  /* =====================================================
       INITIAL RENDER
       ===================================================== */

  updateCategoryLabel(currentCategory);
  await renderArticles();

  /* =====================================================
       HELPERS
       ===================================================== */

  function normalizeCategory(category) {
    if (!category) {
      return "all";
    }

    category = category.toLowerCase().trim();

    if (category === "technology") {
      return "tech";
    }

    if (
      category === "all" ||
      category === "tech" ||
      category === "design" ||
      category === "science" ||
      category === "lifestyle"
    ) {
      return category;
    }

    return "all";
  }

  /* =====================================================
       EXTRACT ARTICLE OBJECT
       ===================================================== */

  function extractArticleData(source) {
    try {
      const declaration = "const article =";
      const start = source.indexOf(declaration);

      if (start === -1) {
        console.error("const article = not found");
        return null;
      }

      const objectStart = source.indexOf("{", start);

      if (objectStart === -1) {
        return null;
      }

      let depth = 0;
      let objectEnd = -1;

      for (let i = objectStart; i < source.length; i++) {
        const char = source[i];

        if (char === "{") {
          depth++;
        } else if (char === "}") {
          depth--;

          if (depth === 0) {
            objectEnd = i;
            break;
          }
        }
      }

      if (objectEnd === -1) {
        console.error("Could not find end of article object");
        return null;
      }

      const objectSource = source.substring(objectStart, objectEnd + 1);
      return new Function(`return (${objectSource});`)();
    } catch (error) {
      console.error("Unable to extract article data:", error);
      return null;
    }
  }
});
