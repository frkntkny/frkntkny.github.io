// Enhanced mobile responsiveness with clean design principles

// Dark/Light Mode Toggle - Support both desktop and mobile toggles
const themeToggles = document.querySelectorAll(".theme-toggle");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark' mode
const currentTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", currentTheme);
updateThemeIcons(currentTheme);

// Add click event to all theme toggles
themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });
});

function updateThemeIcons(theme) {
  themeToggles.forEach((toggle) => {
    const icon = toggle.querySelector(".theme-icon");
    if (icon) {
      icon.textContent = theme === "light" ? "🌙" : "☀️";
      toggle.setAttribute("title", `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`);
    }
  });
}

// Mobile optimizations
if (/Mobi|Android/i.test(navigator.userAgent)) {
  // Adjust containers for mobile
  const divShow1 = document.getElementById("divShow1");
  const divShow2 = document.getElementById("divShow2");
  const divShow3 = document.getElementById("divShow3");

  [divShow1, divShow2, divShow3].forEach((div) => {
    if (div) {
      div.classList.remove("container");
      div.style.width = "96%";
      div.style.margin = "0 auto";
      div.style.padding = "1rem";
    }
  });
}

// Smooth scroll behavior and navbar collapse on mobile
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    // Close mobile navbar after clicking
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navigation active state management
const navLinks = document.querySelectorAll(".nav-link");
const contentDivs = document.querySelectorAll("#divShow1, #divShow2, #divShow3");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove active class from all links
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    // Add active class to clicked link
    link.classList.add("active");
  });
});

// Close mobile menu when clicking on page content
document.addEventListener("click", function (e) {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbar = document.querySelector(".navbar");

  // Check if click is outside navbar and menu is open
  if (navbarCollapse && navbarCollapse.classList.contains("show")) {
    if (!navbar.contains(e.target)) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  }
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency <= 2) {
  document.documentElement.style.setProperty("--transition-smooth", "all 0.2s ease");

  // Disable some visual effects on very low-end devices
  const style = document.createElement("style");
  style.textContent = `
    #main_div_1:hover,
    #main_div_2:hover,
    #main_div_3:hover {
      transform: none !important;
    }
    .data-stat:hover {
      transform: translateX(2px) !important;
    }
  `;
  document.head.appendChild(style);
}
