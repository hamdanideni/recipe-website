// select element
const navbarMenu = document.querySelector(".navbar-menu");
const menuToggle = document.querySelector("#menu-toggle");

// menu toggle
const toggleMenu = () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("active");
};

menuToggle.addEventListener("click", toggleMenu);
