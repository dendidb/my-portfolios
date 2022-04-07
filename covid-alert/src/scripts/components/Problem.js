/* ------------------------------------------------------------------------------
@name: Problem
@description: Problem
--------------------------------------------------------------------------------- */

const Problem = (() => {

  // --- handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-slide-question');
    const _itemLength = $('.js-slide-question .problem__txt').length;
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
        autoplay: true,
        dots: true,
        nav: true,
        loop: true,
        autoplay: true,
        navText: ["<i class='ri-arrow-left'></i>","<i class='ri-arrow-right'></i>"],
        mouseDrag: true,
        touchGrant: true,
        touchDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navSpeed: 450,
        dragEndSpeed: 450,
        smartSpeed: 3000,
      });
    } else {
      if(_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('problem--standalone');
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

export default Problem;
