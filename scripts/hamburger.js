const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-class');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Toggle between hamburger menu and "X"
    hamburgerMenu.classList.toggle('toggle');
});