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
    ScrollReveal().reveal('.section-description__img', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.section-description__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.problem__body', handleRevealConfig(50, '24px', 50, 'bottom'));

    // -- responsive config
    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal('.sale__headline', handleRevealConfig(50, '24px', 50, 'bottom'));
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
