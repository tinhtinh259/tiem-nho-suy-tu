(function () {
  function wildlifeNavigationInit2() {
    $(".wl-nav__wrapper").css("display", "none");
    $(".wl-nav__trigger-title-mobile").on("click", function () {
      $(this).toggleClass("is-active");
      $(".wl-nav__wrapper").slideToggle();
      $('body').toggleClass('wl-nav-toggle');
    });
    $(".wl-nav__sub").css("display", "none");
    $(".wl-nav__item.has-sub-nav").on("click", function () {
      $(this).toggleClass("expanded");
      $(".wl-nav__sub").slideToggle();
    });

    $('html').click(function (event) {
      const classNamesToCheck = ['wl-nav__trigger-title-mobile', 'is-active', 'fal', 'fa-angle-down', 'wl-nav__item-title', 'wl-nav__item', ' has-sub-nav', 'expanded'];
      const elementTypesToCheck = ['h4'];

      const shouldExecute = checkClassAndElementType(event.target, classNamesToCheck, elementTypesToCheck);

      if (shouldExecute) {
        // Run your function here
        $(".wl-nav__trigger-title-mobile.is-active").trigger("click");
      }
    });

    window.onscroll = function (e) {
      if (e) {
        $(".wl-nav__trigger-title-mobile.is-active").trigger("click");
      }
    }

  }

  window.wildlifeNavigationInit2 = wildlifeNavigationInit2;
})();
