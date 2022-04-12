/* ------------------------------------------------------------------------------
@name: Expertise
@description: Expertise
--------------------------------------------------------------------------------- */

// --- Expertise
const Expertise = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-expertise');
    const _itemLength = $('.js-expertise .expertise__item').length;
    const _itemRun = 3;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // init carousel more medium
    if ($(window).width() > 992.98) {

      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          rewind: false,
          autoplay: false,
          dots: false,
          nav: true,
          navText: ["<i class='rzf-arrow-left'></i>", "<i class='rzf-arrow-right'></i>"],
          loop: false,
          touchDrag: true,
          mouseDrag: true,
          smartSpeed: 550,
          dragEndSpeed: 550,
          navSpeed: 550,
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
    runCarousel: handleRunCarousel
  }

})();

export default Expertise;
