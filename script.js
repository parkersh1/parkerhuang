(() => {
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.getElementById("navLinks");
  const themeBtn = document.getElementById("themeBtn");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  // Mobile nav
  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav on link click (mobile)
  navLinks?.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A" && navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  // Theme
  const STORAGE_KEY = "ph_theme";
  const root = document.documentElement;

  function setTheme(mode) {
    if (mode === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");

    localStorage.setItem(STORAGE_KEY, mode);
    const icon = themeBtn?.querySelector(".icon");
    if (icon) icon.textContent = mode === "light" ? "☀" : "☾";
  }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      setTheme("light");
    }


  themeBtn?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
})();
