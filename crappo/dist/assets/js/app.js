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


      _components.Header.init();

      _components.HeroBanner.init();

      _components.Reveal.init();

      _components.WindowResize.init();

      _components.WindowScroll.init();

      _components.Footer.init();
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

},{"./components":8,"./utilities":12}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Footer
@description: Footer
--------------------------------------------------------------------------------- */
var Footer = function () {
  // -- handle padding bottom
  var handleFooterSticky = function handleFooterSticky() {
    var _footer = $('.footer').innerHeight();

    if ($(window).width() > 767) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  }; // -- handle accordion


  var handleAccordion = function handleAccordion() {
    $('.js-accordion-menu, .footer__menu__title').on('click', function (e) {
      var _this = $(e.currentTarget);

      var _parents = _this.parents('.footer__menu__item');

      if ($(window).width() <= 575.88) {
        if (_this.parents('.footer__menu__item').hasClass('footer__menu__item--show')) {
          _this.parents('.footer__menu__item').find('.footer__nav').slideUp(300);

          _this.parents('.footer__menu__item--show').removeClass('footer__menu__item--show');
        } else {
          _parents.siblings('.footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').slideUp(300);

          _this.parents('.footer__menu__item').find('.footer__nav').slideDown(300);

          _this.parents('.footer__menu__item').addClass('footer__menu__item--show');
        }
      }
    });
  }; // --- handle destroy accordion


  var handleDestroyAccordion = function handleDestroyAccordion() {
    if ($(window).width() > 575.86) {
      $('.js-accordion-menu, .footer__menu__item').removeClass('footer__menu__item--show').find('.footer__nav').removeAttr('style');
    }
  }; // - init


  var init = function init() {
    handleFooterSticky();
    handleAccordion();
  };

  return {
    init: init,
    footerSticky: handleFooterSticky,
    destroyAccordion: handleDestroyAccordion
  };
}();

