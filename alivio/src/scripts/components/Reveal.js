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

    ScrollReveal().reveal('.js-reveal .product-card', handleRevealConfig());
    ScrollReveal().reveal('.title-page__txt', handleRevealConfig());

    // -- section-description section
    ScrollReveal().reveal('.section-description__box', handleRevealConfig(50, '24px', 50, 'bottom'));

    if ($(window).width() >= 992.98) {

    }
    // -- expertise section
    ScrollReveal().reveal('.expertise__title', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.expertise__desc', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.expertise__list', handleRevealConfig(60, '24px', 50, 'bottom'));
    
    // -- client section
    ScrollReveal().reveal('.client__title', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.client__desc', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.client__list', handleRevealConfig(60, '24px', 50, 'bottom'));

    // -- portfolio section
    ScrollReveal().reveal('.portofolio__item', handleRevealConfig(55, '24px', 50, 'bottom'));

    // -- contact-us section
    ScrollReveal().reveal('.contact-us__title', handleRevealConfig(55, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.contact-us__desc', handleRevealConfig(55, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.contact-us__img', handleRevealConfig(55, '24px', 50, 'left'));
    ScrollReveal().reveal('.contact-us__form', handleRevealConfig(55, '24px', 50, 'right'));

    // -- footer
    ScrollReveal().reveal('.footer__copyright', handleRevealConfig(55, '24px', 50, 'bottom'));

    // -- responsive config
    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal('.portofolio__list', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.expertise__list', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.contact-us__img', handleRevealConfig(55, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.contact-us__form', handleRevealConfig(55, '24px', 50, 'bottom'))
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
