/* ==========================================================================
   HERO OPTION 2: LOFI AMBIENT AUDIO PLAYER LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.getElementById("heroLofiPlayBtn");
  const discBox = document.getElementById("heroLofiDisc");
  const statusText = document.getElementById("heroLofiStatus");
  const iconSpan = document.getElementById("heroLofiIcon");

  if (!playBtn || !discBox) return;

  let isPlaying = false;
  let audioContext = null;
  let oscillator = null;
  let gainNode = null;
  let rainNode = null;

  // Web Audio API Relaxing Ambient Sound Generator (Soft 432Hz sine chime & gentle ambient rain)
  function startAmbientSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();

      // Soft Gain Node
      gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
      gainNode.connect(audioContext.destination);

      // Warm Sine Wave Drone (432 Hz Healing Frequency)
      oscillator = audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(432, audioContext.currentTime);
      
      // Lowpass filter for warm cozy tone
      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, audioContext.currentTime);

      oscillator.connect(filter);
      filter.connect(gainNode);
      oscillator.start();

      // Gentle Rain Noise Generator
      const bufferSize = audioContext.sampleRate * 2;
      const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      rainNode = audioContext.createBufferSource();
      rainNode.buffer = noiseBuffer;
      rainNode.loop = true;

      const rainFilter = audioContext.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.setValueAtTime(400, audioContext.currentTime);

      const rainGain = audioContext.createGain();
      rainGain.gain.setValueAtTime(0.015, audioContext.currentTime);

      rainNode.connect(rainFilter);
      rainFilter.connect(rainGain);
      rainGain.connect(audioContext.destination);

      rainNode.start();
    } catch (e) {
      console.log("Audio Context initialized:", e);
    }
  }

  function stopAmbientSound() {
    if (gainNode && audioContext) {
      try {
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
        setTimeout(() => {
          if (oscillator) oscillator.stop();
          if (rainNode) rainNode.stop();
          if (audioContext) audioContext.close();
          audioContext = null;
        }, 500);
      } catch (e) {}
    }
  }

  playBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      discBox.classList.add("playing");
      if (iconSpan) iconSpan.textContent = "⏸️";
      if (statusText) statusText.textContent = "▶️ Đang phát: 432Hz Lofi Bình Yên & Tiếng Mưa";
      startAmbientSound();
    } else {
      discBox.classList.remove("playing");
      if (iconSpan) iconSpan.textContent = "▶️";
      if (statusText) statusText.textContent = "⏸️ Tạm dừng • Nhấn để bật nhạc";
      stopAmbientSound();
    }
  });
});

/* ==========================================================================
   HERO CARDS ACTIONS & WELCOME LETTER MODAL
   ========================================================================== */

// 1. Smooth Scroll To Section (tự động trừ chính xác chiều cao header để mép section khít đáy header)
function scrollToSection(selector, event) {
  if (event && event.preventDefault) event.preventDefault();
  const target = document.querySelector(selector);
  if (target) {
    const header = document.querySelector('.header') || document.querySelector('header') || document.querySelector('.navbar');
    const headerHeight = header ? header.getBoundingClientRect().height : 95;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: Math.max(0, Math.round(targetPos)),
      behavior: 'smooth'
    });
  }
}

let letterCloseTimer = null;

// 2. Open Welcome Letter
function openWelcomeLetterModal(event) {
  if (event && event.preventDefault) event.preventDefault();
  const modal = document.getElementById('welcomeLetterModal');
  if (modal) {
    if (letterCloseTimer) {
      clearTimeout(letterCloseTimer);
      letterCloseTimer = null;
    }
    modal.classList.remove('closing');
    const card = modal.querySelector('.welcome-letter-card');
    const rodBottom = modal.querySelector('.scroll-rod-bottom');
    if (card) {
      card.style.animation = 'none';
      card.offsetHeight; // force reflow
      card.style.animation = '';
    }
    if (rodBottom) {
      rodBottom.style.animation = 'none';
      rodBottom.offsetHeight; // force reflow
      rodBottom.style.animation = '';
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// 3. Close Welcome Letter (Cuộn ngược trục cuốn từ dưới lên trên)
function closeWelcomeLetterModal() {
  const modal = document.getElementById('welcomeLetterModal');
  if (!modal || !modal.classList.contains('active') || modal.classList.contains('closing')) return;

  modal.classList.add('closing');

  if (letterCloseTimer) clearTimeout(letterCloseTimer);
  letterCloseTimer = setTimeout(() => {
    modal.classList.remove('active');
    modal.classList.remove('closing');
    document.body.style.overflow = '';
    const card = modal.querySelector('.welcome-letter-card');
    if (card) card.scrollTop = 0;
    letterCloseTimer = null;
  }, 900);
}

// 4. Close on Backdrop Click
function handleLetterBackdropClick(event) {
  if (event.target && event.target.id === 'welcomeLetterModal') {
    closeWelcomeLetterModal();
  }
}

// 5. Continue exploring from letter
function continueFromLetter(selector) {
  closeWelcomeLetterModal();
  setTimeout(() => {
    scrollToSection(selector);
  }, 850);
}

// 6. Escape key listener for Letter Modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('welcomeLetterModal');
    if (modal && modal.classList.contains('active')) {
      closeWelcomeLetterModal();
    }
  }
});

