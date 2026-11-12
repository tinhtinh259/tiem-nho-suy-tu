/**
 * KHU VƯỜN PHÉP MÀU & CHÚ MÈO TỰ DO (CELESTIAL NIGHT SANCTUARY CONTROLLER)
 * Ground-anchored companion cat, interactive stepper stations, and auto-walk
 */

(function () {
  'use strict';

  var stations = [
    {
      index: 0,
      x: 14,
      badge: "🛡️ Trạm 1 • Ranh Giới",
      step: "1 / 4",
      title: "Học Cách Thiết Lập Ranh Giới Cá Nhân",
      desc: "Chú mèo không bao giờ cố làm vừa lòng tất cả mọi người, và nó vẫn được yêu thương. Người lớn thường kiệt quệ chỉ vì sợ nói từ chối. Hãy học cách bảo vệ năng lượng của mình trước khi muốn giúp đỡ ai khác.",
      thought: "Việc gì không muốn thì dứt khoát lắc đầu nha meow~ 🛡️",
      modalTitle: "Ranh Giới Cá Nhân & Lời Từ Chối 🛡️",
      modalText: "Giữ gìn sự bình yên của bạn không phải là ích kỷ, đó là sự tự trọng căn bản. Bạn không có nghĩa vụ phải gánh vác cảm xúc hay kỳ vọng của người khác bằng cái giá là sức khỏe tinh thần của chính mình.",
      practice: "Thực hành 1 phút: Nhắm mắt lại, nghĩ về 1 việc bạn đang cố gượng ép làm và thầm nhủ: 'Đây không phải trách nhiệm duy nhất của mình. Mình có quyền nói Không'."
    },
    {
      index: 1,
      x: 38,
      badge: "🌊 Trạm 2 • Dòng Sông",
      step: "2 / 4",
      title: "Buông Bỏ Sự Cố Gắng Kiểm Soát",
      desc: "Dòng nước chảy qua muôn ghềnh đá mà không hề tranh cãi với đá. Càng cố kiểm soát những thứ ngoài tầm tay (suy nghĩ của người khác, biến số tương lai), bạn càng dễ phát điên. Hãy học cách thả lỏng.",
      thought: "Cứ để mọi thứ trôi đi, vùng vẫy chỉ làm chìm mau... 🌊",
      modalTitle: "Thả Lỏng Trước Dòng Chảy Bất Định 🌊",
      modalText: "Phân loại ngay những thứ đang khiến bạn bận lòng thành hai nhóm: 'Những gì tôi có thể hành động ngay lúc này' và 'Những gì nằm ngoài tầm kiểm soát'. Với nhóm thứ hai, hãy dũng cảm trả nó về cho tự nhiên.",
      practice: "Thực hành 1 phút: Thả lỏng hai vai, hít vào đếm từ 1 đến 4, thở ra từ từ đếm từ 1 đến 6 và nói: 'Chuyện gì đến sẽ đến, mình sẽ ứng biến khi nó tới'."
    },
    {
      index: 2,
      x: 62,
      badge: "☀️ Trạm 3 • Khoảng Lặng",
      step: "3 / 4",
      title: "Nghỉ Ngơi Không Mang Cảm Giác Tội Lỗi",
      desc: "Người lớn luôn mắc chứng bệnh 'sợ mình lười biếng' mỗi khi ngồi không. Nhưng chú mèo sưởi nắng hiểu rằng: não bộ cần khoảng trống (white space) để hồi sinh năng lượng. Nghỉ ngơi không phải là một tội lỗi.",
      thought: "Nằm sưởi nắng meow~ Làm việc mãi thì máy móc cũng hỏng mà! ☀️",
      modalTitle: "Quyền Được Tạm Dừng Thư Thái ☀️",
      modalText: "Bạn không cần phải luôn luôn 'chứng tỏ năng suất' thì sự tồn tại của bạn mới có giá trị. Dừng lại một nhịp không làm bạn tụt lùi, nó giúp bạn không bị cháy sạch năng lượng sống.",
      practice: "Thực hành 1 phút: Đặt điện thoại úp xuống, vươn vai thật dài như một chú mèo và nhắm mắt tận hưởng sự tĩnh lặng tuyệt đối trong 60 giây."
    },
    {
      index: 3,
      x: 86,
      badge: "🌸 Trạm 4 • Tha Thứ",
      step: "4 / 4",
      title: "Hòa Thuận & Bao Dung Với Chính Mình",
      desc: "Khi mắc sai lầm, chúng ta thường tự xỉ vả bản thân bằng những lời cay nghiệt mà ta không bao giờ dám nói với bạn bè. Hãy học cách trò chuyện với chính mình bằng sự tôn trọng và bao dung.",
      thought: "Bạn đã rất kiên cường rồi đấy, đừng khắt khe quá meow~ 🌸",
      modalTitle: "Hòa Thuận Lại Với Bản Thân 🌸",
      modalText: "Sau tất cả những giông bão đã đi qua, người đồng hành trung thành nhất từ đầu đến cuối đời bạn chính là bản thân bạn. Hãy dành cho mình một cái ôm ấm áp và lời cảm ơn vì đã không bỏ cuộc.",
      practice: "Thực hành 1 phút: Đặt bàn tay lên ngực trái, cảm nhận nhịp đập và tự nói với mình: 'Hôm nay mình đã làm hết sức rồi. Mọi chuyện dừng lại ở đây, ngày mai tính tiếp'."
    }
  ];

  var currentStation = 0;
  var isAutoWalking = false;
  var autoWalkTimer = null;
  var currentCatX = 14;

  var catWrap, catSvg, thoughtBubble, footprintsContainer;
  var stationBadge, stationStep, stationTitle, stationDesc, stationActionBtn;
  var tabButtons = [];
  var markerElements = [];

  function spawnPawPrint(xPercent) {
    if (!footprintsContainer || !catWrap) return;
    var paw = document.createElement('div');
    paw.className = 'paw-print';
    paw.innerText = '🐾';
    paw.style.left = xPercent + '%';
    paw.style.bottom = '26px';
    footprintsContainer.appendChild(paw);

    setTimeout(function () {
      if (paw.parentNode) paw.parentNode.removeChild(paw);
    }, 2200);
  }

  function updateCardContent(st) {
    var card = document.getElementById('activeStationCard');
    if (!card) return;

    card.style.opacity = '0.3';
    card.style.transform = 'translateY(6px)';

    setTimeout(function () {
      if (stationBadge) stationBadge.innerText = st.badge;
      if (stationStep) stationStep.innerText = st.step;
      if (stationTitle) stationTitle.innerText = st.title;
      if (stationDesc) stationDesc.innerText = st.desc;
      if (stationActionBtn) {
        stationActionBtn.innerHTML = '<span>Nhận Thông Điệp ' + st.badge.split('•')[0].trim() + '</span> <span>✨</span>';
      }

      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 180);
  }

  function goToStation(index, userInitiated) {
    if (index < 0) index = 0;
    if (index >= stations.length) index = stations.length - 1;

    if (userInitiated && isAutoWalking) {
      stopAutoWalk();
    }

    currentStation = index;
    var target = stations[index];

    // Direction flip
    if (catSvg) {
      if (target.x > currentCatX) {
        catSvg.style.transform = 'scaleX(1)';
      } else if (target.x < currentCatX) {
        catSvg.style.transform = 'scaleX(-1)';
      }
    }

    // Walking animation state
    if (catWrap) {
      catWrap.classList.add('cat-walking');
      spawnPawPrint(currentCatX);

      catWrap.style.left = target.x + '%';

      // Mid-step paw prints
      var midX = (currentCatX + target.x) / 2;
      setTimeout(function () {
        spawnPawPrint(midX);
      }, 400);

      currentCatX = target.x;

      setTimeout(function () {
        catWrap.classList.remove('cat-walking');
        spawnPawPrint(target.x);
      }, 850);
    }

    // Thought bubble
    if (thoughtBubble) {
      thoughtBubble.style.opacity = '0';
      setTimeout(function () {
        thoughtBubble.innerText = target.thought;
        thoughtBubble.style.opacity = '1';
      }, 400);
    }

    // Tab pills update
    tabButtons.forEach(function (btn, i) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Marker highlights
    markerElements.forEach(function (m, i) {
      if (i === index) {
        m.classList.add('active');
      } else {
        m.classList.remove('active');
      }
    });

    // Update Card
    updateCardContent(target);
  }

  function startAutoWalk() {
    isAutoWalking = true;
    var btn = document.getElementById('catAutoWalkBtn');
    if (btn) {
      btn.classList.add('walking');
      btn.innerHTML = '<span class="btn-icon">❚❚</span> <span class="btn-label">Tạm Dừng Dạo</span>';
    }

    function step() {
      var next = (currentStation + 1) % stations.length;
      goToStation(next, false);
      autoWalkTimer = setTimeout(step, 4200);
    }

    autoWalkTimer = setTimeout(step, 4200);
  }

  function stopAutoWalk() {
    isAutoWalking = false;
    clearTimeout(autoWalkTimer);
    autoWalkTimer = null;
    var btn = document.getElementById('catAutoWalkBtn');
    if (btn) {
      btn.classList.remove('walking');
      btn.innerHTML = '<span class="btn-icon">▶</span> <span class="btn-label">Tự Động Đi Dạo</span>';
    }
  }

  function toggleAutoWalk() {
    if (isAutoWalking) {
      stopAutoWalk();
    } else {
      startAutoWalk();
    }
  }

  // Modal handlers
  window.openActiveStationModal = function () {
    var st = stations[currentStation];
    window.openCosmicGardenModal(st.modalTitle, st.modalText, st.badge, st.practice);
  };

  window.openCosmicGardenModal = function (title, text, badge, practice) {
    var modal = document.getElementById('cosmicSecretModal');
    var badgeEl = document.getElementById('modalStationBadge');
    var titleEl = document.getElementById('modalSecretTitle');
    var textEl = document.getElementById('modalSecretText');
    var practiceEl = document.getElementById('modalSecretPractice');

    if (badgeEl) badgeEl.innerText = badge ? badge.toUpperCase() : "TRẠM PHÉP MÀU";
    if (titleEl) titleEl.innerText = title || "Góc Nhìn Thức Tỉnh ✨";
    if (textEl) textEl.innerText = text || "Hãy luôn đối xử dịu dàng với chính mình sau một ngày dài.";
    if (practiceEl) {
      practiceEl.innerText = practice || "";
      practiceEl.style.display = practice ? "block" : "none";
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCosmicGardenModal = function () {
    var modal = document.getElementById('cosmicSecretModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.closeCosmicGardenModalOnBackdrop = function (e) {
    if (e.target && (e.target.id === 'cosmicSecretModal' || e.target.classList.contains('cosmic-secret-modal'))) {
      window.closeCosmicGardenModal();
    }
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      window.closeCosmicGardenModal();
    }
  });

  function init() {
    catWrap = document.getElementById('catCharacter');
    if (!catWrap) return;

    catSvg = catWrap.querySelector('.cat-svg');
    thoughtBubble = document.getElementById('catThoughtBubble');
    footprintsContainer = document.getElementById('footprintsContainer');

    stationBadge = document.getElementById('stationBadge');
    stationStep = document.getElementById('stationStep');
    stationTitle = document.getElementById('stationTitle');
    stationDesc = document.getElementById('stationDesc');
    stationActionBtn = document.getElementById('stationActionBtn');

    // Stepper Tabs
    tabButtons = Array.from(document.querySelectorAll('.station-tab-btn'));
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-station'), 10);
        goToStation(idx, true);
      });
    });

    // Waypoint Markers on Path
    markerElements = Array.from(document.querySelectorAll('.waypoint-marker'));
    markerElements.forEach(function (marker) {
      marker.addEventListener('click', function () {
        var idx = parseInt(marker.getAttribute('data-station'), 10);
        goToStation(idx, true);
      });
    });

    // Cat Auto-Walk Button
    var autoBtn = document.getElementById('catAutoWalkBtn');
    if (autoBtn) {
      autoBtn.addEventListener('click', toggleAutoWalk);
    }

    // Prev / Next Station Arrows
    var prevBtn = document.getElementById('stationPrevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var prev = (currentStation - 1 + stations.length) % stations.length;
        goToStation(prev, true);
      });
    }

    var nextBtn = document.getElementById('stationNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var next = (currentStation + 1) % stations.length;
        goToStation(next, true);
      });
    }

    // Cat Click: Playful Leap and Next Station
    catWrap.addEventListener('click', function () {
      catWrap.classList.add('cat-leaping');
      setTimeout(function () {
        catWrap.classList.remove('cat-leaping');
      }, 600);
      var next = (currentStation + 1) % stations.length;
      goToStation(next, true);
    });

    // Close Modal on Backdrop Click or Escape
    var secretModal = document.getElementById('cosmicSecretModal');
    if (secretModal) {
      secretModal.addEventListener('click', function (e) {
        if (e.target === secretModal) {
          window.closeCosmicGardenModal();
        }
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        window.closeCosmicGardenModal();
      }
    });

    // Initialize at Station 0
    goToStation(0, false);
  }

  window.addEventListener('DOMContentLoaded', init);
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 100);
  }
})();
