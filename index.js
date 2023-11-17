const menuButton = document.getElementById("js-header-button");
const spNavi = document.getElementById("js-sp-navi");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("open");
  spNavi.classList.toggle("open");
});

// swiper
const swiper = new Swiper(".swiper", {
  slideToClickedSlide: true,
  slidesPerView: 1,
  // watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
