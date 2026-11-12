/* ==========================================================================
   SCENTED FABRIC POUCHES INTERACTIVE SCRIPT
   Tiệm Nhỏ Suy Tư — Caraflow
   ========================================================================== */

(function () {
  const pouchesData = {
    sage: {
      name: "Cỏ Non Sau Mưa",
      icon: "🌿",
      aroma: "🌱",
      notes: "Bạc hà giã tay • Hương đất ẩm Petrichor • Lá chanh non",
      whisper:
        "“Gột rửa hết những hạt bụi mỏi mệt của ngày hôm qua. Hãy hít một hơi thật sâu, để mùi cỏ non sau mưa nhắc bạn rằng: hôm nay luôn là một khởi đầu hoàn toàn mới mẻ, tinh khôi và dịu lành.”",
      linkText: "Khám phá góc Điều Nhỏ Bé ➔",
      linkUrl: "dieu-nho-be.html"
    },
    linen: {
      name: "Trà Cúc & Gỗ Ấm",
      icon: "☕",
      aroma: "🍵",
      notes: "Bông cúc sấy giòn • Vị ngọt mộc • Gỗ tuyết tùng trầm ấm",
      whisper:
        "“Giữa dòng đời hối hả, bạn luôn có quyền ngồi xuống, nhấp một ngụm trà ấm và thở ra thật chậm. Bạn không nhất thiết phải gồng mình trở nên hoàn hảo, chỉ cần bình yên hiện diện là đã quá đỗi tuyệt vời rồi.”",
      linkText: "Lắng nghe câu chuyện Tách Trà ➔",
      linkUrl: "hoa-than/tach-tra.html"
    },
    apricot: {
      name: "Vỏ Quýt & Nắng Trưa",
      icon: "🍊",
      aroma: "✨",
      notes: "Tinh dầu vỏ quýt cay thanh • Nắng hè ấm áp • Ký ức ấu thơ",
      whisper:
        "“Mùi hương của những buổi trưa trốn ngủ đi nhặt lá bắt bướm dưới tán cây. Nhắc bạn nhớ rằng bên trong vẻ ngoài người lớn bận rộn này, vẫn luôn có một đứa trẻ hồn nhiên, đáng yêu và xứng đáng được vỗ về.”",
      linkText: "Đọc những mẩu Chuyện Đời Thường ➔",
      linkUrl: "goc-ke-chuyen.html"
    },
    lavender: {
      name: "Nhài Đêm & Gối Mềm",
      icon: "🌸",
      aroma: "🕊️",
      notes: "Hoa nhài trắng nở muộn • Sợi bông giặt nắng • Gió lành đầu hôm",
      whisper:
        "“Dành riêng cho những đêm muộn bạn thấy lòng trĩu nặng hoặc khó ngủ. Thả lỏng bờ vai xuống nào, mọi bận lòng của thế giới ngoài kia xin hãy gửi lại bóng đêm. Đêm nay, hãy cho phép mình được ngủ một giấc thật say nhé.”",
      linkText: "Tìm về Những Dòng Chữ Biết Ôm ➔",
      linkUrl: "nhung-dong-chu-biet-om.html"
    },
    terracotta: {
      name: "Lá Thu & Quế Nồng",
      icon: "🍂",
      aroma: "🍁",
      notes: "Lá phong khô giòn • Thanh quế cay ngọt • Gió heo may se lạnh",
      whisper:
        "“Chiếc lá chao nghiêng lìa cành không phải là kết thúc, mà là sự trở về êm đềm với đất mẹ. Cuộc sống này cũng vậy, đôi khi biết học cách buông tay nhẹ nhàng mới là lúc mở ra sự an yên dài lâu nhất.”",
      linkText: "Dạo bước qua Bốn Mùa cảm xúc ➔",
      linkUrl: "bon-mua.html"
    }
  };

  let currentKey = "sage";

  function spawnAromaParticles(pouchEl, aromaEmoji) {
    if (!pouchEl) return;
    const emojis = [aromaEmoji, "✨", "🌸", "🍃"];
    for (let i = 0; i < 4; i++) {
      const particle = document.createElement("span");
      particle.className = "aroma-particle";
      particle.textContent = emojis[i % emojis.length];
      particle.style.left = `${30 + Math.random() * 40}%`;
      particle.style.top = `${20 + Math.random() * 30}%`;
      particle.style.animationDelay = `${i * 0.15}s`;
      pouchEl.appendChild(particle);

      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 2000);
    }
  }

  function selectPouch(key, pouchEl) {
    if (!pouchesData[key]) return;
    currentKey = key;

    // Update active class on pouches
    document.querySelectorAll(".pouch-hanger-unit").forEach((item) => {
      item.classList.remove("active");
    });
    if (pouchEl) {
      pouchEl.classList.add("active");
      spawnAromaParticles(pouchEl, pouchesData[key].aroma);
    }

    // Update Whisper Card with subtle transition
    const cardEl = document.getElementById("scentWhisperCard");
    const nameEl = document.getElementById("scentWhisperName");
    const iconEl = document.getElementById("scentWhisperIcon");
    const notesEl = document.getElementById("scentWhisperNotes");
    const textEl = document.getElementById("scentWhisperText");
    const linkEl = document.getElementById("scentWhisperLink");

    if (!cardEl || !nameEl || !iconEl || !textEl) return;

    cardEl.style.opacity = "0.4";
    cardEl.style.transform = "translateY(4px)";

    setTimeout(() => {
      const data = pouchesData[key];
      nameEl.textContent = data.name;
      iconEl.textContent = data.icon;
      notesEl.textContent = data.notes;
      textEl.textContent = data.whisper;

      if (linkEl && data.linkUrl) {
        linkEl.href = data.linkUrl;
        linkEl.textContent = data.linkText;
        linkEl.style.display = "inline-flex";
      }

      cardEl.style.opacity = "1";
      cardEl.style.transform = "translateY(0)";
    }, 180);
  }

  // Initialize event listeners when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    const pouchUnits = document.querySelectorAll(".pouch-hanger-unit");
    pouchUnits.forEach((unit) => {
      unit.addEventListener("click", () => {
        const key = unit.getAttribute("data-scent");
        selectPouch(key, unit);
      });
    });
  });

  // Expose global helper if needed
  window.selectScentPouch = selectPouch;
})();
