/* ------------------------------------------------------------------------------
@name: Presenting
@description: Presenting
--------------------------------------------------------------------------------- */

const Presenting = (() => {

  // --- handleRunCarousel
  const handleRunCarousel = () => {
    const _width = 575.86;
    const _selector = $('.js-slide-presenting');
    const _itemLength = $('.js-slide-presenting .presenting__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if window > _witdh
    if ($(window).width() > _width) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          items: 2,
          autoplay: false,
          dots: false,
          nav: true,
          loop: false,
          rewind: false,
          autoWidth: true,
          autoHeight: true,
          navText: ["<i class='ri-arrow-left'></i>","<i class='ri-arrow-right'></i>"],
          mouseDrag: true,
          touchGrant: false,
          touchDrag: true,
          dotsSpeed: 450,
          navSpeed: 450,
          dragEndSpeed: 450,
          smartSpeed: 750,
          smartSpeed: 1000,
        });
      } else {
        if(_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
      }
    }
  }

  // --- init
  const init = () => {
    handleRunCarousel();
  }

  // --- return
  return {
    init,
    destroyCarousel: handleRunCarousel
  }

})();

export default Presenting;