
const menuButton = document.querySelector("#menu-button");
const seasonTxt = document.querySelector("#menu-button > span");

const seasonMenu = document.querySelector("#menu-season");
const seasonButtons = document.querySelectorAll("#menu-season > button");

const seasonNames = {
  spring: "Xuân",
  summer: "Hạ",
  autumn: "Thu",
  winter: "Đông"
};

let currSeason = getCurrentSeason();
let menuActive = false;

/* =========================
   MENU
========================= */

menuButton.addEventListener("click", () => {
  if (!menuActive) {
    menuInAnimation();
  } else {
    menuOutAnimation();
  }
});

seasonButtons.forEach((button) => {
  if (button.dataset.season === currSeason) {
    button.classList.add("selected");
  }

  button.addEventListener("click", () => {
    const newSeason = button.dataset.season;

    if (newSeason === currSeason) {
      menuOutAnimation();
      return;
    }

    const prevSeason = currSeason;

    seasonButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    menuOutAnimation();

    currSeason = newSeason;
    showSeasonContent(currSeason);
    updateBodySeasonClass(currSeason);
    transitionAnimation(prevSeason, currSeason);
    seasonTitleChange(button.textContent);
    startParticleEffect(currSeason);
  });
});

/* =========================
   CURRENT SEASON
========================= */

function getCurrentSeason() {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return "spring";
  }

  if (month >= 5 && month <= 7) {
    return "summer";
  }

  if (month >= 8 && month <= 10) {
    return "autumn";
  }

  return "winter";
}

/* =========================
   MENU ANIMATION
========================= */

function menuInAnimation() {
  menuActive = true;

  gsap.to(seasonMenu, {
    y: -60,
    scale: 1,
    duration: 0.8,
    ease: "elastic.out(0.8, 0.6)"
  });
}

function menuOutAnimation() {
  menuActive = false;

  gsap.to(seasonMenu, {
    y: 0,
    scale: 0,
    duration: 0.8,
    ease: "elastic.in(0.8, 0.6)"
  });
}

/* =========================
   TITLE CHANGE
========================= */

function seasonTitleChange(newSeason) {
  gsap.to(seasonTxt, {
    opacity: 0,
    duration: 0.2,

    onComplete: () => {
      seasonTxt.textContent = newSeason;

      gsap.to(seasonTxt, {
        opacity: 1,
        duration: 0.2
      });
    }
  });
}

/* =========================
   SEASON TRANSITION
========================= */

function transitionAnimation(oldSeason, newSeason, init = false) {
  const timeline = gsap.timeline();

  const oldSeasonBg = document.querySelector(`#${oldSeason}-bg`);
  const oldImages = document.querySelectorAll(`#${oldSeason}-bg > img`);

  if (!init) {
    timeline.to(oldSeasonBg, {
      duration: 1
    });
  }

  oldImages.forEach((image) => {
    timeline.to(image, {
      scale: 0,
      ease: "elastic.in(0.8, 0.8)"
    });
  });

  timeline.to(oldSeasonBg, {
    opacity: 0
  });

  const newSeasonBg = document.querySelector(`#${newSeason}-bg`);
  const newImages = document.querySelectorAll(`#${newSeason}-bg > img`);

  timeline.to(newSeasonBg, {
    opacity: 1
  });

  [...newImages].reverse().forEach((image) => {
    timeline.to(image, {
      scale: 1,
      ease: "elastic.out(0.8, 0.8)"
    });
  });

  timeline.play();
}

/* =========================
   PARALLAX
========================= */

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const mouseXPercentage = clientX / screenWidth;
  const mouseYPercentage = clientY / screenHeight;

  applyParallaxToSeason(
    currSeason,
    mouseXPercentage,
    mouseYPercentage
  );
});

function applyParallaxToSeason(
  seasonId,
  mouseXPercent,
  mouseYPercent
) {
  const season = document.getElementById(seasonId);

  if (!season) return;

  const background = season.querySelector(".background");
  const middleground = season.querySelector(".middleground");
  const foreground = season.querySelector(".foreground");

  gsapMoveLayer(
    background,
    mouseXPercent,
    mouseYPercent,
    0.05
  );

  gsapMoveLayer(
    middleground,
    mouseXPercent,
    mouseYPercent,
    0.1
  );

  gsapMoveLayer(
    foreground,
    mouseXPercent,
    mouseYPercent,
    0.15
  );
}

function gsapMoveLayer(
  layer,
  mouseXPercent,
  mouseYPercent,
  intensity
) {
  if (!layer) return;

  const xOffset =
    (mouseXPercent - 0.5) * intensity * 100;

  const yOffset =
    (mouseYPercent - 0.5) * intensity * 100;

  gsap.to(layer, {
    x: xOffset,
    y: yOffset,
    duration: 0.1,
    ease: "none"
  });
}


// add class for body 
function updateBodySeasonClass(season) {
  document.body.className = season;
}


