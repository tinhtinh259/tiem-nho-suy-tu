/* ==========================================================================
   DẤU CHÂN CỦA BẠN - STUDIO GHIBLI TIMELINE ARCHITECTURE (CARAFLOW)
   Tiệm Nhỏ Suy Tư • Dành Riêng Cho Người Ghé Thăm
   ========================================================================== */

function initDauChanTimeline() {
  // 1. Initialize smooth scroll with Lenis
  let lenis = null;
  if (typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false
    });

    if (window.ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  const timelineRoot = document.querySelector('[data-app="timeline"]');
  if (!timelineRoot) return;

  const panelsList = timelineRoot.querySelector("[data-panels]");
  const yearsRail = timelineRoot.querySelector('[data-timeline="years-wrapper"]');
  if (!panelsList || !yearsRail) return;

  // 2. Timeline Data - Hành Trình Dấu Chân Của Người Đọc
  const timelineItems = [
    {
      id: "STEP_START",
      year: "01",
      theme: "dawn",
      tiles: [
        {
          type: "text",
          pos: "pos-top-left-10",
          w: "500px",
          tag: "Dấu Chân #01 • Khoảnh Khắc Bắt Đầu",
          heading: "Dấu Chân Ngập Ngừng Đầu Tiên",
          copy: "Là lần đầu tiên bạn bước ra khỏi vòng an toàn, rời xa những điều quen thuộc để tự mình chọn một lối đi riêng. Lòng khi ấy đầy hoài nghi và sợ hãi, nhưng chân bạn vẫn bước tới. Đó là khoảnh khắc bạn bắt đầu tự viết nên cuốn sách cuộc đời mình.",
          quote: "“Không phải vì thấy ánh sáng mới bước đi, mà chính bước chân dũng cảm ấy đã tạo nên ánh sáng.”",
          author: "Dấu ấn của bạn",
          depth: 18,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-right-10",
          w: "33vw",
          ratio: "16 / 9",
          src: "images/about/soul_reading.jpg",
          alt: "Bàn đọc sách và khoảnh khắc dũng cảm",
          depth: 22,
          z: 2
        },
        {
          type: "image",
          pos: "pos-top-right-5",
          w: "20vw",
          ratio: "1 / 1",
          src: "images/about/cosmic_cat.png",
          alt: "Chú mèo nhỏ đồng hành",
          depth: 10,
          z: 1
        }
      ]
    },
    {
      id: "STEP_STORM",
      year: "MƯA",
      theme: "midnight",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left",
          w: "34vw",
          ratio: "16 / 9",
          src: "images/about/soul_lantern.jpg",
          alt: "Ngọn đèn dầu trong đêm bão",
          depth: 14,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right",
          w: "500px",
          tag: "Dấu Chân #02 • Thử Thách & Bão Giông",
          heading: "Dấu Chân Mỏi Mệt Trong Mưa",
          copy: "Có những giai đoạn mà mỗi bước chân nhấc lên đều thấy kiệt cùng. Đã từng muốn bỏ cuộc, từng tự hỏi vì sao con đường của mình lại gập ghềnh và cô độc đến thế. Nhưng rồi trong đêm tối nhất, bạn vẫn âm thầm chịu đựng, lặng lẽ bước tiếp từng bước nhỏ để đi qua cơn giông.",
          quote: "“Cảm ơn bạn vì vào những ngày giông bão nhất, bạn đã không bỏ rơi chính mình.”",
          author: "Lời nhắn từ Tiệm",
          depth: 24,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-left-10",
          w: "22vw",
          ratio: "1 / 1",
          src: "images/about/soul_writing.jpg",
          alt: "Những nốt lặng trong đêm",
          depth: 20,
          z: 2
        }
      ]
    },
    {
      id: "STEP_SILENT",
      year: "LẶNG",
      theme: "sketch",
      tiles: [
        {
          type: "text",
          pos: "pos-top-quarter-left",
          w: "520px",
          tag: "Dấu Chân #03 • Âm Thầm Bền Bỉ",
          heading: "Dấu Chân Lặng Lẽ Không Ai Hay",
          copy: "Là những nỗ lực âm thầm không một ai chứng kiến. Những giờ làm việc muộn khi cả thành phố đã chìm vào giấc ngủ, những lần nuốt nước mắt vào trong rồi tự lau khô để mỉm cười vào sáng hôm sau. Sự kiên trì thầm lặng của bạn là điều đẹp đẽ và chân thật nhất trần đời.",
          quote: "“Có những đóa hoa nở rộ trong im lặng, nhưng hương thơm của nó bền bỉ suốt một đời.”",
          author: "Sự kiên cường của bạn",
          depth: 25,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-right",
          w: "35vw",
          ratio: "16 / 9",
          src: "images/about/bc_sketches.jpg",
          alt: "Những phác thảo âm thầm",
          depth: 20,
          z: 2
        },
        {
          type: "image",
          pos: "pos-top-right",
          w: "20vw",
          ratio: "1 / 1",
          src: "images/about/soul_tree.png",
          alt: "Cây lớn vững chãi theo năm tháng",
          depth: 10,
          z: 1
        }
      ]
    },
    {
      id: "STEP_RELEASE",
      year: "BUÔNG",
      theme: "amber",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left-10",
          w: "32vw",
          ratio: "16 / 9",
          src: "images/about/soul_letter.jpg",
          alt: "Lá thư gửi lại quá khứ",
          depth: 16,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right-10",
          w: "500px",
          tag: "Dấu Chân #04 • Rẽ Lối & Trưởng Thành",
          heading: "Học Cách Buông Tay Để Nhẹ Gánh",
          copy: "Không phải lúc nào tiến về phía trước cũng là dũng cảm. Đôi khi, dám dừng lại, dám rẽ sang một hướng khác và buông tay những điều không còn thuộc về mình mới là bước ngoặt trưởng thành thực sự. Buông bỏ không phải thất bại, mà là trao cho tâm hồn một cơ hội để bình yên.",
          quote: "“Chiếc lá lìa cành không phải vì gió cuốn đi, mà là để cây đón lấy một mùa mầm xanh mới.”",
          author: "Tự tại",
          depth: 22,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-left",
          w: "22vw",
          ratio: "1 / 1",
          src: "images/about/soul_cat.jpg",
          alt: "Góc hiên nhà thảnh thơi",
          depth: 12,
          z: 2
        }
      ]
    },
    {
      id: "STEP_PRESENT",
      year: "YÊN",
      theme: "sunset",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left",
          w: "35vw",
          ratio: "16 / 9",
          src: "images/about/bc_footprints.jpg",
          alt: "Dấu chân bình yên trên cát",
          depth: 18,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right",
          w: "510px",
          tag: "Dấu Chân #05 • Hiện Tại An Nhiên",
          heading: "Dấu Chân Của Hôm Nay",
          copy: "Là khoảnh khắc bạn đang ngồi tại góc nhỏ này của Tiệm. Bạn không cần phải chứng minh điều gì với ai, không cần phải vội vã chạy theo bất kỳ ai nữa. Hãy nhấp một ngụm trà nóng, nhìn lại tất cả những dấu chân phía sau với lòng bao dung và mỉm cười nhẹ nhõm với chính mình.",
          quote: "“Bạn đã đi một chặng đường thật xa rồi. Hôm nay, hãy tự thưởng cho mình một cái ôm dịu dàng.”",
          author: "Hiện tại",
          depth: 26,
          z: 3
        },
        {
          type: "image",
          pos: "pos-center-center",
          w: "23vw",
          ratio: "1 / 1",
          src: "images/about/soul_259.jpg",
          alt: "Góc bàn làm việc thanh bình",
          depth: 22,
          z: 2
        }
      ]
    },
    {
      id: "STEP_YOU",
      year: "BẠN",
      theme: "dawn",
      tiles: [
        {
          type: "interactive-form",
          pos: "pos-center-center",
          w: "620px",
          depth: 20,
          z: 4
        }
      ]
    }
  ];

  const el = (tag, cls = "") => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  };

  // Build tile DOM element
  const buildTile = (tileData) => {
    const tileEl = el("div", `tile ${tileData.pos || ""}`);
    if (tileData.w) tileEl.style.setProperty("--w", tileData.w);
    if (tileData.depth) tileEl.dataset.depth = tileData.depth;
    if (tileData.z) tileEl.style.setProperty("--z", tileData.z);

    if (tileData.type === "image") {
      const box = el("div", "tile__box");
      if (tileData.ratio) box.style.setProperty("--ratio", tileData.ratio);

      const img = el("img", "tile__media");
      img.src = tileData.src;
      img.alt = tileData.alt || "";
      img.loading = "lazy";

      box.appendChild(img);
      tileEl.appendChild(box);
    } else if (tileData.type === "text") {
      const textWrap = el("div", "tile__text");

      if (tileData.tag) {
        const tagSpan = el("span", "tile-tag-badge");
        tagSpan.textContent = tileData.tag;
        textWrap.appendChild(tagSpan);
      }

      if (tileData.heading) {
        const h3 = el("h3");
        h3.textContent = tileData.heading;
        textWrap.appendChild(h3);
      }

      if (tileData.copy) {
        const p = el("p");
        p.textContent = tileData.copy;
        textWrap.appendChild(p);
      }

      if (tileData.quote) {
        const quoteDiv = el("div", "tile-quote");
        quoteDiv.textContent = tileData.quote;
        textWrap.appendChild(quoteDiv);
      }

      if (tileData.author) {
        const metaDiv = el("div", "tile-author-meta");
        metaDiv.innerHTML = `<span>Góc chiêm nghiệm</span><span class="tile-author-name">${tileData.author}</span>`;
        textWrap.appendChild(metaDiv);
      }

      const box = el("div", "tile__box text-only__box");
      box.appendChild(textWrap);
      tileEl.appendChild(box);
    } else if (tileData.type === "interactive-form") {
      // Interactive Footprint Journal Tile embedded in Timeline
      const box = el("div", "tile__box text-only__box");
      box.innerHTML = `
        <div class="tile__text" style="opacity: 1; transform: none; max-height: 80vh; overflow-y: auto;">
          <span class="tile-tag-badge">👣 TRẠM LƯU BÚT • DÀNH CHO BẠN</span>
          <h3 style="margin-bottom: 8px;">Khắc Ghi Dấu Chân Của Bạn</h3>
          <p style="margin-bottom: 16px; font-size: 14px;">
            "Không cần phải là một chiến công vĩ đại. Chỉ cần là một khoảnh khắc bạn muốn lưu lại cho chính mình ở góc nhỏ này."
          </p>

          <form id="dcQuickForm" style="display: flex; flex-direction: column; gap: 12px; text-align: left;">
            <input type="text" id="quickFpTitle" placeholder="Tên dấu chân (VD: Ngày mình dám buông bỏ...)" 
              style="width: 100%; padding: 10px 14px; border: 1px solid rgba(198,156,94,0.4); border-radius: 10px; font-family: inherit; font-size: 14px; background: rgba(255,255,255,0.85); box-sizing: border-box;" required />
            
            <textarea id="quickFpBody" placeholder="Đôi dòng tâm sự bạn muốn gửi lại cho chính mình..." rows="3"
              style="width: 100%; padding: 10px 14px; border: 1px solid rgba(198,156,94,0.4); border-radius: 10px; font-family: inherit; font-size: 14px; background: rgba(255,255,255,0.85); box-sizing: border-box; resize: vertical;" required></textarea>

            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
              <span id="quickFpFeedback" style="display: none; color: #2e7d32; font-size: 13px; font-weight: bold;">✨ Đã lưu dấu chân!</span>
              <button type="submit" class="timeline-btn timeline-btn-primary" style="padding: 10px 20px; font-size: 13px; margin-left: auto;">
                <span>Khắc Dấu Chân ❯</span>
              </button>
            </div>
          </form>

          <div id="quickFpLatestList" style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px;"></div>
        </div>
      `;
      tileEl.appendChild(box);
    }

    return tileEl;
  };

  // 3. Mount Panels
  const mountPanels = () => {
    const listFrag = document.createDocumentFragment();

    for (const item of timelineItems) {
      const li = el("li");
      const panel = el("article", "panel");
      panel.dataset.entryId = item.id;
      panel.dataset.theme = item.theme;

      const stage = el("div", "panel__stage");
      for (const tileData of item.tiles) {
        stage.appendChild(buildTile(tileData));
      }

      panel.appendChild(stage);
      li.appendChild(panel);
      listFrag.appendChild(li);
    }

    panelsList.appendChild(listFrag);
  };

  // 4. Mount Giant Background Characters
  const mountYears = () => {
    const yearsFrag = document.createDocumentFragment();

    for (const item of timelineItems) {
      const yearEl = el("div", "year");
      yearEl.dataset.timeline = "year";

      for (const ch of String(item.year)) {
        const span = el("span", "char");
        span.textContent = ch;
        yearEl.appendChild(span);
      }

      yearsFrag.appendChild(yearEl);
    }

    yearsRail.appendChild(yearsFrag);
  };

  mountPanels();
  mountYears();

  // 5. Reveal animations and parallax logic
  initRevealAndParallax();

  // 6. Theme presets & year swap logic
  initYearSwapAndTheme();

  // 7. Interactive Form logic inside Timeline
  initTimelineQuickForm();
}

