import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const newsSlider = () => {
    new Swiper('.news-slider__swiper', {
        modules: [Scrollbar],
        spaceBetween: 30,
        loop: false,
        centeredSlides: false,
        observer: true,
        speed: 400,
        observeParents: true,
        watchOverflow: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            1260: {
                slidesPerView: 3,
            },
            1560: {
                slidesPerView: 4,
            },
            2200: {
                slidesPerView: 5,
            },
        },
    });
}

export default newsSlider;
