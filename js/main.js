document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".header-nav.has-burger");
  const btn = nav ? nav.querySelector(".nav-toggle") : null;
  if (!nav || !btn) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", nav.classList.contains("is-open") ? "true" : "false");
  });
});

console.log("nav js loaded");