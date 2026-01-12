/* ==============================
   Portfolio Website JavaScript
   ============================== */

/* 1️⃣ Confirm Website Loaded */
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Portfolio website loaded successfully");
});


/* 2️⃣ Smooth Scroll for Navbar */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* 3️⃣ Active Navbar Highlight on Scroll */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});


/* 4️⃣ PWA – Service Worker Registration (Future Use) */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch(error => console.log("❌ Service Worker Error:", error));
  });
}
