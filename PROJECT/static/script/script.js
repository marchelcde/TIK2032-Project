document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarNav = document.getElementById("navbarNav");

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    navbarNav.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    const isClickInside =
      navbarNav.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
      navbarNav.classList.remove("show");
    }
  });
});
