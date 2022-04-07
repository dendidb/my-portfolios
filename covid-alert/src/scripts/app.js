// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  Header,
  HeroBanner,
  WinScroll,
  WindowResize,
  Problem,
  Countdown,
  Reveal,
  Testimonials,
  Presenting,
  Footer
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  }

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  }

    // --- call vendor
    const callVendor = () => {
      // popup image
      const $gallery = new SimpleLightbox('.js-popup-image');
    }

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();
      callVendor();

      // --- Project
      Header.init();
      HeroBanner.init();
      WinScroll.init();
      Problem.init();
      Testimonials.init();
      Presenting.init();
      Countdown.init();
      Reveal.init();
      Footer.init();
      WindowResize.init();
    })(jQuery);
  }

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {

      });
    })(jQuery);
  }

  // --- init
  const init = () => {
    load();
    ready();
  }

  // --- return
  return {
    init
  }

})();

// ---  run main js
App.init();
