/* ------------------------------------------------------------------------------
@name: Testimonials
@description: Testimonials
--------------------------------------------------------------------------------- */

const Testimonials = (() => {

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-slide-testimonials .testimonials__item').each((i, e) => {
      if (_height < $(e).find('.testimonials__caption').height()) {
        _height = $(e).find('.testimonials__caption').height();
      }
    });
    $('.testimonials__caption').height(_height);
  }

  const handleResetHeight = () => {
    let _attr = $('.testimonials__caption').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.testimonials__caption').removeAttr('style');
    }
  }

  // --- handleRunCarousel
  const handleRunCarousel = () => {
    const _width = 575;
    const _selector = $('.js-slide-testimonials');
    const _itemLength = $('.js-slide-testimonials .testimonials__item').length;
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
          items: 1,
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
          dotsSpeed: 550,
          navSpeed: 550,
          dragEndSpeed: 550,
          smartSpeed: 550,
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
    handleSet();
    handleRunCarousel();
  }

  // --- return
  return {
    init,
    destroyCarousel: handleRunCarousel,
    checkHeight: handleSet
  }

})();

export default Testimonials;
