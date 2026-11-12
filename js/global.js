// 1. Glowing Text
function createGlowingTextFromData() {
  const containers = document.querySelectorAll('.glowingText');

  containers.forEach(container => {
    const text = container.dataset.text;
    if (!text) return;

    container.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'glowing-text';

    text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.animationDelay = `${index * 0.3}s`;
      span.style.marginRight = letter === ' ' ? '0' : '0.2em';
      div.appendChild(span);
    });

    container.appendChild(div);
  });
}

// 2. Replay Text
function initReplayText() {
  const replayTexts = document.querySelectorAll('.replay-text');
  replayTexts.forEach(el => {
    el.setAttribute('data-text', el.innerHTML);
  });
}

// 3. Pop Guide Close
function initPopGuides() {
  document.querySelectorAll(".scene").forEach(section => {
    const pop = section.querySelector(".pop_guide");
    const closeBtn = section.querySelector(".closeGuide");

    if (!pop) return;

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        pop.classList.add("hide");
      });
    }

    section.addEventListener("click", (e) => {
      if (!pop.contains(e.target)) {
        pop.classList.add("hide");
      }
    });
  });
}

// 4. Modal 259 Destiny Number
function openModal259() {
  let modal = document.getElementById('modal259');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal259';
    modal.className = 'modal-259-overlay';
    modal.innerHTML = `
      <div class="modal-259-card">
        <button class="modal-259-close" onclick="closeModal259()">&times;</button>
        <div class="modal-259-num">259</div>
        <div class="modal-259-subtitle">✨ Con Số Cá Nhân Của Tình ✨</div>
        <div class="modal-259-text">
          Sự thật là <strong>259</strong> là con số cá nhân đặc biệt của Tình • mỗi lần xao nhãng nhìn thấy 259, Tình lại tự nhắc mình: <em>"Quay về và tập trung vào bản thân!"</em><br><br>
          Mỗi người trong chúng ta đều sẽ có những con số cá nhân rất riêng. Nhưng nếu bạn chưa biết con số nào của mình, thì cứ thoải mái "dùng chung" con số 259 này cùng Tình nha! 🐱✨
        </div>
        <button class="modal-259-btn" onclick="closeModal259()">Xài chung con số 259 luôn nha! 💛</button>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal259();
    });
  }
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal259() {
  const modal = document.getElementById('modal259');
  if (modal) {
    modal.classList.remove('active');
  }
}

// 5. Back to top smooth scroll
function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 6. Gửi Thư Cho Tiệm Modal Trigger
function openSendLetterModal() {
  let modal = document.getElementById('sendLetterModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'sendLetterModal';
    modal.className = 'modal-259-overlay';
    modal.innerHTML = `
      <div class="modal-259-card" style="max-width: 460px; text-align: left; position: relative;">
        <button class="modal-259-close" onclick="closeSendLetterModal()" title="Đóng">&times;</button>
        <div style="text-align: center; margin-bottom: 18px;">
          <span style="font-size: 32px; display: inline-block; margin-bottom: 4px;">💌</span>
          <h3 style="color: var(--color-1, #d5a864); font-size: 22px; font-weight: 700; margin: 0 0 6px 0;">Gửi Thư Cho Tiệm</h3>
          <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin: 0;">Tiệm luôn ở đây, sẵn lòng lắng nghe những tâm tư chưa từng ngỏ của bạn...</p>
        </div>
        <form id="sendLetterQuickForm" onsubmit="handleSendLetterSubmit(event)">
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 5px; font-weight: 600;">Biệt danh hoặc Tên của bạn:</label>
            <input type="text" id="quickSenderName" placeholder="Ví dụ: Người qua đường, Chú mèo trú mưa..." style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: #fff; box-sizing: border-box; font-size: 13px;">
          </div>
          <div style="margin-bottom: 14px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 5px; font-weight: 600;">Email của bạn (tùy chọn, để Tiệm hồi âm):</label>
            <input type="email" id="quickSenderEmail" placeholder="email@cuaban.com (không bắt buộc)" style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: #fff; box-sizing: border-box; font-size: 13px;">
          </div>
          <div style="margin-bottom: 18px;">
            <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 5px; font-weight: 600;">Lời nhắn gửi gắm lại Tiệm: <span style="color: #ef4444;">*</span></label>
            <textarea id="quickLetterContent" rows="4" required placeholder="Hôm nay của bạn thế nào? Viết vài dòng thả vào hòm thư nhé..." style="width: 100%; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: #fff; box-sizing: border-box; font-size: 13px; resize: vertical; min-height: 90px; line-height: 1.5; font-family: inherit;"></textarea>
          </div>
          <button type="submit" id="quickLetterSubmitBtn" class="modal-259-btn" style="width: 100%; padding: 12px 20px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; border-radius: 8px; background: linear-gradient(135deg, #d5a864, #b8860b); color: #0b1120; transition: all 0.3s ease;">Thả Thư Vào Gió 🕊️</button>
        </form>
        <div style="text-align: center; margin-top: 14px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.1);">
          <a href="thu-cua-ban.html" style="font-size: 12px; color: #d5a864; text-decoration: none; opacity: 0.85;">📜 Hoặc ghé Hòm Thư Bình Yên để đọc thư chung &rarr;</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSendLetterModal();
    });
  }
  setTimeout(() => modal.classList.add('active'), 10);
}

