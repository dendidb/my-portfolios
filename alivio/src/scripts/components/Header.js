/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */
// --- utilities
import {
  Scrolllable
} from 'utilities';

const Header = (() => {

  // --- handleMobileNav
  const handleMobileNav = () => {

    // nav open
    $('.js-nav').on('click', () => {
      if ($('body').hasClass('show-nav')) {
        Scrolllable.enable();
        $('body').removeClass('show-nav');
      } else {
        Scrolllable.disable();
        $('body').addClass('show-nav');
      }
    });
  }

  const handleClickMenu = () => {
    $('.header__nav__link, .js-nav-scroll').on('click', (e) => {
      const _this = $(e.currentTarget);

      if ($(window).width() <= 992) {
        if ($('body').hasClass('show-nav')) {
          Scrolllable.enable();
          $('body').removeClass('show-nav');
        }
      }
    });
  }

  // --- handleScrollMobileMenu
  const handleScrollMobileMenu = () => {
    $('.js-mobile-menu').on('scroll', (e) => {
      if ($(e.currentTarget).scrollTop() > 4) {
        $('body').addClass('on-scroll-mobile-menu');
      } else {
        $('body').removeClass('on-scroll-mobile-menu');
      }
    });
  }

  // --- handleCheckClass
  const handleCheckClass = () => {
    if ($(window).width() >= 992) {
      Scrolllable.enable();
      $('body').removeClass('show-nav');
    }
  }
  
  // --- handleSet
  // const handleSet = () => {
  //   if (window.location.hash) {
  //     let _url = window.location.href;

  //     let _parts = _url.split("#");

  //     let _target = _parts[1];

  //     let _headerHeight = $('.header').outerHeight() + 10;

  //     let _headerBottom = $('.header__bottom').outerHeight() + 10;

  //     let _offsetTop = $('#' + _target).offset();
  //     _offsetTop -= _offsetTop > $(window).scrollTop() ? _headerBottom : _headerHeight;
  //     $('html, body').animate({
  //       scrollTop: _offsetTop
  //     }, 'slow');
  //     $("[data-target='" + _target + "']").parents('.header-hunter__item').addClass('active');
  //   }
  // }

  // --- handleClick
  // const handleClick = function handleClick() {
  //   $(".header__nav__item").each(function (i, v) {
  //     let _this = $(v).children('.header__nav__link');

  //     let _target = _this.attr('data-target');

  //     _hunterMenu.push({
  //       'anchor': _this,
  //       'id': _target
  //     });

  //     _this.on('click', function (e) {
  //       let _this = $(e.currentTarget);

  //       let _target = _this.attr('data-target');

  //       let _headerHeight = $('.header').outerHeight();

  //       let _headerTop = $('.header__bottom').outerHeight();

  //       let _offsetTop = $('#' + _target).offset().top;
  //       _offsetTop -= _offsetTop > $(window).scrollTop() ? _headerTop : _headerHeight;

  //       if ($(window).width() > 768) {
  //         $('html, body').animate({
  //           scrollTop: _offsetTop
  //         }, 'slow');
  //       } else {
  //         $('html, body').delay(700).animate({
  //           scrollTop: _offsetTop
  //         }, 'slow');
  //       }
  //     });
  //   });
  // }

  // --- handleScroll

  // const handleScroll = () => {
  //   $(window).on('scroll', function () {
  //     $.each(_hunterMenu, function (e, elem) {
  //       let _id = $('#' + elem.id);

  //       let _target = _id[0];

  //       let _placement = _target.getBoundingClientRect();

  //       let _headerHeight = $('.header').outerHeight() + 10;

  //       let _headerBottom = $('.header__bottom').outerHeight() + 10;

  //       let _placementBottom = _placement.bottom;
  //       _placementBottom -= $('body').hasClass('window-scrolldown') ? _headerBottom : _headerHeight;
  //       $("[data-target='" + elem.id + "']").parents('.header-hunter__item').addClass('active').siblings().removeClass('active');

  //       if (_placement.top < window.innerHeight && _placementBottom > 0) {
  //         history.pushState({}, '', '#' + elem.id);
  //         return false;
  //         /* Exit $.each loop */
  //       };
  //     });
  //   });
  // };

  // - init
  const init = () => {
    handleMobileNav();
    handleScrollMobileMenu();
    handleClickMenu();
    // handleSet();
    // handleClick();
    // handleScroll();
  }

  return {
    init,
    checkClass: handleCheckClass
  }

})();

export default Header;