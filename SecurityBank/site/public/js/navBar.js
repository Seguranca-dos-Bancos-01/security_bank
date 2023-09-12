const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

console.log(hamburger);

if (hamburger) {
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');               
    })
}