let menu = document.querySelector('.navigation');
let menuToggle = document.querySelector('.navigation__toggle');

menu.classList.remove('navigation--nojs');

menuToggle.addEventListener('click', function () {
  if (menu.classList.contains('navigation--closed')) {
    menu.classList.remove('navigation--closed');
    menu.classList.add('navigation--opened');
  } else {
    menu.classList.add('navigation--closed');
    menu.classList.remove('navigation--opened');
  }
});
