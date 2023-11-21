// sp-menu開閉
const menuButton = document.getElementById("js-header-button");
const spNavi = document.getElementById("js-sp-navi");

const noScroll = (e) => {
  e.preventDefault();
};

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("open");
  spNavi.classList.toggle("open");

  document.addEventListener("touchmove", noScroll, { passive: false });
  document.addEventListener("wheel", noScroll, { passive: false });

  if (!menuButton.classList.contains("open")) {
    document.removeEventListener("touchmove", noScroll);
    document.removeEventListener("wheel", noScroll);
  }
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