function closeSendLetterModal() {
  const modal = document.getElementById('sendLetterModal');
  if (modal) modal.classList.remove('active');
}

// Backward compatibility aliases
window.openLoginModal = openSendLetterModal;
window.closeLoginModal = closeSendLetterModal;
window.openSendLetterModal = openSendLetterModal;
window.closeSendLetterModal = closeSendLetterModal;

async function handleSendLetterSubmit(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('quickLetterSubmitBtn');
  const senderInput = document.getElementById('quickSenderName');
  const emailInput = document.getElementById('quickSenderEmail');
  const contentInput = document.getElementById('quickLetterContent');

  const sender = (senderInput && senderInput.value.trim()) || "Một Người Bạn Dịu Dàng";
  const email = emailInput ? emailInput.value.trim() : "";
  const message = contentInput ? contentInput.value.trim() : "";

  if (!message) return;

  const originalText = submitBtn ? submitBtn.innerHTML : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Đang gửi lá thư đi... 🕊️";
    submitBtn.style.opacity = "0.7";
  }

  try {
    if (typeof sendCaraflowEmail === "function") {
      await sendCaraflowEmail({
        formType: "Gửi Thư Cho Tiệm (Header)",
        senderName: sender,
        senderEmail: email,
        subject: `[TIỆM NHỎ] Thư gửi từ ${sender}`,
        message: message,
        extraData: {
          "Trạm Nhận": "Header Quick Letter Modal"
        }
      });
    } else {
      await fetch("https://formsubmit.co/ajax/tinhtinh.vov@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `[TIỆM NHỎ] Thư gửi từ ${sender}`,
          "Người Gửi": sender,
          "Email": email || "Ẩn danh",
          "Nội Dung": message,
          "Thời Gian": new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
        })
      });
    }
  } catch (err) {
    console.warn("Lỗi gửi thư:", err);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      submitBtn.style.opacity = "1";
    }
  }

  alert("✨ Tiệm đã nhận được bức thư của bạn rồi!\nCảm ơn bạn đã ghé thăm và gửi lại chút ấm áp. Chúc bạn một ngày thật bình yên 🌿");
  const form = document.getElementById('sendLetterQuickForm');
  if (form) form.reset();
  closeSendLetterModal();
}

