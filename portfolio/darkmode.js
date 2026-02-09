function toogleTheme() {
  const isDarkMode = localStorage.getItem("darkmode");
  if (isDarkMode === "true") {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
  } else {
    localStorage.setItem("darkmode", "true");
    document.body.classList.add("darkmode");
  }
}

window.onload = function () {
  const isDarkMode = localStorage.getItem("darkmode");
  if (isDarkMode === "true") {
    document.body.classList.add("darkmode");
  }
};

