const menuButton = document.getElementById("js-header-button");
const spNavi = document.getElementById("js-sp-navi");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("open");
  spNavi.classList.toggle("open");
});