function initRevealAndParallax() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Media reveals
  document.querySelectorAll(".tile__media").forEach((media) => {
    if (reduceMotion) {
      media.style.opacity = "1";
      media.style.transform = "none";
      return;
    }

    const tile = media.closest(".tile") || media;
    gsap.fromTo(
      media,
      { opacity: 0, scale: 1.12 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tile,
          start: "top 85%",
          once: true
        }
      }
    );
  });

  // Text card reveals
  document.querySelectorAll(".tile__text").forEach((text) => {
    if (reduceMotion) {
      text.style.opacity = "1";
      text.style.transform = "none";
      return;
    }

    const tile = text.closest(".tile") || text;
    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: tile,
        start: "top 85%",
        once: true
      }
    });
  });

  // Parallax Scroller on Desktop
  if (window.innerWidth > 991) {
    gsap.utils.toArray(".panel").forEach((panelEl) => {
      panelEl.querySelectorAll(".tile").forEach((tileEl) => {
        const parallaxDepth = Number(tileEl.dataset.depth || 18);

        gsap.fromTo(
          tileEl,
          { y: -parallaxDepth * 1.5 },
          {
            y: parallaxDepth * 3.5,
            ease: "none",
            scrollTrigger: {
              trigger: panelEl,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2
            }
          }
        );
      });
    });
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function initYearSwapAndTheme() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const themePresets = {
    dawn: {
      bg: "#fdfbf7",
      fg: "#2c221e",
      muted: "#5c4d42",
      year: "#e8c99b",
      cardBg: "rgba(255, 255, 255, 0.9)",
      cardBorder: "rgba(198, 156, 94, 0.35)",
      yearLayerOpacity: 0.35
    },
    sketch: {
      bg: "#f5eee4",
      fg: "#362923",
      muted: "#6b584d",
      year: "#d9b482",
      cardBg: "rgba(255, 253, 248, 0.92)",
      cardBorder: "rgba(180, 140, 85, 0.32)",
      yearLayerOpacity: 0.38
    },
    midnight: {
      bg: "#243238",
      fg: "#fdf8f0",
      muted: "#b0bec5",
      year: "#43626c",
      cardBg: "rgba(30, 42, 48, 0.88)",
      cardBorder: "rgba(198, 156, 94, 0.4)",
      yearLayerOpacity: 0.32
    },
    amber: {
      bg: "#3a2d27",
      fg: "#faede3",
      muted: "#d7c0b2",
      year: "#7a5c4d",
      cardBg: "rgba(48, 36, 30, 0.9)",
      cardBorder: "rgba(229, 193, 137, 0.45)",
      yearLayerOpacity: 0.35
    },
    sunset: {
      bg: "#f7efe4",
      fg: "#2e211b",
      muted: "#624f44",
      year: "#dfb889",
      cardBg: "rgba(255, 255, 255, 0.92)",
      cardBorder: "rgba(198, 156, 94, 0.35)",
      yearLayerOpacity: 0.36
    }
  };

  const panelEls = gsap.utils.toArray(".panel");
  const yearEls = gsap.utils.toArray('[data-timeline="year"]');
  if (!panelEls.length || !yearEls.length) return;

  const getPanelTheme = (panelEl) => {
    const themeName = panelEl.dataset.theme;
    return themePresets[themeName] || themePresets.dawn;
  };

  const setCssVars = (theme, { animate = true } = {}) => {
    const root = document.documentElement;

    const vars = {
      "--bg": theme.bg,
      "--fg": theme.fg,
      "--muted": theme.muted,
      "--year": theme.year,
      "--cardBg": theme.cardBg,
      "--cardBorder": theme.cardBorder,
      "--yearLayerOpacity": String(theme.yearLayerOpacity ?? 0.35)
    };

    if (!animate) {
      for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
      return;
    }

    gsap.to(root, {
      duration: 0.7,
      ease: "power2.out",
      ...vars
    });
  };

  // Init character positions
  yearEls.forEach((yearEl, i) => {
    const chars = yearEl.querySelectorAll(".char");
    gsap.set(chars, {
      yPercent: i === 0 ? 0 : 100,
      opacity: i === 0 ? 1 : 0
    });
  });

  setCssVars(getPanelTheme(panelEls[0]), { animate: false });

  let currentIndex = 0;

  const transitionYears = (fromIdx, toIdx) => {
    if (fromIdx === toIdx) return;

    const fromYear = yearEls[fromIdx];
    const toYear = yearEls[toIdx];
    if (!fromYear || !toYear) return;

    const goingDown = toIdx > fromIdx;
    const fromChars = fromYear.querySelectorAll(".char");
    const toChars = toYear.querySelectorAll(".char");

    // Exit
    gsap.to(fromChars, {
      yPercent: goingDown ? -100 : 100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power2.inOut"
    });

    // Enter
    gsap.fromTo(
      toChars,
      {
        yPercent: goingDown ? 100 : -100,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.04,
        ease: "power2.out"
      }
    );
  };

  panelEls.forEach((panelEl, i) => {
    ScrollTrigger.create({
      trigger: panelEl,
      start: "top 55%",
      end: "bottom 55%",
      onEnter: () => {
        transitionYears(currentIndex, i);
        currentIndex = i;
        setCssVars(getPanelTheme(panelEl));
      },
      onEnterBack: () => {
        transitionYears(currentIndex, i);
        currentIndex = i;
        setCssVars(getPanelTheme(panelEl));
      }
    });
  });
}

