////
//DOM ELEMENTS
const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
const content = document.querySelector("main");
const navBar = document.querySelector(".navigation");
//
//MOBILE NAVIGATION
btnBurger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    content.classList.toggle("shadow");
});
console.log(navBar);
content.addEventListener("click", () => {
    navMobile.classList.remove("active");
    content.classList.remove("shadow");
});
//
//
//SCROLL NAVBAR
let lastScroll = 0;
window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        navBar.style.top = 0;
    } else {
        navBar.style.top = "-170px";
    }
    console.log(lastScroll);
    lastScroll = window.scrollY;
});
