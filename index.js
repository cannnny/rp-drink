const menuOpenButton = document.getElementById("js-header-button");
const menuCloseButton = document.getElementsByClassName("open");
const spNavi = document.getElementById("js-sp-navi");

const noScroll = (e) => {
  e.preventDefault();
};

menuOpenButton.addEventListener("click", function () {
  menuOpenButton.classList.toggle("open");
  spNavi.classList.toggle("open");

  document.addEventListener("touchmove", noScroll, { passive: false });
  document.addEventListener("wheel", noScroll, { passive: false });
});

// swiper
const swiper = new Swiper(".swiper", {
  slideToClickedSlide: true,
  slidesPerView: 1,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// pagetop
const target = document.getElementById("js-mv");
const pageScrollToTop = () => {
  target.scrollIntoView({ behavior: "smooth" });
};
