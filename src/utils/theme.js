export function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeIcon(isDark);
  }
  
  export function loadTheme() {
    const theme = localStorage.getItem("theme") || "light";
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    updateThemeIcon(isDark);
  }
  
  function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
  }
  