// tabs paralax seasons
/* ==================================================
	SPRING LETTER MODAL
	================================================== */

	const modal = document.getElementById("modal");
	const modalTitle = document.getElementById("modalTitle");
	const modalText = document.getElementById("modalText");
	const closeBtn = document.getElementById("closeBtn");

	document.addEventListener("click", (e) => {
		const card = e.target.closest(".card");
		if (card && card.dataset && card.dataset.title && card.dataset.content) {
			modalTitle.textContent = card.dataset.title;
			modalText.innerHTML = card.dataset.content;

			const seasonTab = card.closest(".season-tab-content");
			const season = seasonTab ? seasonTab.id : currSeason;

			const modalPopupImg = document.getElementById("modalPopupImg");
			const isStoryCard = card.classList.contains("card_story");
			const featureImg = card.querySelector(".feature_img");

			// Bảng ảnh khung nghệ thuật mặc định của từng mùa
			const seasonFrames = {
				spring: "images/seasons/frame-spring.jpg",
				summer: "images/seasons/frame-summer.jpg",
				autumn: "images/seasons/frame-autumn.jpg",
				winter: "images/seasons/frame-winter.jpg"
			};

			// Thứ tự ưu tiên hình ảnh:
			// 1. data-image="..." cài trực tiếp ở card trong HTML
			// 2. Card câu chuyện (card_story): câu chuyện minh họa mùa (spring-bg-popup.png...)
			// 3. Ảnh riêng trong card (feature_img từ card_feature hoặc các card có ảnh)
			// 4. Mặc định: Ảnh khung mùa nghệ thuật (frame-spring.jpg...)
			let imgSrc = card.dataset.image;
			if (!imgSrc && isStoryCard) {
				imgSrc = `images/seasons/${season}-bg-popup.png`;
			} else if (!imgSrc && featureImg && featureImg.src) {
				imgSrc = featureImg.src;
			} else if (!imgSrc) {
				imgSrc = seasonFrames[season] || seasonFrames.spring;
			}

			if (modalPopupImg) {
				modalPopupImg.src = imgSrc;
			}

			modal.classList.add("active");
			document.body.style.overflow = "hidden";
		}
	});

	function closeModal(){
		modal.classList.remove("active");
		document.body.style.overflow = "";
	}

	closeBtn.addEventListener("click", closeModal);

	modal.addEventListener("click", (e)=>{
		if(e.target === modal){
			closeModal();
		}
	});

	document.addEventListener("keydown",(e)=>{
		if(e.key === "Escape"){
			closeModal();
		}
	});



function showSeasonContent(season) {

  document
    .querySelectorAll(".season-tab-content")
    .forEach(el => el.classList.remove("active"));

  document
    .getElementById(season)
    .classList.add("active");
}
//==============================
/* ==================================================
   HIỆU ỨNG RƠI THEO MÙA (DOM PARTICLE ENGINE)
   ================================================== */

// Tạo container chứa các hạt rơi nếu chưa có trong HTML
let particleContainer = document.getElementById("season-particle-container");
if (!particleContainer) {
  particleContainer = document.createElement("div");
  particleContainer.id = "season-particle-container";
  document.body.appendChild(particleContainer);
}

function startParticleEffect(season) {
  // Xóa sạch các hạt của mùa cũ trước đó
  particleContainer.innerHTML = "";

  // Số lượng hạt hiển thị đồng thời trên màn hình (tùy chỉnh theo ý bạn)
  const numberOfParticles = 40; 

  for (let i = 0; i < numberOfParticles; i++) {
    createParticle(season);
  }
}

function createParticle(season) {
  const particle = document.createElement("div");
  particle.classList.add("drop-particle");

  // Thiết lập các thuộc tính ngẫu nhiên để hiệu ứng tự nhiên hơn
  const randomLeft = Math.random() * 100; // Vị trí xuất phát ngang (0% - 100%)
  const randomDelay = Math.random() * 8;   // Thời gian hoãn bắt đầu (giúp các hạt không rơi cùng lúc)
  const randomDuration = Math.random() * 5 + 4; // Tốc độ rơi nhanh/chậm (4s - 9s)
  const randomSize = Math.random() * 6 + 4;  // Kích thước hạt (4px - 10px)
  const maxOpacity = Math.random() * 0.5 + 0.3; // Độ mờ tối đa khi hiển thị

  // Áp dụng style ngẫu nhiên thông qua CSS Variables và Inline style
  particle.style.left = `${randomLeft}vw`;
  particle.style.animationDelay = `${randomDelay}s`;
  particle.style.animationDuration = `${randomDuration}s`;
  particle.style.width = `${randomSize}px`;
  particle.style.height = `${randomSize}px`;
  particle.style.setProperty('--max-opacity', maxOpacity);

  // Phân loại style cụ thể theo từng mùa
  if (season === "spring") {
    particle.classList.add("spring-petal");
    // Tùy chọn: Chỉnh chiều rộng cánh hoa dài hơn chiều cao một chút cho đẹp
    particle.style.width = `${randomSize * 1.4}px`;
  } 
  // else if (season === "summer") {
  //   particle.classList.add("summer-firefly");
  //   // Đom đóm cần hiệu ứng tỏa sáng rộng hơn kích thước thực tế
  //   particle.style.width = `${randomSize * 2}px`;
  //   particle.style.height = `${randomSize * 2}px`;
  // } 
  else if (season === "summer") {
    // Cấu hình riêng cho BONG BÓNG MÙA HẠ
    particle.classList.add("summer-firefly");
    
    // Bong bóng thì nên có kích thước to nhỏ rõ rệt nhìn mới thích mắt
    const bubbleSize = Math.random() * 16 + 8; // Kích thước từ 8px đến 24px
    particle.style.width = `${bubbleSize}px`;
    particle.style.height = `${bubbleSize}px`;
  }
  else if (season === "autumn") {
    particle.classList.add("autumn-leaf");
    particle.style.width = `${randomSize * 1.6}px`;
    // Trộn ngẫu nhiên lá màu cam hoặc lá màu vàng xuộm
    particle.style.backgroundColor = Math.random() > 0.5 ? "#de7d2c" : "#e0a926";
  } 
  else if (season === "winter") {
    particle.classList.add("winter-snowflake");
  }

  // Đưa hạt vào màn hình
  particleContainer.appendChild(particle);
}




/* =========================
   INIT
========================= */
function init() {
  showSeasonContent(currSeason);
  seasonTitleChange(seasonNames[currSeason]);
  transitionAnimation("spring", currSeason, true);

  updateBodySeasonClass(currSeason);
  startParticleEffect(currSeason);
}
init();