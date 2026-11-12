
document.addEventListener('DOMContentLoaded', function() {
    function initializeSwiper(carousel) {
        var carouselId = carousel.getAttribute('data-carousel-id');
        var breakpointsConfig = {
            // Default breakpoints
            9999: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1365: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            491: {
                slidesPerView: 1.026,
                spaceBetween: 16,
            },
            
        };

        if (carouselId === "2") {
            breakpointsConfig = {
                
                1365: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                340:{
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            };
        }

        return new Swiper(carousel, {
            slidesPerView: 3,
            spaceBetween: 24,
            grabCursor: true,
            keyboard: true,
            effect: 'coverflow',
            navigation: {
                nextEl: `.swiper-button-next-id-${carouselId}`,
                prevEl: `.swiper-button-prev-id-${carouselId}`,
            },
            pagination: {
                el: `.swiper-pagination-common-id-${carouselId}`,
                clickable: true,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 0,
                slideShadows: true,
            },
            breakpoints: breakpointsConfig
        });
    }

    function updateSliderClasses(swiper, parentSliderCommon, screenSize) {
        var numberOfSlides = swiper.slides.length;
        if (screenSize > 1366 && numberOfSlides > 3) {
            parentSliderCommon.classList.add('multiple_slides');
            parentSliderCommon.classList.remove('few_slides');
        } else if (screenSize > 992 && screenSize <= 1366 && numberOfSlides > 2) {
            parentSliderCommon.classList.add('multiple_slides');
            parentSliderCommon.classList.remove('few_slides');
        } else if (screenSize <= 992 && screenSize > 767 && numberOfSlides > 1) {
            parentSliderCommon.classList.add('multiple_slides');
            parentSliderCommon.classList.remove('few_slides');
        } else if (screenSize <= 767 && screenSize > 491 && numberOfSlides > 1) {
            parentSliderCommon.classList.add('multiple_slides');
            parentSliderCommon.classList.remove('few_slides');
        } else if (screenSize <= 491 && numberOfSlides > 1) {
            parentSliderCommon.classList.add('multiple_slides');
            parentSliderCommon.classList.remove('few_slides');
        } else {
            parentSliderCommon.classList.add('few_slides');
            parentSliderCommon.classList.remove('multiple_slides');
        }
    }

    function checkAndInitializeSwipers() {
        var carousels = document.querySelectorAll('.series-carousel-container');
        var screenSize = window.innerWidth;
        console.log('Screen size:', screenSize);

        carousels.forEach(function(carousel) {
            var carouselId = carousel.getAttribute('data-carousel-id');
            var parentSliderCommon = carousel.closest('.slider_common');
            var numberOfSlides = carousel.querySelectorAll('.swiper-slide').length;
            console.log('Carousel ID:', carouselId, 'Number of Slides:', numberOfSlides);

            if ((carouselId === "2" && screenSize > 1365) || (carouselId === "1" && numberOfSlides <= 3)) {
                parentSliderCommon.classList.add('few_slides');
                parentSliderCommon.classList.remove('multiple_slides');
            } else {
                var swiper = initializeSwiper(carousel);
                updateSliderClasses(swiper, parentSliderCommon, screenSize);
            }
        });
    }

    // Initial check and initialization
    checkAndInitializeSwipers();

    // Re-check and initialize on window resize
    window.addEventListener('resize', checkAndInitializeSwipers);
});