// 7. Copy Message Quote to Clipboard
function copyMessageQuote(btn) {
  const card = btn.closest('.message-card');
  if (!card) return;
  const textEl = card.querySelector('.message-card-text');
  if (!textEl) return;

  const quoteText = textEl.innerText.trim();
  navigator.clipboard.writeText(quoteText).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Đã chép';
    btn.style.background = '#e6f4ef';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
    }, 2000);
  }).catch(() => {
    alert('Thông điệp: "' + quoteText + '"');
  });
}

// 8. Toggle Heart Like Reaction
function toggleHeartLike(btn) {
  btn.classList.toggle('liked');
  if (btn.classList.contains('liked')) {
    btn.innerHTML = 'Đã lưu';
  } else {
    btn.innerHTML = 'Lưu';
  }
}

// 9. Particle Sparkle Burst Effect
function createSparkleBurst(x, y) {
  const particles = ['💖', '✨', '🌸', '🐾', '⭐', '🕊️'];
  const count = 6;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'sparkle-particle';
    particle.innerText = particles[Math.floor(Math.random() * particles.length)];
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const dx = (Math.random() - 0.5) * 80;
    const rot = (Math.random() - 0.5) * 60;
    particle.style.setProperty('--dx', `${dx}px`);
    particle.style.setProperty('--rot', `${rot}deg`);

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1200);
  }
}

// 10. Floating Toast Message
function showMessageToast(msg) {
  let container = document.querySelector('.message-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'message-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'message-toast';
  toast.innerText = msg;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// 11. Interactive Message Card Click Handler
function initMessageCardInteractions() {
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.message-card');
    if (!card) return;

    // Trigger particle burst at click position
    createSparkleBurst(e.clientX, e.clientY);

    // Mark card as read/wrapped
    if (!card.classList.contains('is-read')) {
      card.classList.add('is-read');
      showMessageToast('✨ Tình đã gói lại câu nói dịu dàng này cho bạn rồi nhé! 💖');
    }

    // If not clicked directly on copy/like action button, auto copy quote text
    if (!e.target.closest('.message-action-btn')) {
      const textEl = card.querySelector('.message-card-text');
      if (textEl) {
        const quoteText = textEl.innerText.trim();
        navigator.clipboard.writeText(quoteText).catch(() => {});
      }
    }
  });
}

// 12. CARAFLOW GÓC LƯU DẤU (FLOATING PERSONA ENGINE)
const CARA_PERSONA_STORAGE_KEY = 'caraflow_user_persona';
const CARA_DEFAULT_NAME = 'bạn';

function getStoredPersona() {
  try {
    return localStorage.getItem(CARA_PERSONA_STORAGE_KEY) || '';
  } catch (e) {
    return '';
  }
}

function setStoredPersona(name) {
  try {
    if (!name || name.trim() === '' || name.trim().toLowerCase() === 'bạn') {
      localStorage.removeItem(CARA_PERSONA_STORAGE_KEY);
    } else {
      localStorage.setItem(CARA_PERSONA_STORAGE_KEY, name.trim());
    }
  } catch (e) {}
}

