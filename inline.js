window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const handleOpen = () => {
  const nav = document.querySelector(".mobile-nav");
  nav.classList.toggle("show");
};

const whatMore = document.querySelector(".what-more");
const arrow = document.querySelector('.fa-arrow-right')

whatMore.addEventListener("mouseenter", () => {
    arrow.classList.add('show')
});

whatMore.addEventListener("mouseleave", () => {
    arrow.classList.remove('show')

});
