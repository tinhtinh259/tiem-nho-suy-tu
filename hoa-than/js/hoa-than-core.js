/* ==========================================================================
   HÓA THÂN CORE ENGINE • TIỆM NHỎ SUY TƯ
   Universal Motion Experience (Non-Canvas CSS 3D & GSAP ScrollTrigger)
   Supports Themes: banh-quy | chiec-la | vien-soi
   ========================================================================== */

// 0. Theme Configuration Mapping
const THEME_CONFIGS = {
	"banh-quy": {
		flavorFilters: [
			"drop-shadow(0 0 20px rgba(0,0,0,0.45)) hue-rotate(0deg) saturate(1.25) brightness(1.05) contrast(1.0) sepia(0.18)",   // 1. Bơ Vàng
			"drop-shadow(0 0 20px rgba(0,0,0,0.45)) hue-rotate(85deg) saturate(1.35) brightness(0.95) contrast(1.02) sepia(0.05)",  // 2. Matcha Hạnh Nhân
			"drop-shadow(0 0 20px rgba(0,0,0,0.45)) hue-rotate(-12deg) saturate(0.8) brightness(0.62) contrast(1.22) sepia(0.28)",  // 3. Sô-cô-la Đậm
			"drop-shadow(0 0 20px rgba(0,0,0,0.45)) hue-rotate(-22deg) saturate(1.55) brightness(1.12) contrast(1.02) sepia(0.15)"   // 4. Gừng Mật Ong
		],
		step2Glow: "drop-shadow(0 0 35px rgba(255, 110, 20, 0.85)) brightness(1.12) contrast(1.05)",
		step3Glow: "drop-shadow(0 0 35px rgba(255, 205, 80, 0.9)) brightness(1.08) contrast(1.02)"
	},
	"chiec-la": {
		flavorFilters: [
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) hue-rotate(25deg) saturate(1.35) brightness(1.1) contrast(1.02)",   // 1. Lá Mầm Đầu Xuân
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) hue-rotate(-20deg) saturate(1.15) brightness(0.92) contrast(1.08)", // 2. Lá Sen Giữa Hè
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) hue-rotate(-85deg) saturate(1.65) brightness(1.02) contrast(1.12)", // 3. Lá Phong Mùa Thu
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) hue-rotate(-50deg) saturate(1.75) brightness(1.18) contrast(1.05)"  // 4. Ngân Hạnh An Yên
		],
		step2Glow: "drop-shadow(0 0 35px rgba(42, 157, 143, 0.85)) brightness(1.08) contrast(1.05)",
		step3Glow: "drop-shadow(0 0 35px rgba(244, 162, 97, 0.9)) brightness(1.15) contrast(1.02)"
	},
	"vien-soi": {
		flavorFilters: [
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) brightness(1.22) contrast(1.05) saturate(0.2) hue-rotate(0deg)",    // 1. Sỏi Trắng (White Quartz)
			"drop-shadow(0 0 20px rgba(0,0,0,0.45)) brightness(0.55) contrast(1.35) saturate(0.3) hue-rotate(0deg)",    // 2. Hắc Thạch (Dark Obsidian)
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) brightness(1.08) contrast(1.1) saturate(1.8) sepia(0.55) hue-rotate(-25deg)", // 3. Hổ Phách (Warm Amber)
			"drop-shadow(0 0 20px rgba(0,0,0,0.35)) brightness(0.95) contrast(1.15) saturate(1.6) hue-rotate(85deg)"    // 4. Bích Ngọc (Jade Stone)
		],
		step2Glow: "drop-shadow(0 0 35px rgba(56, 189, 248, 0.85)) brightness(1.1) contrast(1.05)",
		step3Glow: "drop-shadow(0 0 35px rgba(16, 185, 129, 0.9)) brightness(1.12) contrast(1.02)"
	},
	"phu-du": {
		flavorFilters: [
			"drop-shadow(0 0 28px rgba(251, 191, 36, 0.75)) hue-rotate(0deg) saturate(1.4) brightness(1.15) contrast(1.05)",   // 1. Bình Minh Khởi Sinh
			"drop-shadow(0 0 28px rgba(129, 140, 248, 0.85)) hue-rotate(190deg) saturate(1.5) brightness(1.1) contrast(1.1)", // 2. Vũ Điệu Ngân Hà
			"drop-shadow(0 0 28px rgba(244, 63, 94, 0.85)) hue-rotate(320deg) saturate(1.6) brightness(1.15) contrast(1.08)", // 3. Lễ Cưới Hoàng Hôn
			"drop-shadow(0 0 28px rgba(16, 185, 129, 0.85)) hue-rotate(110deg) saturate(1.45) brightness(1.05) contrast(1.05)" // 4. Giấc Ngủ Đáy Nước
		],
		step2Glow: "drop-shadow(0 0 40px rgba(245, 158, 11, 0.95)) brightness(1.2) contrast(1.1)",
		step3Glow: "drop-shadow(0 0 40px rgba(251, 191, 36, 0.95)) brightness(1.25) contrast(1.05)"
	}
};