function applyUserPersona(name, triggerFlash = false) {
  const finalName = (name && name.trim()) || CARA_DEFAULT_NAME;
  const isCustom = finalName.toLowerCase() !== CARA_DEFAULT_NAME;

  // 1. Cập nhật tất cả các thẻ .cara-user-name
  const nameSpans = document.querySelectorAll('.cara-user-name');
  nameSpans.forEach(el => {
    if (!el.getAttribute('data-original-text') || el.getAttribute('data-original-text').trim() === '') {
      const orig = (el.textContent || el.innerText || '').trim() || 'bạn';
      el.setAttribute('data-original-text', orig);
    }

    const originalText = el.getAttribute('data-original-text') || 'bạn';
    let replacement = finalName;

    if (!isCustom) {
      replacement = originalText;
    } else {
      if (originalText === originalText.toUpperCase()) {
        replacement = finalName.toUpperCase();
      } else if (originalText.charAt(0) === originalText.charAt(0).toUpperCase()) {
        replacement = finalName.charAt(0).toUpperCase() + finalName.slice(1);
      }
    }

    el.textContent = replacement;

    if (triggerFlash) {
      el.classList.add('highlight-flash');
      setTimeout(() => el.classList.remove('highlight-flash'), 1200);
    }
  });

  // 2. Cập nhật widget tab text & title
  const trigger = document.getElementById('caraPersonaTrigger');
  const triggerText = document.getElementById('caraPersonaTriggerText');
  if (triggerText) {
    if (isCustom) {
      triggerText.innerText = `Chào, ${finalName}`;
      if (trigger) trigger.setAttribute('title', `Đang xưng hô: "${finalName}". Nhấn để đổi.`);
    } else {
      triggerText.innerText = 'Góc Lưu Dấu';
      if (trigger) trigger.setAttribute('title', 'Tùy chỉnh cách Tiệm xưng hô với bạn');
    }
  }

  // 3. Tự điền vào các ô nhập tên gửi thư (nếu có trên trang hoặc modal)
  const quickSenderInput = document.getElementById('quickSenderName');
  if (quickSenderInput && !quickSenderInput.value.trim() && isCustom) {
    quickSenderInput.value = finalName;
  }
  const mainSenderInput = document.getElementById('senderName');
  if (mainSenderInput && !mainSenderInput.value.trim() && isCustom) {
    mainSenderInput.value = finalName;
  }
}

