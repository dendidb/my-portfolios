(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _utilities = require("./utilities");

var _components = require("./components");

// --- utilities
// --- components
// --- App
var App = function () {
  // --- run transition
  var runTransition = function runTransition() {
    $('body').removeClass('hold-transition');
  }; // --- show site content


  var showSiteContent = function showSiteContent() {
    $('.js-main-site').removeClass('main-site--hide'); // --- disable scroll

    _utilities.Scrolllable.enable();
  }; // --- ready


  var ready = function ready() {
    (function ($) {
      // --- disable scroll
      _utilities.Scrolllable.disable(); // --- Global


      runTransition();
      showSiteContent();

      _utilities.BrowserCheck.init(); // --- Project


      _components.WindowResize.init();

      _components.WindowScroll.init();

      _components.Features.init();

      _components.HeroBanner.init();

      _components.Header.init();

      _components.Reveal.init();

      _components.Footer.init();

      _components.Testimony.init();
    })(jQuery);
  }; // --- load


  var load = function load() {
    (function ($) {
      $(window).on("load", function () {});
    })(jQuery);
  }; // --- init


  var init = function init() {
    load();
    ready();
  }; // --- return


  return {
    init: init
  };
}(); // ---  run main js


App.init();

},{"./components":10,"./utilities":13}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Features
@description: Features
--------------------------------------------------------------------------------- */
// --- Features
var Features = function () {
  // --- handleSet
  var handleSet = function handleSet() {
    handleCheckHeight();
  }; // --- handleCheckHeight


  var handleCheckHeight = function handleCheckHeight() {
    var _height = 0;
    handleResetHeight();
    $('.js-features-list .features__item').each(function (i, e) {
      if (_height < $(e).find('.features__txt__wrapper').height()) {
        _height = $(e).find('.features__txt__wrapper').height();
      }
    });
    $('.features__txt__wrapper').height(_height);
  }; // --- handleResetHeight


  var handleResetHeight = function handleResetHeight() {
    var _attr = $('.features__txt__wrapper').attr('style'); // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.


    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.features__txt__wrapper').removeAttr('style');
    }
  }; // --- init


  var init = function init() {// handleSet();
  }; // --- return


  return {
    init: init // checkHeight: handleSet

  };
}();

var _default = Features;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */
// --- Footer
var Footer = function () {
  var _width = 767.98; // handleDropDown

  var handleDropDown = function handleDropDown() {
    $('.js-accordion-footer .footer__title').on('click', function (e) {
      var _this = $(e.currentTarget);

      var _parents = _this.parents('.footer__list__item');

      if ($(window).width() <= _width) {
        if (_this.parents('.footer__list__item').hasClass('footer__list__item--show')) {
          _this.parents('.footer__list__item').find('.footer__nav').slideUp(300);

          _this.parents('.footer__list__item').removeClass('footer__list__item--show');
        } else {
          _parents.siblings('.footer__list__item').removeClass('footer__list__item--show').find('.footer__nav').slideUp(300);

          _this.parents('.footer__list__item').find('.footer__nav').slideDown(300);

          _this.parents('.footer__list__item').addClass('footer__list__item--show');
        }
      }
    });
  }; // handle Destroy Accordion


  var handleDestroyAccordion = function handleDestroyAccordion() {
    if ($(window).width() > 575.86) {
      $('.js-accordion-footer .footer__list__item').removeClass('footer__list__item--show').find('.footer__nav').removeAttr('style');
    }
  }; // handle padding bottom


  var handleFooterSticky = function handleFooterSticky() {
    var _footer = $('.footer').innerHeight();

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  };

  var init = function init() {
    handleDropDown();
    handleFooterSticky();
  };

  return {
    init: init,
    destroyAccordion: handleDestroyAccordion,
    footerSticky: handleFooterSticky
  };
}();

