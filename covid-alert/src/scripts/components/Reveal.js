/* ------------------------------------------------------------------------------
@name: Reveal
@description: Reveal
--------------------------------------------------------------------------------- */

const Reveal = (() => {

  // --- handleRevealConfig
  const handleRevealConfig = (delay = 50, distance = '24px', interval= 50, origin= 'bottom') => {
    const _config = {
      duration: 900,
      distance: distance,
      delay: delay,
      interval: interval,
      origin: origin,
    };
    return _config;
  }

  // --- handleRunScrollReveal
  const handleRunScrollReveal = () => {
    ScrollReveal().reveal('.problem__title', handleRevealConfig());

    // -- homepage section
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.solution__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.solution__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.solution__img', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.solution__item', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.excellence__ttl', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.excellence__item', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.sale__headline', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.sale__title', handleRevealConfig(50, '24px', 60, 'left'));
    ScrollReveal().reveal('.sale__desc', handleRevealConfig(50, '24px', 70, 'left'));
    ScrollReveal().reveal('.sale__countdown', handleRevealConfig(50, '24px', 60, 'right'));
    ScrollReveal().reveal('.benefits__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.benefits__img', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.benefits__item', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.presenting__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.presenting__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimonials__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimonials__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.documentation__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.documentation__card', handleRevealConfig(50, '24px', 50, 'bottom'));

    // -- responsive config
    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal('.sale__headline', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.sale__title', handleRevealConfig(50, '24px', 60, 'bottom'));
      ScrollReveal().reveal('.sale__desc', handleRevealConfig(50, '24px', 70, 'bottom'));
      ScrollReveal().reveal('.sale__countdown', handleRevealConfig(50, '24px', 60, 'bottom'));
    }
  }

  // --- init
  const init = () => {
    handleRunScrollReveal();
  }

  // --- return
  return {
    init
  }

})();

export default Reveal;
