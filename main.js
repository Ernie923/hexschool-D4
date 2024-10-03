import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 當漢堡選單下拉時背景顏色變為黑色半透明
const navbarToggler = document.querySelector(".navbar-toggler");
const mainElement = document.querySelector("main");

navbarToggler.addEventListener("click", () => {
    mainElement.classList.toggle("main-overlay");
});
