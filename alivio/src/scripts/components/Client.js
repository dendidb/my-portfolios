/* ------------------------------------------------------------------------------
@name: Client
@description: Client
--------------------------------------------------------------------------------- */

const Client = (() => {

  // --- handleRunCarousel
  const handleRunCarousel = () => {
    const _width = 575;
    const _selector = $('.js-client');
    const _itemLength = $('.js-client .client__item').length;
    const _itemRun = 4;

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
          dots: false,
          nav: false,
          mouseDrag: true,
          touchDrag: true,
          autoWidth: true,
          autoplayHover: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          rewind: true,
          loop: true,
          dragEndSpeed: 650,
          smartSpeed: 650,
          rewindSpeed: 650,
          autoplay: true,
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

export default Client;
