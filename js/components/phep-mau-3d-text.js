/**
 * PHEP-MAU 3D TEXT SHATTERING & ALCHEMICAL TRANSMUTATION (HỒ BIẾN PHÉP MÀU)
 * Built with Three.js r75 + THREE.BAS + Direct RAF Render Engine
 * Features: Before ➔ After Miracle Transformation (Alchemical Reframe Engine)
 */

(function () {
  'use strict';

  var container, renderer, scene, camera, textMesh;
  var isPlaying = true;

  // 5 Alchemical Miracle Transformation Presets
  var alchemicalPresets = [
    {
      before: 'AP LUC',
      after: 'SUC BAT',
      labelBefore: 'Áp Lực 🌪️',
      labelAfter: 'Sức Bật 🚀',
      titleBefore: '🌪️ Áp Lực Đè Nặng',
      quoteBefore: 'Áp lực trông như một tảng đá đè nặng không thể lay chuyển, nhưng thực chất chỉ là nhiều mảnh ghép lo âu rời rạc. Hãy hít một hơi thật sâu và nhấn "Hô Biến Phép Màu" bên dưới!',
      titleAfter: '🚀 Phép Màu: Sức Bật Nội Tại',
      quoteAfter: 'Áp lực thực chất chỉ là năng lượng đang bị dồn ứ. Khi bạn ngừng sợ hãi và phân tách nó thành từng việc nhỏ, tảng đá đè nặng hôm nay sẽ trở thành bệ phóng đẩy bạn tiến xa hơn.'
    },
    {
      before: 'BE TAC',
      after: 'BUOC NGOAT',
      labelBefore: 'Bế Tắc 🌑',
      labelAfter: 'Bước Ngoặt ✨',
      titleBefore: '🌑 Bế Tắc Vây Kín',
      quoteBefore: 'Cảm giác bế tắc khiến mọi con đường đều tối mịt. Bạn cảm thấy mình bị mắc kẹt và không còn bất kỳ lựa chọn nào. Hãy mở lòng đón nhận một hướng rẽ mới.',
      titleAfter: '✨ Phép Màu: Bước Ngoặt Bất Ngờ',
      quoteAfter: 'Khi mọi cánh cửa quen thuộc khép lại, đó không phải là đường cùng, mà là lời gợi ý của cuộc đời để bạn mở ra một hướng đi chưa từng nghĩ tới. Bế tắc chính là cái kén của bước ngoặt.'
    },
    {
      before: 'SO SANH',
      after: 'DOC BAN',
      labelBefore: 'So Sánh 🪞',
      labelAfter: 'Độc Bản 💎',
      titleBefore: '🪞 Cái Bẫy So Sánh',
      quoteBefore: 'Bạn đang lấy hậu trường ngổn ngang của mình đem so với thước phim hoàn hảo đã qua cắt dựng của người khác, rồi tự thấy mình thua kém.',
      titleAfter: '💎 Phép Màu: Giá Trị Độc Bản',
      quoteAfter: 'Bông hoa không quan tâm bông bên cạnh nở sớm hay muộn, nó chỉ kiên nhẫn bung nở vẻ đẹp riêng. Mỗi người đều có một múi giờ sinh mệnh của riêng mình.'
    },
    {
      before: 'DAN VAT',
      after: 'BAI HOC',
      labelBefore: 'Dằn Vặt 🪨',
      labelAfter: 'Bài Học 🌟',
      titleBefore: '🪨 Dằn Vặt Sai Lầm',
      quoteBefore: 'Tâm trí bạn không ngừng tua đi tua lại những thiếu sót trong quá khứ, biến thành những nhát cắn âm ỉ tự trách móc chính mình.',
      titleAfter: '🌟 Phép Màu: Bài Học Trưởng Thành',
      quoteAfter: 'Bạn của quá khứ đã làm tốt nhất có thể với lượng nhận thức và nguồn lực lúc đó. Đừng dùng sự thấu suốt của hôm nay để xét xử sự ngây thơ của ngày hôm qua. Hãy tha thứ cho chính mình.'
    },
    {
      before: 'KIET SUC',
      after: 'TAI SINH',
      labelBefore: 'Kiệt Sức 🥀',
      labelAfter: 'Tái Sinh 🌱',
      titleBefore: '🥀 Kiệt Sức & Trống Rỗng',
      quoteBefore: 'Khi năng lượng cạn đáy, ngay cả việc thức dậy cũng là một gánh nặng. Bạn cảm thấy tội lỗi nếu để bản thân dừng lại một nhịp.',
      titleAfter: '🌱 Phép Màu: Tái Sinh Bình Yên',
      quoteAfter: 'Nghỉ ngơi không phải là phần thưởng chỉ được nhận khi đã hoàn thành hết mọi việc. Nghỉ ngơi là quyền sinh tồn căn bản. Dừng lại một nhịp giúp ngọn nến bên trong bạn không bị cháy sạch.'
    }
  ];

  var currentPresetIndex = 0;
  var isTransmuted = false;
  var isTransmuting = false;

  function updateReframingUI() {
    var card = document.getElementById('reframeInsightCard');
    if (!card) return;
    var preset = alchemicalPresets[currentPresetIndex] || alchemicalPresets[0];
    var titleEl = document.getElementById('reframeInsightTitle');
    var quoteEl = document.getElementById('reframeInsightQuote');

    card.style.opacity = '0';
    card.style.transform = 'translateY(6px)';
    setTimeout(function () {
      if (titleEl) {
        titleEl.innerText = isTransmuted ? preset.titleAfter : preset.titleBefore;
      }
      if (quoteEl) {
        quoteEl.innerText = isTransmuted ? preset.quoteAfter : preset.quoteBefore;
      }
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200);

    // Update buttons & hint texts
    var transmuteBtn = document.getElementById('transmuteBtn');
    var quickBtn = document.getElementById('heroQuickAlchemyBtn');
    var hintEl = document.getElementById('threeDragHint');

    var btnLabel = isTransmuted ? '↺ Xem Lại Gốc' : '✨ Hô Biến';
    var quickLabel = isTransmuted ? '<span>↺ Xem Lại Gốc</span><span>🪄</span>' : '<span>✨ Hô Biến Phép Màu</span><span>🪄</span>';

    if (transmuteBtn) transmuteBtn.innerText = btnLabel;
    if (quickBtn) quickBtn.innerHTML = quickLabel;

    if (hintEl) {
      if (isTransmuted) {
        hintEl.innerHTML = '<span class="hint-icon">✨</span> Phép màu hiển hiện: <strong>' + preset.labelAfter + '</strong> • Kéo chuột để cảm nhận';
      } else {
        hintEl.innerHTML = '<span class="hint-icon">↔</span> Kéo chuột để làm tan rã • Nhấn "Hô Biến" để chuyển hóa';
      }
    }
  }

  // Animation state
  var animProgress = 0;
  var targetProgress = 0;
  var autoDir = 1;
  var pauseTimer = 0;
  var isDragging = false;
  var lastMouseX = 0;

  var utils = {
    fibSpherePoint: (function () {
      var v = { x: 0, y: 0, z: 0 };
      var G = Math.PI * (3 - Math.sqrt(5));
      return function (i, n, radius) {
        var step = 2.0 / n;
        var r, phi;
        v.y = i * step - 1 + (step * 0.5);
        r = Math.sqrt(Math.max(0, 1 - v.y * v.y));
        phi = i * G;
        v.x = Math.cos(phi) * r;
        v.z = Math.sin(phi) * r;
        radius = radius || 1;
        v.x *= radius;
        v.y *= radius;
        v.z *= radius;
        return v;
      };
    })()
  };

  function TextAnimation(textGeometry, isMiracle) {
    var bufferGeometry = new THREE.BAS.ModelBufferGeometry(textGeometry);

    var aAnimation = bufferGeometry.createAttribute('aAnimation', 2);
    var aEndPosition = bufferGeometry.createAttribute('aEndPosition', 3);
    var aAxisAngle = bufferGeometry.createAttribute('aAxisAngle', 4);

    var faceCount = bufferGeometry.faceCount;
    var i, i2, i3, i4, v;

    var maxDelay = 0.0;
    var minDuration = 1.0;
    var maxDuration = 1.0;
    var stretch = 0.05;
    var lengthFactor = 0.001;
    var maxLength = textGeometry.boundingBox.max.length();

    this.animationDuration = maxDuration + maxDelay + stretch + lengthFactor * maxLength;
    this._animationProgress = 0;

    var axis = new THREE.Vector3();
    var angle;

    for (i = 0, i2 = 0, i3 = 0, i4 = 0; i < faceCount; i++, i2 += 6, i3 += 9, i4 += 12) {
      var face = textGeometry.faces[i];
      var centroid = THREE.BAS.Utils.computeCentroid(textGeometry, face);
      var centroidN = new THREE.Vector3().copy(centroid).normalize();

      var delay = (maxLength - centroid.length()) * lengthFactor;
      var duration = THREE.Math.randFloat(minDuration, maxDuration);

      for (v = 0; v < 6; v += 2) {
        aAnimation.array[i2 + v] = delay + stretch * Math.random();
        aAnimation.array[i2 + v + 1] = duration;
      }

      var point = utils.fibSpherePoint(i, faceCount, 250);

      for (v = 0; v < 9; v += 3) {
        aEndPosition.array[i3 + v] = point.x;
        aEndPosition.array[i3 + v + 1] = point.y;
        aEndPosition.array[i3 + v + 2] = point.z;
      }

      axis.x = centroidN.x;
      axis.y = -centroidN.y;
      axis.z = -centroidN.z;
      axis.normalize();

      angle = Math.PI * THREE.Math.randFloat(0.5, 2.0);

      for (v = 0; v < 12; v += 4) {
        aAxisAngle.array[i4 + v] = axis.x;
        aAxisAngle.array[i4 + v + 1] = axis.y;
        aAxisAngle.array[i4 + v + 2] = axis.z;
        aAxisAngle.array[i4 + v + 3] = angle;
      }
    }

    var diffuseColor = isMiracle ? 0xfce7b2 : 0xd5a864;
    var emissiveColor = isMiracle ? 0x48320a : 0x1f1606;

    var material = new THREE.BAS.PhongAnimationMaterial(
      {
        shading: THREE.FlatShading,
        side: THREE.DoubleSide,
        transparent: true,
        uniforms: {
          uTime: { type: 'f', value: 0 }
        },
        shaderFunctions: [
          THREE.BAS.ShaderChunk['cubic_bezier'],
          THREE.BAS.ShaderChunk['ease_out_cubic'],
          THREE.BAS.ShaderChunk['quaternion_rotation']
        ],
        shaderParameters: [
          'uniform float uTime;',
          'uniform vec3 uAxis;',
          'uniform float uAngle;',
          'attribute vec2 aAnimation;',
          'attribute vec3 aEndPosition;',
          'attribute vec4 aAxisAngle;'
        ],
        shaderVertexInit: [
          'float tDelay = aAnimation.x;',
          'float tDuration = aAnimation.y;',
          'float tTime = clamp(uTime - tDelay, 0.0, tDuration);',
          'float tProgress = ease(tTime, 0.0, 1.0, tDuration);'
        ],
        shaderTransformPosition: [
          'transformed = mix(transformed, aEndPosition, tProgress);',
          'float angle = aAxisAngle.w * tProgress;',
          'vec4 tQuat = quatFromAxisAngle(aAxisAngle.xyz, angle);',
          'transformed = rotateVector(tQuat, transformed);'
        ]
      },
      {
        diffuse: diffuseColor,
        specular: 0xffffff,
        shininess: isMiracle ? 48 : 32,
        emissive: emissiveColor
      }
    );

    THREE.Mesh.call(this, bufferGeometry, material);
    this.frustumCulled = false;
  }

  TextAnimation.prototype = Object.create(THREE.Mesh.prototype);
  TextAnimation.prototype.constructor = TextAnimation;

  Object.defineProperty(TextAnimation.prototype, 'animationProgress', {
    get: function () {
      return this._animationProgress;
    },
    set: function (v) {
      this._animationProgress = v;
      if (this.material && this.material.uniforms && this.material.uniforms.uTime) {
        this.material.uniforms.uTime.value = this.animationDuration * v;
      }
    }
  });

  function generateTextGeometry(text, params) {
    var geometry = new THREE.TextGeometry(text, params);
    geometry.computeBoundingBox();

    // Exact center alignment
    var center = new THREE.Vector3();
    geometry.boundingBox.center(center);
    var matrix = new THREE.Matrix4().makeTranslation(-center.x, -center.y, -center.z);

    geometry.applyMatrix(matrix);
    geometry.computeBoundingBox();
    return geometry;
  }

  function createTextAnimation(word, isMiracle) {
    var width = container ? container.clientWidth : 800;
    var fontSize = 40;
    if (width < 480) {
      fontSize = word.length > 7 ? 20 : 24;
    } else if (width < 768) {
      fontSize = word.length > 7 ? 26 : 30;
    } else if (word.length > 8) {
      fontSize = 32;
    }

    var geometry = generateTextGeometry(word, {
      size: fontSize,
      height: 12,
      font: 'droid sans',
      weight: 'bold',
      style: 'normal',
      curveSegments: 20,
      bevelSize: 2.0,
      bevelThickness: 2.0,
      bevelEnabled: true,
      anchor: { x: 0.5, y: 0.5, z: 0.0 }
    });

    THREE.BAS.Utils.tessellateRepeat(geometry, 1.0, 2);
    THREE.BAS.Utils.separateFaces(geometry);

    var mesh = new TextAnimation(geometry, isMiracle);
    mesh.rotation.x = 0.16;
    return mesh;
  }

  function renderWordDirectly(word, isMiracle) {
    if (!scene || !word) return;

    if (textMesh) {
      scene.remove(textMesh);
      if (textMesh.geometry) textMesh.geometry.dispose();
      if (textMesh.material) textMesh.material.dispose();
    }

    textMesh = createTextAnimation(word, isMiracle);
    scene.add(textMesh);
  }

  function getCurrentWordString() {
    var preset = alchemicalPresets[currentPresetIndex] || alchemicalPresets[0];
    return isTransmuted ? preset.after : preset.before;
  }

  // ALCHEMICAL TRANSMUTATION TRIGGER (HỒ BIẾN PHÉP MÀU)
  function transmute(explicitState) {
    if (isTransmuting) return;
    isTransmuting = true;

    var targetState = (typeof explicitState === 'boolean') ? explicitState : !isTransmuted;

    // Phase 1: Rapid stardust explosion
    targetProgress = 0.88;
    animProgress = 0.45;

    // Flash ambient glow
    var glow = document.querySelector('.phep-mau-hero-bg-glow');
    if (glow) {
      glow.style.transition = 'filter 0.4s ease, opacity 0.4s ease';
      glow.style.filter = 'blur(40px)';
      glow.style.opacity = '1';
    }

    setTimeout(function () {
      // Phase 2: At peak shatter, swap word mesh & update concept
      isTransmuted = targetState;
      var newWord = getCurrentWordString();
      renderWordDirectly(newWord, isTransmuted);

      // Start re-assembling from the stardust explosion
      animProgress = 0.88;
      targetProgress = 0.0;
      autoDir = 1;
      pauseTimer = 50;

      updateReframingUI();

      if (glow) {
        setTimeout(function () {
          glow.style.filter = 'blur(60px)';
          glow.style.opacity = '0.85';
        }, 300);
      }

      setTimeout(function () {
        isTransmuting = false;
      }, 500);
    }, 380);
  }

  function setPresetIndex(idx) {
    currentPresetIndex = idx;
    isTransmuted = false;
    var word = getCurrentWordString();
    renderWordDirectly(word, false);
    animProgress = 0;
    targetProgress = 0;
    autoDir = 1;
    pauseTimer = 0;
    updateReframingUI();
  }

  function initScrubber() {
    container.addEventListener('mousedown', function (e) {
      isDragging = true;
      container.style.cursor = 'ew-resize';
      lastMouseX = e.clientX;
    });

    window.addEventListener('mouseup', function () {
      if (isDragging) {
        isDragging = false;
        container.style.cursor = 'grab';
        // If dragged deeply into shatter (> 0.6), complete transmutation
        if (targetProgress > 0.58 && !isTransmuted) {
          transmute(true);
        }
      }
    });

    window.addEventListener('mousemove', function (e) {
      if (isDragging) {
        var dx = e.clientX - lastMouseX;
        lastMouseX = e.clientX;
        targetProgress = Math.max(0, Math.min(0.75, targetProgress + dx * 0.0035));
        if (textMesh) {
          textMesh.rotation.y += dx * 0.008;
        }
      }
    });

    // Mobile touch
    container.addEventListener('touchstart', function (e) {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
      }
    }, { passive: true });

    container.addEventListener('touchend', function () {
      if (isDragging) {
        isDragging = false;
        if (targetProgress > 0.58 && !isTransmuted) {
          transmute(true);
        }
      }
    }, { passive: true });

    container.addEventListener('touchmove', function (e) {
      if (isDragging && e.touches.length === 1) {
        var cx = e.touches[0].clientX;
        var dx = cx - lastMouseX;
        lastMouseX = cx;
        targetProgress = Math.max(0, Math.min(0.75, targetProgress + dx * 0.0035));
        if (textMesh) {
          textMesh.rotation.y += dx * 0.008;
        }
      }
    }, { passive: true });
  }

  function initUI() {
    var chips = document.querySelectorAll('.word-chip');
    chips.forEach(function (chip, index) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var idx = parseInt(chip.getAttribute('data-index'), 10);
        if (isNaN(idx)) idx = index;
        setPresetIndex(idx);
      });
    });

    // Dedicated Transmute Button
    var transmuteBtn = document.getElementById('transmuteBtn');
    if (transmuteBtn) {
      transmuteBtn.addEventListener('click', function () {
        transmute();
      });
    }

    // Quick Alchemy Button in left hero column
    var quickBtn = document.getElementById('heroQuickAlchemyBtn');
    if (quickBtn) {
      quickBtn.addEventListener('click', function () {
        transmute();
      });
    }

    // Toggle Play / Pause auto rotation
    var toggleBtn = document.getElementById('togglePlayBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        isPlaying = !isPlaying;
        if (isPlaying) {
          toggleBtn.innerHTML = '⏸ Tự Động';
          toggleBtn.classList.remove('paused');
        } else {
          toggleBtn.innerHTML = '▶ Tiếp Tục';
          toggleBtn.classList.add('paused');
        }
      });
    }

    // Reset button
    var resetBtn = document.getElementById('reset3dBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        targetProgress = 0;
        animProgress = 0;
        isTransmuted = false;
        renderWordDirectly(getCurrentWordString(), false);
        if (textMesh) {
          textMesh.rotation.y = 0;
          textMesh.rotation.x = 0.16;
          textMesh.animationProgress = 0;
        }
        updateReframingUI();
      });
    }
  }

  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    var width = container.clientWidth;
    var height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function updateScene() {
    if (textMesh) {
      if (!isDragging && isPlaying && !isTransmuting) {
        if (pauseTimer > 0) {
          pauseTimer--;
        } else {
          targetProgress += autoDir * 0.005;
          if (targetProgress >= 0.65) {
            targetProgress = 0.65;
            autoDir = -1;
            pauseTimer = 50;
          } else if (targetProgress <= 0.0) {
            targetProgress = 0.0;
            autoDir = 1;
            pauseTimer = 60;
          }
        }
        textMesh.rotation.y += 0.007;
      }

      animProgress += (targetProgress - animProgress) * (isTransmuting ? 0.22 : 0.12);
      textMesh.animationProgress = animProgress;
    }
  }

  var rafRunning = false;
  function render() {
    rafRunning = true;
    updateScene();
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
    requestAnimationFrame(render);
  }

  setInterval(function () {
    if (!rafRunning) {
      updateScene();
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    }
    rafRunning = false;
  }, 1000 / 60);

  function init() {
    container = document.getElementById('three-container');
    if (!container) return;

    if (typeof THREE === 'undefined' || typeof PNLTRI === 'undefined' || !THREE.BAS) {
      console.warn('Three.js or PNLTRI or THREE.BAS not loaded yet for phep-mau 3D text.');
      return;
    }

    // Setup ShapeUtils triangulation
    THREE.ShapeUtils.triangulateShape = (function () {
      var pnlTriangulator = new PNLTRI.Triangulator();
      return function triangulateShape(contour, holes) {
        return pnlTriangulator.triangulate_polygon([contour].concat(holes));
      };
    })();

    // Scene & Renderer
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: (window.devicePixelRatio === 1)
    });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Camera (centered at 0, 0, 520)
    camera = new THREE.PerspectiveCamera(54, container.clientWidth / container.clientHeight, 10, 10000);
    camera.position.set(0, 0, 520);

    // Dynamic Multi-Angle Lighting
    var ambientLight = new THREE.AmbientLight(0x4a4652, 1.4);
    scene.add(ambientLight);

    var keyLight = new THREE.DirectionalLight(0xfffaed, 1.6);
    keyLight.position.set(200, 300, 450);
    scene.add(keyLight);

    var rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    rimLight.position.set(-250, -120, -180);
    scene.add(rimLight);

    var warmPoint = new THREE.PointLight(0xf59e0b, 1.4, 850);
    warmPoint.position.set(0, 80, 260);
    scene.add(warmPoint);

    // Build Initial 3D Mesh
    renderWordDirectly(getCurrentWordString(), false);
    updateReframingUI();

    // Expose for inspection/debugging
    window.phepMau3D = {
      scene: scene,
      camera: camera,
      renderer: renderer,
      getMesh: function () { return textMesh; },
      transmute: transmute,
      setPresetIndex: setPresetIndex,
      getProgress: function () { return animProgress; },
      setProgress: function (p) { targetProgress = p; animProgress = p; }
    };

    initScrubber();
    initUI();

    window.addEventListener('resize', onWindowResize, false);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
