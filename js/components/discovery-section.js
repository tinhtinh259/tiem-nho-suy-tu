// ==========================================
// DISCOVERY SECTION SCRIPT (Interactive Objects & Journal)
// ==========================================

const sparkle = document.getElementById("cursorSparkle");

let mouseX = 0;
let mouseY = 0;

if (sparkle) {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    sparkle.style.left = `${mouseX + 48}px`;
    sparkle.style.top = `${mouseY - 10}px`;
  });
}

// Map of 6 Interactive Discovery Objects
const discoveryData = {
  itemDiscovery_picture: {
    title: "🍂 Bốn mùa cảm xúc",
    text: "Mỗi mùa đại diện cho một trạng thái tâm hồn rất riêng. Bạn có thấy mùa nào giống với cảm xúc của bạn hôm nay không?",
    url: "bon-mua.html"
  },
  itemDiscovery_marco: {
    title: "👣 Dấu chân của Tiệm",
    text: "Có ai đó đã đi qua đây trước bạn. Mọi thứ trong thế giới này đều đang nhẹ nhàng chuyển động.",
    url: "dau-chan-cua-tiem.html"
  },
  itemDiscovery_catLying: {
    title: "🌙 Tĩnh lặng vỗ về",
    text: "Chú mèo nằm lặng lẽ như đang tận hưởng khoảng lặng dịu dàng của riêng mình.",
    url: "dieu-nho-be.html"
  },
  itemDiscovery_blackcat: {
    title: "🐈 Phép màu nhỏ bé",
    text: "Bạn đang bận thở phải không? Hãy ngơi nghỉ một chút và cảm nhận nhịp đập dịu dàng của sự sống.",
    url: "phep-mau.html"
  },
  itemDiscovery_envelope: {
    title: "💌 Những bức thư",
    text: "Có những thông điệp nhỏ xíu nhưng làm ngày đó của bạn tươi sáng hơn hẳn.",
    url: "thu-cua-ban.html"
  },
  itemDiscovery_road: {
    title: "🛤️ Tiệm Nhỏ Suy Tư",
    text: "Nơi những điều nhỏ bé vẫn đang diễn ra và một người bình thường vẫn nỗ lực sống tử tế mỗi ngày.",
    url: "con-duong.html"
  }
};

// Unlock Discovery Item Function
function unlockDiscovery(key, showPopup = true) {
  const item = discoveryData[key];
  if (!item) return;

  let discoveries = [];
  try {
    discoveries = JSON.parse(localStorage.getItem("discoveries") || "[]");
  } catch {
    discoveries = [];
  }

  const exists = discoveries.some((d) => d.title === item.title);
  if (!exists) {
    discoveries.unshift({ title: item.title, text: item.text, url: item.url });
    localStorage.setItem("discoveries", JSON.stringify(discoveries));

    // Trigger toast notification
    if (typeof showMessageToast === "function") {
      showMessageToast(`✨ Bạn vừa tìm thấy điểm chạm: ${item.title}! 💖`);
    }
  }

  updateDiscoveryUI();

  if (showPopup) {
    showTooltip(item.title, item.text, item.url);
  }
}

// Update Discovery Count & Preview UI
function updateDiscoveryUI() {
  let discoveries = [];
  try {
    discoveries = JSON.parse(localStorage.getItem("discoveries") || "[]");
  } catch {
    discoveries = [];
  }

  const countEl = document.getElementById("discoveryCount");
  if (countEl) {
    countEl.innerText = `${discoveries.length} / 6 khám phá`;
  }

  // Target Journal Drawer List directly
  const journalList = document.querySelector(".journal-drawer .drawer-list") || document.getElementById("journalList");
  if (journalList) {
    if (!discoveries.length) {
      journalList.innerHTML = `
        <div class="journal-empty">
          <div class="empty-icon">🍃</div>
          <p>Chưa có khám phá nào.</p>
          <span>Hãy rê chuột hoặc chạm vào các chú mèo và vật thể trên trang nhé! 🐾</span>
        </div>
      `;
    } else {
      journalList.innerHTML = discoveries
        .map(
          (d) => `
        <div class="journal-entry">
          <div class="journal-title">${d.title}</div>
          <div class="journal-text">${d.text}</div>
          <a href="${d.url}" class="journal-link">Ghé thăm câu chuyện →</a>
        </div>
      `
        )
        .join("");
    }
  }
}

// Bulletproof Event Delegation for Hover & Click on Discovery Objects
document.addEventListener("mouseover", (e) => {
  const target = e.target.closest(".item_discovery");
  if (!target) return;

  if (sparkle) sparkle.classList.add("show");

  let key = null;
  for (const cls of target.classList) {
    if (discoveryData[cls]) {
      key = cls;
      break;
    }
  }

  if (key) {
    unlockDiscovery(key, false);
  }
});

document.addEventListener("mouseout", (e) => {
  const target = e.target.closest(".item_discovery");
  if (target && sparkle) {
    sparkle.classList.remove("show");
  }
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(".item_discovery");
  if (!target) return;

  let key = null;
  for (const cls of target.classList) {
    if (discoveryData[cls]) {
      key = cls;
      break;
    }
  }

  if (key) {
    e.preventDefault();
    unlockDiscovery(key, true);
  }
});

// Tooltip Story Popup
const tooltip = document.getElementById("storyTooltip");

function showTooltip(title, text, url) {
  if (!tooltip) return;
  const titleEl = document.getElementById("tooltipTitle");
  const textEl = document.getElementById("tooltipText");
  const linkEl = document.getElementById("tooltipLink");

  if (titleEl) titleEl.textContent = title;
  if (textEl) textEl.textContent = text;
  if (linkEl) linkEl.href = url;

  tooltip.classList.add("show");
}

document.getElementById("closeTooltip")?.addEventListener("click", () => {
  tooltip?.classList.remove("show");
});

tooltip?.addEventListener("click", (e) => {
  if (e.target === tooltip) {
    tooltip.classList.remove("show");
  }
});

// Side Drawer Toggle Functions
function openJournalDrawer() {
  const drawer = document.getElementById("journalDrawer");
  const overlay = document.getElementById("journalOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
  updateDiscoveryUI();
}

function closeJournalDrawer() {
  const drawer = document.getElementById("journalDrawer");
  const overlay = document.getElementById("journalOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#openJournal")) {
    e.preventDefault();
    openJournalDrawer();
  } else if (e.target.closest("#closeJournalDrawer") || e.target.id === "journalOverlay") {
    closeJournalDrawer();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeJournalDrawer();
});

// Initialize UI on load
document.addEventListener("DOMContentLoaded", () => {
  updateDiscoveryUI();
});

// Immediate call
updateDiscoveryUI();
