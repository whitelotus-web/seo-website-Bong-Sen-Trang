const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  nav.id ||= "main-navigation";
  toggle.setAttribute("aria-controls", nav.id);
  const setMenu = (open, returnFocus = false) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener("click", () => {
    setMenu(!nav.classList.contains("is-open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenu(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
  window.matchMedia("(min-width: 1081px)").addEventListener("change", () => setMenu(false));
}
