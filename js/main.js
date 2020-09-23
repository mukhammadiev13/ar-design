//Языки
$('.nav-langs .nav-lang').click(function(event) {
    $('.nav-langs .nav-lang').removeClass('lang-active');
    $(this).addClass('lang-active');
});

// Умножение чисел
$(document).ready(function () {

    $('.about-section .proliferation-number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

// Слайдеры
let reviewsSwiper = new Swiper('.review__content .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    autoplay: true,
    clickable: true,
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

let photoSwiper = new Swiper('.command .photo__items .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 54,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

// Яндекс Карта
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [41.33174536733508,69.28563893464148],
        zoom: 15,
        behaviors: ['drag'],
    });

    var placemark = new ymaps.Placemark([41.330831, 69.285046]);
    myMap.geoObjects.add(placemark);
}

// accordion
let accordion = $('.faq-item button');

$(accordion).on('click', function(event) {

    $(this).parents('.faq-item').siblings().find('button').removeClass('js-active');
    $(this).parents('.faq-item').find('button').toggleClass('js-active');

    $(this).parents('.faq-item').siblings().find('.faq-text').slideUp(200);
    $(this).parents('.faq-item').find('.faq-text').slideToggle(200);
});