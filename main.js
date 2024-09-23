import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 當漢堡選單下拉時背景顏色變為黑色半透明
const navbarToggler = document.querySelector(".navbar-toggler");
const mainElement = document.querySelector("main");

navbarToggler.addEventListener("click", () => {
  if (mainElement.style.background === "rgba(0, 0, 0, 0.4)") {
    console.log("is already black")
    mainElement.style.background = "";
  } else {
    mainElement.style.background = "#00000066";
    console.log("is not already black")
  }
});
