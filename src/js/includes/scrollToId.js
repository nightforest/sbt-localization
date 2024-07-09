import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll/smooth-scroll';
import Gumshoe from 'gumshoejs/src/js/gumshoe/gumshoe'

const scrollToId = () => {
    const pageNav = document.querySelector('.page-nav');
    const pageNavLinks = pageNav?.querySelectorAll('.page-nav__link');
    const pageNavToggle = pageNav?.querySelector('.page-nav__toggle');
    const pageNavMenu = pageNav?.querySelector('.page-nav__menu');

    let headerHeight = 0;
    let pageNavHeight = 0;
    let headerSectionHeight = 0;

    function heightDetect () {
        headerHeight = document.querySelector('.header')?.offsetHeight | 0;
        pageNavHeight = document.querySelector('.page-nav')?.offsetHeight | 0;
        headerSectionHeight = document.querySelector('.header-section')?.offsetHeight | 0;
    }

    heightDetect();

    window.addEventListener('resize', () => {
        heightDetect();
    });

    if(document.querySelector('[data-scroll]')) {
        new SmoothScroll('[data-scroll]', { 
            speed: 100,
            speedAsDuration: true,
            offset: pageNavHeight,
            updateURL: false,
        });
    }
    
    if(document.querySelector('[data-scroll]')) {
        new Gumshoe('[data-scroll]', {
            offset: pageNavHeight,
            navClass: 'is-active',
        });
    }

    if (window.scrollY > (headerHeight + headerSectionHeight)) {
        pageNav?.classList.add('is-scroll');
    } else {
        pageNav?.classList.remove('is-scroll');
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > (headerHeight + headerSectionHeight)) {
            pageNav?.classList.add('is-scroll');
        } else {
            pageNav?.classList.remove('is-scroll');
        }
    });

    pageNavLinks?.forEach(item => {
        item.addEventListener('click', e => {
            if (window.innerWidth < 768) {
                pageNavToggle?.setAttribute('aria-expanded', false);
                pageNavMenu?.setAttribute('aria-hidden', true);
            }
        });
    });
}

export default scrollToId;