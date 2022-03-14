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
    ScrollReveal().reveal('.number__list', handleRevealConfig(50, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.why-crappo__img', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.why-crappo__txt', handleRevealConfig(50, '24px', 50, 'right'));
    ScrollReveal().reveal('.why-crappo__title', handleRevealConfig(50, '24px', 50, 'right'));
    ScrollReveal().reveal('.why-crappo__desc', handleRevealConfig(60, '24px', 50, 'right'));
    ScrollReveal().reveal('.why-crappo__btn', handleRevealConfig(70, '24px', 50, 'right'));
    ScrollReveal().reveal('.calculate__title', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.calculate__desc', handleRevealConfig(60, '24px', 50, 'top'));
    ScrollReveal().reveal('.calculate__box', handleRevealConfig(65, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.crypto__title', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.crypto__title', handleRevealConfig(55, '24px', 50, 'top'));
    ScrollReveal().reveal('.crypto__item', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.crypto__title', handleRevealConfig(65, '24px', 50, 'top'));
    ScrollReveal().reveal('.market__head__title', handleRevealConfig(50, '24px', 50, 'top'));
    ScrollReveal().reveal('.market__img__btc', handleRevealConfig(55, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.market__img__inc', handleRevealConfig(60, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.market__img__increase', handleRevealConfig(65, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.market__img__price', handleRevealConfig(65, '24px', 50, 'bottom'));
    ScrollReveal().reveal('.market__txt__title', handleRevealConfig(65, '24px', 50, 'left'));
    ScrollReveal().reveal('.market__txt__desc', handleRevealConfig(65, '24px', 50, 'left'));
    ScrollReveal().reveal('.market__txt__btn', handleRevealConfig(65, '24px', 50, 'left'));
    ScrollReveal().reveal('.statistics__img', handleRevealConfig(65, '24px', 50, 'right'));
    ScrollReveal().reveal('.statistics__txt', handleRevealConfig(65, '24px', 50, 'left'));
    ScrollReveal().reveal('.grow-profit__img', handleRevealConfig(65, '24px', 50, 'right'));
    ScrollReveal().reveal('.grow-profit__txt', handleRevealConfig(65, '24px', 50, 'left'));
    ScrollReveal().reveal('.subscribe__box', handleRevealConfig(65, '24px', 50, 'bottom'));

    if ($(window).width() <= 767.98) {
      ScrollReveal().reveal('.number__list', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.why-crappo__img', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.why-crappo__txt', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.why-crappo__title', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.why-crappo__desc', handleRevealConfig(60, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.why-crappo__btn', handleRevealConfig(70, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.calculate__title', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.calculate__desc', handleRevealConfig(60, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.calculate__box', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.crypto__title', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.crypto__title', handleRevealConfig(55, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.crypto__item', handleRevealConfig(60, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.crypto__title', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__head__title', handleRevealConfig(50, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__img__btc', handleRevealConfig(55, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__img__inc', handleRevealConfig(60, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__img__increase', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__img__price', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__txt__title', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__txt__desc', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.market__txt__btn', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.statistics__img', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.statistics__txt', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.grow-profit__img', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.grow-profit__txt', handleRevealConfig(65, '24px', 50, 'bottom'));
      ScrollReveal().reveal('.subscribe__box', handleRevealConfig(65, '24px', 50, 'bottom'));
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
