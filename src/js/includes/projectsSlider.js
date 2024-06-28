import Swiper, { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

const projectsSlider = () => {
    const breakpoint = window.matchMedia( '(min-width:992px)' );

    let slider;

    const sliderBreakChacker = function() {

        // if larger viewport and multi-row layout needed
        if ((breakpoint.matches === true) && document.querySelector('.projects-slider__swiper')) {

            // clean up old instances and inline styles when available
            if ( slider !== undefined ) slider.destroy( true, true );

            // or/and do nothing
            return;

        // else if a small viewport and single column layout needed
        } else if ((breakpoint.matches === false) && document.querySelector('.projects-slider__swiper')) {

            // fire small viewport version of swiper
            return slider = new Swiper ('.projects-slider__swiper', {
                modules: [Scrollbar],
                spaceBetween: 10,
                loop: false,
                centeredSlides: false,
                observer: true,
                speed: 400,
                observeParents: true,
                watchOverflow: true,
                autoHeight: true,
                scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                },
            });
        }
    };

    if (breakpoint) {
        breakpoint.addListener(sliderBreakChacker);
        sliderBreakChacker();
    }
}

export default projectsSlider;
