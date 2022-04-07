/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

const Header = (() => {

  // --- handleMobileMenu
  const handleMobileMenu = () => {
    $('.js-burger-menu').on('click', (e) => {
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

  const handleClickMenu = () => {
    $('.header__link').on('click', (e) => {
      if ($(window).width() <= 992) {
        if ($('body').hasClass('show-menu')) {
          Scrolllable.enable();
          $('body').removeClass('show-menu');
        }
      }
    });
  }

  // --- handleDestroyMobileMenu
  const handleDestroyMobileMenu = () => {
    if ($(window).width() >= 767) {
      if ($('body').hasClass('show-menu')) {
        Scrolllable.enable();
        $('body').removeClass('show-menu');
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