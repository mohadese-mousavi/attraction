//var appendNumber = 600;
//var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 10,

    breakpoints: {

        // when window width is <= 0
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        // when window width is <= 576
        576: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 20
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }


});

// document.querySelector('.slide-1').addEventListener('click', function(e) {
//     e.preventDefault();
//     swiper.slideTo(0, 0);
// });
// document.querySelector('.slide-250').addEventListener('click', function(e) {
//     e.preventDefault();
//     swiper.slideTo(249, 0);
// });
// document.querySelector('.slide-500').addEventListener('click', function(e) {
//     e.preventDefault();
//     swiper.slideTo(499, 0);
// });
// document.querySelector('.prepend-2-slides').addEventListener('click', function(e) {
//     e.preventDefault();
//     swiper.virtual.prependSlide([
//         'Slide ' + (--prependNumber),
//         'Slide ' + (--prependNumber)
//     ]);
// });
// document.querySelector('.append-slide').addEventListener('click', function(e) {
//     e.preventDefault();
//     swiper.virtual.appendSlide('Slide ' + (++appendNumber));
// });