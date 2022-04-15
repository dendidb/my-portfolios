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

    // -- presenting section
    ScrollReveal().reveal('.presenting__left', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.presenting__right', handleRevealConfig(50, '24px', 50, 'right'));
    
    // -- features-item section
    ScrollReveal().reveal('.features__item', handleRevealConfig(50, '24px', 50, 'bottom'));

    // -- success-story section
    ScrollReveal().reveal('.success-story__img', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.success-story__txt', handleRevealConfig(50, '24px', 50, 'right'));

    // -- our-product section
    ScrollReveal().reveal('.our-product__img', handleRevealConfig(50, '24px', 50, 'right'));
    ScrollReveal().reveal('.our-product__txt', handleRevealConfig(50, '24px', 50, 'left'));

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
