(function () {
  function wildlifeNavigationInit2() {
    //$(".wl-nav__wrapper").css("display", "none");
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
  }
  
  window.wildlifeNavigationInit2 = wildlifeNavigationInit2;
})();
