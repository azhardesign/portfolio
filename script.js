// dark mode
const toggle = document.querySelector(".theme-toggle");

// Step 1: check saved preference
const savedTheme = localStorage.getItem("theme");

// Step 2: check system preference
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Step 3: decide initial theme
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  document.documentElement.classList.add("dark-mode");
  toggle.textContent = "☀️"; // show sun if dark mode active
}

// Step 4: toggle theme when button clicked
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");

  const isDark = document.documentElement.classList.contains("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggle.textContent = isDark ? "☀️" : "🌙"; // update icon dynamically
});


// navbar
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});


// contact form
const form = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");

if (form) {
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "Message sent successfully ✅";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again.";
  }
});
}

