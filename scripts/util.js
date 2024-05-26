window.onload = function () {
  const darkModeButton = document.querySelector("#dark-mode-switcher");

  darkModeButton.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("dark-mode");
  });
};
