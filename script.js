// Navigation
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const link = document.querySelectorAll('.nav-link');

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menu.classList.toggle("change");
})

link.forEach(el => el.addEventListener("click", closeMenu));
function closeMenu() {
    nav.classList.remove("active");
    menu.classList.remove("change");
}

// Type js
let typed = new Typed("#element", {
    strings: ["Web Developer", "Soloist", "Video Editor"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Scroll Reveal
ScrollReveal().reveal('.scale', {
    duration: 2000,
    scale: 0.85
});

ScrollReveal().reveal('.slide', {
    duration: 2000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
});

ScrollReveal().reveal('.fade', {
    duration: 5000,
    move: 0
});