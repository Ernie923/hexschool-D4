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

navbarToggler.addEventListener("click", () => {
    mainElement.classList.toggle("main-overlay");
});

const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    
});