const currentTheme = document.body.getAttribute("data-theme") || "banh-quy";
const customConfig = window.HOA_THAN_CUSTOM_CONFIG;
const activeThemeConfig = customConfig || THEME_CONFIGS[currentTheme] || THEME_CONFIGS["banh-quy"];
const flavorFilters = activeThemeConfig.flavorFilters || [];

// 1. Lenis Smooth Scroll Connect
const lenis = new Lenis({
	smooth: true,
	multiplier: 0.85,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smoothTouch: true,
	lerp: 0.08,
	duration: 1.2
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. GSAP Registration
gsap.registerPlugin(ScrollTrigger);
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
	lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// 3. Elements
const donut = document.querySelector("#donut");
const donutRotator = document.querySelector("#donut-rotator");
const donutImg = document.querySelector("#donut-img");
const donutShadow = document.querySelector("#donut-shadow");

// 4. Idle Floating Breathing Animation (trên rotator để không xung đột với vị trí x, y của donut)
if (donutRotator) {
	gsap.to(donutRotator, {
		y: "-=8",
		duration: 2.2,
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut"
	});
}

if (donutShadow) {
	gsap.to(donutShadow, {
		scaleX: 0.85,
		opacity: 0.55,
		duration: 2.2,
		repeat: -1,
		yoyo: true,
		ease: "sine.inOut"
	});
}

// 5. Interactive 3D Mouse Tilt (Chỉ nghiêng vật thể, giữ cố định mặt bóng đổ sàn)
window.addEventListener("mousemove", (e) => {
	const target = donutRotator || donut;
	if (!target) return;

	const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 -> 1
	const y = (e.clientY / window.innerHeight - 0.5) * 2;

	gsap.to(target, {
		rotationY: x * 18,
		rotationX: -y * 18,
		duration: 0.6,
		ease: "power1.out"
	});
});

// 6. Hero Section Animation: Vật thể ban đầu nằm lọt thỏm ngay chữ cái trên Heading
let cachedHeroSlot = { x: 0, y: 0, scale: 0.35 };

function computeHeroSlot() {
	const slot = document.querySelector(".hero__slot, .hero__cookie-slot, .hero__leaf-slot, .hero__pebble-slot");
	if (!slot || !donut) return cachedHeroSlot;

	const headingBox = document.querySelector(".hero__heading-box");
	const prevTransform = headingBox ? headingBox.style.transform : null;
	if (headingBox) headingBox.style.transform = "none";

	const rect = slot.getBoundingClientRect();

	const slotAbsoluteX = rect.left + (window.pageXOffset || window.scrollX || 0) + rect.width / 2;
	const slotAbsoluteY = rect.top + (window.pageYOffset || window.scrollY || 0) + rect.height / 2;

	const headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-offset')) || 96;
	const modelCenterX = window.innerWidth / 2;
	const modelCenterY = headerOffset + (window.innerHeight - headerOffset) / 2;

	const deltaX = slotAbsoluteX - modelCenterX;
	const deltaY = slotAbsoluteY - modelCenterY;

	const slotSize = Math.max(rect.width, rect.height);
	const initScale = Math.min(0.55, Math.max(0.24, (slotSize * 1.15) / 240));

	cachedHeroSlot = { x: deltaX, y: deltaY, scale: initScale };

	if (headingBox && prevTransform) headingBox.style.transform = prevTransform;

	return cachedHeroSlot;
}

function getSlotOffset() {
	return computeHeroSlot();
}

function updateHeroSlot() {
	const slotData = computeHeroSlot();
	if (window.scrollY < 40) {
		gsap.set(donut, {
			x: slotData.x,
			y: slotData.y,
			scale: slotData.scale
		});
	}
}

computeHeroSlot();
updateHeroSlot();

if (document.fonts) {
	document.fonts.ready.then(() => {
		computeHeroSlot();
		updateHeroSlot();
		ScrollTrigger.refresh();
	});
}

window.addEventListener("resize", () => {
	computeHeroSlot();
	updateHeroSlot();
	ScrollTrigger.refresh();
});

if (donutShadow) {
	gsap.set(donutShadow, {
		opacity: 0,
		scale: 0.3
	});
}

const heroTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: 1.2,
		invalidateOnRefresh: true
	}
});

