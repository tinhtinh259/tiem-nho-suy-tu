'use strict';
(function () {

  let directionCount = 0;
  let lastDirectionCountUpdateTime = Date.now();

  function detectDir(cordinate, direction, isStart, isLeave, device) {
    // console.log(cordinate);
    const isMouse = localStorage.getItem('isMouse');
    const rec = document.querySelector("#rec");
    let dataDirection;

    if (isStart == 0) {
      dataDirection = 'look_up';
    } else if (isLeave == true) {
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

      if (device >= tbt_desktop) {
        // console.log(cordinate);
        if (cordinate > 0.18 && cordinate <= 0.30 || cordinate > 0.73 && cordinate <= 0.87 || cordinate > 0.96 && cordinate <= 1) {
          if (direction > 0) {
            dataDirection = 'down_right' + directionCount;
          } else {
            dataDirection = 'up_right' + directionCount;
          }
        } else if (cordinate > 0.42 && cordinate <= 0.61) {
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
      } else {
        // console.log(cordinate);
        if (cordinate > 0.38 && cordinate <= 0.44 || cordinate > 0.80 && cordinate <= 0.84) {
          if (direction > 0) {
            dataDirection = 'down_right' + directionCount;
          } else {
            dataDirection = 'up_right' + directionCount;
          }
        } else if (cordinate > 0.16 && cordinate <= 0.20 || cordinate > 0.58 && cordinate <= 0.65) {
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
  window.detectDir = detectDir;
})();
