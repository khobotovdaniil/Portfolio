    //menu
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

    //raitings
const counters = document.querySelectorAll('.skills__raitings-counter'),
    lines = document.querySelectorAll('.skills__raitings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});