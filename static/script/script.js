document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarNav = document.getElementById("navbarNav");
  let lightMode = localStorage.getItem("light-mode");
  const themeSwitch = document.getElementById("themeSwitch");

  hamburger.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !navbarNav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      navbarNav.classList.remove("show");
    }
  });

  const enableLightMode = () => {
    document.body.classList.add("light-mode");
    localStorage.setItem("light-mode", "active");
  };

  const disableLightMode = () => {
    document.body.classList.remove("light-mode");
    localStorage.setItem("light-mode", "null");
  };

  if (lightMode === "active") {
    enableLightMode();
  }

  themeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem("light-mode");
    lightMode !== "active" ? enableLightMode() : disableLightMode();
  });

  const reveals = document.querySelectorAll(".reveal");

  const handleScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
