function load(comp, where, obj) {
  return fetch(`${comp}`)
    .then((res) => res.text())
    .then((text) => {
      let template = new Function("obj", "return `" + text + "`;");
      document.getElementById(where).innerHTML += template(obj);
    })
    .catch((e) => console.error(e));
}

function loadInFront(comp, where, obj) {
  return fetch(`${comp}`)
    .then((res) => res.text())
    .then((text) => {
      let template = new Function("obj", "return `" + text + "`;");
      document.getElementById(where).innerHTML =
        template(obj) + document.getElementById(where).innerHTML;
    })
    .catch((e) => console.error(e));
}

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
const articleCache = {};

async function getArticleData(slug) {
  if (articleCache[slug]) {
    return articleCache[slug];
  }

  try {
    const response = await fetch(`/articles/${slug}/article.js`);
    if (!response.ok) {
      throw new Error(`Failed to fetch article script: ${slug}`);
    }

    const code = await response.text();
    let articleData = null;

    const fakeDoc = {
      addEventListener: (event, cb) => cb(),
    };
    const fakeLoadArticle = (art) => {
      articleData = art;
    };

    new Function("document", "loadArticle", code)(fakeDoc, fakeLoadArticle);

    if (!articleData) {
      throw new Error(`Could not parse article data for: ${slug}`);
    }

    const hero =
      articleData.sections?.find((section) => section.type === "hero")?.data ||
      {};

    const result = {
      ...articleData,
      slug,
      title: articleData.title || hero.title || "",
      subtitle:
        articleData.subtitle || hero.subtitle || articleData.title || "",
      category: articleData.category || "",
      image: (hero.image || "").replace(/^\.?\//, ""),
      alt: hero.alt || articleData.title || "",
      url: `/articles/${slug}/`,
    };

    articleCache[slug] = result;
    return result;
  } catch (error) {
    console.error(`Error loading article details for "${slug}":`, error);
    return null;
  }
}

async function loadArticle(article) {
  const container = document.getElementById("article-content");

  if (!container) {
    console.error("Article container not found.");
    return;
  }

  container.innerHTML = "";

  for (const section of article.sections) {
    // Risoluzione automatica degli slug prima di passare i dati al template
    if (section.type === "suggested" && Array.isArray(section.data?.articles)) {
      section.data.articles = (
        await Promise.all(
          section.data.articles.map(async (item) => {
            if (typeof item === "string") {
              return await getArticleData(item);
            }
            return item;
          }),
        )
      ).filter(Boolean);
    }

    const componentPath = `../../component/article/${section.type}.html`;

    try {
      const response = await fetch(componentPath);

      if (!response.ok) {
        throw new Error(`Component not found: ${componentPath}`);
      }

      const text = await response.text();

      const template = new Function("obj", `return \`${text}\`;`);

      container.innerHTML += template(section.data || {});
    } catch (error) {
      console.error(`Error loading component "${section.type}"`, error);
    }
  }
}
