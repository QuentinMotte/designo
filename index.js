//
//MOBILE NAVIGATION
const btnBurger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
const content = document.querySelector("main");
btnBurger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    content.classList.toggle("shadow");
});
console.log(content);
content.addEventListener("click", () => {
    navMobile.classList.remove("active");
    content.classList.remove("shadow");
});
//
//
