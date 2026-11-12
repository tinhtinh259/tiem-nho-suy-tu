/* ==========================================================================
   PINNED PROJECTS SECTION CONTROLLER (pinned-page-animation)
   GSAP ScrollTrigger Pinned Split Scroll Controller for Desktop (>1024px)
   & Touch/Drag Swipe Slider Controller for Tablet & Mobile (<=1024px)
   ========================================================================== */

function initPinnedProjects() {
  const projectsSection = document.querySelector("#projects");
  const grid = document.querySelector(".cards-grid");
  const viewport = document.querySelector(".project-right");

  if (!projectsSection || !grid || !viewport) return;

  const cards = grid.querySelectorAll(".project-card");
  const dotsContainer = document.getElementById("projectsDots");
  const counterEl = document.getElementById("cardsCounter");
  const prevBtn = document.getElementById("prevProjectBtn");
  const nextBtn = document.getElementById("nextProjectBtn");

  // Track dragging state to prevent accidental link clicks during swipe
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;
  let isMobileSliderInitialized = false;

  /* ------------------------------------------------------------------------
     1. DESKTOP GSAP PINNED SPLIT SCROLL CONTROLLER
     ------------------------------------------------------------------------ */
  const createScroll = () => {
    const isMobile = window.innerWidth <= 1024;

    // Reset GSAP ScrollTriggers on section for stability
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === projectsSection) t.kill();
      });
    }

    if (isMobile) {
      if (typeof gsap !== 'undefined') {
        gsap.set(grid, { clearProps: "all" });
      }
      updateSliderUI();
      return;
    }

    // Reset any horizontal scroll when returning to desktop
    grid.scrollLeft = 0;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn("GSAP or ScrollTrigger not loaded.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const totalHeight = grid.scrollHeight;
    const viewHeight = viewport.offsetHeight;
    const distance = totalHeight - viewHeight;

    if (distance > 0) {
      gsap.to(grid, {
        y: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: projectsSection,
          start: "top top",
          end: `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      });
    }
  };

  /* ------------------------------------------------------------------------
     2. TABLET & MOBILE SLIDER CONTROLS & GESTURES
     ------------------------------------------------------------------------ */
  function getActiveIndex() {
    if (!cards.length) return 0;
    const currentScroll = grid.scrollLeft;
    const gridPaddingLeft = parseFloat(window.getComputedStyle(grid).paddingLeft) || 0;
    let closestIdx = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const cardPos = (card.offsetLeft - grid.offsetLeft) - gridPaddingLeft;
      const diff = Math.abs(cardPos - currentScroll);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    return closestIdx;
  }

  function scrollToCard(index) {
    if (index >= 0 && index < cards.length) {
      if (index === 0) {
        grid.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        return;
      }
      const card = cards[index];
      const gridPaddingLeft = parseFloat(window.getComputedStyle(grid).paddingLeft) || 0;
      const targetPos = (card.offsetLeft - grid.offsetLeft) - gridPaddingLeft;
      grid.scrollTo({
        left: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }

  function updateSliderUI() {
    if (window.innerWidth > 1024 || !cards.length) return;

    const activeIdx = getActiveIndex();

    // Update dots
    const dots = document.querySelectorAll(".slider-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIdx);
      dot.setAttribute("aria-current", i === activeIdx ? "true" : "false");
    });

    // Update counter
    if (counterEl) {
      counterEl.textContent = `${activeIdx + 1} / ${cards.length}`;
    }

    // Update arrows disabled state
    if (prevBtn) prevBtn.disabled = (activeIdx === 0);
    if (nextBtn) nextBtn.disabled = (activeIdx === cards.length - 1);
  }

  function setupMobileSlider() {
    if (isMobileSliderInitialized) return;
    isMobileSliderInitialized = true;

    // Build dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      cards.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `slider-dot ${idx === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Xem thẻ dự án ${idx + 1}`);
        dot.addEventListener("click", () => scrollToCard(idx));
        dotsContainer.appendChild(dot);
      });
    }

    // Arrow buttons
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const cur = getActiveIndex();
        scrollToCard(Math.max(0, cur - 1));
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const cur = getActiveIndex();
        scrollToCard(Math.min(cards.length - 1, cur + 1));
      });
    }

    // Scroll listener for real-time dot & counter sync
    let ticking = false;
    grid.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateSliderUI();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Touch & Mouse Dragging for Tablet & Mobile
    grid.addEventListener("mousedown", (e) => {
      if (window.innerWidth > 1024) return;
      isDown = true;
      hasDragged = false;
      startX = e.pageX - grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const x = e.pageX - grid.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 6) {
        hasDragged = true;
        grid.classList.add("is-dragging");
        grid.scrollLeft = scrollLeft - walk;
      }
    });

    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      grid.classList.remove("is-dragging");
      setTimeout(() => { hasDragged = false; }, 60);
    });

    // Prevent accidental card links from opening when user is dragging/swiping
    cards.forEach(card => {
      card.addEventListener("click", (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });
  }

  // Initialize
  setupMobileSlider();
  createScroll();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createScroll, 200);
  });
}

document.addEventListener("DOMContentLoaded", initPinnedProjects);
window.addEventListener("load", initPinnedProjects);

