/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */

const Footer = (() => {

    // -- handle padding bottom
    const handleFooterSticky = () => {
      const _footer = $('.footer').innerHeight();
      if ($(window).width() > 767) {
        $('.main-site').css('paddingBottom', _footer);
      } else {
        $('.main-site').removeAttr('style');
      }
    }

    // -- handle accordion
    const handleAccordion = () => {
      $('.js-accordion-menu, .footer__menu__title').on('click', (e) => {
        const _this = $(e.currentTarget);
        const _parents = _this.parents('.footer__menu__item');

        if ($(window).width() <= 575.88) {
          if (_this.parents('.footer__menu__item').hasClass('footer__menu__item--show')) {
            _this.parents('.footer__menu__item').find('.footer__nav').slideUp(300);
            _this.parents('.footer__menu__item--show').removeClass('footer__menu__item--show');
          } else {
            _parents.siblings('.footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').slideUp(300);

            _this.parents('.footer__menu__item').find('.footer__nav').slideDown(300);
            _this.parents('.footer__menu__item').addClass('footer__menu__item--show')
          }
        }
      });
    }

    // --- handle destroy accordion
    const handleDestroyAccordion = () => {
      if ($(window).width() > 575.86) {
        $('.js-accordion-menu, .footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').removeAttr('style');
      }
    }
  
    // - init
    const init = () => {
      handleFooterSticky();
      handleAccordion();
    }
  
    return {
      init,
      footerSticky: handleFooterSticky,
      destroyAccordion: handleDestroyAccordion
    }
  
  })();
  
  export default Footer
  