/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- Header
const Header = (() => {

  // --- windowTemp
  let _windowTemp = $(window).width();

  // --- handleMobileMenu
  const handleMobileMenu = () => {
    $('.js-mobile-menu').on('click', (e) => {
      const _this = $(e.currentTarget);
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        $('body').removeClass('show-menu');
      } else {
        Scrolllable.disable();
        $('body').addClass('show-menu');
      }
    });
  }

  // --- handleClickMenu
  const handleClickMenu = () => {
    $('.header__nav__link').on('click', () => {
      if($(window).width() <= 992) {
        if($('body').hasClass('show-menu')) {
          Scrolllable.enable();
          $('body').removeClass('show-menu');
        }
      }
    });
  }

  // --- handle destroy mobile menu
  const handleDestroyMobileMenu = () => {
    if ($(window).width() >= 992) {
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        $('body').removeClass('show-menu')
      }
    }
  }

  // --- init
  const init = () => {
    handleMobileMenu();
    handleClickMenu();
  }

  // --- return
  return {
    init,
    destroyMobileMenu: handleDestroyMobileMenu
  }

})();

export default Header;
