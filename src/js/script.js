//menu
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

menu.addEventListener('click', event => {
  if (event.target === overlay) {
    menu.classList.remove('active');
  }
});

//raitings
const counters = document.querySelectorAll('.skills__raitings-counter'),
  lines = document.querySelectorAll('.skills__raitings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});


$(document).ready(function () {

  //Smooth scroll and pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $('.pageup').fadeIn();
    } else $('.pageup').fadeOut();
  });

  $("a[href^='#up']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });

  $("#form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      checkbox: "required"
    },
    messages: {
      name: {
        required: "Введите свое имя, пожалуйста",
        minlength: jQuery.validator.format("Минимальная длина имени {0} символа")
      },
      email: {
        required: "Введите свою почту, пожалуйста",
        email: "Неправильно введен адрес почты"
      },
      checkbox: "Требуется согласие на обработку данных"
    }
  });

});