// 7. Interactive Form Logic
function initTimelineQuickForm() {
  const STORAGE_KEY = 'caraflow_user_footprints';
  const form = document.getElementById('dcQuickForm');
  const feedback = document.getElementById('quickFpFeedback');
  const listEl = document.getElementById('quickFpLatestList');

  function getList() {
    try {
      const d = localStorage.getItem(STORAGE_KEY);
      return d ? JSON.parse(d) : [];
    } catch (e) {
      return [];
    }
  }

  function renderList() {
    if (!listEl) return;
    const list = getList();
    if (!list.length) {
      listEl.innerHTML = `<div style="font-size: 13px; color: var(--muted); font-style: italic;">Chưa có dấu chân nào được ghi lại. Hãy là người đầu tiên để lại dấu ấn nhé!</div>`;
      return;
    }
    listEl.innerHTML = list.slice(0, 3).map(item => `
      <div style="background: rgba(255,255,255,0.7); border: 1px solid var(--cardBorder); border-radius: 12px; padding: 10px 14px; text-align: left;">
        <div style="font-weight: 700; font-size: 14px; color: var(--fg); margin-bottom: 4px;">🐾 ${escapeHtml(item.title)}</div>
        <div style="font-size: 13px; color: var(--muted); line-height: 1.5;">${escapeHtml(item.body)}</div>
        <div style="font-size: 11px; color: #9e8d80; margin-top: 6px;">${escapeHtml(item.date)}</div>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    if (!str) return '';
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  renderList();

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.getElementById('quickFpTitle').value.trim();
      const body = document.getElementById('quickFpBody').value.trim();

      if (!title || !body) return;

      const now = new Date();
      const dateStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} • Ngày ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

      const list = getList();
      list.unshift({ id: 'fp-' + Date.now(), title, body, date: dateStr });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch (err) { }

      document.getElementById('quickFpTitle').value = '';
      document.getElementById('quickFpBody').value = '';

      if (feedback) {
        feedback.style.display = 'inline-block';
        setTimeout(() => { feedback.style.display = 'none'; }, 3000);
      }

      renderList();
    });
  }
}

// Auto init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initDauChanTimeline();
});
