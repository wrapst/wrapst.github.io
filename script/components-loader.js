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

async function loadArticle(article) {
  const container = document.getElementById("article-content");

  if (!container) {
    console.error("Article container not found.");
    return;
  }

  container.innerHTML = "";

  for (const section of article.sections) {
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
