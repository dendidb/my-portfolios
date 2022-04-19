/* ------------------------------------------------------------------------------
@name: PricingCard
@description: PricingCard
--------------------------------------------------------------------------------- */

// --- PricingCard
const PricingCard = (() => {

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    if ($(window).width() >= 991.98) {
      if ($('.pricing__list').hasClass('js-pricing-card')) {
        let _height = 0;
        handleResetHeight();
        $('.js-pricing-card').each((i, e) => {
          if (_height < $(e).find('.pricing__box').height()) {
            _height = $(e).find('.pricing__box').height();
          }
        });
        $('.pricing__box').height(_height);
      }
    }
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.pricing__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.pricing__box').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    handleSet();

  }

  // --- return
  return {
    init,
    checkHeight: handleSet
  }

})();

export default PricingCard;
