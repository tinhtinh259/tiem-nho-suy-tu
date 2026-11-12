/**
 * Site Search - Tìm kiếm bài viết & trang web
 * Caraflow - Tiệm Nhỏ Suy Tư
 */

(function () {
  'use strict';

  // 1. Ensure CSS is loaded
  function ensureSiteSearchCSS() {
    if (!document.getElementById('site-search-css') && !document.getElementById('soul-search-css')) {
      const link = document.createElement('link');
      link.id = 'site-search-css';
      link.rel = 'stylesheet';
      const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/hoa-than-') || window.location.pathname.includes('/three-js-') || window.location.pathname.includes('/phan-tich-noi-tam/');
      link.href = (isInSubdir ? '../' : '') + 'css/components/soul-search.css';
      document.head.appendChild(link);
    }
  }

  // Helper: Bỏ dấu tiếng Việt để tìm kiếm không dấu lẫn có dấu
  function removeVietnameseTones(str) {
    if (!str) return '';
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str.trim();
  }

  // 2. Comprehensive Search Index of all pages in Tiệm Nhỏ
  const SITE_INDEX = [
    {
      title: 'Bốn Mùa',
      category: 'Hành Trình',
      url: 'bon-mua.html',
      desc: 'Hành trình cảm xúc và sự chuyển mình của tâm hồn qua Xuân, Hạ, Thu, Đông.',
      keywords: 'bon mua xuan ha thu dong thoi gian cam xuc thoi tiet mua thu mua dong mua xuan mua ha'
    },
    {
      title: 'Hóa Thân',
      category: 'Trải Nghiệm',
      url: 'hoa-than.html',
      desc: 'Trải nghiệm nhập vai đặc biệt: hóa thân thành chiếc lá, viên sỏi hoặc chiếc bánh quy giòn tan.',
      keywords: 'hoa than nhap vai chiec la vien soi banh quy 3d tuong tac tro choi'
    },
    {
      title: 'Góc Kể Chuyện',
      category: 'Góc Nhỏ',
      url: 'goc-ke-chuyen.html',
      desc: 'Những mẩu chuyện đời thường dung dị, chứa đựng bài học sâu sắc và ấm áp.',
      keywords: 'goc ke chuyen truyen ngan tan van ke chuyen ky uc chuyen doi'
    },
    {
      title: 'Khám Phá Góc Nhìn',
      category: 'Góc Nhìn',
      url: 'kham-pha-goc-nhin.html',
      desc: 'Mở rộng thế giới nội tâm và cảm quan nhân sinh qua những góc nhìn mới mẻ.',
      keywords: 'goc nhin the gioi quan nhan sinh nhin nhan cuoc song chiem nghiem'
    },
    {
      title: 'Điều Nhỏ Bé',
      category: 'Góc Nhỏ',
      url: 'dieu-nho-be.html',
      desc: 'Nhặt nhạnh những niềm vui và điều nhỏ bé bình dị để sưởi ấm tâm hồn bạn mỗi ngày.',
      keywords: 'dieu nho be niem vui nho hanh phuc binh di nhat mot dieu nho'
    },
    {
      title: 'Album Nhạc Ký Ức',
      category: 'Âm Nhạc',
      url: 'album-nhac-ky-uc.html',
      desc: 'Thanh âm mộc mạc, những bản Lofi và giai điệu dịu nhẹ đưa tâm trí trở về trạng thái an nhiên.',
      keywords: 'album nhac ky uc lofi giai dieu am nhac thu gian bai hat'
    },
    {
      title: 'Phân Tích Nội Tâm',
      category: 'Chiêm Nghiệm',
      url: 'phan-tich-noi-tam.html',
      desc: 'Lắng nghe những ngổn ngang lòng mình, thấu hiểu căn nguyên của cảm xúc và sự bất an.',
      keywords: 'phan tich noi tam tam ly chieu sau cam xuc bat an lo lang chua lanh'
    },
    {
      title: 'Giao Kèo Với Thời Gian',
      category: 'Phân Tích Nội Tâm',
      url: 'phan-tich-noi-tam/giao-keo-voi-thoi-gian.html',
      desc: 'Người khiến bạn chụp màn hình tin nhắn lưu vào album là ai? Nỗ lực đóng băng cảm xúc và giao kèo với thời gian.',
      keywords: 'giao keo voi thoi gian chup man hinh tin nhan album anh nguoi thuong cu tri ky ky uc'
    },
    {
      title: 'Câu Hỏi Tâm Hồn',
      category: 'Chiêm Nghiệm',
      url: 'cau-hoi-tam-hon.html',
      desc: 'Những câu hỏi gợi mở để bạn đối thoại chân thành cùng chính bản thân mình.',
      keywords: 'cau hoi tam hon tu van doi thoai ban than suy tu tra loi'
    },
    {
      title: 'Phép Màu',
      category: 'Chiêm Nghiệm',
      url: 'phep-mau.html',
      desc: 'Nhận ra phép màu hiện diện ngay trong những điều tưởng chừng giản đơn quanh ta.',
      keywords: 'phep mau ky dieu hy vong niem tin phep mau cuoc song'
    },
    {
      title: 'Về Tiệm Nhỏ',
      category: 'Giới Thiệu',
      url: 'tiem-nho.html',
      desc: 'Không gian ấm áp bán những điều không cầm nắm được — nơi những điều nhỏ bé mở ra cuộc gặp gỡ lớn lao.',
      keywords: 've tiem nho gioi thieu tiem nho sui tu gia tri tui vai thom thu chao don'
    },
    {
      title: 'Lời Tự Sự Của Tình',
      category: 'Tự Sự',
      url: 'loi-tu-su.html',
      desc: 'Câu chuyện tự sự chân thành từ người sáng lập Tiệm Nhỏ — hành trình từ coder đến người kể chuyện.',
      keywords: 'loi tu su tinh ong trum ke chuyen dong sang lap nguoi tao ra'
    },
    {
      title: 'Hóa Thân: Tách Trà',
      category: 'Hóa Thân',
      url: 'hoa-than/tach-tra.html',
      desc: 'Câu chuyện hóa thân vào tách trà nóng giữa ngày mưa, chiêm nghiệm về sự buông bỏ và an yên.',
      keywords: 'hoa than tach tra uong tra tinh lang thu thai khoang lang an yen'
    },
    {
      title: 'Thư Của Bạn',
      category: 'Kết Nối',
      url: 'thu-cua-ban.html',
      desc: 'Nơi lưu giữ những bức thư, lời gửi gắm và sẻ chia chân thành từ bạn đọc ghé Tiệm.',
      keywords: 'thu cua ban hom thu ket noi la thu ban doc gui thu chia se'
    },
    {
      title: 'Hiện Hữu Khi Biết Thương',
      category: 'Tản Văn',
      url: 'phan-tich-noi-tam/hien-huu-khi-biet-thuong.html',
      desc: 'Khi thương một ai đó và học cách trân trọng chính bản thân mình một cách trọn vẹn.',
      keywords: 'hien huu khi biet thuong tinh yeu yeu thuong buong bo an ui'
    },
    {
      title: 'Gánh Nặng Sự Hiểu Chuyện',
      category: 'Tản Văn',
      url: 'phan-tich-noi-tam/ganh-nang-su-hieu-chuyen.html',
      desc: 'Dành tặng cho những ai luôn phải gồng mình hiểu chuyện mà quên đi cảm xúc của chính mình.',
      keywords: 'ganh nang su hieu chuyen hieu chuyen ton thuong ap luc truong thanh'
    },
    {
      title: 'Tờ Giấy Giữa Đường',
      category: 'Góc Nhìn',
      url: 'to-giay-giua-duong.html',
      desc: 'Một câu chuyện nhỏ về cách chúng ta nhìn nhận một sự việc xảy ra trong đời.',
      keywords: 'to giay giua duong cau chuyen goc nhin quan sat cuoc song'
    },
    {
      title: 'Những Dòng Chữ Biết Ôm',
      category: 'Ủi An',
      url: 'nhung-dong-chu-biet-om.html',
      desc: 'Những câu từ dịu dàng mang theo năng lượng xoa dịu và chiếc ôm ấm áp.',
      keywords: 'nhung dong chu biet om chiec om chua lanh vo ve an ui'
    },
    {
      title: 'Liên Hệ & Kết Nối',
      category: 'Kết Nối',
      url: 'lien-he.html',
      desc: 'Gửi thư riêng tư hoặc nhắn gửi đến Tình và Tiệm Nhỏ Suy Tư.',
      keywords: 'lien he gui thu tin nhan dong gop email tro chuyen'
    },
    {
      title: 'Điều Khoản & Bảo Mật',
      category: 'Thông Tin',
      url: 'chinh-sach-bao-mat.html',
      desc: 'Chính sách bảo mật thông tin và tôn trọng quyền riêng tư của bạn đọc.',
      keywords: 'dieu khoan bao mat chinh sach quyen rieng tu'
    }
  ];

  // 3. Highlight từ khóa tìm kiếm trong tiêu đề
  function highlightText(text, query) {
    if (!query) return text;
    const cleanQ = removeVietnameseTones(query);
    const cleanText = removeVietnameseTones(text);
    const idx = cleanText.indexOf(cleanQ);
    if (idx === -1) return text;

    const before = text.substring(0, idx);
    const match = text.substring(idx, idx + query.length);
    const after = text.substring(idx + query.length);
    return `${before}<span class="site-search-highlight">${match}</span>${after}`;
  }

  // 4. Tìm kiếm bài viết theo từ khóa
  function searchArticles(query) {
    if (!query) return [];
    const qNorm = removeVietnameseTones(query);
    const terms = qNorm.split(/\s+/).filter(Boolean);

    return SITE_INDEX.filter(item => {
      const titleNorm = removeVietnameseTones(item.title);
      const descNorm = removeVietnameseTones(item.desc);
      const kwNorm = removeVietnameseTones(item.keywords);
      const fullText = `${titleNorm} ${descNorm} ${kwNorm}`;

      // Mỗi từ trong query đều phải xuất hiện trong item
      return terms.every(term => fullText.includes(term));
    });
  }

  // 5. Render kết quả tìm kiếm ra giao diện
  function renderSearchResults(container, results, query) {
    if (!container) return;

    if (!query.trim()) {
      container.innerHTML = '';
      container.style.display = 'none';
      return;
    }

    container.style.display = 'block';

    if (results.length === 0) {
      container.innerHTML = `
        <div class="site-search-empty">
          <div class="site-search-empty-icon">🍃</div>
          <div class="site-search-empty-text">
            Không tìm thấy bài viết nào phù hợp với từ khóa "<strong>${query}</strong>".<br>
            Bạn thử tìm với từ khóa khác như <em>bốn mùa, hóa thân, góc nhìn, trà...</em> nhé!
          </div>
        </div>
      `;
      return;
    }

    const isInSubdir = window.location.pathname.includes('/hoa-than/') || window.location.pathname.includes('/hoa-than-') || window.location.pathname.includes('/three-js-') || window.location.pathname.includes('/phan-tich-noi-tam/');
    const prefix = isInSubdir ? '../' : '';

    let html = `
      <div class="site-search-count">
        Tìm thấy <strong>${results.length}</strong> bài viết phù hợp:
      </div>
      <div class="site-search-list">
    `;

    results.forEach(item => {
      const highlightedTitle = highlightText(item.title, query);
      html += `
        <a href="${prefix}${item.url}" class="site-search-item">
          <div class="site-search-item-info">
            <div class="site-search-item-header">
              <span class="site-search-badge">${item.category}</span>
              <h4 class="site-search-item-title">${highlightedTitle}</h4>
            </div>
            <p class="site-search-item-desc">${item.desc}</p>
          </div>
          <div class="site-search-item-arrow">
            <span>Đọc</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  // 6. Khởi tạo Component
  function initSiteSearch() {
    ensureSiteSearchCSS();

    const searchItem = document.querySelector('.search_item');
    if (!searchItem) return;

    searchItem.classList.add('site-search-module');

    const trigger = document.getElementById('site-search-trigger') || searchItem.querySelector('.dropdown-toggle');
    const input = document.getElementById('site-search-input');
    const clearBtn = document.getElementById('site-search-clear');
    const resultsContainer = document.getElementById('site-search-results');
    const quickTags = document.querySelectorAll('.site-search-tag');

    if (!input || !resultsContainer) return;

    // Toggle Dropdown when clicking search icon
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = searchItem.classList.toggle('is-open');
        if (isOpen) {
          setTimeout(() => input.focus(), 120);
        }
      });
    }

    // Hover stability debounce
    let hoverTimer = null;
    searchItem.addEventListener('mouseenter', function () {
      clearTimeout(hoverTimer);
      searchItem.classList.add('is-hovered');
    });
    searchItem.addEventListener('mouseleave', function (e) {
      // Don't close if input is actively focused
      if (document.activeElement === input) return;
      hoverTimer = setTimeout(function () {
        searchItem.classList.remove('is-hovered');
      }, 240);
    });

    // Handle Input change
    input.addEventListener('input', function () {
      const q = this.value;
      if (clearBtn) {
        clearBtn.style.display = q.trim() ? 'inline-flex' : 'none';
      }
      const results = searchArticles(q);
      renderSearchResults(resultsContainer, results, q);
    });

    // Handle Clear Button
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        this.style.display = 'none';
        renderSearchResults(resultsContainer, [], '');
        input.focus();
      });
    }

    // Quick tag clicks
    quickTags.forEach(tag => {
      tag.addEventListener('click', function (e) {
        e.preventDefault();
        const kw = this.getAttribute('data-keyword');
        if (kw) {
          input.value = kw;
          if (clearBtn) clearBtn.style.display = 'inline-flex';
          const results = searchArticles(kw);
          renderSearchResults(resultsContainer, results, kw);
          input.focus();
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!searchItem.contains(e.target)) {
        searchItem.classList.remove('is-open');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchItem.classList.remove('is-open');
        input.blur();
      }
    });

    // Open on focus
    input.addEventListener('focus', function () {
      searchItem.classList.add('is-open');
      if (this.value.trim()) {
        const results = searchArticles(this.value);
        renderSearchResults(resultsContainer, results, this.value);
      }
    });
  }

  // Export globally for multiple script loaders
  window.initSiteSearch = initSiteSearch;
  window.initSoulSearch = initSiteSearch;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteSearch);
  } else {
    initSiteSearch();
  }

  document.addEventListener('headerLoaded', initSiteSearch);
})();
