/* ------------------------------------------------------------------------------
@name: Features
@description: Features
--------------------------------------------------------------------------------- */

// --- Features
const Features = (() => {

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-features-list .features__item').each((i, e) => {
      if (_height < $(e).find('.features__txt__wrapper').height()) {
        _height = $(e).find('.features__txt__wrapper').height();
      }
    });
    $('.features__txt__wrapper').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.features__txt__wrapper').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.features__txt__wrapper').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    // handleSet();

  }

  // --- return
  return {
    init
    // checkHeight: handleSet
  }

})();

export default Features;
