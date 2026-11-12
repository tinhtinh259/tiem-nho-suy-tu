'use strict';
(function () {

  let directionCount = 0;
  let lastDirectionCountUpdateTime = Date.now();

  function detectDir(cordinate, direction, isStart, isLeave, device) {
    // console.log(cordinate);
    const isMouse = localStorage.getItem('isMouse');
    const rec = document.querySelector("#rec");
    let dataDirection;

    if (isStart == 0 || isStart < 0) {
      dataDirection = 'look_up';
    } else if (isLeave == true || cordinate == 1) {
      dataDirection = 'look_down';
    } else {

      /** calculate time delay to show next image **/
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastDirectionCountUpdateTime;
      const MIN_DIRECTION_COUNT_INTERVAL = 300;

      if (elapsedTime >= MIN_DIRECTION_COUNT_INTERVAL) {
        directionCount++;
        lastDirectionCountUpdateTime = currentTime;
        if (directionCount > 7) {
          directionCount = 0;
        }
      }
      /** calculate time delay to show next image **/
      if (device >= 1366) {
        // console.log(cordinate);
        if (cordinate > 0.2 && cordinate <= 0.28 || cordinate > 0.705 && cordinate <= 0.859 || cordinate > 0.969 && cordinate <= 0.998) {
          if (direction > 0) {
            dataDirection = 'down_right' + directionCount;
          } else {
            dataDirection = 'up_right' + directionCount;
          }
        } else if (cordinate > 0.391 && cordinate <= 0.567) {
          if (direction > 0) {
            dataDirection = 'down_left' + directionCount;
          } else {
            dataDirection = 'up_left' + directionCount;
          }
        } else {
          if (direction > 0) {
            dataDirection = 'down' + directionCount;
          } else {
            dataDirection = 'up' + directionCount;
          }
        }
      }
       else {
        // console.log('cordinate: ' + cordinate);
        if (cordinate > 0.189 && cordinate <= 0.24 || cordinate > 0.722 && cordinate <= 0.785) {
          if (direction > 0) {
            dataDirection = 'down_right' + directionCount;
          } else {
            dataDirection = 'up_right' + directionCount;
          }
        } else if (cordinate > 0.465 && cordinate <= 0.52) {
          if (direction > 0) {
            dataDirection = 'down_left' + directionCount;
          } else {
            dataDirection = 'up_left' + directionCount;
          }
        } else {
          if (direction > 0) {
            dataDirection = 'down' + directionCount;
          } else {
            dataDirection = 'up' + directionCount;
          }
        }
      }
    }

    rec.setAttribute('data-direction', dataDirection);
    return dataDirection;
  }

  function setTopFromOtherElements(sourceElementsArray, targetElementClass) {
    const targetElements = document.querySelectorAll(targetElementClass);
  
    if (sourceElementsArray.length > 0 && targetElements.length > 0) {
      var totalHeight = 0;
      const isScrollbarAtTop = window.scrollY === 0;
  
      sourceElementsArray.forEach((sourceElement) => {
        const element = document.querySelector(sourceElement);
        if (element) {
          totalHeight += element.clientHeight;
        }
      });

      const combinedTop = totalHeight;
      targetElements.forEach((targetElement) => {
        targetElement.style.top = `${combinedTop}px`;
      });
    }
  }

  function setHeightFromOtherElements(sourceElementsArray, targetElementClass) {
    const targetElements = document.querySelectorAll(targetElementClass);
    const wpadminbar = document.querySelector("#wpadminbar");
  
    if (sourceElementsArray.length > 0 && targetElements.length > 0) {
      var totalHeight = 0;
      const isScrollbarAtTop = window.scrollY === 0;
  
      sourceElementsArray.forEach((sourceElement) => {
        const element = document.querySelector(sourceElement);
        if (element) {
          totalHeight += element.clientHeight;
        }
      });
  
      var extra = 0;
      if (wpadminbar && isScrollbarAtTop) {
        extra = wpadminbar.clientHeight;
      }
  
      const combinedHeight = totalHeight + extra;
      targetElements.forEach((targetElement) => {
        targetElement.style.height = `${combinedHeight}px`;
      });
    }
  }

  window.detectDir = detectDir;
  window.setHeightFromOtherElements = setHeightFromOtherElements;
  window.setTopFromOtherElements = setTopFromOtherElements;
})();