heroTimeline
	.fromTo(donut, 
		{
			x: () => getSlotOffset().x,
			y: () => getSlotOffset().y,
			scale: () => getSlotOffset().scale
		},
		{
			x: "0vw",
			y: "0vh",
			scale: 1.25,
			ease: "power2.inOut"
		}, 0)
	.fromTo(donutRotator || donut, 
		{ rotationZ: 0 },
		{ rotationZ: 180, ease: "power2.inOut" }, 0);

const heroAccents = document.querySelectorAll(".hero__accent, .hero__q-tail, .hero__hook-mark");
if (heroAccents.length > 0) {
	heroTimeline.to(heroAccents, {
		opacity: 0,
		duration: 0.25,
		ease: "power1.out"
	}, 0);
}

if (donutShadow) {
	heroTimeline.to(donutShadow, {
		opacity: 0.8,
		scale: 1,
		ease: "power1.inOut"
	}, 0.2);
}

heroTimeline
	.to(".hero__subheading", {
		opacity: 0,
		y: -20,
		duration: 0.4,
		ease: "power1.out"
	}, 0)
	.to(".hero__first-text", {
		opacity: 0.1,
		duration: 0.4,
		ease: "power1.out"
	}, 0.1)
	.to(".hero__second-text", {
		opacity: 0.1,
		duration: 0.4,
		ease: "power1.out"
	}, 0.1)
	.to(".hero__heading-box", {
		opacity: 0.15,
		scale: 0.95,
		duration: 0.7,
		ease: "power1.out"
	}, 0.2);

if (document.fonts) {
	document.fonts.ready.then(() => {
		if (window.scrollY < 20) {
			const pos = getSlotOffset();
			gsap.set(donut, {
				x: pos.x,
				y: pos.y,
				scale: pos.scale
			});
		}
		ScrollTrigger.refresh();
	});
}

window.addEventListener("resize", () => {
	if (window.scrollY < 20) {
		const newPos = getSlotOffset();
		gsap.set(donut, {
			x: newPos.x,
			y: newPos.y,
			scale: newPos.scale
		});
	}
});

// 7. Flip Section Animation (Zoom in & 3D tilt, vật thể nằm dưới đoạn text)
const toggleFlipFigures = (visible) => {
	gsap.to(".flip__figures", {
		autoAlpha: visible ? 1 : 0,
		duration: 0.4,
		ease: "power1.out"
	});
};

