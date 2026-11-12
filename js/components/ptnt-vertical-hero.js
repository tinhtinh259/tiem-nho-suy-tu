/**
 * Phân Tích Nội Tâm - Vertical Split Slider Hero Controller
 * Referenced from /z-temp/dist-vertical-slider
 */

(function () {
  'use strict';

  function initPtntVerticalHero() {
    const sliderContainer = document.querySelector('.ptnt-slider-wrapper');
    if (!sliderContainer) return;

    const slideRight = sliderContainer.querySelector('.ptnt-right-slide');
    const slideLeft = sliderContainer.querySelector('.ptnt-left-slide');
    const upBtn = sliderContainer.querySelector('.ptnt-btn-up');
    const downBtn = sliderContainer.querySelector('.ptnt-btn-down');
    const dotsContainer = sliderContainer.querySelector('.ptnt-slider-dots');
    const progressBar = sliderContainer.querySelector('.ptnt-slider-progress-bar');

    if (!slideRight || !slideLeft) return;

    const slidesLength = slideRight.querySelectorAll('.ptnt-img-item').length;
    if (slidesLength <= 1) return;

    let activeSlideIndex = 0;
    let autoPlayTimer = null;
    let progressTimer = null;
    let isHovered = false;
    const AUTO_PLAY_INTERVAL = 6000;
    const PROGRESS_STEP = 50;
    let progressPercent = 0;

    // Position left slide initially in reverse
    // With percentage %, it works seamlessly across all screen sizes and window resizes
    slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

    // Render pagination dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < slidesLength; i++) {
        const dot = document.createElement('button');
        dot.className = `ptnt-slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Đi tới slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      if (!dotsContainer) return;
      const dots = dotsContainer.querySelectorAll('.ptnt-slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeSlideIndex);
      });
    }

    function applySlideTransform() {
      slideRight.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
      slideLeft.style.transform = `translateY(${activeSlideIndex * 100}%)`;
      updateDots();
    }

    function changeSlide(direction) {
      if (direction === 'up' || direction === 'next') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
          activeSlideIndex = 0;
        }
      } else if (direction === 'down' || direction === 'prev') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slidesLength - 1;
        }
      }
      applySlideTransform();
    }

    function goToSlide(index) {
      if (index >= 0 && index < slidesLength) {
        activeSlideIndex = index;
        applySlideTransform();
      }
    }

    // Button event listeners
    if (upBtn) {
      upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        changeSlide('up');
        resetAutoPlay();
      });
    }

    if (downBtn) {
      downBtn.addEventListener('click', (e) => {
        e.preventDefault();
        changeSlide('down');
        resetAutoPlay();
      });
    }

    // Keyboard navigation
    sliderContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        changeSlide('down');
        resetAutoPlay();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        changeSlide('up');
        resetAutoPlay();
      }
    });

    // Touch Swipe support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          changeSlide('up');
        } else {
          changeSlide('down');
        }
        resetAutoPlay();
      }
    }

    // Auto Play with Progress Bar
    function startProgress() {
      if (progressTimer) clearInterval(progressTimer);
      progressPercent = 0;
      if (progressBar) progressBar.style.width = '0%';

      progressTimer = setInterval(() => {
        if (!isHovered) {
          progressPercent += (PROGRESS_STEP / AUTO_PLAY_INTERVAL) * 100;
          if (progressBar) {
            progressBar.style.width = `${Math.min(progressPercent, 100)}%`;
          }
          if (progressPercent >= 100) {
            changeSlide('up');
            progressPercent = 0;
            if (progressBar) progressBar.style.width = '0%';
          }
        }
      }, PROGRESS_STEP);
    }

    function resetAutoPlay() {
      startProgress();
    }

    sliderContainer.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    sliderContainer.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Start auto progress
    startProgress();

    // Dynamically sync slider height with viewport minus actual header height
    // Ensures zero gap at the bottom of the screen regardless of zoom, DPI, or screen size
    function syncSliderHeight() {
      const header = document.querySelector('header.header') || document.querySelector('header');
      const headerH = header ? Math.round(header.getBoundingClientRect().height || header.offsetHeight) : 76;
      if (headerH > 50) {
        document.documentElement.style.setProperty('--height-header', `${headerH}px`);
      }
      const targetH = Math.max(450, window.innerHeight - headerH);
      sliderContainer.style.height = `${targetH}px`;
    }

    syncSliderHeight();
    window.addEventListener('resize', syncSliderHeight);
    window.addEventListener('orientationchange', syncSliderHeight);
    document.addEventListener('headerLoaded', syncSliderHeight);

    const headerElem = document.querySelector('header.header') || document.querySelector('header');
    if (headerElem && window.ResizeObserver) {
      new ResizeObserver(syncSliderHeight).observe(headerElem);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPtntVerticalHero);
  } else {
    initPtntVerticalHero();
  }
})();
