/* ------------------------------------------------------------------------------
@name: Testimony
@description: Testimony
--------------------------------------------------------------------------------- */

const Testimony = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-testimony-list');
    const _itemLength = $('.js-testimony-list .testimony__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: false,
        autoplay: true,
        autoHeight: true,
        autoWidth: true,
        dots: true,
        nav: true,
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        dotsSpeed: 1000,
        navSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 800,
        responsive: {
          0: {
            margin: 16
          },
          992: {
            margin: 24
          }
        }
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('testimony--single');
    }
  }

  // init
  const init = () => {
    handleRunCarousel();
  }

  return {
    init,
    checkCarousel: handleRunCarousel
  }

})();

export default Testimony;
