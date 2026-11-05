const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const progress = document.getElementById("progress");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☾" : "☼";
});

menuToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks?.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  if (!progress) return;
  const page = document.documentElement;
  const range = page.scrollHeight - page.clientHeight;
  progress.style.width = range > 0 ? `${(page.scrollTop / range) * 100}%` : "0%";
}, { passive: true });

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
