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

      _components.WinScroll.init();

      _components.Header.init();

      _components.Popup.init();

      _components.HeroBanner.init();

      _components.Reveal.init();

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

},{"./components":9,"./utilities":13}],2:[function(require,module,exports){
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
  };

  var handleClickMenu = function handleClickMenu() {
    $('.header__nav__link, .js-nav-scroll').on('click', function (e) {
      var _this = $(e.currentTarget);

      if ($(window).width() <= 992) {
        if ($('body').hasClass('show-nav')) {
          _utilities.Scrolllable.enable();

          $('body').removeClass('show-nav');
        }
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
  }; // --- handleCheckClass


  var handleCheckClass = function handleCheckClass() {
    if ($(window).width() >= 992) {
      _utilities.Scrolllable.enable();

      $('body').removeClass('show-nav');
    }
  }; // --- handleSet
  // const handleSet = () => {
  //   if (window.location.hash) {
  //     let _url = window.location.href;
  //     let _parts = _url.split("#");
  //     let _target = _parts[1];
  //     let _headerHeight = $('.header').outerHeight() + 10;
  //     let _headerBottom = $('.header__bottom').outerHeight() + 10;
  //     let _offsetTop = $('#' + _target).offset();
  //     _offsetTop -= _offsetTop > $(window).scrollTop() ? _headerBottom : _headerHeight;
  //     $('html, body').animate({
  //       scrollTop: _offsetTop
  //     }, 'slow');
  //     $("[data-target='" + _target + "']").parents('.header-hunter__item').addClass('active');
  //   }
  // }
  // --- handleClick
  // const handleClick = function handleClick() {
  //   $(".header__nav__item").each(function (i, v) {
  //     let _this = $(v).children('.header__nav__link');
  //     let _target = _this.attr('data-target');
  //     _hunterMenu.push({
  //       'anchor': _this,
  //       'id': _target
  //     });
  //     _this.on('click', function (e) {
  //       let _this = $(e.currentTarget);
  //       let _target = _this.attr('data-target');
  //       let _headerHeight = $('.header').outerHeight();
  //       let _headerTop = $('.header__bottom').outerHeight();
  //       let _offsetTop = $('#' + _target).offset().top;
  //       _offsetTop -= _offsetTop > $(window).scrollTop() ? _headerTop : _headerHeight;
  //       if ($(window).width() > 768) {
  //         $('html, body').animate({
  //           scrollTop: _offsetTop
  //         }, 'slow');
  //       } else {
  //         $('html, body').delay(700).animate({
  //           scrollTop: _offsetTop
  //         }, 'slow');
  //       }
  //     });
  //   });
  // }
  // --- handleScroll
  // const handleScroll = () => {
  //   $(window).on('scroll', function () {
  //     $.each(_hunterMenu, function (e, elem) {
  //       let _id = $('#' + elem.id);
  //       let _target = _id[0];
  //       let _placement = _target.getBoundingClientRect();
  //       let _headerHeight = $('.header').outerHeight() + 10;
  //       let _headerBottom = $('.header__bottom').outerHeight() + 10;
  //       let _placementBottom = _placement.bottom;
  //       _placementBottom -= $('body').hasClass('window-scrolldown') ? _headerBottom : _headerHeight;
  //       $("[data-target='" + elem.id + "']").parents('.header-hunter__item').addClass('active').siblings().removeClass('active');
  //       if (_placement.top < window.innerHeight && _placementBottom > 0) {
  //         history.pushState({}, '', '#' + elem.id);
  //         return false;
  //         /* Exit $.each loop */
  //       };
  //     });
  //   });
  // };
  // - init


  var init = function init() {
    handleMobileNav();
    handleScrollMobileMenu();
    handleClickMenu(); // handleSet();
    // handleClick();
    // handleScroll();
  };

  return {
    init: init,
    checkClass: handleCheckClass
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":13}],4:[function(require,module,exports){
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
        dots: false,
        nav: false,
        loop: false,
        touchDrag: false,
        mouseDrag: false,
        autoplayHoverPause: false,
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

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utilities = require("../utilities");

/* ------------------------------------------------------------------------------
@name: Popup
@description: Popup
--------------------------------------------------------------------------------- */
// --- utilities
// --- Popup
var Popup = function () {
  // -- handleClickPopup
  var handleClickPopup = function handleClickPopup() {
    $('.js-show-popup').on('click', function (e) {
      var _this = $(e.currentTarget),
          _embed = _this.attr('data-video'),
          _parents = _this.parents('body').find('.popup'),
          _contentItem = '<iframe class="iframe-embed" src="https://www.youtube.com/embed/' + _embed + '?autoplay=1" frameborder="0" allow="autoplay"></iframe>';

      if (_parents.hasClass('show-popup')) {
        _parents.removeClass('show-popup');

        _utilities.Scrolllable.enable();

        $('.iframe-embed').remove();
      } else {
        _utilities.Scrolllable.disable();

        _parents.addClass('show-popup');

        _parents.find('.js-result-popup').html(_contentItem);
      }
    }); // --- handleHidePopup

    $('.js-hide-popup').on('click', function (e) {
      if ($('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');

        _utilities.Scrolllable.enable();

        $('.iframe-embed').remove();
      }
    }); // --- handleClickBody

    $('body').on('click', function (e) {
      if ($('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');

        _utilities.Scrolllable.enable();

        $('.iframe-embed').remove();
      }
    }); // stopPropagation

    $('body').on('click', '.js-show-popup, .popup__body', function (e) {
      e.stopPropagation();
    });
  }; // --- handleKeyupPopup


  var handleKeyupPopup = function handleKeyupPopup() {
    $('body').on('keyup', function (e) {
      if (e.which == 27 && $('.popup').hasClass('show-popup')) {
        $('.popup').removeClass('show-popup');

        _utilities.Scrolllable.enable();
      }
    });
  }; // --- init


  var init = function init() {
    handleClickPopup();
    handleKeyupPopup();
  }; // --- return


  return {
    init: init
  };
}();

var _default = Popup;
exports["default"] = _default;

},{"../utilities":13}],6:[function(require,module,exports){
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
    // -- presenting section
    ScrollReveal().reveal('.presenting__left', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.presenting__right', handleRevealConfig(50, '24px', 50, 'right')); // -- features-item section

    ScrollReveal().reveal('.features__item', handleRevealConfig(50, '24px', 50, 'bottom')); // -- success-story section

    ScrollReveal().reveal('.success-story__img', handleRevealConfig(50, '24px', 50, 'left'));
    ScrollReveal().reveal('.success-story__txt', handleRevealConfig(50, '24px', 50, 'right')); // -- our-product section

    ScrollReveal().reveal('.our-product__img', handleRevealConfig(50, '24px', 50, 'right'));
    ScrollReveal().reveal('.our-product__txt', handleRevealConfig(50, '24px', 50, 'left'));
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
@name: WinScroll
@description: WinScroll
--------------------------------------------------------------------------------- */
// --- WinScroll
var WinScroll = function () {
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
    handleHeaderScroll();
    handleScroll();
  }; // --- return


  return {
    init: init
  };
}();

var _default = WinScroll;
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

      _index.Header.checkClass();

      _index.Footer.footerSticky();
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

},{"./index":9}],9:[function(require,module,exports){
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
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _Popup["default"];
  }
});
Object.defineProperty(exports, "Reveal", {
  enumerable: true,
  get: function get() {
    return _Reveal["default"];
  }
});
Object.defineProperty(exports, "WinScroll", {
  enumerable: true,
  get: function get() {
    return _WinScroll["default"];
  }
});
Object.defineProperty(exports, "WindowResize", {
  enumerable: true,
  get: function get() {
    return _WindowResize["default"];
  }
});

var _WinScroll = _interopRequireDefault(require("./WinScroll"));

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _Header = _interopRequireDefault(require("./Header"));

var _Popup = _interopRequireDefault(require("./Popup"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _Reveal = _interopRequireDefault(require("./Reveal"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Footer":2,"./Header":3,"./HeroBanner":4,"./Popup":5,"./Reveal":6,"./WinScroll":7,"./WindowResize":8}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"../variables":16}],13:[function(require,module,exports){
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

},{"./BrowserCheck":10,"./Scrolllable":11,"./Validation":12,"./isOS":14}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./Regex":15}]},{},[1])

//# sourceMappingURL=maps/app.js.map