var _default = Footer;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Header
@description: Header
--------------------------------------------------------------------------------- */
// --- utilities
var Header = function () {
  // --- handleMobileNav
  var handleMobileNav = function handleMobileNav() {
    // nav open
    $('.js-nav').on('click', function () {
      if ($('body').hasClass('show-nav')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-nav');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-nav');
      }
    });
  }; // --- handleScrollMobileMenu


  var handleScrollMobileMenu = function handleScrollMobileMenu() {
    $('.js-mobile-menu').on('scroll', function (e) {
      if ($(e.currentTarget).scrollTop() > 4) {
        $('body').addClass('on-scroll-mobile-menu');
      } else {
        $('body').removeClass('on-scroll-mobile-menu');
      }
    });
  }; // --- handleClickMenu


  var handleClickMenu = function handleClickMenu() {
    $('.header__nav__link').on('click', function (e) {
      if ($(window).width() <= 992) {
        if ($('body').hasClass('show-nav')) {
          _utilities.Scrolllable.enable();

          $('body').removeClass('show-nav');
        }
      }
    });
  }; // --- handleCheckClass


  var handleCheckClass = function handleCheckClass() {
    if ($(window).width() >= 992) {
      _utilities.Scrolllable.enable();

      $('body').removeClass('show-nav');
    }
  }; // - init


  var init = function init() {
    handleMobileNav();
    handleClickMenu();
    handleScrollMobileMenu();
  };

  return {
    init: init,
    checkClass: handleCheckClass
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":13}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Hero Banner
@description: Hero Banner
--------------------------------------------------------------------------------- */
var HeroBanner = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-hero-banner');

    var _itemLength = $('.js-hero-banner .hero-banner__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 8000,
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 800
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('hero-banner--single');
    }
  }; // init


  var init = function init() {
    handleRunCarousel();
  };

  return {
    init: init
  };
}();

var _default = HeroBanner;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Reveal
@description: Reveal
--------------------------------------------------------------------------------- */
var Reveal = function () {
  // --- handleRevealConfig
  var handleRevealConfig = function handleRevealConfig() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '24px';
    var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bottom';
    var _config = {
      duration: 900,
      distance: distance,
      delay: delay,
      interval: interval,
      origin: origin
    };
    return _config;
  }; // --- handleRunScrollReveal


  var handleRunScrollReveal = function handleRunScrollReveal() {
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
  }; // --- init


  var init = function init() {
    handleRunScrollReveal();
  }; // --- return


  return {
    init: init
  };
}();

var _default = Reveal;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Testimony
@description: Testimony
--------------------------------------------------------------------------------- */
var Testimony = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-testimony-list');

    var _itemLength = $('.js-testimony-list .testimony__item').length;
    var _itemRun = 1; // destroy carousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: false,
        autoplay: true,
        autoHeight: true,
        autoWidth: true,
        dots: true,
        nav: true,
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        dotsSpeed: 1000,
        navSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 800,
        responsive: {
          0: {
            margin: 16
          },
          992: {
            margin: 24
          }
        }
      });
    } else {
      if (_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }

      _selector.addClass('testimony--single');
    }
  }; // init


  var init = function init() {
    handleRunCarousel();
  };

  return {
    init: init,
    checkCarousel: handleRunCarousel
  };
}();

var _default = Testimony;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

/* ------------------------------------------------------------------------------
@name: WindowResize
@description: WindowResize
--------------------------------------------------------------------------------- */
// --- components
// --- WindowResize
var WindowResize = function () {
  var _rtime;

  var _timeout = false;
  var _delta = 200; // --- handleResize

  var handleResize = function handleResize() {
    $(window).resize(function () {
      _rtime = new Date();

      if (_timeout === false) {
        _timeout = true;
        $('body').addClass('hold-transition');
        setTimeout(handleResizeEnd, _delta);
      }
    });
  }; // --- handleResizeEnd


  var handleResizeEnd = function handleResizeEnd() {
    if (new Date() - _rtime < _delta) {
      setTimeout(handleResizeEnd, _delta);
    } else {
      _timeout = false; // Run Function on Resize end

      $('body').removeClass('hold-transition');

      _index.Footer.footerSticky();

      _index.Testimony.checkCarousel();
    }
  }; // --- init


  var init = function init() {
    handleResize();
  }; // --- return


  return {
    init: init
  };
}();

