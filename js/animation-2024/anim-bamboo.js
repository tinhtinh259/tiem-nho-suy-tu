// Description: Animation for the bamboo tree.
document.addEventListener('DOMContentLoaded', function () {
    const svgURL = '/images/animation-2024/svg/bamboo-update-min.svg';
    const svgContainers = document.querySelectorAll('.svgTree');

    // Preload the SVG once on DOMContentLoaded
    let svgCache;
    function loadSVG(callback) {
        if (svgCache) {
            callback(svgCache);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', svgURL, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    svgCache = xhr.responseText;
                    callback(svgCache);
                }
            };
            xhr.send();
        }
    }

    // Function to include SVG in containers
    function includeSVG(container, svgContent) {
        container.insertAdjacentHTML('beforeend', svgContent);
        toggleAnimation(container, 'add');
    }

    // Function to toggle animation classes
    function toggleAnimation(container, action) {
        ['path-center', 'path-top'].forEach((className, index) => {
            const paths = container.querySelectorAll(`.${className}`);
            if (action === 'add') {
                setTimeout(() => {
                    paths.forEach(path => path.classList.add('animate'));
                }, index * 250);
            } else {
                paths.forEach(path => path.classList.remove('animate'));
            }
        });
    }

    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Check scroll and handle animations
    let ticking = false;
    function checkScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                svgContainers.forEach(container => {
                    if (isElementInViewport(container)) {
                        container.classList.add('grow', 'grow-2');
                        toggleAnimation(container, 'add');
                    } else {
                        container.classList.remove('grow', 'grow-2');
                        toggleAnimation(container, 'remove');
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }

    // Load SVG immediately on DOMContentLoaded
    loadSVG(function (svgContent) {
        svgContainers.forEach(container => {
            includeSVG(container, svgContent);
            container.hasLoadedSVG = true;
        });
    });

    // Event listener for scroll
    window.addEventListener('scroll', checkScroll);

    // Initial check on page load
    checkScroll();
});
