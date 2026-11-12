/* ==========================================================================
   BƯỚC CHÂN - STUDIO GHIBLI TIMELINE LOGIC FOR CARAFLOW
   ========================================================================== */

function initBuocChanTimeline() {
  // Initialize smooth scroll with Lenis
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

  // Timeline Diary Data
  const timelineItems = [
    {
      id: "STEP_259",
      year: "259",
      theme: "dawn",
      tiles: [
        {
          type: "text",
          pos: "pos-top-left-10",
          w: "480px",
          tag: "Dấu Chân #01 • Cơ Duyên 259",
          heading: "Khởi Đầu: Khi Bên Trong Thôi Thúc",
          copy: "Khởi đầu là mình muốn làm một điều gì đó, bên trong mình muốn mình làm một việc gì đó thì mình chẳng biết nên làm gì? Thế nên mình dự định làm website vì đây là mảng mà mình biết, mình liên tục gặp phải con số 259 và điều đó khiến mình muốn cố gắng tập trung suy nghĩ nhiều hơn.",
          quote: "“259 là lời nhắc nhở: Hãy quay về với chính mình và bắt đầu gieo những hạt mầm đầu tiên.”",
          author: "Tình",
          depth: 18,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-right-10",
          w: "32vw",
          ratio: "16 / 9",
          src: "images/about/cat-pic-bang.jpg",
          alt: "Bàn làm việc và con số 259",
          depth: 22,
          z: 2
        },
        {
          type: "image",
          pos: "pos-top-right-5",
          w: "20vw",
          ratio: "1 / 1",
          src: "images/about/cat-pic.jpg",
          alt: "Chú mèo cam cuộn tròn bên hiên",
          depth: 10,
          z: 1
        }
      ]
    },
    {
      id: "STEP_SKETCH",
      year: "02",
      theme: "sketch",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left",
          w: "34vw",
          ratio: "16 / 9",
          src: "images/about/y-tuong-01.jpg",
          alt: "Phác họa ý tưởng và bản vẽ",
          depth: 14,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right",
          w: "490px",
          tag: "Dấu Chân #02 • Phác Thảo & Ý Tưởng",
          heading: "Phác Họa & Hỗn Loạn Ý Tưởng",
          copy: "Sau đó thì nghĩ nội dung của website rồi nên bắt đầu phác họa nội dung và thiết kế sơ bộ. Cũng 'e hèm' lắm, thiết kế tùm lum tùm la, có bao nhiêu ý tưởng thì mình cũng lưu lại luôn, cho đến khi code thì lại không biết nên bắt đầu từ đâu! =)))",
          quote: "“Cứ lưu giữ trọn vẹn những hỗn loạn ban đầu, vì từ đó hình hài ước mơ mới dần lộ diện.”",
          author: "Tình",
          depth: 24,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-left-10",
          w: "22vw",
          ratio: "1 / 1",
          src: "images/about/y-tuong-02.jpg",
          alt: "Góc tô màu và đọc sách khi bối rối",
          depth: 20,
          z: 2
        }
      ]
    },
    {
      id: "STEP_CODE",
      year: "CODE",
      theme: "midnight",
      tiles: [
        {
          type: "text",
          pos: "pos-top-quarter-left",
          w: "520px",
          tag: "Dấu Chân #03 • Vượt Qua Nỗi Sợ",
          heading: "Nghĩ Quá Nhiều & Bắt Tay Vào Code",
          copy: "Phải nói mình thì hay nghĩ nhiều, có nhiều cái nghĩ mà muốn bể đầu vì những vấn đề không cần thiết phải làm rõ lắm, do đó mình cứ chần chừ không bắt đầu việc code lắm, mình phải suy nghĩ xem nên gọi tên là gì thì mới xác định được bản thân nên làm gì, vì nếu mình thiết kế hay viết bài mà cái domain nó không hợp lý thì sao, viết tiếng Anh hay tiếng Việt... rồi nghĩ mãi nó thành dặm chân một chỗ. Nên mình bắt tay code luôn, mình code những gì mình muốn trước, rồi sau đó xem xét nội dung và thay đổi sau, vì mình biết nếu không bắt tay vào code thì không bao giờ xong được.",
          quote: "“Bớt nghĩ lại một chút, đặt ngón tay lên bàn phím và để dòng code đầu tiên dẫn lối.”",
          author: "Tình",
          depth: 25,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-right",
          w: "35vw",
          ratio: "16 / 9",
          src: "images/about/soul_writing.jpg",
          alt: "Những dòng code trong đêm",
          depth: 20,
          z: 2
        },
        {
          type: "image",
          pos: "pos-top-right",
          w: "20vw",
          ratio: "1 / 1",
          src: "images/about/soul_tree.png",
          alt: "Sự kiên nhẫn của Khương Thái Công",
          depth: 10,
          z: 1
        }
      ]
    },
    {
      id: "STEP_STORY",
      year: "TÌNH",
      theme: "amber",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left-10",
          w: "32vw",
          ratio: "16 / 9",
          src: "images/about/soul_lantern.jpg",
          alt: "Ngọn đèn dầu thấu hiểu",
          depth: 16,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right-10",
          w: "500px",
          tag: "Dấu Chân #04 • Cảm Xúc & Logic",
          heading: "Coder Vừa Là Storyteller",
          copy: "Có những ngày ngồi trước dòng code dài dằng dặc, tớ chợt nhận ra logic và cảm xúc không hề đối lập nhau. Chúng dệt nên một giao diện biết thở và những lời vỗ về chân thật. Mà nói đúng hơn là có nơi chứa những suy nghĩ của mình, khi viết ra rồi thì cảm thấy mình nghĩ còn ít vì không đủ viết bài viết =)).",
          quote: "“Dở dang nơi trang viết, nhưng luôn quyết tâm đi đến dòng code cuối cùng.”",
          author: "Tình",
          depth: 22,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-left",
          w: "22vw",
          ratio: "1 / 1",
          src: "images/about/soul_letter.jpg",
          alt: "Lá thư gửi người ghé thăm",
          depth: 12,
          z: 2
        }
      ]
    },
    {
      id: "STEP_THUONG",
      year: "THƯƠNG",
      theme: "amber",
      tiles: [
        {
          type: "text",
          pos: "pos-top-left-10",
          w: "520px",
          tag: "Dấu Chân Cốt Lõi • Nguồn Cơn Của Tiệm",
          heading: "Hiện Hữu Khi Biết Thương",
          copy: "Nếu không thấy những người thống khổ, tôi sẽ quên mất mình là ai. Khi chứng kiến những sinh mệnh trẻ chông chênh đi vào tuyệt lộ, tôi hiểu thế giới này cần biết bao những 'chiếc phao' thấu cảm. Tình yêu không chỉ là đôi lứa, mà là sự che chở thầm lặng của vạn vật — từ tán cây nhả oxy đến từng vạch kẻ đường bảo vệ sinh mạng con người...",
          quote: "“Nếu không thấy những người thống khổ, tôi sẽ quên mất mình là ai. Mình hiện hữu nhiều nhất khi mình biết thương.”",
          author: "Tình",
          action: {
            label: "🌿 Đọc câu chuyện & góc nhìn này ❯",
            url: "phan-tich-noi-tam/hien-huu-khi-biet-thuong.html"
          },
          depth: 22,
          z: 3
        },
        {
          type: "image",
          pos: "pos-bottom-right-10",
          w: "34vw",
          ratio: "16 / 9",
          src: "images/about/soul_reading.jpg",
          alt: "Khoảnh khắc lắng lòng và tình thương",
          depth: 18,
          z: 1
        },
        {
          type: "image",
          pos: "pos-top-right-5",
          w: "22vw",
          ratio: "1 / 1",
          src: "images/about/soul_tree.png",
          alt: "Tán cây chở che và sự nuôi dưỡng của thiên nhiên",
          depth: 12,
          z: 2
        }
      ]
    },
    {
      id: "STEP_CARA",
      year: "CARA",
      theme: "sunset",
      tiles: [
        {
          type: "image",
          pos: "pos-top-left",
          w: "35vw",
          ratio: "16 / 9",
          src: "images/about/bc_footprints.jpg",
          alt: "Những dấu chân bình yên trên lối nhỏ",
          depth: 18,
          z: 1
        },
        {
          type: "text",
          pos: "pos-bottom-right",
          w: "510px",
          tag: "Dấu Chân #05 • Minh Chứng Bước Đi",
          heading: "Mỗi Bước Đi Đều Mang Lại Một Dấu Ấn",
          copy: "Mỗi bước đi chúng ta đi đều mang lại 1 dấu ấn riêng, có thể lớn có thể nhỏ, có thể không như kỳ vọng của chúng ta và đôi khi là không như mong đợi. Nhưng điều đó càng là minh chứng cho dấu chân của ta. Nhìn lại hành trình tạo nên Tiệm Nhỏ Suy Tư, tớ mỉm cười vì mình đã bắt đầu và đã dũng cảm bước đi.",
          quote: "“Dù bước nhanh hay bước chậm, từng dấu chân đều là bài học quý giá nuôi dưỡng tâm hồn.”",
          author: "Tình",
          depth: 26,
          z: 3
        },
        {
          type: "image",
          pos: "pos-center-center",
          w: "23vw",
          ratio: "1 / 1",
          src: "images/about/soul_cat.jpg",
          alt: "Một góc tĩnh lặng bên hiên nhà",
          depth: 22,
          z: 2
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
        metaDiv.innerHTML = `<span>Nhật ký hành trình</span><span class="tile-author-name">${tileData.author}</span>`;
        textWrap.appendChild(metaDiv);
      }

      if (tileData.action) {
        const btnLink = el("a", "timeline-btn timeline-btn-primary");
        btnLink.href = tileData.action.url;
        btnLink.style.marginTop = "14px";
        btnLink.style.display = "inline-flex";
        btnLink.style.alignSelf = "flex-start";
        btnLink.innerHTML = `<span>${tileData.action.label}</span>`;
        textWrap.appendChild(btnLink);
      }

      const box = el("div", "tile__box text-only__box");
      box.appendChild(textWrap);
      tileEl.appendChild(box);
    }

    return tileEl;
  };

  // Mount Panels
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

  // Mount Giant Background Characters
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

  // Reveal animations and parallax logic
  initRevealAndParallax();

  // Theme presets & year swap logic
  initYearSwapAndTheme();
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

  // Year swap between stages
  panelEls.forEach((panelEl, i) => {
    if (i === 0) return;

    const prevYearEl = yearEls[i - 1];
    const nextYearEl = yearEls[i];
    if (!prevYearEl || !nextYearEl) return;

    const prevChars = prevYearEl.querySelectorAll(".char");
    const nextChars = nextYearEl.querySelectorAll(".char");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panelEl,
          start: "top 80%",
          end: "top 25%",
          scrub: 1.2
        }
      })
      .to(
        prevChars,
        {
          yPercent: -100,
          opacity: 0,
          duration: 3,
          stagger: 0.2,
          ease: "power3.inOut"
        },
        0
      )
      .to(
        nextChars,
        {
          yPercent: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.2,
          ease: "power3.inOut"
        },
        0
      );
  });

  // Theme switch per panel
  panelEls.forEach((panelEl) => {
    ScrollTrigger.create({
      trigger: panelEl,
      start: "top center",
      end: "bottom center",
      onEnter: () => setCssVars(getPanelTheme(panelEl), { animate: true }),
      onEnterBack: () => setCssVars(getPanelTheme(panelEl), { animate: true }),
      onLeave: () => setCssVars(getPanelTheme(panelEl), { animate: true }),
      onLeaveBack: () => setCssVars(getPanelTheme(panelEl), { animate: true })
    });
  });

  // Apply initial theme
  setCssVars(getPanelTheme(panelEls[0]), { animate: false });
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("timeline-active");
  initBuocChanTimeline();
});
