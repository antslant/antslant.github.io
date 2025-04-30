import { getYearsExperience } from "./modules/utils.js";

// Dynamically calculate my number of years experience
const yearsExperienceText = document.getElementById("years-experience");
const yearsExperience = getYearsExperience();

yearsExperienceText.textContent = yearsExperience.toString();

// Add a theme toggle
const themeToggle = document.getElementById("theme-toggle");

const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

themeToggle.checked = prefersDarkMode;

if (themeToggle.checked) {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
