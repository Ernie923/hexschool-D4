import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';


// 當漢堡選單下拉時背景顏色變為黑色半透明
const navbarToggler = document.querySelector(".navbar-toggler");
const mainElement = document.querySelector("main");

// ==================== Navbar ====================


// 當漢堡選單下拉時背景顏色變為黑色半透明
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector("main").classList.toggle("main-overlay");
});

// =============== Login & Signup =================

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

let isLoggedIn = false;

const authButton = document.getElementById("auth-btn");
const loginButton = document.getElementById("login-btn");
const signupButton = document.getElementById("signup-btn");
const userIcon = document.getElementById("user-icon");

// 檢查登入狀態並切換顯示
function checkLoginStatus() {
  if (isLoggedIn) {
    loginButton.classList.add("hidden");
    signupButton.classList.add("hidden");
    userIcon.classList.remove("hidden");
    authButton.classList.add("hidden");
  } else {
    loginButton.classList.remove("hidden");
    signupButton.classList.remove("hidden");
    userIcon.classList.add("hidden");
    authButton.classList.remove("hidden");
  }
}

loginButton.addEventListener("click", function () {
  var loginModal = new bootstrap.Modal(document.getElementById("login-modal"));
  if (loginModal) {
    loginModal.hide();
  }
  isLoggedIn = true;
  checkLoginStatus();
});

checkLoginStatus();

//限制checkbox選取數量的上限
$(document).ready(function () {
  $("#input_3_2 input[type=checkbox]").click(function () {
    $("#input_3_2 input[type=checkbox]").attr("disabled", true);
    if ($("#input_3_2 input[type=checkbox]:checked").length >= 3) {
      $("#input_3_2 input[type=checkbox]:checked").attr("disabled", false);
    } else {
      $("#input_3_2 input[type=checkbox]").attr("disabled", false);
    }
  });
});

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    
});
