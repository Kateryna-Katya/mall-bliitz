import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.core-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'core-swiper-slide',
        wrapperClass: 'core-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next-first',
            prevEl: '.custom-prev-first',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
    new Swiper('.gallery-swiper', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: 4,
                spaceBetween: 20,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'gallery-swiper-slide',
        wrapperClass: 'gallery-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next-gallery',
            prevEl: '.custom-prev-gallery',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
});