gsap.timeline({
	scrollTrigger: {
		trigger: "#flip",
		start: "top top",
		end: () => `+=${window.innerHeight * 1.5}px`,
		scrub: 1,
		pin: true,
		pinSpacing: true,
		onEnter: () => toggleFlipFigures(true),
		onLeave: () => toggleFlipFigures(false),
		onEnterBack: () => toggleFlipFigures(true),
		onLeaveBack: () => toggleFlipFigures(false)
	}
})
.to(donut, {
	x: "0vw",
	y: () => (window.innerWidth < 768 ? "15vh" : "11vh"),
	scale: 1.25,
	ease: "power1.inOut"
})
.to(donutRotator || donut, {
	rotationZ: 540,
	ease: "power1.inOut"
}, "<")
.to(".flip__heading", { opacity: 1, y: 0, duration: 0.4 }, "<")
.to(".flip__text", { opacity: 1, y: 0, duration: 0.4 }, "<");

// 8. Steps Section Animation (4 Cards with Color Morphs)
const stepCards = [
	document.querySelector(".steps__card-first"),
	document.querySelector(".steps__card:nth-child(2)"),
	document.querySelector(".steps__card:nth-child(3)"),
	document.querySelector(".steps__card:nth-child(4)")
].filter(Boolean);
const indicators = Array.from(document.querySelectorAll(".steps__indicator"));

// Click on dots to scroll smoothly to that exact card hold point
indicators.forEach((ind, i) => {
	ind.addEventListener("click", () => {
		const st = ScrollTrigger.getById("steps-st");
		if (st) {
			const stepTimes = [0.5, 1.8, 3.0, 4.2];
			const targetProgress = stepTimes[i] / 4.6;
			const targetScroll = st.start + targetProgress * (st.end - st.start);
			lenis.scrollTo(targetScroll, { duration: 1.0 });
		}
	});
});

const timelineSteps = gsap.timeline({
	id: "steps-st",
	scrollTrigger: {
		id: "steps-st",
		trigger: "#steps",
		start: "top top",
		end: () => `+=${window.innerHeight * 4}`,
		scrub: 1,
		pin: true,
		pinSpacing: true
	}
});

// Center object at start of steps
timelineSteps.to(donut, {
	x: "0vw",
	y: () => (window.innerWidth < 768 ? "12vh" : "0vh"),
	scale: 1.05,
	duration: 0.5,
	ease: "power2.out"
}, 0);

// Card 0 (Hold: 0.0 -> 1.0)
if (donutImg && flavorFilters[0]) {
	timelineSteps.set(donutImg, {
		filter: flavorFilters[0]
	}, 0);
}

// Card 1 (Slide up: 1.0 -> 1.6, Hold: 1.6 -> 2.2)
timelineSteps
	.to(stepCards[1], { y: "0vh", duration: 0.6, ease: "power2.out" }, 1.0)
	.to(donutRotator || donut, { rotationZ: "+=180", duration: 0.7, ease: "power2.inOut" }, 1.0);

if (donutImg && flavorFilters[1]) {
	timelineSteps.to(donutImg, {
		filter: flavorFilters[1],
		duration: 0.6,
		ease: "power2.inOut"
	}, 1.0);
}

timelineSteps.to({}, { duration: 0.6 }, 1.6); // Card 1 hold period

// Card 2 (Slide up: 2.2 -> 2.8, Hold: 2.8 -> 3.4)
timelineSteps
	.to(stepCards[2], { y: "0vh", duration: 0.6, ease: "power2.out" }, 2.2)
	.to(donutRotator || donut, { rotationZ: "+=180", duration: 0.7, ease: "power2.inOut" }, 2.2);

if (donutImg && flavorFilters[2]) {
	timelineSteps.to(donutImg, {
		filter: flavorFilters[2],
		duration: 0.6,
		ease: "power2.inOut"
	}, 2.2);
}

