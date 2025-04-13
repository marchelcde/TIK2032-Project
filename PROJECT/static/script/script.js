document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarNav = document.getElementById("navbarNav");

  // Saat hamburger diklik, toggle visibility menu
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubble ke document
    navbarNav.classList.toggle("show");
  });

  // Saat klik di luar menu, tutup menu
  document.addEventListener("click", function (event) {
    const isClickInside =
      navbarNav.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
      navbarNav.classList.remove("show");
    }
  });
});
