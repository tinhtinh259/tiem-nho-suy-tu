/**
 * Dynamic Header & Footer Loader for Caraflow Static Pages
 * Usage: Insert <div id="header-placeholder"></div> and <div id="footer-placeholder"></div>
 * in your HTML file, then include this script: <script src="js/include-header-footer.js"></script>
 */

(function () {
  function initBurgerMenu() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    if (burger && menu) {
      burger.addEventListener('click', function () {
        const isActive = burger.classList.toggle('is-active');
        burger.classList.toggle('active', isActive);
        menu.classList.toggle('is-active', isActive);
        menu.classList.toggle('show', isActive);
        document.documentElement.classList.toggle('isOpenMenu', isActive);
        document.documentElement.classList.toggle('openHamburger', isActive);
      });
    }
  }

  function highlightActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'trang-chu.html';
    const isHoaThanSub = window.location.pathname.includes('/hoa-than/') || ['phu-du.html', 'chiec-la.html', 'vien-soi.html', 'banh-quy.html', 'tach-tra.html'].includes(currentPath);
    const isPhanTichSub = window.location.pathname.includes('/phan-tich-noi-tam/') || window.location.pathname.includes('/phan-tich-noi-tam');
    const navLinks = document.querySelectorAll('.site-header a, .header a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const isCurrent = href === currentPath || href.endsWith('/' + currentPath);
      const isParentHoaThan = isHoaThanSub && href.includes('hoa-than.html');
      const isParentPhanTich = isPhanTichSub && href.includes('phan-tich-noi-tam.html');
      if (isCurrent || isParentHoaThan || isParentPhanTich) {
        link.classList.add('active');
        const parentLi = link.closest('li.level1');
        if (parentLi) {
          parentLi.classList.add('active');
        }
      }
    });
  }

  function loadComponent(elementId, fileUrl, callback) {
    const target = document.getElementById(elementId);
    if (!target) return;

    const customSrc = target.getAttribute('data-src');
    const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/hoa-than-') || window.location.pathname.includes('/three-js-motion-experience-for-donuts-bakery/') || window.location.pathname.includes('/phan-tich-noi-tam/');
    const resolvedUrl = customSrc || (isInSubdir ? '../' + fileUrl : fileUrl);

    fetch(resolvedUrl)
      .then(response => {
        if (!response.ok) {
          // Fallback check
          if (!customSrc && !resolvedUrl.startsWith('../')) {
            return fetch('../' + fileUrl).then(r => {
              if (!r.ok) throw new Error('Not found: ' + fileUrl);
              return r.text();
            });
          }
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
      })
      .then(html => {
        // Strip any script injected by development proxies like VS Code Live Server
        html = html.replace(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/gi, '')
                   .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, function(match) {
                     if (match.includes('WebSocket') || match.includes('LiveServer')) return '';
                     return match;
                   });

        if (isInSubdir || resolvedUrl.startsWith('../')) {
          html = html.replace(/src="(images\/[^"]+)"/g, 'src="../$1"')
                     .replace(/href="([^":#]+\.html)"/g, 'href="../$1"')
                     .replace(/this\.src='(images\/[^']+)'/g, "this.src='../$1'");
        }
        target.outerHTML = html;
        if (typeof callback === 'function') {
          callback();
        }
      })
      .catch(error => {
        console.error('Error loading component ' + fileUrl + ':', error);
      });
  }

  function initHeaderLineAnimation() {
    const headerEl = document.querySelector('header.header') || document.querySelector('header');
    if (!headerEl || headerEl._lineAnimBound) return;
    headerEl._lineAnimBound = true;
    const navItems = headerEl.querySelectorAll('.level1');
    let toggleFill = false;
    navItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        toggleFill = !toggleFill;
        if (toggleFill) {
          headerEl.classList.remove('line-fill-b');
          headerEl.classList.add('line-fill-a');
        } else {
          headerEl.classList.remove('line-fill-a');
          headerEl.classList.add('line-fill-b');
        }
      });
    });
  }

  function initFooterAccordion() {
    const navCols = document.querySelectorAll('.footer-nav-col');
    navCols.forEach(col => {
      const h4 = col.querySelector('h4');
      const list = col.querySelector('.footer-nav-list');
      if (!h4 || !list || h4._accordionBound) return;
      h4._accordionBound = true;

      if (!h4.querySelector('.footer-nav-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'footer-nav-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        h4.appendChild(arrow);
      }

      h4.setAttribute('role', 'button');
      h4.setAttribute('tabindex', '0');
      h4.setAttribute('aria-expanded', 'false');

      const toggleCol = (e) => {
        if (window.innerWidth <= 768) {
          if (e) e.preventDefault();
          const isOpen = col.classList.toggle('is-open');
          h4.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      };

      h4.addEventListener('click', toggleCol);
      h4.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleCol(e);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initHeaderLineAnimation();
    loadComponent('header-placeholder', 'header.html', function () {
      initBurgerMenu();
      highlightActiveNav();
      initHeaderLineAnimation();
      if (typeof window.toggleMenu === 'function') {
        window.toggleMenu();
      }

      // Sync actual header height dynamically to CSS variables
      const headerEl = document.querySelector('header.header') || document.querySelector('header');
      if (headerEl) {
        const syncHeaderHeight = () => {
          const actualH = Math.round(headerEl.getBoundingClientRect().height || headerEl.offsetHeight);
          if (actualH > 50) {
            document.documentElement.style.setProperty('--height-header', actualH + 'px');
            document.documentElement.style.setProperty('--header-offset', actualH + 'px');
          }
        };
        syncHeaderHeight();

        // Observe resize dynamically (fonts loading, image loading, breakpoint change)
        if (window.ResizeObserver) {
          const ro = new ResizeObserver(() => syncHeaderHeight());
          ro.observe(headerEl);
        }

        window.addEventListener('resize', syncHeaderHeight);

        const logoImg = headerEl.querySelector('img');
        if (logoImg) {
          if (!logoImg.complete) {
            logoImg.addEventListener('load', syncHeaderHeight);
          } else {
            syncHeaderHeight();
          }
        }
      }

      // Automatically load Soul Search script
      if (!window.initSoulSearch && !document.getElementById('soul-search-script')) {
        const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/hoa-than-') || window.location.pathname.includes('/three-js-') || window.location.pathname.includes('/phan-tich-noi-tam/');
        const script = document.createElement('script');
        script.id = 'soul-search-script';
        script.src = (isInSubdir ? '../' : '') + 'js/soul-search.js';
        document.body.appendChild(script);
      } else if (window.initSoulSearch) {
        window.initSoulSearch();
      }

      document.dispatchEvent(new CustomEvent('headerLoaded'));
    });

    loadComponent('footer-placeholder', 'footer.html', function () {
      initFooterAccordion();
      document.dispatchEvent(new CustomEvent('footerLoaded'));
    });

    document.addEventListener('footerLoaded', initFooterAccordion);
    // In case footer was statically inlined
    initFooterAccordion();
  });
})();

// Global helper for Back To Top button in footer
if (typeof window.scrollToTop !== 'function') {
  window.scrollToTop = function (e) {
    if (e && e.preventDefault) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// Global helper for Modal 259 in footer (backward compatibility)
if (typeof window.openModal259 !== 'function') {
  window.openModal259 = function () {
    const modal = document.getElementById('modal259');
    if (modal) {
      modal.style.display = 'block';
    } else {
      alert('Con Số Cá Nhân: 259');
    }
  };
}

// Global helper for Lá Thư Đầu Tiên in footer
window.openFooterLetter = function (e) {
  if (typeof window.openWelcomeLetterModal === 'function' && document.getElementById('welcomeLetterModal')) {
    if (e && e.preventDefault) e.preventDefault();
    window.openWelcomeLetterModal(e);
  } else {
    const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/phan-tich-noi-tam/');
    const homeUrl = (isInSubdir ? '../' : '') + 'trang-chu.html?openLetter=true';
    window.location.href = homeUrl;
  }
};
