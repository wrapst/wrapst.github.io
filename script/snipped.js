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
  ];

  /* =====================================================
       LOAD ARTICLE DATA
       ===================================================== */

  const loadedArticles = [];

  for (const slug of articles) {
    try {
      const response = await fetch(`/articles/${slug}/article.js`);

      if (!response.ok) {
        throw new Error(`Unable to load ${slug}/article.js`);
      }

      const source = await response.text();

      const article = extractArticleData(source);

      if (!article) {
        console.error(`Article data not found: ${slug}`);

        continue;
      }

      article.slug = slug;

      loadedArticles.push(article);
    } catch (error) {
      console.error(`Error loading article "${slug}":`, error);
    }
  }

  console.log("Wrapst articles loaded:", loadedArticles);

  /* =====================================================
       CATEGORY STATE
       ===================================================== */

  const params = new URLSearchParams(window.location.search);

  let currentCategory = normalizeCategory(params.get("category") || "all");

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

    /*
     * Update URL without reloading.
     */
    const newUrl =
      currentCategory === "all"
        ? window.location.pathname
        : `${window.location.pathname}?category=${currentCategory}`;

    window.history.pushState({}, "", newUrl);

    updateCategoryLabel(currentCategory);

    await renderArticles();
  }

  /* =====================================================
       RENDER ARTICLES
       ===================================================== */

  async function renderArticles() {
    holder.innerHTML = "";

    const filteredArticles =
      currentCategory === "all"
        ? loadedArticles
        : loadedArticles.filter(function (article) {
            return (
              article.category &&
              normalizeCategory(article.category) === currentCategory
            );
          });

    const articlesToShow = filteredArticles.slice(0, 10);

    console.log(
      `Rendering ${articlesToShow.length} articles for category: ${currentCategory}`,
    );

    if (articlesToShow.length === 0) {
      holder.innerHTML = `
                <p class="no-articles">
                    No articles found in this category.
                </p>
            `;

      return;
    }

    /*
     * Create snippets.
     */
    for (const article of articlesToShow) {
      try {
        await load("/component/snipped.html", "snipped-holder", article);

        const snippet = holder.lastElementChild;

        if (snippet) {
          snippet.style.cursor = "pointer";

          snippet.addEventListener("click", function () {
            window.location.href = `/articles/${article.slug}/`;
          });
        }
      } catch (error) {
        console.error(`Unable to create snippet for ${article.slug}`, error);
      }
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
    });
  });

  /* =====================================================
       BROWSER BACK / FORWARD
       ===================================================== */

  window.addEventListener("popstate", async function () {
    const params = new URLSearchParams(window.location.search);

    currentCategory = normalizeCategory(params.get("category") || "all");

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

    /*
     * Compatibility with old data.
     */
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

      /*
       * Find the opening {
       */
      const objectStart = source.indexOf("{", start);

      if (objectStart === -1) {
        return null;
      }

      /*
       * Find the matching closing }.
       *
       * We cannot simply search for the next
       * "};" because article objects contain
       * nested objects and arrays.
       */
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

      /*
       * Extract only:
       *
       * {
       *     title: "...",
       *     ...
       * }
       */
      const objectSource = source.substring(objectStart, objectEnd + 1);

      /*
       * Convert the JavaScript object
       * into an actual object.
       */
      return new Function(`return (${objectSource});`)();
    } catch (error) {
      console.error("Unable to extract article data:", error);

      return null;
    }
  }
});
