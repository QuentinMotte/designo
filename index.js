////
//DOM ELEMENTS
const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
const content = document.querySelector("main");
const navBar = document.querySelector(".navigation");
const arrowToTop = document.querySelector("#arrow-to-top");
const inputs = document.querySelector('input[type="email]');

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
console.log(arrowToTop);

// function ValidateEmail(inputs) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputs.value.match(mailformat)) {
//         alert("Valid email address!");
//         return true;
//     } else {
//         alert("You have entered an invalid email address!");
//         return false;
//     }
// }
// ValidateEmail();
// console.log(inputsValue);

// let email;

// const emailChecker = (value) => {
//     if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
//         inputs.style.display = "block";
//         email = null;
//     } else {
//         inputs.style.display = "none";
//         email = value;
//     }
//     console.log(emailChecker);
//     emailChecker();
// };