function showPersonaToast(msg, icon = '🌿') {
  let toast = document.getElementById('caraPersonaToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'caraPersonaToast';
    toast.className = 'cara-persona-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size: 18px;">${icon}</span> <span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function initPersonaWidget() {
  if (document.getElementById('caraPersonaWidget')) return;

  const currentPersona = getStoredPersona();
  const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/hoa-than-') || window.location.pathname.includes('/three-js-') || window.location.pathname.includes('/phan-tich-noi-tam/');
  const prefix = isInSubdir ? '../' : '';

  const widget = document.createElement('div');
  widget.id = 'caraPersonaWidget';
  widget.className = 'cara-persona-widget';
  widget.innerHTML = `
    <!-- Tab trigger dính mép phải dạng mũi tên thu gọn -->
    <div class="cara-persona-trigger" id="caraPersonaTrigger" title="Nhấn để tùy chỉnh cách Tiệm xưng hô với bạn">
      <span class="cara-persona-trigger-icon" id="caraPersonaTriggerIcon">
        <img src="${prefix}images/icon/tag-icon.png" alt="Tag Icon" class="cara-persona-trigger-img">
      </span>
      <span class="cara-persona-trigger-text" id="caraPersonaTriggerText">${currentPersona ? `Chào, ${currentPersona}` : 'Góc Lưu Dấu'}</span>
    </div>

    <!-- Panel bung ra khi hover/click -->
    <div class="cara-persona-panel" id="caraPersonaPanel">
      <div class="cara-persona-header">
        <div>
          <h4 class="cara-persona-title">🏮 Tiệm Nên Gọi Bạn Là Gì?</h4>
          <p class="cara-persona-desc">Để mỗi bức thư, tản văn bạn đọc đều xưng hô thân thuộc và dịu dàng nhất.</p>
        </div>
        <button class="cara-persona-close-btn" id="caraPersonaCloseBtn" title="Đóng panel" aria-label="Đóng panel">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Quick Preset Pills -->
      <div class="cara-persona-presets">
        <span class="cara-persona-pill" data-name="Tiểu thư">👑 Tiểu thư</span>
        <span class="cara-persona-pill" data-name="Thiếu gia">🎩 Thiếu gia</span>
        <span class="cara-persona-pill" data-name="Khách quen">☕ Khách quen</span>
        <span class="cara-persona-pill" data-name="Người trú mưa">🌧️ Người trú mưa</span>
        <span class="cara-persona-pill" data-name="Mèo lười">🐾 Mèo lười</span>
        <span class="cara-persona-pill" data-name="Bạn thương">🌿 Bạn thương</span>
      </div>

      <!-- Custom Input Field -->
      <div class="cara-persona-input-wrap">
        <label for="caraCustomPersonaInput">Hoặc nhập tên riêng / biệt danh của bạn:</label>
        <input type="text" id="caraCustomPersonaInput" class="cara-persona-input" placeholder="Ví dụ: Lan Anh, Minh, Gió Nhỏ..." value="${currentPersona}">
      </div>

      <!-- Action Buttons -->
      <div class="cara-persona-actions">
        <button type="button" class="cara-persona-save-btn" id="caraPersonaSaveBtn">
          <span>Lưu Dấu</span> ✨
        </button>
        <button type="button" class="cara-persona-reset-btn" id="caraPersonaResetBtn" title="Trở lại cách gọi 'bạn' mặc định">
          Mặc định (Bạn)
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(widget);

  const trigger = widget.querySelector('#caraPersonaTrigger');
  const closeBtn = widget.querySelector('#caraPersonaCloseBtn');
  const saveBtn = widget.querySelector('#caraPersonaSaveBtn');
  const resetBtn = widget.querySelector('#caraPersonaResetBtn');
  const customInput = widget.querySelector('#caraCustomPersonaInput');
  const pills = widget.querySelectorAll('.cara-persona-pill');

  pills.forEach(pill => {
    if (pill.getAttribute('data-name') === currentPersona) {
      pill.classList.add('active');
    }
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenName = pill.getAttribute('data-name');
      customInput.value = chosenName;
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    widget.classList.toggle('open');
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    widget.classList.remove('open');
    widget.classList.add('collapsed');
  });

  widget.addEventListener('mouseleave', () => {
    widget.classList.remove('collapsed');
  });

  document.addEventListener('click', (e) => {
    if (!widget.contains(e.target)) {
      widget.classList.remove('open');
    }
  });

  function handleSave() {
    const chosenName = customInput.value.trim();
    if (!chosenName) {
      handleReset();
      return;
    }

    setStoredPersona(chosenName);
    applyUserPersona(chosenName, true);

    pills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-name') === chosenName);
    });

    widget.classList.remove('open');
    showPersonaToast(`Tiệm đã nhớ rồi nhé, từ giờ sẽ gọi bạn là "${chosenName}"!`, '🏮');
  }

  function handleReset() {
    setStoredPersona('');
    customInput.value = '';
    pills.forEach(p => p.classList.remove('active'));
    applyUserPersona('', true);
    widget.classList.remove('open');
    showPersonaToast('Đã chuyển về cách xưng hô "Bạn" dịu dàng như ban đầu.', '🌿');
  }

  saveBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleSave();
  });

  resetBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    handleReset();
  });

  customInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  });

  applyUserPersona(currentPersona, false);
}

// Global DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  createGlowingTextFromData();
  initReplayText();
  initPopGuides();
  initMessageCardInteractions();
  initPersonaWidget();
  initScrollPathIndicator();

  // Attach send letter button event (support both static & dynamically loaded header)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-get-involved');
    if (btn) {
      e.preventDefault();
      openSendLetterModal();
    }
  });
});

// 10. Circular Scroll Progress Indicator (Reading Progress in Articles)
function initScrollPathIndicator() {
  const indicator = document.getElementById('scrollPathIndicator');
  if (!indicator) return;

  const textEl = document.getElementById('scrollPercentText');
  const wheelEl = document.getElementById('scrollPathWheel');

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const progress = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
      if (textEl) textEl.textContent = progress + '%';
      if (wheelEl) wheelEl.style.transform = 'rotate(' + (progress * 3.6) + 'deg)';
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();
}

if (document.readyState !== 'loading') {
  initScrollPathIndicator();
}