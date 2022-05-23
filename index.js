////
//DOM ELEMENTS
const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
const content = document.querySelector("main");
const navBar = document.querySelector(".navigation");
const arrowToTop = document.querySelector("#arrow-to-top");
const email = document.querySelector("#email");
const warning = document.querySelector(".warning");
const textArea = document.querySelector("textarea");
const form = document.querySelector("form");
const text = document.querySelector(".message-error");
const pseudoMessage = document.querySelector(".pseudo-message");
const pseudoInput = document.querySelector("#name");
const emailError = document.querySelector(".email-error");

console.log(textArea);
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
email.addEventListener("input", (e) => {
    email.value;
    if (!email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        warning.style.display = "block";
        emailError.innerHTML = "email not valide";
        false;
    } else if (email.value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        warning.style.display = "none";
        emailError.innerHTML = "";
        true;
    } else if (email.value.length === 0) {
        warning.style.display = "none";
        emailError.innerHTML = "";
    }
});
//
//
pseudoInput.addEventListener("input", (e) => {
    if (
        pseudoInput.value.length > 0 &&
        (pseudoInput.value.length < 3 || pseudoInput.value.length > 20)
    ) {
        pseudoMessage.innerHTML =
            "Le pseudo doit faire entre 3 et 20 caractères";
    } else {
        pseudoMessage.innerHTML = "";
    }
});
//
//

textArea.addEventListener("input", (e) => {
    if (textArea.value.length < 15 && textArea.value.length > 0) {
        text.innerHTML = "This cant be empty and under 15 letters";
    } else {
        text.innerHTML = "";
    }
});
form.addEventListener("submit", (e) => {
    // e.preventDefault();
});
