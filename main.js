import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// 當漢堡選單下拉時背景顏色變為黑色半透明
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector("main").classList.toggle("main-overlay");
});

// 登入註冊表單切換
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const tabBackground = document.querySelector(".tab-background");
const loginForm = document.getElementById("login-form");
const loginNav = document.getElementById("login-nav");
const signupForm = document.getElementById("signup-form");
const signupNav = document.getElementById("signup-nav");

// 切換到登入表單
loginTab.addEventListener("click", function () {
  loginForm.classList.remove("hidden");
  loginNav.classList.add("hidden");
  signupNav.classList.remove("hidden");
  signupForm.classList.add("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");

  // 背景滑動到登入 tab
  tabBackground.style.transform = "translateX(0%)";
});

// 切換到註冊表單
signupTab.addEventListener("click", function () {
  signupForm.classList.remove("hidden");
  signupNav.classList.add("hidden");
  loginForm.classList.add("hidden");
  loginNav.classList.remove("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");

  // 背景滑動到註冊 tab
  tabBackground.style.transform = "translateX(100%)";
});

// 點擊註冊鏈接時顯示註冊表單
document.getElementById("signup-link").addEventListener("click", function (e) {
  e.preventDefault();
  signupTab.click();
});

// 點擊登入鏈接時顯示登入表單
document.getElementById("login-link").addEventListener("click", function (e) {
  e.preventDefault();
  loginTab.click();
});
