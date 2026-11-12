/* ==========================================================================
   DEM MAT NGU - GSAP ANIMATION & CANVAS STARFIELD ENGINE
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* --------------------------------------------------------------------------
     1. STARFIELD CANVAS ANIMATION
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById("starCanvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = [];
    const numStars = Math.floor((width * height) / 4000);

    let mouseX = width / 2;
    let mouseY = height / 2;

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.8 + 0.3;
        this.baseAlpha = Math.random() * 0.7 + 0.2;
        this.alpha = this.baseAlpha;
        this.speedAlpha = Math.random() * 0.02 + 0.005;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.x = Math.random() * width;
        if (this.y < 0 || this.y > height) this.y = Math.random() * height;

        // Twinkle
        this.alpha += this.speedAlpha;
        if (this.alpha > 0.95 || this.alpha < 0.15) {
          this.speedAlpha = -this.speedAlpha;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 176, 98, ${this.alpha})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = "rgba(226, 176, 98, 0.5)";
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    function animateStars() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }

  /* --------------------------------------------------------------------------
     2. GSAP SCROLLTRIGGER TIMELINES
     -------------------------------------------------------------------------- */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Hero Entrance
    gsap.from("#heroBadge", { opacity: 0, y: -20, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.from("#heroTitle", { opacity: 0, y: 30, duration: 1.2, delay: 0.4, ease: "power3.out" });
    gsap.from("#heroSub", { opacity: 0, y: 20, duration: 1.2, delay: 0.7, ease: "power3.out" });
    gsap.from("#scrollIndicator", { opacity: 0, duration: 1, delay: 1.2 });

    // Section 2: Anonymous Post Thoughts Card
    gsap.from("#thoughtsCard", {
      scrollTrigger: {
        trigger: "#sectionThoughts",
        start: "top 75%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
    });

    // Section 3: Building Parallax & Descent
    gsap.from("#buildingWrap", {
      scrollTrigger: {
        trigger: "#sectionBuilding",
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from("#buildingContent", {
      scrollTrigger: {
        trigger: "#sectionBuilding",
        start: "top 60%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    // Section 4: Golden Catch Glow Expansion
    gsap.to("#goldenGlowBg", {
      scrollTrigger: {
        trigger: "#sectionCatch",
        start: "top 65%",
        end: "bottom 20%",
        scrub: 1,
      },
      scale: 2.5,
      opacity: 1,
    });

    gsap.from("#catchCard", {
      scrollTrigger: {
        trigger: "#sectionCatch",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    // Section 5: Hug Conclusion & Final Card
    gsap.from("#finalCard", {
      scrollTrigger: {
        trigger: "#sectionHug",
        start: "top 75%",
      },
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from("#hugBox", {
      scrollTrigger: {
        trigger: "#sectionHug",
        start: "top 70%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.7)",
    });
  }

  /* --------------------------------------------------------------------------
     3. INTERACTIVE HUG COUNTER & PARTICLE EXPLOSION
     -------------------------------------------------------------------------- */
  const hugBtn = document.getElementById("btnSendHug");
  const hugCountEl = document.getElementById("hugCountNum");

  let hugCount = parseInt(localStorage.getItem("dmn_hug_count") || "259", 10);
  if (hugCountEl) {
    hugCountEl.textContent = hugCount.toLocaleString();
  }

  if (hugBtn) {
    hugBtn.addEventListener("click", (e) => {
      hugCount++;
      if (hugCountEl) {
        hugCountEl.textContent = hugCount.toLocaleString();
      }
      localStorage.setItem("dmn_hug_count", hugCount.toString());

      // Create floating starlight particles
      const rect = hugBtn.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      const particles = ["✨", "🫂", "💛", "🌟", "💫", "✨"];
      for (let i = 0; i < 16; i++) {
        const particle = document.createElement("div");
        particle.className = "floating-star-particle";
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];

        const angle = (Math.random() * Math.PI * 2);
        const distance = Math.random() * 120 + 30;
        const dx = Math.cos(angle) * distance;
        const dr = (Math.random() - 0.5) * 180;

        particle.style.left = `${originX}px`;
        particle.style.top = `${originY}px`;
        particle.style.setProperty("--dx", `${dx}px`);
        particle.style.setProperty("--dr", `${dr}deg`);

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 2500);
      }

      // GSAP button bounce
      if (typeof gsap !== "undefined") {
        gsap.fromTo(
          hugBtn,
          { scale: 0.92 },
          { scale: 1.05, duration: 0.3, ease: "back.out(2)", onComplete: () => {
            gsap.to(hugBtn, { scale: 1, duration: 0.2 });
          }}
        );
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. AMBIENT LOFI AUDIO SYNTH & CONTROL
     -------------------------------------------------------------------------- */
  const soundBtn = document.getElementById("lofiSoundBtn");
  const soundIcon = document.getElementById("lofiSoundIcon");
  const soundText = document.getElementById("lofiSoundText");

  let isPlaying = false;
  let audioCtx = null;
  let noiseNode = null;
  let gainNode = null;

  function toggleAmbientSound() {
    if (!isPlaying) {
      // Start ambient soft rain synth
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        const bufferSize = 2 * audioCtx.sampleRate;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;

        // Lowpass filter for rain effect
        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, audioCtx.currentTime);

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);

        noiseNode.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        noiseNode.start();
        isPlaying = true;
        if (soundIcon) soundIcon.textContent = "🔊";
        if (soundText) soundText.textContent = "Tiếng mưa đêm (Đang bật)";
      } catch (err) {
        console.warn("Audio Context error:", err);
      }
    } else {
      if (noiseNode) {
        noiseNode.stop();
      }
      if (audioCtx) {
        audioCtx.close();
      }
      isPlaying = false;
      if (soundIcon) soundIcon.textContent = "🔈";
      if (soundText) soundText.textContent = "Nhạc Lofi Đêm Muộn (Tạm dừng)";
    }
  }

  if (soundBtn) {
    soundBtn.addEventListener("click", toggleAmbientSound);
  }
});
