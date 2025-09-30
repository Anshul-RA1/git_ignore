// This file contains the JavaScript code for the webpage.
// It may include functionality for interactivity, such as handling user events or dynamically updating content.

document.addEventListener("DOMContentLoaded", () => {
  const contentContainer = document.getElementById("content");

  fetch("content/gitignore.md")
    .then((response) => response.text())
    .then((data) => {
      contentContainer.innerHTML = marked(data);
    })
    .catch((error) => {
      console.error("Error fetching the markdown content:", error);
      contentContainer.innerHTML = "<p>Failed to load content.</p>";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleMode");
  const body = document.body;
  let dark = false;

  btn.addEventListener("click", function () {
    dark = !dark;
    body.classList.toggle("dark-mode", dark);
    btn.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
