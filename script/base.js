window.addEventListener("load", async function () {
  await load("/component/navbar.html", "navbar");
  await load("/component/footer.html", "footer");

  initMenu();
  initNavbarAnimation();

  // /* Google Analytics 4 */
  // (function () {
  //   const measurementId = "G-GNH3F0QNT2";

  //   window.dataLayer = window.dataLayer || [];

  //   window.gtag =
  //     window.gtag ||
  //     function () {
  //       window.dataLayer.push(arguments);
  //     };

  //   // Default consent state
  //   window.gtag("consent", "default", {
  //     analytics_storage: "denied",
  //     ad_storage: "denied",
  //     ad_user_data: "denied",
  //     ad_personalization: "denied",
  //   });

  //   window.gtag("js", new Date());
  //   window.gtag("config", measurementId);

  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  //   document.head.appendChild(script);
  // })();
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

function initNavbarAnimation() {
  const brand = document.querySelector(".nav-brand");
  if (!brand) return;

  let hasCollapsed = false;

  function collapseBrand() {
    if (hasCollapsed) return;
    hasCollapsed = true;

    brand.classList.add("animating");
    brand.classList.add("collapsed");

    setTimeout(() => {
      brand.classList.remove("animating");
    }, 1400);
  }

  // Allow the visitor to view the brand for a moment, then absorb it into the logo
  const timer = setTimeout(collapseBrand, 1400);

  // If user scrolls before timer fires, collapse immediately
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 30 && !hasCollapsed) {
        clearTimeout(timer);
        collapseBrand();
      }
    },
    { passive: true, once: true }
  );
}
