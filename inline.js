window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const handleOpen = () => {
  const nav = document.querySelector(".mobile-nav");
  nav.classList.toggle('show')
};
