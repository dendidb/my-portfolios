/* ------------------------------------------------------------------------------
@name: Popup
@description: Popup
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- Popup
const Popup = (() => {

  // -- handleClickPopup
  const handleClickPopup = () => {
    $('.js-show-popup').on('click', (e) => {
      const _this = $(e.currentTarget),
      _embed = _this.attr('data-video'),
      _parents = _this.parents('body').find('.popup'),
      _contentItem = '<iframe class="iframe-embed" src="https://www.youtube.com/embed/'+ _embed +'?autoplay=1" frameborder="0" allow="autoplay"></iframe>';

      if (_parents.hasClass('show-popup')) {
        _parents.removeClass('show-popup');
        Scrolllable.enable();
        $('.iframe-embed').remove();
      } else {
        Scrolllable.disable();
        _parents.addClass('show-popup');
        _parents.find('.js-result-popup').html(_contentItem);
      }
    });

    // --- handleHidePopup
    $('.js-hide-popup').on('click', (e) => {
      if ($('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');
        Scrolllable.enable();
        $('.iframe-embed').remove();
      }
    });

    // --- handleClickBody
    $('body').on('click', (e) => {
      if ($('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');
        Scrolllable.enable();
        $('.iframe-embed').remove();
      }
    });

    // stopPropagation
    $('body').on('click', '.js-show-popup, .popup__body', (e) => {
      e.stopPropagation();
    });
  }

  // --- handleKeyupPopup
  const handleKeyupPopup = () => {
    $('body').on('keyup', (e) => {
      if (e.which == 27 && $('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');
        Scrolllable.enable();
      }
    });
  }

  // --- init
  const init = () => {
    handleClickPopup();
    handleKeyupPopup();
  }

  // --- return
  return {
    init
  }

})();

export default Popup;
