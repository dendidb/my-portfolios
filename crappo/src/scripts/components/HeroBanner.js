/* ------------------------------------------------------------------------------
@name: Hero Banner
@description: Hero Banner
--------------------------------------------------------------------------------- */

// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

const HeroBanner = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-hero-banner');
    const _itemLength = $('.js-hero-banner .hero-banner__item').length;
    const _itemRun = 1;

    // destroyCarousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // -- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        dots: false,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
        dotsSpeed: 4000,
        autoplaySpeed: 4000,
        dragEndSpeed: 450
      });
      
    } else {
        if(_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
        _selector.addClass('hero-banner--single');
      }
    }

  // init
  const init = () => {
    handleRunCarousel();
  }

  return {
    init
  }

})();
export default HeroBanner;
