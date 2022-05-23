////
//DOM ELEMENTS
const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
const content = document.querySelector("main");
const navBar = document.querySelector(".navigation");
const arrowToTop = document.querySelector("#arrow-to-top");
const inputs = document.querySelector("#email");
const warning = document.querySelector(".warning");
console.log(warning);
//
//MOBILE NAVIGATION
btnBurger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    content.classList.toggle("shadow");
    btnBurger.classList.toggle("burger");
});
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
//
//Arrow To Top
window.addEventListener("scroll", () => {
    if (window.scrollY < 400) {
        arrowToTop.style.bottom = "-100px";
    } else {
        arrowToTop.style.bottom = "40px";
    }
});
//
//Email checker
inputs.addEventListener("input", (e) => {
    inputs.value;
    if (!inputs.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        warning.style.display = "block";
        inputs.style.color = "red";
    } else {
        warning.style.display = "none";
        inputs.style.color = "white";
        true;
    }
    console.log(inputs.value);
});