var _default = WindowResize;
exports["default"] = _default;

},{"./index":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: WindowScroll
@description: WindowScroll
--------------------------------------------------------------------------------- */
// --- WindowScroll
var WindowScroll = function () {
  var _lastScrollTop = 0;
  var _delta = 4;

  var _headerHeight = $('.header').height() / 2; // --- handleHeaderScroll


  var handleHeaderScroll = function handleHeaderScroll() {
    // --- _scrollTop
    var _scrollTop = $(window).scrollTop(); // --- Make sure they scroll more than _delta


    if (Math.abs(_lastScrollTop - _scrollTop) <= _delta) {
      return;
    } // --- Scroll Down


    if (_scrollTop > _lastScrollTop && _scrollTop > _headerHeight) {
      $('body').addClass('scroll-down');
    } else {
      // --- Scroll Up
      if (_scrollTop + $(window).height() < $(document).height()) {
        $('body').removeClass('scroll-down');

        if (_scrollTop > _headerHeight) {
          if (!$('body').hasClass('header-on-scroll')) {
            $('body').addClass('header-on-scroll');
          }
        } else {
          $('body').removeClass('header-on-scroll');
        }
      }
    }

    _lastScrollTop = _scrollTop;
  }; // --- handleScroll


  var handleScroll = function handleScroll() {
    var _didScroll;

    $(window).scroll(function () {
      _didScroll = true;
      setInterval(function () {
        if (_didScroll) {
          handleHeaderScroll();
          _didScroll = false;
        }
      }, 200);
    });
  }; // --- init


  var init = function init() {
    handleHeaderScroll();
    handleScroll();
  }; // --- return


  return {
    init: init
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Features", {
  enumerable: true,
  get: function get() {
    return _Features["default"];
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeroBanner", {
  enumerable: true,
  get: function get() {
    return _HeroBanner["default"];
  }
});
Object.defineProperty(exports, "Reveal", {
  enumerable: true,
  get: function get() {
    return _Reveal["default"];
  }
});
Object.defineProperty(exports, "Testimony", {
  enumerable: true,
  get: function get() {
    return _Testimony["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});
Object.defineProperty(exports, "WindowScroll", {
  enumerable: true,
  get: function get() {
    return _WindowScroll["default"];
  }
});

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _Features = _interopRequireDefault(require("./Features"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _Reveal = _interopRequireDefault(require("./Reveal"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Testimony = _interopRequireDefault(require("./Testimony"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Features":2,"./Footer":3,"./Header":4,"./HeroBanner":5,"./Reveal":6,"./Testimony":7,"./WindowResize":8,"./WindowScroll":9}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: BrowserCheck
@description: BrowserCheck
--------------------------------------------------------------------------------- */
// --- BrowserCheck
var BrowserCheck = function () {
  // --- handleCheck
  var handleCheck = function handleCheck() {
    var _browser = 'dekstop-browser';
    var HTMLElement = document.getElementsByTagName('html')[0];

    if (navigator.userAgent.match(/Android/i)) {
      _browser = 'android-browser';
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      _browser = 'blackberry-browser';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      _browser = 'ios-browser';
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      _browser = 'windows-phone-browser';
    }

    $('html').addClass(_browser);
  }; // --- init


  var init = function init() {
    handleCheck();
  }; // --- return


  return {
    init: init
  };
}();

var _default = BrowserCheck;
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Scrolllable
@description: Scrolllable
--------------------------------------------------------------------------------- */
// --- Scrolllable
var Scrolllable = function () {
  // --- handleEnable
  var handleEnable = function handleEnable() {
    $('body').removeClass('rm-scroll');
  }; // --- handleDisable


  var handleDisable = function handleDisable() {
    $('body').addClass('rm-scroll');
  }; // --- return


  return {
    enable: handleEnable,
    disable: handleDisable
  };
}();

var _default = Scrolllable;
exports["default"] = _default;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BrowserCheck", {
  enumerable: true,
  get: function get() {
    return _BrowserCheck["default"];
  }
});
Object.defineProperty(exports, "Scrolllable", {
  enumerable: true,
  get: function get() {
    return _Scrolllable["default"];
  }
});
Object.defineProperty(exports, "isOS", {
  enumerable: true,
  get: function get() {
    return _isOS["default"];
  }
});

var _isOS = _interopRequireDefault(require("./isOS"));

var _BrowserCheck = _interopRequireDefault(require("./BrowserCheck"));

var _Scrolllable = _interopRequireDefault(require("./Scrolllable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./BrowserCheck":11,"./Scrolllable":12,"./isOS":14}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: isOS
@description: isOS
--------------------------------------------------------------------------------- */
var isOS = {
  android: function android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackberry: function blackberry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  mac: function mac() {
    return navigator.platform.indexOf('Mac') > -1;
  },
  opera: function opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  win: function win() {
    return navigator.platform.indexOf('Win') > -1;
  },
  winMobile: function winMobile() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isOS.android() || isOS.blackberry() || isOS.iOS() || isOS.mac() || isOS.opera() || isOS.win() || isOS.winMobile();
  }
};
var _default = isOS;
exports["default"] = _default;

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map
