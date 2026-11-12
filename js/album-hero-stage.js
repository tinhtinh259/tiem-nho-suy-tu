/* ==========================================================================
   ALBUM NHẠC KÝ ỨC — HERO LANDSCAPE (VINYL MEMORY ORBIT)
   Logic điều khiển xoay đĩa than, hoán đổi vị trí và hoạt họa chữ GSAP
   ========================================================================== */

(function () {
  'use strict';

  /* ===================== DỮ LIỆU ĐĨA THAN KÝ ỨC (5 BẢN GHI) ===================== */
  const MEMORY_RECORDS = [
    {
      id: 0,
      title: "Khúc Dạo Trên Đồng Vàng",
      encounter: "@ENCOUNTER_001",
      date: "14.09.2021",
      duration: "03:45",
      alias: "Cậu bé từ cánh đồng lúa chín",
      quote: "Bờ ruộng chiều thu năm ấy, có người đi qua mang theo cả mùi thơm của đồng cỏ dại...",
      img: "images/album/draft-4.jpg",
      accent: "#86bf3e",
      accentGlow: "rgba(134, 191, 62, 0.38)",
      draftId: "draft-1",
      bookId: "vol-1"
    },
    {
      id: 1,
      title: "Ánh Mắt Nơi Hành Lang",
      encounter: "@ENCOUNTER_002",
      date: "08.12.2022",
      duration: "04:12",
      alias: "Nhiếp ảnh gia chiếc mũ len đỏ",
      quote: "Chiếc nón len đỏ giữa góc phố xám, và tiếng bấm máy giấu một ánh nhìn ngập ngừng...",
      img: "images/album/photographer_red_cap.png",
      accent: "#e85038",
      accentGlow: "rgba(232, 80, 56, 0.38)",
      draftId: "draft-2",
      bookId: "vol-2"
    },
    {
      id: 2,
      title: "Vệt Mưa Trạm Xe Đêm",
      encounter: "@ENCOUNTER_004",
      date: "15.07.2023",
      duration: "05:01",
      alias: "Chiếc dù xanh rêu & cơn mưa đêm",
      quote: "Trú mưa chung một mái hiên, nghe tiếng mưa rơi át đi nhịp đập gấp gáp...",
      img: "images/album/draft-6.jpg",
      accent: "#3ea380",
      accentGlow: "rgba(62, 163, 128, 0.38)",
      draftId: "draft-4",
      bookId: "vol-3"
    },
    {
      id: 3,
      title: "Cái Ngoảnh Đầu Ở Hành Lang",
      encounter: "@ENCOUNTER_003",
      date: "24.03.2023",
      duration: "02:58",
      alias: "Lời mời kết bạn chưa chấp nhận",
      quote: "Có những cái gật đầu thoáng qua, và lời mời kết bạn nằm lại trong vô tận...",
      img: "images/album/corridor_look_back.png",
      accent: "#3a84c8",
      accentGlow: "rgba(58, 132, 200, 0.38)",
      draftId: "draft-3",
      bookId: "single-1"
    },
    {
      id: 4,
      title: "Đếm Thời Gian",
      encounter: "@Song_DemThoiGian",
      date: "Ký Ức Hoài Niệm",
      duration: "04:12",
      alias: "Màn đêm không trăng, không sao, không gió...",
      quote: "Một, hai, ba... Nghe thời gian trôi âm thầm, chờ ai giữa kỉ niệm đắng cay...",
      img: "images/album/draft-6.jpg",
      accent: "#b87c2b",
      accentGlow: "rgba(184, 124, 43, 0.38)",
      draftId: "draft-4",
      bookId: "vol-3"
    }
  ];

  let activeIndex = 0;
  let isAnimating = false;

  /* Vị trí đĩa chính và 4 đĩa vệ tinh trên quỹ đạo bán nguyệt */
  const MAIN_POS = { left: 54, top: 50, scale: 2.85 };
  const PERIM_POS = [
    { left: 63, top: 8 },   // top
    { left: 93, top: 27 },  // upper-right
    { left: 93, top: 73 },  // lower-right
    { left: 63, top: 92 }   // bottom
  ];

  /* slots[i] = id của đĩa than đang chiếm vị trí vệ tinh i */
  let slots = [1, 2, 3, 4];
  const discEls = {};

  /* Khởi tạo các phần tử DOM */
  function initHeroLandscape() {
    const stage = document.getElementById('heroStage');
    const discLayer = document.getElementById('heroDiscLayer');
    const trackTitleEl = document.getElementById('heroTrackTitleDynamic');
    const eyebrowEl = document.getElementById('heroMemoryEyebrow');
    const descEl = document.getElementById('heroMemoryDesc');
    const stepCurrent = document.getElementById('heroStepCurrent');
    const stepTotal = document.getElementById('heroStepTotal');
    const blob = document.getElementById('heroBlob');
    const btnListen = document.getElementById('btnHeroListen');
    const btnRead = document.getElementById('btnHeroRead');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');

    if (!stage || !discLayer || !trackTitleEl) return;

    if (stepTotal) {
      stepTotal.textContent = String(MEMORY_RECORDS.length).padStart(2, '0');
    }

    /* Tạo HTML cho từng đĩa than */
    discLayer.innerHTML = '';
    MEMORY_RECORDS.forEach(record => {
      const el = document.createElement('div');
      el.className = 'hero-disc';
      el.dataset.recordId = record.id;
      el.style.setProperty('--accent', record.accent);
      el.style.setProperty('--accent-glow', record.accentGlow);

      el.innerHTML = `
        <div class="disc-ring"></div>
        <div class="disc-vinyl">
          <div class="disc-center-label">
            <img src="${record.img}" alt="${record.title}" loading="lazy">
            <div class="disc-spindle-hole"></div>
          </div>
        </div>
      `;

      el.addEventListener('click', () => {
        onDiscClick(record.id);
      });

      discLayer.appendChild(el);
      discEls[record.id] = el;
    });

    /* Render vị trí các đĩa than ban đầu */
    renderStagePositions();

    /* Hiển thị đĩa than ban đầu */
    updateContent(MEMORY_RECORDS[activeIndex], false);

    /* Gắn sự kiện nút Prev / Next */
    if (prevBtn) {
      prevBtn.addEventListener('click', () => stepRecord(-1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => stepRecord(1));
    }

    /* Gắn sự kiện "Lắng Nghe Ký Ức" */
    if (btnListen) {
      btnListen.addEventListener('click', () => {
        const record = MEMORY_RECORDS[activeIndex];
        handleListenRecord(record);
      });
    }

    /* Gắn sự kiện "Đọc Bản Thảo" */
    if (btnRead) {
      btnRead.addEventListener('click', () => {
        const record = MEMORY_RECORDS[activeIndex];
        handleReadRecord(record);
      });
    }

    /* Hiệu ứng Parallax chuột trên sân khấu */
    if (window.gsap && blob) {
      const quickBlobX = gsap.quickTo(blob, 'x', { duration: 0.9, ease: 'power3.out' });
      const quickBlobY = gsap.quickTo(blob, 'y', { duration: 0.9, ease: 'power3.out' });

      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        quickBlobX(relX * 14);
        quickBlobY(relY * 14);
      });

      stage.addEventListener('mouseleave', () => {
        quickBlobX(0);
        quickBlobY(0);
      });

      /* Bồng bềnh nhẹ cho vầng hào quang */
      gsap.to(blob, { y: '+=10', duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });

      /* Bồng bềnh nốt nhạc / tia sáng */
      initFloaters();
    }

    /* Khởi động hiệu ứng xuất hiện ban đầu */
    if (window.gsap) {
      gsap.fromTo(Object.values(discEls).filter(el => !el.classList.contains('is-main')),
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.4)',
          stagger: 0.06,
          clearProps: 'opacity'
        }
      );
      gsap.from('.hero-memory-badge', { y: -16, opacity: 0, duration: 0.5, ease: 'power3.out' });
      gsap.from('.hero-floating-note', { y: 16, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 });
    }
  }

  /* Định vị trí đĩa than với GSAP */
  function renderStagePositions() {
    if (!window.gsap) return;

    Object.values(discEls).forEach(el => el.classList.remove('is-main'));

    const mainEl = discEls[activeIndex];
    if (mainEl) {
      mainEl.classList.add('is-main');
      gsap.set(mainEl, {
        left: MAIN_POS.left + '%',
        top: MAIN_POS.top + '%',
        scale: MAIN_POS.scale,
        xPercent: -50,
        yPercent: -50,
        zIndex: 22
      });
    }

    slots.forEach((recordId, index) => {
      const el = discEls[recordId];
      if (el) {
        gsap.set(el, {
          left: PERIM_POS[index].left + '%',
          top: PERIM_POS[index].top + '%',
          scale: 1,
          xPercent: -50,
          yPercent: -50,
          zIndex: 15
        });
      }
    });
  }

  /* Tách chữ và hiệu ứng hoạt họa lật ký tự */
  function setTitleLetters(titleEl, text) {
    titleEl.innerHTML = '';
    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      titleEl.appendChild(span);
    });
  }

  /* Cập nhật nội dung text và hiệu ứng chuyển đổi */
  function updateContent(record, isAnimated = true) {
    const trackTitleEl = document.getElementById('heroTrackTitleDynamic');
    const eyebrowEl = document.getElementById('heroMemoryEyebrow');
    const descEl = document.getElementById('heroMemoryDesc');
    const stepCurrent = document.getElementById('heroStepCurrent');
    const blob = document.getElementById('heroBlob');

    if (!trackTitleEl) return;

    const tagCodeEl = document.getElementById('eyebrowTagCode');
    const secretTooltipEl = document.getElementById('eyebrowSecretTooltip');
    const stageContainer = document.getElementById('memoryHeroStage');

    if (tagCodeEl) {
      tagCodeEl.textContent = record.encounter;
    }

    if (secretTooltipEl) {
      secretTooltipEl.textContent = `✨ ${record.alias}`;
    }

    if (stageContainer) {
      stageContainer.style.setProperty('--track-accent', record.accent);
    }

    setTitleLetters(trackTitleEl, record.title);
    trackTitleEl.style.color = record.accent;

    if (descEl) {
      descEl.textContent = `“${record.quote}”`;
      descEl.style.borderLeftColor = record.accent;
    }

    if (stepCurrent) stepCurrent.textContent = String(record.id + 1).padStart(2, '0');

    /* Cập nhật vầng hào quang theo tông màu đĩa than */
    if (blob) {
      blob.style.background = `radial-gradient(circle at 45% 40%, ${record.accent}33 0%, rgba(228, 201, 154, 0.45) 45%, rgba(212, 175, 114, 0.1) 75%, transparent 100%)`;
    }

    if (isAnimated && window.gsap) {
      gsap.fromTo(trackTitleEl.querySelectorAll('.char'),
        { y: 22, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.55, ease: 'power4.out', stagger: 0.015 }
      );

      if (descEl) {
        gsap.fromTo(descEl,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.08 }
        );
      }

      if (eyebrowEl) {
        gsap.fromTo(eyebrowEl,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.35, ease: 'power3.out' }
        );
      }
    }
  }

  /* Xử lý khi nhấp vào đĩa than */
  function onDiscClick(recordId) {
    if (isAnimating || recordId === activeIndex) return;
    swapToMainDisc(recordId);
  }

  /* Hoán đổi vị trí đĩa chính và đĩa vệ tinh */
  function swapToMainDisc(newRecordId) {
    if (!window.gsap) return;
    isAnimating = true;

    const slotIdx = slots.indexOf(newRecordId);
    if (slotIdx === -1) {
      isAnimating = false;
      return;
    }

    const outgoingId = activeIndex;
    const incomingEl = discEls[newRecordId];
    const outgoingEl = discEls[outgoingId];
    const incomingRecord = MEMORY_RECORDS.find(r => r.id === newRecordId);

    gsap.set(incomingEl, { zIndex: 26 });
    gsap.set(outgoingEl, { zIndex: 18 });

    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: 'power3.inOut', overwrite: 'auto' },
      onComplete: () => {
        slots[slotIdx] = outgoingId;
        activeIndex = newRecordId;
        renderStagePositions();
        isAnimating = false;
      }
    });

    /* Đĩa được chọn phóng to và bay vào tâm */
    tl.to(incomingEl, {
      left: MAIN_POS.left + '%',
      top: MAIN_POS.top + '%',
      scale: MAIN_POS.scale
    }, 0)
      /* Đĩa cũ thu nhỏ và bay về vị trí trống trên quỹ đạo */
      .to(outgoingEl, {
        left: PERIM_POS[slotIdx].left + '%',
        top: PERIM_POS[slotIdx].top + '%',
        scale: 1
      }, 0);

    updateContent(incomingRecord, true);
  }

  /* Chuyển qua bản ghi trước hoặc kế tiếp */
  function stepRecord(direction) {
    if (isAnimating) return;
    const total = MEMORY_RECORDS.length;
    const nextId = (activeIndex + direction + total) % total;
    swapToMainDisc(nextId);
  }

  /* Hiệu ứng trôi nổi nốt nhạc và tàn đóm */
  function initFloaters() {
    if (!window.gsap) return;
    const floaters = [
      { id: 'heroNote1', x: 8, y: 12, dur: 3.2, delay: 0 },
      { id: 'heroNote2', x: 86, y: 18, dur: 2.8, delay: 0.4 },
      { id: 'heroSparkle1', x: 12, y: 78, dur: 3.6, delay: 0.8 },
      { id: 'heroSparkle2', x: 82, y: 84, dur: 3.0, delay: 1.2 }
    ];

    floaters.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) {
        gsap.set(el, { left: f.x + '%', top: f.y + '%' });
        gsap.to(el, {
          y: '+=12',
          rotate: 10,
          duration: f.dur,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: f.delay
        });
      }
    });
  }

  /* ===================== HÀNH ĐỘNG TƯƠNG TÁC THỰC TẾ ===================== */
  /* Lắng nghe đĩa than: kết nối với mâm đĩa than ở section bên dưới */
  function handleListenRecord(record) {
    const studioSection = document.querySelector('.studio-corner-section');
    if (studioSection) {
      studioSection.scrollIntoView({ behavior: 'smooth' });
    }

    /* Nếu có sẵn mảng ALBUM_TRACKS trong trang, tìm track tương ứng và cập nhật deck */
    if (window.ALBUM_TRACKS && typeof window.updateDeckDisplay === 'function') {
      const matchedTrack = window.ALBUM_TRACKS.find(t => t.id === record.draftId);
      if (matchedTrack) {
        window.updateDeckDisplay(matchedTrack);
      }
    }

    /* Tự động bật nhạc nếu chưa phát */
    if (typeof window.togglePlayMaster === 'function') {
      // Chờ sau khi cuộn tới nơi một chút
      setTimeout(() => {
        if (!window.isPlaying) {
          window.togglePlayMaster();
        }
      }, 600);
    }
  }

  /* Đọc bản thảo: mở modal đọc tờ giấy bản thảo tương ứng */
  function handleReadRecord(record) {
    if (typeof window.openSheetReaderById === 'function') {
      window.openSheetReaderById(record.draftId);
    } else {
      const manuscriptSection = document.querySelector('.manuscript-section');
      if (manuscriptSection) {
        manuscriptSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  /* Khởi chạy khi DOM đã tải */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroLandscape);
  } else {
    initHeroLandscape();
  }
})();
