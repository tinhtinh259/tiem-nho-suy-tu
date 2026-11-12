const initMotionPath = () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Observer);
  var section_2_container = document.querySelector('.section_2');
  var section_2_content = document.querySelector('.section_2_content');
  var main = document.querySelector('main');
  var container = document.querySelector('.anima_container');
  var rec = document.querySelector('#rec');
  var path = document.querySelector('#path');
  let section_2 = gsap.timeline({
    scrollTrigger: {
      trigger: container, // active gsap right after loaded the page
      markers: false,
      start: "top top",
      end: () => section_2_content.offsetHeight,
      pin: container,
      pinSpacing: false,
      scrub: 1,
      onEnter: self => {},
      onEnterBack: self => {},
      onUpdate: self => {
        const device = checkScreen();
        const cordinate = self.progress;
        const direction = self.direction;
        const isStart = self.scroll['v'];
        const isLeave = null;
        localStorage.setItem('cordinate', cordinate);
        localStorage.setItem('status', true); // set Status = true khi object ở trong path 

        detectDir(cordinate, direction, isStart, isLeave, device.width);
        addEventListeners(cordinate, device.width)
        disableScroll(0)
      },
      onLeave: self => {
        const device = checkScreen();
        const cordinate = self.progress;
        const direction = self.direction;
        const isStart = self.scroll['v'];
        const isLeave = true;
        localStorage.setItem('status', false); // set Status = false khi object ra khỏi path 
        if(device.width > 1366){
          addEventListeners(cordinate, device.width)
          disableScroll(0)
        }else{
          removeEventListeners();
          disableScroll(1)
        }
      }
    }
  });

  section_2.to(rec, {
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
    },
    immediateRender: true,
    ease: "none"
  });

  gsap.ticker.add(() =>
    gsap.to(section_2_container, {
      x: 0,
      // y: -((gsap.getProperty(rec, "y")+(gsap.getProperty(rec, "y")*0.10)).toFixed(0))
      y: -(gsap.getProperty(rec, "y").toFixed(0))
    })
  );
  const scrollHeight = calculateHeightFromScrollHeight('html')
  if (main) {
    main.style.height = scrollHeight + 242 + "px";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  setTimeout(() => {
    initMotionPath();
    // Active menu
    wildlifeNavigationInit2();
  }, 1000);

  const w = checkScreen();
  if (w.width >= tbt_desktop) {       
    includeSVG('#svg_road', '/images/animation-2022/svg/env_road.svg');
  } else {   
    includeSVG('#svg_road', '/images/animation-2022/svg/mobile/env_mob_road.svg');
    includeSVG('#env_forest_mob', '/images/animation-2022/svg/mobile/env_mob_forest.svg');
    includeSVG('#env_factory_mob', '/images/animation-2022/svg/mobile/env_mob_factory.svg');
    includeSVG('#env_trashbin_mob', '/images/animation-2022/svg/mobile/env_mob_trashbin.svg');
    includeSVG('#env_icon_recycle_mob', '/images/animation-2022/svg/mobile/env_icon_recycle.svg');
    includeSVG('#env_icon_recycle_2_mob', '/images/animation-2022/svg/mobile/env_icon_recycle_2.svg');
    includeSVG('#env_poluted_mob', '/images/animation-2022/svg/mobile/env_mob_poluted.svg');
    includeSVG('#env_repair_shop_mob', '/images/animation-2022/svg/mobile/env_mob_repair_shop.svg');
  }
});

var resizeTimer;
window.addEventListener('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    const w = checkScreen();
    if (w.device == 'Desktop') {
      window.location.reload();
    }
  }, 500);
});