var _default = Footer;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
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
  // --- handleMobileMenu
  var handleMobileMenu = function handleMobileMenu() {
    $('.js-burger-menu').on('click', function (e) {
      var _this = $(e.currentTarget);

      if ($('body').hasClass('show-menu')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-menu');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-menu');
      }
    });
  }; // --- handleDestroyMobileMenu


  var handleDestroyMobileMenu = function handleDestroyMobileMenu() {
    if ($(window).width() >= 767) {
      if ($('body').hasClass('show-menu')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-menu');
      }
    }
  }; // --- init


  var init = function init() {
    handleMobileMenu();
  }; // --- return


  return {
    init: init,
    destroyMobileMenu: handleDestroyMobileMenu
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":12}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Hero Banner
@description: Hero Banner
--------------------------------------------------------------------------------- */
// --- utilities
var HeroBanner = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var _selector = $('.js-hero-banner');

    var _itemLength = $('.js-hero-banner .hero-banner__item').length;
    var _itemRun = 1; // destroyCarousel

    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    } // --- check if itemLength > itemRun


    if (_itemLength > _itemRun) {
      // -- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        dots: false,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
        dotsSpeed: 4000,
        autoplaySpeed: 4000,
        dragEndSpeed: 450
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

},{"../utilities":12}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

      _index.Header.destroyMobileMenu();

      _index.Footer.footerSticky();

      _index.Footer.destroyAccordion();

      $('body').removeClass('hold-transition');
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

},{"./index":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Window Scroll
@description: Window Scroll
--------------------------------------------------------------------------------- */
// --- WindowScroll
var WindowScroll = function () {
  var _lastScrollTop = 0;
  var _delta = 4;
  var _deltaCalc = 4;

  var _headerHeight = $('.header').height() / 2; // --- windowTemp


  var _windowTemp = $(window).width(); // --- handleHeaderScroll


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
    handleScroll();
  }; // --- return


  return {
    init: init,
    checkScroll: handleScroll
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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

var _Header = _interopRequireDefault(require("./Header"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _Reveal = _interopRequireDefault(require("./Reveal"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Footer":2,"./Header":3,"./HeroBanner":4,"./Reveal":5,"./WindowResize":6,"./WindowScroll":7}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _variables = require("../variables");

/* ------------------------------------------------------------------------------
@name: Validation
@description: Validation
--------------------------------------------------------------------------------- */
// --- variables
var Validation = function () {
  // - handleInput
  var handleInput = function handleInput(eventsEl, selectorEl) {
    $.each(eventsEl, function (ie, ve) {
      $.each(selectorEl, function (i, v) {
        $('#' + v.id).on(ve, function (e) {
          var _this = $(e.currentTarget),
              _val = _this.val(),
              _target = _this.attr('data-target'),
              _alertEl = $('#' + _target);

          var _errorMessage; // Condition if validation does not error


          _alertEl.removeClass('error');

          _this.parent().removeClass('error'); // Minimum Validation


          if (v.validation.minimum) {
            if (_val.length < v.validation.minimumChar) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Maximum Validation


          if (v.validation.maximum) {
            if (_val.length < v.validation.maximumChar) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Minimum Validation


          if (v.validation.name) {
            if (!_variables.PERSON_NAME.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Email validation


          if (v.validation.email) {
            if (!_variables.EMAIL.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid');
            }
          } // Numeric validation


          if (v.validation.phone) {
            if (!_variables.PHONE_NUMBER.test(_val)) {
              _errorMessage = _alertEl.attr('data-invalid-phone');
            }
          } // Required validation


          if (_variables.WHITESPACE.test(_val)) {
            _errorMessage = _alertEl.attr('data-req');
          } // Error Message


          if (_errorMessage !== undefined) {
            _alertEl.text(_errorMessage);

            _alertEl.addClass('error');

            _this.parent().addClass('error');
          }
        });
      });
    }); // Return Handle keypress

    handleKeypress();
  }; // handleKeypress


  var handleKeypress = function handleKeypress() {
    $('.number-only').on('keypress', function (e) {
      var _this = $(e.currentTarget),
          _val = _this.val(),
          _target = _this.attr('data-target'),
          _alertEl = $('#' + _target);

      var _errorMessage;

      if (!_variables.NUMBERIC.test(e.key)) {
        _errorMessage = _alertEl.attr('data-invalid');

        _alertEl.text(_errorMessage);

        _alertEl.addClass('error');

        _this.parent().addClass('error'); // remove error after few second


        setTimeout(function () {
          _alertEl.removeClass('error');

          _this.parent().removeClass('error');
        }, 2000);
        e.preventDefault();
      }
    });
  };

  return {
    config: handleInput
  };
}();

var _default = Validation;
exports["default"] = _default;

},{"../variables":15}],12:[function(require,module,exports){
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
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
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

var _Validation = _interopRequireDefault(require("./Validation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./BrowserCheck":9,"./Scrolllable":10,"./Validation":11,"./isOS":13}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITESPACE = exports.PHONE_NUMBER = exports.PERSON_NAME = exports.NUMBERIC = exports.FULL_NAME = exports.EMAIL = void 0;

/* ------------------------------------------------------------------------------
@name: Regex
@description: Regex
--------------------------------------------------------------------------------- */
var WHITESPACE = /^ *$/;
exports.WHITESPACE = WHITESPACE;
var EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
exports.EMAIL = EMAIL;
var NUMBERIC = /[0-9]+$/i;
exports.NUMBERIC = NUMBERIC;
var PHONE_NUMBER = /^(0|\+62)+([0-9]){4,16}/i;
exports.PHONE_NUMBER = PHONE_NUMBER;
var FULL_NAME = /^(?:[\u00c0-\u01ffa-zA-Z-\s\.']){3,}(?:[\u00c0-\u01ffa-zA-Z-\s\.']{3,})+$/i;
exports.FULL_NAME = FULL_NAME;
var PERSON_NAME = /^[a-zA-Z][a-zA-Z\-' ]*[a-zA-Z ]$/i;
exports.PERSON_NAME = PERSON_NAME;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Regex = require("./Regex");

Object.keys(_Regex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Regex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Regex[key];
    }
  });
});

},{"./Regex":14}]},{},[1])

//# sourceMappingURL=maps/app.js.map
