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
    ScrollReveal().reveal('.features__head', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.features__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.features__video', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.section-description__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.try-for-free__img', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.try-for-free__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.subscribe__img', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.subscribe__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.subscribe__form', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.partners__head', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.partners__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.partners__btn', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimonials__head', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.testimonials__body', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.testimonials__btn', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.pricing__list', handleRevealConfig(70, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.contact-us__head', handleRevealConfig(60, '24px', 50, 'top'));
    ScrollReveal().reveal('.contact-us__form', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.contact-us__detail', handleRevealConfig(60, '24px', 50, 'bottom'));
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
