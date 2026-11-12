/**
 * Interactive Controller for phong-canh.html
 * Caraflow - Tiệm Nhỏ Suy Tư
 */

(function () {
  'use strict';

  // State
  let activeAudioType = null;
  let audioCtx = null;
  let activeAudioNodes = null;
  let sunriseTimeline = null;
  let isWaveFast = false;
  let isDesertFast = true;
  let isHeadlightOn = false;

  // Slider State
  let currentSlide = 0;
  const totalSlides = 3;

  /* ==========================================================================
     1. HORIZONTAL SLIDER CONTROLLER
     ========================================================================== */
  window.goToSlide = function (index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentSlide = index;
    updateSliderUI();
  };

  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderUI();
  };

  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderUI();
  };

  function updateSliderUI() {
    const track = document.getElementById('landscapeSliderTrack');
    if (track) {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Update slides active state
    const slides = document.querySelectorAll('.landscape-slide');
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === currentSlide);
    });

    // Update Scene Tabs
    const tabs = document.querySelectorAll('.landscape-tab-btn');
    tabs.forEach((tab, idx) => {
      tab.classList.toggle('active', idx === currentSlide);
    });

    // Update Indicator Dots
    const dots = document.querySelectorAll('.slider-dot-btn');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });

    // Update Counter Display
    const counterEl = document.getElementById('sliderCurrentNum');
    if (counterEl) {
      counterEl.textContent = `0${currentSlide + 1}`;
    }
  }

  // Keyboard Navigation (◄ ►)
  window.addEventListener('keydown', (e) => {
    // Only if not typing in an input
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowRight') {
      window.nextSlide();
    } else if (e.key === 'ArrowLeft') {
      window.prevSlide();
    }
  });

  // Touch Swipe & Mouse Drag Gestures
  function initSliderGestures() {
    const wrapper = document.getElementById('landscapeSliderWrapper');
    if (!wrapper) return;

    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    let isMouseDown = false;
    let mouseStartX = 0;
    let mouseEndX = 0;

    wrapper.addEventListener('mousedown', (e) => {
      // Don't trigger drag on interactive buttons
      if (e.target.closest('button') || e.target.closest('.floating-scene-bar')) return;
      isMouseDown = true;
      mouseStartX = e.clientX;
    });

    wrapper.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      mouseEndX = e.clientX;
      const diff = mouseEndX - mouseStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          window.nextSlide();
        } else {
          window.prevSlide();
        }
      }
    });

    wrapper.addEventListener('mouseleave', () => {
      isMouseDown = false;
    });

    function handleSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          window.nextSlide();
        } else {
          window.prevSlide();
        }
      }
    }
  }

  // Backward compatibility filterLandscape
  window.filterLandscape = function (category) {
    if (category === 'sunrise' || category === 0) window.goToSlide(0);
    else if (category === 'ocean' || category === 1) window.goToSlide(1);
    else if (category === 'desert' || category === 2) window.goToSlide(2);
    else window.goToSlide(0);
  };

  /* ==========================================================================
     2. SUNRISE MOUNTAIN (GSAP ANIMATION)
     ========================================================================== */
  function initSunriseAnimation() {
    if (typeof gsap === 'undefined') return;

    // Drifting clouds ambient loop
    gsap.to(".st8", { x: -2000, duration: 380, repeat: -1, ease: "linear" });
    gsap.to(".st16", { x: 1200, duration: 120, repeat: -1, ease: "linear" });
    gsap.to(".st12", { x: -2000, duration: 320, repeat: -1, ease: "linear" });

    // Initial sunrise sequence
    window.playSunriseSequence();
  }

  window.playSunriseSequence = function () {
    if (typeof gsap === 'undefined') return;

    const statusEl = document.getElementById('sunriseStatusText');
    if (statusEl) statusEl.textContent = 'Mặt trời đang lên...';

    // Reset initial night state
    gsap.set("#ee-background", { fill: "#213644" });
    gsap.set(".sun", { opacity: 0, y: 30 });
    gsap.set(".st4", { opacity: 1 });
    gsap.set(".st0", { fill: "#626a86" });
    gsap.set(".st1", { fill: "#54556f" });
    gsap.set(".tree", { fill: "#292536" });

    // Timeline transition to radiant sunrise
    if (sunriseTimeline) sunriseTimeline.kill();
    sunriseTimeline = gsap.timeline({
      onComplete: () => {
        if (statusEl) statusEl.textContent = 'Bình minh rực rỡ (7:00 AM)';
      }
    });

    sunriseTimeline
      .to(".st4", { opacity: 0, duration: 4, ease: "power2.out" })
      .to(".sun", { opacity: 1, y: -20, duration: 5, ease: "power2.out" }, "-=3.5")
      .to("#ee-background", { fill: "#acf5fb", duration: 5, ease: "power1.inOut" }, "-=4.5")
      .to(".st0", { fill: "#5bbce4", duration: 5, ease: "power1.inOut" }, "-=4.5")
      .to(".st1", { fill: "#C2D220", duration: 5, ease: "power1.inOut" }, "-=4.5")
      .to(".tree", { fill: "#44664D", duration: 5, ease: "power1.inOut" }, "-=4.5");
  };

  window.setSunriseTime = function (mode) {
    if (typeof gsap === 'undefined') return;
    const statusEl = document.getElementById('sunriseStatusText');

    if (mode === 'night') {
      gsap.to("#ee-background", { fill: "#131f28", duration: 2 });
      gsap.to(".sun", { opacity: 0, y: 40, duration: 2 });
      gsap.to(".st4", { opacity: 1, duration: 2 });
      gsap.to(".st0", { fill: "#353949", duration: 2 });
      gsap.to(".st1", { fill: "#2f3041", duration: 2 });
      gsap.to(".tree", { fill: "#1a1824", duration: 2 });
      if (statusEl) statusEl.textContent = 'Đêm tĩnh (04:00 AM)';
    } else if (mode === 'dawn') {
      gsap.to("#ee-background", { fill: "#f59e0b", duration: 2 });
      gsap.to(".sun", { opacity: 0.7, y: 10, duration: 2 });
      gsap.to(".st4", { opacity: 0, duration: 2 });
      gsap.to(".st0", { fill: "#b45309", duration: 2 });
      gsap.to(".st1", { fill: "#92400e", duration: 2 });
      gsap.to(".tree", { fill: "#451a03", duration: 2 });
      if (statusEl) statusEl.textContent = 'Hừng đông (05:45 AM)';
    } else if (mode === 'day') {
      gsap.to("#ee-background", { fill: "#acf5fb", duration: 2 });
      gsap.to(".sun", { opacity: 1, y: -25, duration: 2 });
      gsap.to(".st4", { opacity: 0, duration: 2 });
      gsap.to(".st0", { fill: "#5bbce4", duration: 2 });
      gsap.to(".st1", { fill: "#C2D220", duration: 2 });
      gsap.to(".tree", { fill: "#44664D", duration: 2 });
      if (statusEl) statusEl.textContent = 'Nắng mai ấm (07:30 AM)';
    }
  };

  /* ==========================================================================
     3. COASTAL NATURAL BAY (INTERACTION)
     ========================================================================== */
  window.toggleWaveSpeed = function (btnEl) {
    isWaveFast = !isWaveFast;
    const waves = document.querySelectorAll('.landscape-natural-viewport [class^="wave"]');
    waves.forEach(w => {
      w.style.animationDuration = isWaveFast ? '4s' : '8s';
    });
    if (btnEl) {
      btnEl.classList.toggle('active', isWaveFast);
      btnEl.innerHTML = isWaveFast ? '⚡ Sóng Gió Dạt Dào' : '🌊 Nhịp Sóng Êm Đềm';
    }
  };

  window.playShipWhistle = function () {
    playSynthesizedHorn();
  };

  /* ==========================================================================
     4. SCALABLE DESERT (INTERACTION)
     ========================================================================== */
  window.toggleHeadlight = function (btnEl) {
    isHeadlightOn = !isHeadlightOn;
    const viewport = document.getElementById('desertViewport');
    if (viewport) {
      viewport.classList.toggle('headlight-on', isHeadlightOn);
    }
    if (btnEl) {
      btnEl.classList.toggle('active', isHeadlightOn);
      btnEl.innerHTML = isHeadlightOn ? '💡 Đèn Pha: Đang Bật' : '💡 Bật Đèn Pha Đêm';
    }
  };

  window.toggleDesertSpeed = function (btnEl) {
    isDesertFast = !isDesertFast;
    const viewport = document.getElementById('desertViewport');
    if (viewport) {
      viewport.classList.toggle('slow-mode', !isDesertFast);
    }
    if (btnEl) {
      btnEl.classList.toggle('active', !isDesertFast);
      btnEl.innerHTML = isDesertFast ? '🚗 Tốc Độ: Nhanh' : '🚶 Tốc Độ: Thong Thả';
    }
  };

  /* ==========================================================================
     5. WEB AUDIO AMBIENT SOUND SYNTHESIZER
     ========================================================================== */
  window.toggleLandscapeAudio = function (type, btnEl) {
    if (activeAudioType === type) {
      stopAudio();
      activeAudioType = null;
      resetAudioButtons();
    } else {
      stopAudio();
      activeAudioType = type;
      resetAudioButtons();
      if (btnEl) btnEl.classList.add('playing');
      startAudio(type);
    }
  };

  function resetAudioButtons() {
    document.querySelectorAll('.landscape-audio-btn').forEach(b => b.classList.remove('playing'));
  }

  function stopAudio() {
    if (activeAudioNodes) {
      try {
        if (activeAudioNodes.stop) activeAudioNodes.stop();
        if (activeAudioNodes.timer) clearInterval(activeAudioNodes.timer);
      } catch (e) {}
      activeAudioNodes = null;
    }
    if (audioCtx) {
      try { audioCtx.close(); } catch (e) {}
      audioCtx = null;
    }
  }

  function startAudio(type) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      if (type === 'sunrise') {
        activeAudioNodes = createSunriseAmbient(audioCtx);
      } else if (type === 'ocean') {
        activeAudioNodes = createOceanAmbient(audioCtx);
      } else if (type === 'desert') {
        activeAudioNodes = createDesertAmbient(audioCtx);
      }
    } catch (err) {
      console.warn('Web Audio error:', err);
    }
  }

  // 1. Sunrise: Gentle morning breeze + occasional sweet bird chirps
  function createSunriseAmbient(ctx) {
    // Breeze noise
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const breezeFilter = ctx.createBiquadFilter();
    breezeFilter.type = 'bandpass';
    breezeFilter.frequency.setValueAtTime(520, ctx.currentTime);
    breezeFilter.Q.setValueAtTime(1.2, ctx.currentTime);

    const breezeGain = ctx.createGain();
    breezeGain.gain.setValueAtTime(0.045, ctx.currentTime);

    whiteNoise.connect(breezeFilter);
    breezeFilter.connect(breezeGain);
    breezeGain.connect(ctx.destination);
    whiteNoise.start();

    // Sweet bird chirps interval
    const birdTimer = setInterval(() => {
      if (ctx.state === 'running') {
        playSingleBirdChirp(ctx);
      }
    }, 2800);

    return {
      stop: () => {
        whiteNoise.stop();
        clearInterval(birdTimer);
      },
      timer: birdTimer
    };
  }

  function playSingleBirdChirp(ctx) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const baseFreq = 2200 + Math.random() * 800;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, ctx.currentTime + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 400, ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  }

  // 2. Ocean Waves: Deep rhythmic surge
  function createOceanAmbient(ctx) {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.02, ctx.currentTime);

    // LFO for rhythmic wave swelling (6 second wave cycle)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.18, ctx.currentTime); // ~5.5s wave cycle

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(0.07, ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    lfo.start();

    return {
      stop: () => {
        noise.stop();
        lfo.stop();
      }
    };
  }

  // 3. Desert Night: Ethereal resonant wind & cricket tone
  function createDesertAmbient(ctx) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(160, ctx.currentTime);
    osc2.frequency.setValueAtTime(240, ctx.currentTime);

    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.015, ctx.currentTime);

    // Wind filter
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.setValueAtTime(280, ctx.currentTime);
    windFilter.Q.setValueAtTime(2, ctx.currentTime);

    const windGain = ctx.createGain();
    windGain.gain.setValueAtTime(0.035, ctx.currentTime);

    osc1.connect(gain1);
    osc2.connect(gain1);
    gain1.connect(ctx.destination);

    noise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    noise.start();

    return {
      stop: () => {
        osc1.stop();
        osc2.stop();
        noise.stop();
      }
    };
  }

  // Steamboat horn synthesizer
  function playSynthesizedHorn() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(140, ctx.currentTime);
      osc2.frequency.setValueAtTime(175, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.6);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 1.7);
      osc2.stop(ctx.currentTime + 1.7);
    } catch (e) {}
  }

  // DOM Ready initialization
  document.addEventListener('DOMContentLoaded', () => {
    initSunriseAnimation();
    initSliderGestures();
  });
})();