timelineSteps.to({}, { duration: 0.6 }, 2.8); // Card 2 hold period

// Card 3 (Slide up: 3.4 -> 4.0, Hold: 4.0 -> 4.6)
timelineSteps
	.to(stepCards[3], { y: "0vh", duration: 0.6, ease: "power2.out" }, 3.4)
	.to(donutRotator || donut, { rotationZ: "+=180", duration: 0.7, ease: "power2.inOut" }, 3.4);

if (donutImg && flavorFilters[3]) {
	timelineSteps.to(donutImg, {
		filter: flavorFilters[3],
		duration: 0.6,
		ease: "power2.inOut"
	}, 3.4);
}

timelineSteps.to({}, { duration: 0.6 }, 4.0); // Card 3 hold period

// Sync 4 indicators dynamically on scroll up / down
timelineSteps.eventCallback("onUpdate", () => {
	const progress = timelineSteps.progress(); // 0 to 1
	let currentStep = 0;
	if (progress >= 0.76) {
		currentStep = 3;
	} else if (progress >= 0.50) {
		currentStep = 2;
	} else if (progress >= 0.24) {
		currentStep = 1;
	} else {
		currentStep = 0;
	}

	indicators.forEach((ind, i) => {
		if (i === currentStep) {
			ind.classList.add("active");
		} else {
			ind.classList.remove("active");
		}
	});
});

// 9. Numbers Section Animation (Hành trình 3 bước)
const numbersTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#numbers",
		start: "top top",
		end: () => `+=${window.innerHeight * 2.5}`,
		scrub: 1,
		pin: true,
		pinSpacing: true
	}
});

// Position object to the right
numbersTimeline.to(donut, {
	x: () => (window.innerWidth < 768 ? "0vw" : "26vw"),
	y: "0vh",
	scale: 1.15,
	duration: 0.6,
	ease: "power2.out"
}, 0);

// Continuous 3D rotation throughout journey
numbersTimeline.to(donutRotator || donut, {
	rotationZ: "+=1080",
	duration: 3.6,
	ease: "none"
}, 0);

// Heading display
numbersTimeline.to(".numbers__heading", {
	opacity: 1,
	y: 0,
	duration: 0.5,
	ease: "power2.out"
}, 0);

ScrollTrigger.create({
	trigger: "#numbers",
	start: "top 80%",
	onEnter: () => gsap.to(".numbers__heading", { opacity: 1, y: 0, duration: 0.4 }),
	onEnterBack: () => gsap.to(".numbers__heading", { opacity: 1, y: 0, duration: 0.4 })
});

const numberItems = gsap.utils.toArray(".numbers__item");

// Bước 1 (0.0 -> 1.2)
numbersTimeline
	.to(numberItems[0], { opacity: 1, scale: 1.04, duration: 0.4, ease: "power2.out" }, 0.2)
	.call(() => {
		numberItems[0]?.classList.add("active");
		numberItems[1]?.classList.remove("active");
		numberItems[2]?.classList.remove("active");
	}, null, 0.2);

// Bước 2 (1.2 -> 2.4)
numbersTimeline
	.to(numberItems[0], { opacity: 0.35, scale: 1.0, duration: 0.3 }, 1.2)
	.to(numberItems[1], { opacity: 1, scale: 1.04, duration: 0.4, ease: "power2.out" }, 1.3)
	.call(() => {
		numberItems[0]?.classList.remove("active");
		numberItems[1]?.classList.add("active");
		numberItems[2]?.classList.remove("active");
	}, null, 1.3);

if (donutImg && activeThemeConfig.step2Glow) {
	numbersTimeline.to(donutImg, {
		filter: activeThemeConfig.step2Glow,
		duration: 0.6,
		ease: "power2.out"
	}, 1.3);
}

