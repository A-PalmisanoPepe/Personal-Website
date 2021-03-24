const logoMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.menu');
const startingText = document.querySelector('.starting-text');

function slideMenu() {
    menu.classList.toggle('menu-active');
    logoMenu.classList.toggle('logo-X');
    startingText.classList.toggle('starting-text-hide');
}

logoMenu.addEventListener('click', slideMenu);
