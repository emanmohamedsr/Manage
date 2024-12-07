let menuBtn = document.getElementById('menu-btn');
let menuBtnImage = document.querySelector('#menu-btn img');
let mobileMenu = document.getElementById('mobile-menu');

let isOpened = false;
menuBtn.addEventListener('click', function() {
    (isOpened) ? menuBtnImage.src = 'images/icon-hamburger.svg' : menuBtnImage.src = 'images/icon-close.svg';
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
    isOpened = !isOpened;
});

let emailSubmit = document.querySelector('footer form');
let emailInput = document.getElementById('email');
let emailInputSpan = document.querySelector('#email + span');
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function validateEmail() {
    if (emailPattern.test(emailInput.value)) {
        return true;
    }
    emailInputSpan.classList.remove('hidden');
    emailInput.value = '';
    emailInput.focus();
    return false;
}

emailSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateEmail()) {
        emailInput.value = '';
        emailInputSpan.classList.add('hidden');
        emailInput.blur();
    }
});