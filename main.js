import { getYearsExperience } from "./modules/utils.js";

// Dynamically calculate my number of years experience
const yearsExperienceText = document.getElementById("years-experience");
const yearsExperience = getYearsExperience();

yearsExperienceText.textContent = yearsExperience.toString();

// Add a theme toggle
const themeToggle = document.getElementById("theme-toggle");
const darkModeStatus = document.getElementById("dark-mode-status");

themeToggle.addEventListener("click", () => {
  if (themeToggle.checked) {
    darkModeStatus.textContent = "on";
  } else darkModeStatus.textContent = "off";
});
