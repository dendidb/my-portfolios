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

    // -- homepage section
    ScrollReveal().reveal('.section-description__box', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.section-description__img', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.section-description__txt', handleRevealConfig(50, '24px', 50, 'right'));
    ScrollReveal().reveal('.features__title', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.features__desc', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.features__list', handleRevealConfig(70, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimony__list', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimony__title', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.footer__trial__title', handleRevealConfig(65, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.footer__trial__desc', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.footer__trial__btn', handleRevealConfig(65, '24px', 50, 'bottom'));

    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal('.section-description__img', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.section-description__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
      
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
