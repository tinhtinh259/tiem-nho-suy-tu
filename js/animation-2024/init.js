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
      y: -(gsap.getProperty(rec, "y").toFixed(0))
    })
  );

  // const scrollHeight = calculateHeightFromScrollHeight('html')
  // if (main) {
  //     main.style.height = scrollHeight + 206 + "px";
  // }
  const adjustMainHeight = () => {
    const scrollHeight = calculateHeightFromScrollHeight('html');
    const screenSize = window.innerWidth;
  
    let additionalHeight;
    if (screenSize > 1365) {
      additionalHeight = 206;
    } else if (screenSize > 1199) {
      additionalHeight = 130;
    } else {
      additionalHeight = 130; // For screens 1200px or less
    }
  
    if (main) {
      main.style.height = `${scrollHeight + additionalHeight}px`;
    }
  };
  
  adjustMainHeight();

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
    includeSVG('#svg_road', '/images/animation-2024/svg/env-road-desk-path-6022.svg');
    includeSVG('#svg_leaves', '/images/animation-2024/svg/env-leaves-min.svg');
    includeSVG('#env_vidacity', '/images/animation-2024/svg/vidacity-desk.svg');    
  } else {
    includeSVG('#svg_road', '/images/animation-2024/svg/mobile/env_mob_road_path_6022.svg');    
    includeSVG('#svg_leaves', '/images/animation-2024/svg/mobile/env_mob_leaves_no_anim.svg');
    includeSVG('#env_vidacity', '/images/animation-2024/svg/mobile/env_mob_vidacity_min.svg');
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