// --- utilities
import {
  Scrolllable,
  BrowserCheck
} from 'utilities';

// --- components
import {
  WinScroll,
  WindowResize,
  Header,
  Footer,
  HeroBanner,
  Expertise,
  Client,
  Reveal,
  InputForm,
  ContactUs
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
      // scroll
      const navbar = document.querySelector('.header');
      const scrollspy = VanillaScrollspy(navbar);
      scrollspy.init();
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
      WindowResize.init();
      WinScroll.init();
      Header.init();
      Footer.init();
      HeroBanner.init();
      Expertise.init();
      Client.init();
      Reveal.init();
      InputForm.init();
      ContactUs.init();
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
