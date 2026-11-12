/* ==========================================================================
   CSS LOVE LETTERS INTERACTIVE LOGIC (CLEAN & RELIABLE WITHOUT SCROLL FLYBACK)
   WITH FULLSCREEN FREE DRAGGING & REPLAY ALL LETTERS ON COMPLETE CLOSE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".letter");
  const lettersContainer = document.querySelector(".letters");
  const openEnvBtn = document.querySelector("#openEnvelope");
  const resetEnvBtn = document.querySelector("#resetEnvelopeBtn");
  const shuffleEnvBtn = document.querySelector("#shuffleLettersBtn");
  const restoreBarBtn = document.querySelector("#restoreAllLettersBarBtn");
  const replayLettersCard = document.querySelector("#replayLettersCard");
  const replayAllLettersBtn = document.querySelector("#replayAllLettersBtn");
  const envelope = document.querySelector(".envelope");
  let zIndexCounter = 100;

  if (!lettersContainer || !openEnvBtn || !envelope) return;

  // Pool of Poetic Vietnamese Aliases & Pen Names
  const vietnameseAliases = [
    'Một Người Trú Mưa 🌧️',
    'Góc Hiên Chiều Nắng ☀️',
    'Chú Mèo Nhỏ Tuổi Mèo 🐾',
    'TìnhTình 🍃',
    'Kẻ Đi Tìm Khoảng Lặng 🌌',
    'Một Ẩn Danh Dịu Dàng ✨',
    'Bình Phàm Ký 📜',
    'Người Bạn Đêm Muộn 🌙',
    'Tách Trà Chiều Thu ☕',
    'Một Nhành Hoa Dại 🌸',
    'Lá Thư Gửi Tương Lai ✉️',
    'Người Đồng Hành Lặng Lẽ 🕊️',
    'Tiếng Gió Đầu Mùa 🌾',
    'Góc Nhỏ Cara 🏡',
    'Kẻ Viết Thư Tay ✍️',
    'Mùa Hạ Năm Ấy 🌻',
    'Một Trái Tim Ấm Áp 💖',
    'Bụi Sao Ban Đêm ⭐',
    'Khách Qua Đường Tình Cờ 👣',
    'Giấu Tên 🌿',
    'Mầm Cây Nhỏ 🌱',
    'Vạt Nắng Hoàng Hôn 🌇',
    'Người Giữ Kỷ Niệm 🗝️',
    'Đom Đóm Đêm Đêm 🕯️'
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // 1. Initial Shuffling & Center Positioning
  function initLetters() {
    if (replayLettersCard) replayLettersCard.style.display = "none";
    if (restoreBarBtn) restoreBarBtn.style.display = "none";

    const shuffledThings = Array.from(letters);
    shuffleArray(shuffledThings);

    const shuffledAliases = [...vietnameseAliases];
    shuffleArray(shuffledAliases);

    const containerWidth = document.querySelector(".cssletter") ? document.querySelector(".cssletter").offsetWidth : window.innerWidth;

    shuffledThings.forEach((letter, idx) => {
      // Bring back to letters container from body if it was moved
      lettersContainer.appendChild(letter);

      letter.style.position = "absolute";
      letter.style.top = "2rem";
      letter.style.display = "";
      letter.style.opacity = "1";
      letter.style.transform = "";
      letter.style.transition = "";
      letter.scrollTop = 0;

      const center = Math.max(10, containerWidth / 2 - letter.offsetWidth / 2);
      letter.style.left = `${center}px`;

      const citeElem = letter.querySelector("cite");
      if (citeElem && !letter.dataset.fixedAuthor && shuffledAliases[idx]) {
        citeElem.textContent = shuffledAliases[idx];
      }
    });
  }

  initLetters();

  // Check if all letters are closed -> Show Replay Card
  function checkAllLettersClosed() {
    const allLetters = document.querySelectorAll(".letter");
    const visibleLetters = Array.from(allLetters).filter(l => l.style.display !== "none");
    if (visibleLetters.length === 0) {
      if (replayLettersCard) {
        replayLettersCard.style.display = "flex";
      }
      if (restoreBarBtn) {
        restoreBarBtn.style.display = "inline-flex";
      }
    } else {
      if (replayLettersCard) {
        replayLettersCard.style.display = "none";
      }
      if (restoreBarBtn) {
        restoreBarBtn.style.display = "none";
      }
    }
  }

  // Restore All Letters function
  function restoreAllLetters() {
    if (replayLettersCard) replayLettersCard.style.display = "none";
    if (restoreBarBtn) restoreBarBtn.style.display = "none";
    envelope.classList.add("active");
    initLetters();
  }

  // 2. Fullscreen Free Dragging logic (Mouse + Touch)
  letters.forEach((letter) => {
    let offsetX, offsetY;

    const startDrag = (e) => {
      if (!envelope.classList.contains("active")) return;
      if (e.target.tagName === "BUTTON" || e.target.classList.contains("closeLetter") || e.target.closest(".closeLetter")) return;

      const isTouch = e.type === "touchstart";
      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;
      const rect = letter.getBoundingClientRect();

      // IMPORTANT: Append to document.body so letter can move anywhere across full screen without containing block limits
      if (letter.parentElement !== document.body) {
        document.body.appendChild(letter);
      }

      letter.style.position = "fixed";
      letter.style.left = `${rect.left}px`;
      letter.style.top = `${rect.top}px`;
      letter.style.zIndex = 10000 + (++zIndexCounter);
      letter.style.margin = "0";
      letter.style.transform = "none";
      letter.classList.add("dragging");

      offsetX = clientX - rect.left;
      offsetY = clientY - rect.top;

      const moveAt = (posX, posY) => {
        let newX = posX - offsetX;
        let newY = posY - offsetY;
        letter.style.left = `${newX}px`;
        letter.style.top = `${newY}px`;
      };

      const onMove = (moveEvent) => {
        const mX = moveEvent.type.startsWith("touch") ? moveEvent.touches[0].clientX : moveEvent.clientX;
        const mY = moveEvent.type.startsWith("touch") ? moveEvent.touches[0].clientY : moveEvent.clientY;
        moveAt(mX, mY);
      };

      const onEnd = () => {
        letter.classList.remove("dragging");
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onEnd);
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onEnd);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchmove", onMove, { passive: true });
      document.addEventListener("touchend", onEnd);
    };

    letter.addEventListener("mousedown", startDrag);
    letter.addEventListener("touchstart", startDrag, { passive: true });
  });

  
  // Popup Guide logic
  const envelopeGuide = document.querySelector("#envelopePopGuide");
  if (envelopeGuide) {
    const closeGuideBtn = envelopeGuide.querySelector(".closeGuide");
    if (closeGuideBtn) {
      closeGuideBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        envelopeGuide.classList.add("hide");
      });
    }

    openEnvBtn.addEventListener("click", () => {
      envelopeGuide.classList.add("hide");
    });
  }

  // 3. Open Envelope
  openEnvBtn.addEventListener("click", () => {
    envelope.classList.add("active");
    if (replayLettersCard) replayLettersCard.style.display = "none";
  });

  // 4. Reset / Close Envelope Feature (Đóng Nắp Phong Thư Lại)
  if (resetEnvBtn) {
    resetEnvBtn.addEventListener("click", () => {
      envelope.classList.remove("active");
      initLetters();
    });
  }

  // 5. Shuffle Letters Feature (Tráo Lại Các Lá Thư)
  if (shuffleEnvBtn) {
    shuffleEnvBtn.addEventListener("click", () => {
      envelope.classList.add("active");
      initLetters();
    });
  }

  // 6. Close Individual Letters with Replay All Trigger
  const closeButtons = document.querySelectorAll(".closeLetter");
  closeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const letter = e.target.closest(".letter");
      if (letter) {
        letter.style.display = "none";
        checkAllLettersClosed();
      }
    });
  });

  // 7. Replay All Letters button triggers
  if (replayAllLettersBtn) {
    replayAllLettersBtn.addEventListener("click", () => {
      restoreAllLetters();
    });
  }

  if (restoreBarBtn) {
    restoreBarBtn.addEventListener("click", () => {
      restoreAllLetters();
    });
  }

  // ==========================================================================
  // SEND LETTER FORM LOGIC
  // ==========================================================================
  const sealOpts = document.querySelectorAll(".seal-pill-opt");
  let selectedSeal = "🌸 Hoa Đào";

  sealOpts.forEach(opt => {
    opt.addEventListener("click", function() {
      sealOpts.forEach(o => o.classList.remove("active"));
      this.classList.add("active");
      selectedSeal = this.getAttribute("data-seal");
    });
  });

  // Form Submit
  const sendForm = document.getElementById("sendLetterForm");
  const sendToast = document.getElementById("sendLetterToast");

  if (sendForm) {
    sendForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = sendForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "";

      const sender = document.getElementById("senderName").value.trim() || "Một Người Ẩn Danh";
      const receiver = document.getElementById("receiverName").value.trim() || "Bạn";
      const message = document.getElementById("letterBodyText").value.trim();
      const topicSelect = document.getElementById("letterTopic");
      const topicText = topicSelect ? topicSelect.options[topicSelect.selectedIndex].text : "Thư tâm tình";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Đang gửi bức thư đi... 🕊️";
      }

      try {
        if (typeof sendCaraflowEmail === "function") {
          await sendCaraflowEmail({
            formType: "Hòm Thư Bình Yên",
            senderName: sender,
            subject: `[HÒM THƯ BÌNH YÊN] Thư từ ${sender} gửi đến ${receiver}`,
            message: message,
            extraData: {
              "Mục Đích": "👉 LƯU VÀO HÒM THƯ BÌNH YÊN / ĐỌC TÂM TÌNH",
              "Người Nhận": receiver,
              "Chủ Đề Bức Thư": topicText,
              "Con Dấu Niêm Phong": selectedSeal
            }
          });
        }
      } catch (err) {
        console.warn("Lỗi gửi thư:", err);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }

      if (sendToast) {
        sendToast.style.display = "block";
        sendForm.reset();
        setTimeout(() => {
          sendToast.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    });
  }

  // Preview Modal
  const previewBtn = document.getElementById("previewLetterBtn");
  const modal = document.getElementById("letterPreviewModal");
  const closeModalBtn = document.getElementById("closePreviewModal");
  const previewContent = document.getElementById("previewModalContent");
  const previewAuthor = document.getElementById("previewModalAuthor");

  if (previewBtn && modal) {
    previewBtn.addEventListener("click", () => {
      const sender = document.getElementById("senderName").value || "Một Người Xa Lạ";
      const receiver = document.getElementById("receiverName").value || "Bạn";
      const message = document.getElementById("letterBodyText").value || "Cảm ơn bạn đã luôn là vạt nắng ấm áp giữa những ngày bão giông. Chúc bạn luôn bình yên!";

      if (previewContent) {
        previewContent.innerHTML = `“Gửi ${receiver},<br><br>${message}”`;
      }
      if (previewAuthor) {
        previewAuthor.innerHTML = `Thương gửi từ ${sender} ${selectedSeal}`;
      }

      modal.classList.add("active");
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
});
