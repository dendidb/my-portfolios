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


      _components.WindowScroll.init();

      _components.WindowResize.init();

      _components.Header.init();

      _components.HeroBanner.init();

      _components.Testimonials.init();

      _components.Footer.init();

      _components.Blog.init();
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

},{"./components":9,"./utilities":12}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* ------------------------------------------------------------------------------
@name: Blog
@description: Blog
--------------------------------------------------------------------------------- */
var Blog = function () {
  // --- handleCheckHeight
  var setHeight = function setHeight() {
    handleResetHeight();
    var _height = 0;
    $('.blog__list .blog__item').each(function (i, e) {
      if (_height < $(e).find('.blog__txt').height()) {
        _height = $(e).find('.blog__txt').height();
      }
    });
    $('.blog__txt').height(_height);
  }; // --- handleResetHeight


  var handleResetHeight = function handleResetHeight() {
    var _attr = $('.blog__txt').attr('style');

    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.blog__txt').removeAttr('style');
    }
  }; // init


  var init = function init() {
    setHeight();
  };

  return {
    init: init,
    checkHeight: setHeight
  };
}();

var _default = Blog;
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
var Footer = function () {
  var _width = 767.98; // handleRunCarousel

  var handleClickAccordion = function handleClickAccordion() {
    $('.js-footer-accordion .footer__title').on('click', function (e) {
      var _this = $(e.currentTarget);

      if ($(window).width() <= _width) {
        if (_this.parents('.footer__menu__item').hasClass("footer__menu__item--showed")) {
          _this.parents('.footer__menu__item').removeClass("footer__menu__item--showed").find(".footer__nav").slideUp();
        } else {
          // _this.parents('.js-footer-accordion').find('.footer__menu__item').removeClass("footer__menu__item--showed").find(".footer__nav").slideUp();
          // _this.parents('.footer__menu__item').addClass("footer__menu__item--showed").find(".footer__nav").slideDown();
          _this.parents('.footer__menu__item').siblings('.footer__menu__item').removeClass("footer__menu__item--showed").find(".footer__nav").slideUp();

          _this.parents('.footer__menu__item').find(".footer__nav").slideDown().parents('.footer__menu__item').addClass("footer__menu__item--showed");
        }
      }
    });
  }; // handle Destroy Accordion


  var handleDestroyAccordion = function handleDestroyAccordion() {
    if ($(window).width() > _width) {
      $('.js-footer-accordion .footer__menu__item').removeClass('footer__menu__item--showed').find('.footer__nav').removeAttr('style');
    }
  }; // handle padding bottom


  var handleFooterSticky = function handleFooterSticky() {
    var _footer = $('.footer').innerHeight();

    if ($(window).width() > _width) {
      $('.main-site').css('paddingBottom', _footer);
    } else {
      $('.main-site').removeAttr('style');
    }
  }; // init


  var init = function init() {
    handleClickAccordion();
    handleFooterSticky();
  };

  return {
    init: init,
    footerSticky: handleFooterSticky,
    destroyAccordion: handleDestroyAccordion
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
// --- Header
var Header = function () {
  // --- windowTemp
  var _windowTemp = $(window).width(); // --- handleMobileMenu


  var handleMobileMenu = function handleMobileMenu() {
    $('.js-mobile-menu').on('click', function (e) {
      var _this = $(e.currentTarget);

      if ($('body').hasClass('show-menu')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-menu');
      } else {
        _utilities.Scrolllable.disable();

        $('body').addClass('show-menu');
      }
    });
  }; // --- handleClickMenu


  var handleClickMenu = function handleClickMenu() {
    $('.header__nav__link').on('click', function () {
      if ($(window).width() <= 992) {
        if ($('body').hasClass('show-menu')) {
          _utilities.Scrolllable.enable();

          $('body').removeClass('show-menu');
        }
      }
    });
  }; // --- handle destroy mobile menu


  var handleDestroyMobileMenu = function handleDestroyMobileMenu() {
    if ($(window).width() >= 992) {
      if ($('body').hasClass('show-menu')) {
        _utilities.Scrolllable.enable();

        $('body').removeClass('show-menu');
      }
    }
  }; // --- init


  var init = function init() {
    handleMobileMenu();
    handleClickMenu();
  }; // --- return


  return {
    init: init,
    destroyMobileMenu: handleDestroyMobileMenu
  };
}();

var _default = Header;
exports["default"] = _default;

},{"../utilities":12}],5:[function(require,module,exports){
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
@name: Testimonials
--------------------------------------------------------------------------------- */
var Testimonials = function () {
  // handleRunCarousel
  var handleRunCarousel = function handleRunCarousel() {
    var selector = $('.js-testimonials');
    var itemLength = $('.js-testimonials .testimonials__item').length;
    var itemRun = 1; // destroy carousel

    selector.owlCarousel('destroy'); // --- check if itemLength > itemRun

    if (itemLength > itemRun) {
      // --- init carousel
      selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        touchDrag: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 7000,
        dotsSpeed: 1000,
        autoplaySpeed: 1000,
        dragEndSpeed: 800
      });
    }
  }; // init


  var init = function init() {
    handleRunCarousel();
  };

  return {
    init: init
  };
}();

var _default = Testimonials;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
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

      _index.Header.destroyMobileMenu();

      _index.Footer.footerSticky();

      _index.Footer.destroyAccordion();

      _index.Blog.checkHeight();
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

},{"./index":9}],8:[function(require,module,exports){
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
      if (!$('body').hasClass('show-menu')) {
        $('body').addClass('scroll-down');
      }
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
    init: init
  };
}();

var _default = WindowScroll;
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function get() {
    return _Blog["default"];
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
Object.defineProperty(exports, "Testimonials", {
  enumerable: true,
  get: function get() {
    return _Testimonials["default"];
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

var _WindowResize = _interopRequireDefault(require("./WindowResize"));

var _WindowScroll = _interopRequireDefault(require("./WindowScroll"));

var _Header = _interopRequireDefault(require("./Header"));

var _HeroBanner = _interopRequireDefault(require("./HeroBanner"));

var _Testimonials = _interopRequireDefault(require("./Testimonials"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Blog = _interopRequireDefault(require("./Blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./Blog":2,"./Footer":3,"./Header":4,"./HeroBanner":5,"./Testimonials":6,"./WindowResize":7,"./WindowScroll":8}],10:[function(require,module,exports){
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

},{"./BrowserCheck":10,"./Scrolllable":11,"./isOS":13}],13:[function(require,module,exports){
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
