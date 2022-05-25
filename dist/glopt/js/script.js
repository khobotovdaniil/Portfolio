        //mobile menu
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__menu__item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});


$(document).ready(function(){

        //top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1200) {
          $('.top').fadeIn();
        } else $('.top').fadeOut();
      });

        //owl carousel
    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:7000,
        autoplaySpeed:1000,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
        }
    });

        //validation
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },  
                email: {
                    required: true,
                    email: true
                },
                phone: "required"
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
                phone: "Введите свой номер телефона, пожалуйста"
            }
        });
    }

    validateForms('#callback form');
    validateForms('#prices form');
    validateForms('#questions form');

        //mask
    $('input[name=phone]').mask("+7 (999) 999 - 99 - 99");

        //modal
    $('[data-modal=callback]').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #callback, #thanks').fadeOut('fast');
    });

    $('.button_close').on('click', function() {
        $('.overlay, #callback, #thanks').fadeOut('fast');
    });

        //mailer
    $('form').submit(function(e) {
        if ($(this).valid()) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#callback').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
        }    
    });

    new WOW().init();
});