function navigateToStory(url, event) {
  if (event && event.preventDefault) event.preventDefault();
  window.location.href = url;
}

// Expose globally for inline onclick handlers
window.scrollToSection = scrollToSection;
window.openWelcomeLetterModal = openWelcomeLetterModal;
window.closeWelcomeLetterModal = closeWelcomeLetterModal;
window.handleLetterBackdropClick = handleLetterBackdropClick;
window.continueFromLetter = continueFromLetter;
window.navigateToStory = navigateToStory;

/* ==========================================================================
   3D HERO CARDS STACK (3 THẺ TỰ NHIÊN / BỨC THƯ ON TOP / CLICK TRÁO BÀI)
   - "Lá Thư Đầu Tiên" luôn On Top chào đón khách
   - Click thẻ bên trái / bên phải: Tráo thẻ đó lên trên cùng
   - Click thẻ ở giữa (On Top): Kích hoạt hành động (mở thư / cuộn tới section)
   - Hoàn toàn tĩnh tại, không tự động nhảy lung tung
   ========================================================================== */
(function initHeroCardsRotation() {
  const container = document.querySelector('.hero-cards-stack-container');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.hero-card-stack-item'));
  if (cards.length < 3) return;

  // 3 Vị trí thẻ trong không gian 3D:
  // 0: pos-left (bên trái)
  // 1: pos-front (ở giữa trên cùng On Top)
  // 2: pos-right (bên phải)
  const SLOT_CLASSES = ['pos-left', 'pos-front', 'pos-right'];

  // Thứ tự thẻ trong HTML:
  // Card 0: Chú mèo dạo bước -> slot 0 (pos-left)
  // Card 1: Lá Thư Đầu Tiên -> slot 1 (pos-front) - On Top cố định lúc đầu
  // Card 2: Hành Trình Dự Án -> slot 2 (pos-right)
  const initialSlots = [0, 1, 2];
  let currentStep = 0;

  function updateCardPositions() {
    cards.forEach((card, idx) => {
      card.classList.remove('pos-front', 'pos-left', 'pos-right', 'pos-hidden');
      const slotIndex = (initialSlots[idx] + currentStep) % 3;
      card.classList.add(SLOT_CLASSES[slotIndex]);
    });
  }

  function bringCardToFront(cardIdx) {
    // Tìm currentStep sao cho thẻ cardIdx có slot === 1 (pos-front)
    currentStep = (1 - initialSlots[cardIdx] + 3) % 3;
    updateCardPositions();
  }

  // Khi người dùng click vào bất kỳ thẻ nào:
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      const currentSlot = (initialSlots[idx] + currentStep) % 3;
      if (currentSlot !== 1) {
        // Thẻ đang ở cánh bên trái hoặc bên phải -> Click sẽ tráo thẻ này lên On Top!
        e.stopPropagation();
        e.preventDefault();
        bringCardToFront(idx);
      }
      // Nếu thẻ đã ở On Top -> Hành động (mở thư / cuộn tới #projects / cuộn tới .discovery_section) kích hoạt bình thường!
    }, true);
  });

  // Khởi tạo trạng thái ban đầu
  updateCardPositions();
})();

// Auto-open Welcome Letter if URL has parameter openLetter=true or hash #welcome-letter
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.search.includes('openLetter=true') || window.location.hash === '#welcome-letter') {
    setTimeout(() => {
      if (typeof openWelcomeLetterModal === 'function') {
        openWelcomeLetterModal();
      }
    }, 400);
  }
});