// Bước 3 (2.4 -> 3.6)
numbersTimeline
	.to(numberItems[1], { opacity: 0.35, scale: 1.0, duration: 0.3 }, 2.4)
	.to(numberItems[2], { opacity: 1, scale: 1.04, duration: 0.4, ease: "power2.out" }, 2.5)
	.call(() => {
		numberItems[0]?.classList.remove("active");
		numberItems[1]?.classList.remove("active");
		numberItems[2]?.classList.add("active");
	}, null, 2.5);

if (donutImg && activeThemeConfig.step3Glow) {
	numbersTimeline.to(donutImg, {
		filter: activeThemeConfig.step3Glow,
		duration: 0.6,
		ease: "power2.out"
	}, 2.5);
}

// 10. Final Section Animation (Trạm Dừng)
const finalTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: "#final",
		start: "top top",
		end: () => `+=${window.innerHeight * 1.5}`,
		scrub: 1,
		pin: true,
		pinSpacing: true
	}
});

finalTimeline
	.to(donut, {
		x: () => (window.innerWidth < 768 ? "0vw" : "-26vw"),
		y: "0vh",
		scale: 1.25,
		duration: 0.8,
		ease: "power2.out"
	}, 0)
	.to(donutRotator || donut, {
		rotationZ: "+=360",
		duration: 0.8,
		ease: "power2.out"
	}, 0)
	.to(".final__order-box", {
		opacity: 1,
		y: 0,
		duration: 0.7,
		ease: "power2.out"
	}, 0.2)
	.to({}, { duration: 0.6 });

// 11. Subheader Box Nav & Global Handlers
const cookieBoxNav = document.querySelector("#subheader-hoathan");
const cookieBoxToggle = document.querySelector("#cookieBoxToggle");
const cookieBoxLinks = document.querySelectorAll(".cookie-box-link");
const scrollBtn = document.querySelector("#scroll-btn");

if (cookieBoxToggle && cookieBoxNav) {
	cookieBoxToggle.addEventListener("click", () => {
		cookieBoxNav.classList.toggle("is-collapsed");
		const isCol = cookieBoxNav.classList.contains("is-collapsed");
		cookieBoxToggle.setAttribute("aria-expanded", !isCol);
	});
}

// Auto collapse on scroll into reading sections (#steps, #numbers) to NEVER block text
ScrollTrigger.create({
	trigger: "#steps",
	start: "top 30%",
	endTrigger: "#final",
	end: "bottom bottom",
	onEnter: () => cookieBoxNav?.classList.add("is-collapsed"),
	onLeaveBack: () => cookieBoxNav?.classList.remove("is-collapsed")
});

// Smooth scroll for cookie box links
cookieBoxLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const targetId = link.getAttribute("href");
		if (targetId) {
			lenis.scrollTo(targetId, { offset: 0, duration: 1.4 });
		}
	});
});

// Update active dot in subheader box as sections scroll
const sections = ["flip", "steps", "numbers", "final"];
sections.forEach((id) => {
	ScrollTrigger.create({
		trigger: `#${id}`,
		start: "top center",
		end: "bottom center",
		onEnter: () => setActiveNav(id),
		onEnterBack: () => setActiveNav(id)
	});
});

function setActiveNav(id) {
	cookieBoxLinks.forEach((link) => {
		if (link.getAttribute("href") === `#${id}`) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
}

if (scrollBtn) {
	scrollBtn.addEventListener("click", () => {
		lenis.scrollTo("#flip", { offset: 0, duration: 1.5 });
	});
}

// Fade out fixed 3D model when scrolling past #final into footer
ScrollTrigger.create({
	trigger: "#final",
	start: "bottom 95%",
	onEnter: () => gsap.to([".model", "#subheader-hoathan"], { opacity: 0, pointerEvents: "none", duration: 0.3 }),
	onLeaveBack: () => gsap.to([".model", "#subheader-hoathan"], { opacity: 1, pointerEvents: "auto", duration: 0.3 })
});
