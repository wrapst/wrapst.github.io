window.addEventListener("load", async function () {
  await load("../component/navbar.html", "navbar");
  await load("../component/footer.html", "footer");

  initMenu();
});

function initMenu() {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const sideMenu = document.getElementById("side-menu");
  const overlay = document.getElementById("menu-overlay");

  if (!menuOpen || !menuClose || !sideMenu || !overlay) {
    return;
  }

  function openMenu() {
    sideMenu.classList.add("open");
    overlay.classList.add("open");

    sideMenu.setAttribute("aria-hidden", "false");
    menuOpen.setAttribute("aria-expanded", "true");

    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("open");

    sideMenu.setAttribute("aria-hidden", "true");
    menuOpen.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");
  }

  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  sideMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
