/* ------------------------------------------------------------------------------
@name: Testimonials
--------------------------------------------------------------------------------- */

const Testimonials = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const selector =  $('.js-testimonials');
    const itemLength = $('.js-testimonials .testimonials__item').length;
    const itemRun = 1;

    // destroy carousel
    selector.owlCarousel('destroy');

    // --- check if itemLength > itemRun
    if (itemLength > itemRun) {
        // --- init carousel
        selector.addClass('owl-carousel').owlCarousel({
          items: 1,
          dots: true,
          nav: true,
          navText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
          touchDrag: true,
          mouseDrag: false,
          autoplayHoverPause: true,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          autoplayTimeout: 7000,
          dotsSpeed: 1000,
          autoplaySpeed: 1000,
          dragEndSpeed: 800
        });
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

export default Testimonials
