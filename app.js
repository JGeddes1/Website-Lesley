const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav-list');
const navlinks = document.querySelectorAll('.nav-links');

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("open");
    
})
