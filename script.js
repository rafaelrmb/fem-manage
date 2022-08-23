const mobileButton = document.querySelector('#mobile-menu-btn');
const mobileNavMenu = document.querySelector('#main-nav');

mobileButton.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    mobileNavMenu.classList.toggle('menu-expanded');

    mobileButton.getAttribute('aria-expanded') === 'true'
        ? mobileButton.setAttribute('aria-expanded', false)
        : mobileButton.setAttribute('aria-expanded', true);
}