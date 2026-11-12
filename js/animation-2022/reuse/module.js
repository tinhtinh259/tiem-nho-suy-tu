(function () {
  function disableScroll(status) {
    if (status == 0) {
      // For standard scrolling
      window.addEventListener('wheel', preventDefault, {
        passive: false
      });
      // For older versions of Firefox
      window.addEventListener('DOMMouseScroll', preventDefault, {
        passive: false
      });
      // For trackpad scrolling on macOS
      window.addEventListener('touchmove', preventDefault, {
        passive: false
      });
    } else {
      // For standard scrolling
      window.removeEventListener('wheel', preventDefault, {
        passive: false
      });
      // For older versions of Firefox
      window.removeEventListener('DOMMouseScroll', preventDefault, {
        passive: false
      });
      // For trackpad scrolling on macOS
      window.removeEventListener('touchmove', preventDefault, {
        passive: false
      });
    }
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  function handleEvent(event, speed, speedMob, speedTouch) {
    if (event.type === 'wheel') {
      var delta = Math.sign(event.deltaY);
      if (delta === 1) {
        // console.log('Scrolling down');
        window.scrollTo(0, window.scrollY + speed);
      } else if (delta === -1) {
        // console.log('Scrolling up');
        window.scrollTo(0, window.scrollY - speed);
      }
    } else if (event.type === 'touchmove') {
      event.preventDefault(); // Prevent default scrolling behavior

      var touchCurrentX = event.touches[0].clientX;
      var touchCurrentY = event.touches[0].clientY;

      var deltaY = touchCurrentY - touchStartY;

      if (deltaY > 0) {
        window.scrollTo(0, window.scrollY - speedTouch);
        // console.log('Touch move down');
      } else if (deltaY < 0) {
        window.scrollTo(0, window.scrollY + speedTouch);
        // console.log('Touch move up');
      }
    } else if (event.type === 'touchend') {
      var touchEndX = event.changedTouches[0].clientX;
      var touchEndY = event.changedTouches[0].clientY;

      var deltaX = touchEndX - touchStartX;
      var deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          // console.log('Swiped right');
        } else {
          // console.log('Swiped left');
        }
      } else {
        // deltaY  > 1 or < -1 to prevent when user only click to screen avoid object moving
        if (deltaY > 1) {
          window.scrollTo(0, window.scrollY - speedMob);
          // console.log('Swiped down');
        }
        if (deltaY < -1) {
          window.scrollTo(0, window.scrollY + speedMob);
          // console.log('Swiped up');
        }
      }
    }
  }

  function wrapperEvent(event) {
    const cordinate = localStorage.getItem('cordinate');
    const status = localStorage.getItem('status');
    var speed;
    var speedMob;
    var speedTouch;
    if ((event.wheelDeltaY >= 0 && event.wheelDeltaY <= 110) || (event.wheelDeltaY >= -110 && event.wheelDeltaY <= 0)) {
      speed = 6;
      speedTouch = 10;
      speedMob = 60;
      localStorage.setItem('isMouse', 0);
    } else {
      speed = status == "true" ? 120 : 100; // Set tốc độ scroll của chuột là 20px khi ở trên path và khi ra khỏi path sẽ là 100px
      speedTouch = 15;
      speedMob = 100;
      localStorage.setItem('isMouse', 1);
    }

    handleEvent(event, speed, speedMob, speedTouch);
  }

  function wrapperEvent2(event) {
    const cordinate = localStorage.getItem('cordinate');
    const status = localStorage.getItem('status');
    var speed;
    var speedMob;
    var speedTouch;
    if ((event.wheelDeltaY >= 0 && event.wheelDeltaY <= 110) || (event.wheelDeltaY >= -110 && event.wheelDeltaY <= 0)) {
      speed = 6;
      speedTouch = 10;
      speedMob = 60;
      localStorage.setItem('isMouse', 0);
    } else {
      speed = status == "true" ? 120 : 100; // Set tốc độ scroll của chuột là 20px khi ở trên path và khi ra khỏi path sẽ là 100px
      speedTouch = 15;
      speedMob = 100;
      localStorage.setItem('isMouse', 1);
    }

    handleEvent(event, speed, speedMob, speedTouch);
  }

  function addEventListeners(cordinate, deivce, status) {
    const isMouse = localStorage.getItem('isMouse');
    if (cordinate >= 0.80 && deivce > 1366 && isMouse == 1 || cordinate >= 0.50 && deivce > 1366 && isMouse == 0) {
      window.removeEventListener('wheel', wrapperEvent);
      document.removeEventListener('touchmove', wrapperEvent);
      document.removeEventListener('touchend', wrapperEvent);

      window.addEventListener('wheel', wrapperEvent2);
      document.addEventListener('touchmove', wrapperEvent2);
      document.addEventListener('touchend', wrapperEvent2);
    } else {
      window.removeEventListener('wheel', wrapperEvent2);
      document.removeEventListener('touchmove', wrapperEvent2);
      document.removeEventListener('touchend', wrapperEvent2);

      window.addEventListener('wheel', wrapperEvent);
      document.addEventListener('touchstart', touchStartHandler);
      document.addEventListener('touchmove', wrapperEvent);
      document.addEventListener('touchend', wrapperEvent);
    }
  }

  function removeEventListeners() {
    window.removeEventListener('wheel', wrapperEvent);
    document.removeEventListener('touchstart', touchStartHandler);
    document.removeEventListener('touchmove', wrapperEvent);
    document.removeEventListener('touchend', wrapperEvent);
  }

  function touchStartHandler(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  // Reuseable function

  function checkScreen() {
    const screenWidth = screen.width;
    const viewportWidth = window.innerWidth;
    const effectiveWidth = Math.min(screenWidth, viewportWidth);

    let deviceType = '';
    if (effectiveWidth < tbt_tablet) {
      deviceType = 'Mobile';
    } else if (effectiveWidth >= tbt_tablet && effectiveWidth < tbt_desktop) {
      deviceType = 'Tablet';
    } else {
      deviceType = 'Desktop';
    }

    let osType = '';
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('win') != -1) {
      osType = 'Windows';
    } else if (userAgent.indexOf('mac') != -1) {
      osType = 'macOS';
    } else if (userAgent.indexOf('linux') != -1) {
      osType = 'Linux';
    } else if (userAgent.indexOf('android') != -1) {
      osType = 'Android';
    } else if (userAgent.indexOf('ios') != -1 || userAgent.indexOf('iphone') != -1) {
      osType = 'iOS';
    }

    return {
      width: effectiveWidth,
      device: deviceType,
      os: osType
    };
  }

  function getRealDimensions(selector) {
    function getRealWidthHeight(element) {
      const computedStyle = getComputedStyle(element);
      const width = parseFloat(computedStyle.width);
      const height = parseFloat(computedStyle.height);
      return {
        width,
        height
      };
    }

    const element = document.querySelector(selector);
    const dimensions = getRealWidthHeight(element);
    return dimensions;
  }

  function includeSVG(sectionToShow, svgURL) {
    var svgContainer = document.querySelector(sectionToShow);
    if (svgContainer) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', svgURL, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var newSVG = xhr.responseText;
          svgContainer.insertAdjacentHTML('beforeend', newSVG);
          var svgDoc = svgContainer.querySelector('svg');
          var paths = svgDoc.querySelectorAll('.path-class, #path-id');
        }
      };
      xhr.send();
    }
  }


  function calculateHeightFromScrollHeight(element) {
    const scrollHeight = document.querySelector(element).scrollHeight;
    return scrollHeight;
  }

  function checkClassAndElementType(eventTarget, classNamesToCheck, elementTypesToCheck) {
    const targetClasses = eventTarget.classList;

    let shouldExecute = true;

    // Check class names
    for (let i = 0; i < classNamesToCheck.length; i++) {
      if (targetClasses.contains(classNamesToCheck[i])) {
        shouldExecute = false;
        break;
      }
    }

    // Check element type
    if (elementTypesToCheck.includes(eventTarget.tagName.toLowerCase())) {
      shouldExecute = false;
    }

    return shouldExecute;
  }

  // Example usage



  
  window.checkClassAndElementType = checkClassAndElementType;
  window.calculateHeightFromScrollHeight = calculateHeightFromScrollHeight;

  window.getRealDimensions = getRealDimensions;
  window.includeSVG = includeSVG;

  window.checkScreen = checkScreen;
  window.handleEvent = handleEvent;
  window.wrapperEvent = wrapperEvent;
  window.wrapperEvent2 = wrapperEvent2;

  window.disableScroll = disableScroll;

  window.addEventListeners = addEventListeners;
  window.removeEventListeners = removeEventListeners;
})();
