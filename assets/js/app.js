/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/feedback.js":
/*!***********************************!*\
  !*** ./src/assets/js/feedback.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n  let feedbackSlider = new Swiper('.image-feedback', {\r\n    pagination: {\r\n      el: '.swiper-pagination-feedback',\r\n      type: 'bullets',\r\n      clickable: true,\r\n      dynamicBullets: true,\r\n      renderBullet: function (index, classname) {\r\n        return '<span class=\"' + classname + '\">' + (index + 1) + '</span>';\r\n      },\r\n    },\r\n\r\n    effect: 'fade',\r\n    fadeEffect: {\r\n      crossFade: true,\r\n    },\r\n\r\n    // горизонтальний слайдер\r\n    direction: 'horizontal',\r\n\r\n    // Переключение при клике на слайд\r\n    slideToClickedSlide: true,\r\n    // breakpointsBase: 'container',\r\n    // grabCursor: true,\r\n    // бесконечний слайдер\r\n    loop: true,\r\n    // кол-во дублирующих слайдов\r\n    loopedSlides: 0,\r\n    // Вкл / отк. перетаскивания на пк\r\n    simulateTouch: true,\r\n    // Чуствительность свайпа\r\n    touchRatio: 1,\r\n    // Угол срабативания свайпа . перетаскивания\r\n    touchAngle: 45,\r\n\r\n    //  Навигация по хешу\r\n    // hashNavigation: {\r\n    //   // Отслеживать состояние\r\n    //   watchState: true,\r\n    // },\r\n    keyboard: {\r\n      // вкл /отк\r\n      enabled: true,\r\n      // вкл /отк только когда слайдер в пределах вьюпорта\r\n      onlyInViewport: true,\r\n      // вкл /отк управление клавишами pageUp, pageDown\r\n      pageUpDown: true,\r\n    },\r\n    // Автовисота\r\n    autoHeight: true,\r\n    // кол-во слайдов для показа\r\n    slidesPerView: 1,\r\n    // откл функционал слайдера при меншем кол-ве фото чем нужно\r\n    watchOverflow: true,\r\n    //отступ между фото\r\n    spaceBetween: 0,\r\n    // кол-во пролистиваемих слайдов\r\n    slidesPerGroup: 1,\r\n    // активний слайд по центру\r\n    centeredSlides: true,\r\n    // стартовий слайд\r\n    initialSlide: 0,\r\n    // Мультирядность\r\n    slidesPerColumn: 1,\r\n\r\n    // скорость переключение слайдо\r\n    speed: 700,\r\n\r\n    // Брейк поинти (адаптив)\r\n    // breakpoints: {\r\n    //   320: {\r\n    //     slidesPerView: 1,\r\n    //   },\r\n    //   480: {\r\n    //     slidesPerView: 2,\r\n    //   },\r\n    //   990: {\r\n    //     slidesPerView: 3,\r\n    //   },\r\n    // },\r\n\r\n    lazy: false,\r\n\r\n    a11y: {\r\n      firstSlideMessage: 'This is the first slide',\r\n      lastSlideMessage: 'This is the last slide',\r\n      paginationBulletMessage: 'Go to slide {{index}}',\r\n      notificationClass: 'swiper-notification',\r\n    },\r\n  });\r\n\r\n  // Запуск автопрокрути при наведении\r\n  let newsliderBlock = document.querySelector('.image-feedback');\r\n  newsliderBlock.addEventListener('mouseenter', function (e) {\r\n    feedbackSlider.params.autoplay.disableOnInteraction = false;\r\n    feedbackSlider.params.autoplay.delay = 3000;\r\n    feedbackSlider.autoplay.start();\r\n  });\r\n  newsliderBlock.addEventListener('mouseleave', function (e) {\r\n    feedbackSlider.autoplay.stop();\r\n  });\r\n});\r\n\r\n// VARIANT\r\n\r\nlet childSwiper = document.querySelectorAll('.swiper-v');\r\nchildSwiper.forEach(function (index, value) {\r\n  console.log(index.parentElement.querySelector('.single-slider__button-next'));\r\n  let swyper = new Swiper(index, {\r\n    slidesPerView: 1,\r\n    navigation: {\r\n      nextEl: index.parentElement.querySelector('.single-slider__button-next'),\r\n      prevEl: index.parentElement.querySelector('.single-slider__button-prev'),\r\n    },\r\n    pagination: {\r\n      el: index.parentElement.querySelector('.single-slider__pagination'),\r\n      type: 'fraction',\r\n      formatFractionCurrent: function (number) {\r\n        return ('0' + number).slice(-2);\r\n      },\r\n      formatFractionTotal: function (number) {\r\n        return ('0' + number).slice(-2);\r\n      },\r\n      renderFraction: function (currentClass, totalClass) {\r\n        return (\r\n          '<span class=\"' +\r\n          currentClass +\r\n          '\"></span>' +\r\n          ' / ' +\r\n          '<span class=\"' +\r\n          totalClass +\r\n          '\"></span>'\r\n        );\r\n      },\r\n    },\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/feedback.js?");

/***/ }),

/***/ "./src/assets/js/menu-button.js":
/*!**************************************!*\
  !*** ./src/assets/js/menu-button.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n  $('.header__burger').click(function (e) {\r\n    e.preventDefault();\r\n    $('.header__burger, .header__navigation').toggleClass('active');\r\n    $('body').toggleClass('lock');\r\n    $('#logo').toggle();\r\n    $('#language').toggle();\r\n    $('#logo--burger').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#select__box__btn').click(function (e) {\r\n    e.preventDefault();\r\n    $('#select__box__list').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#footer--select__box__btn').click(function (e) {\r\n    e.preventDefault();\r\n    $('#footer--select__box__list').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#contacts__box__title-places').click(function (e) {\r\n    e.preventDefault();\r\n    $('#contacts__list-places').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#contacts__box__title-mood').click(function (e) {\r\n    e.preventDefault();\r\n    $('#contacts__list-mod').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#contacts__box__title-articles').click(function (e) {\r\n    e.preventDefault();\r\n    $('#contacts__list-articles').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#contacts__box__title-games').click(function (e) {\r\n    e.preventDefault();\r\n    $('#contacts__list-games').toggle();\r\n  });\r\n});\r\n\r\n$(document).ready(function () {\r\n  $('#contacts__box__title-pages').click(function (e) {\r\n    e.preventDefault();\r\n    $('#contacts__list-pages').toggle();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/menu-button.js?");

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n  var menu = [\r\n    'Atlit Beach',\r\n    'Another place',\r\n    'Another place',\r\n    'Another place',\r\n    'Another place',\r\n    'Another place',\r\n    'Another place',\r\n  ];\r\n  let myImageSlider = new Swiper('.image-slider', {\r\n    navigation: {\r\n      nextEl: '.swiper-button-next',\r\n      prevEl: '.swiper-button-prev',\r\n    },\r\n    pagination: {\r\n      el: '.swiper-pagination',\r\n\r\n      type: 'bullets',\r\n      clickable: true,\r\n      // dynamicBullets: true,\r\n      renderBullet: function (index, classname) {\r\n        var title = $('.swiper-slide').eq(index).attr('data-title');\r\n        return (\r\n          '<span class=\"' +\r\n          classname +\r\n          '\">' +\r\n          (index < 10 ? '0' + (index + 1) : index + 1) +\r\n          ' ' +\r\n          title +\r\n          '</span>'\r\n        );\r\n\r\n        // return (\r\n        //   '\\\r\n        //   <div class=\"' +\r\n        //   className +\r\n        //   '\">\\\r\n        //   <div>' +\r\n        //   (index < 10 ? '0' + (index + 1) : index + 1) +\r\n        //   '</div>\\\r\n        //   <div>' +\r\n        //   menu[index] +\r\n        //   '</div>\\\r\n        //   </div>'\r\n        // );\r\n      },\r\n\r\n      // type: 'fraction',\r\n      // renderFraction: function (currentClass, totalClass) {\r\n      //   return (\r\n      //     'Фото <span class=\"' +\r\n      //     currentClass +\r\n      //     '\"></span>' +\r\n      //     ' из ' +\r\n      //     '<span class=\"' +\r\n      //     totalClass +\r\n      //     '\"></span>'\r\n      //   );\r\n      // },\r\n\r\n      // type: 'progressbar',\r\n    },\r\n\r\n    // effect: 'flip',\r\n    // flipEffect: {\r\n    //   // тень\r\n    //   slideShadows: true,\r\n    //   // показ только активного слайда\r\n    //   limitRotation: true,\r\n    // },\r\n\r\n    // effect: 'coverflow',\r\n    // coverflowEffect: {\r\n    //   rotate: 30,\r\n    //   stretch: 50,\r\n    //   slideShadows: true,\r\n    //   scale: 1,\r\n    //   modifier: 1,\r\n    // },\r\n\r\n    // effect: 'cube',\r\n    // cubeEffect: {\r\n    //   slideShadows: false,\r\n    //   shadow: true,\r\n    //   shadowOffset: 40,\r\n    //   shadowScale: 0.94,\r\n    // },\r\n\r\n    effect: 'fade',\r\n    fadeEffect: {\r\n      crossFade: true,\r\n    },\r\n\r\n    // effect: 'slide',\r\n\r\n    scrollbar: {\r\n      el: '.swiper-scrollbar',\r\n      draggable: 'true',\r\n      dragSize: 16,\r\n      snapOnRelease: true,\r\n      hide: false,\r\n    },\r\n    mousewheel: {\r\n      enabled: true,\r\n      // Чуствителбность колеса миши\r\n      sensitivity: 1,\r\n      // Класс обьекта на котором будет срабативать прокрутка мишью\r\n      eventsTarget: '.image-slider',\r\n    },\r\n\r\n    // горизонтальний слайдер\r\n    direction: 'horizontal',\r\n\r\n    // Переключение при клике на слайд\r\n    slideToClickedSlide: true,\r\n    breakpointsBase: 'container',\r\n    grabCursor: true,\r\n    // бесконечний слайдер\r\n    loop: true,\r\n    // кол-во дублирующих слайдов\r\n    loopedSlides: 0,\r\n    // Вкл / отк. перетаскивания на пк\r\n    simulateTouch: true,\r\n    // Чуствительность свайпа\r\n    touchRatio: 1,\r\n    // Угол срабативания свайпа . перетаскивания\r\n    touchAngle: 45,\r\n\r\n    //  Навигация по хешу\r\n    hashNavigation: {\r\n      // Отслеживать состояние\r\n      // watchState: true,\r\n    },\r\n    keyboard: {\r\n      // вкл /отк\r\n      enabled: true,\r\n      // вкл /отк только когда слайдер в пределах вьюпорта\r\n      onlyInViewport: true,\r\n      // вкл /отк управление клавишами pageUp, pageDown\r\n      pageUpDown: true,\r\n    },\r\n    // Автовисота\r\n    autoHeight: false,\r\n    // кол-во слайдов для показа\r\n    slidesPerView: 1,\r\n    // откл функционал слайдера при меншем кол-ве фото чем нужно\r\n    watchOverflow: true,\r\n    //отступ между фото\r\n    spaceBetween: 0,\r\n    // кол-во пролистиваемих слайдов\r\n    slidesPerGroup: 1,\r\n    // активний слайд по центру\r\n    centeredSlides: true,\r\n    // стартовий слайд\r\n    initialSlide: 0,\r\n    // Мультирядность\r\n    slidesPerColumn: 1,\r\n\r\n    // свободний режим\r\n    // freeMode: true,\r\n\r\n    // автопрокрутка\r\n    // autoplay: {\r\n    //   // пауза между прокруткою\r\n    //   delay: 6000,\r\n    //   // закончить на последнем слайде\r\n    //   stopOnLastSlide: true,\r\n    //   // отключить послу ручного переключения\r\n    //   disableOnInteraction: false,\r\n    // },\r\n\r\n    // скорость переключение слайдо\r\n    speed: 700,\r\n\r\n    // Брейк поинти (адаптив)\r\n    breakpoints: {\r\n      320: {\r\n        freeMode: true,\r\n        mousewheel: {\r\n          enabled: false,\r\n          // Чуствителбность колеса миши\r\n          sensitivity: 1,\r\n          // Класс обьекта на котором будет срабативать прокрутка мишью\r\n          eventsTarget: '.image-slider',\r\n        },\r\n      },\r\n      480: {},\r\n      990: {},\r\n    },\r\n\r\n    // рассчитать каждый прогресс слайдов c 'watchSlidesVisibility'\r\n    watchSlidesProgress: true,\r\n    //  слайды, которые находятся в видовом экране, будут иметь дополнительный видимый класс\r\n    watchSlidesVisibility: true,\r\n    //  отключить предзагрузку картинок\r\n    // updateOnImagesReady: true,\r\n\r\n    lazy: false,\r\n    // preloadImages: false,\r\n    // // lazy-loading\r\n    // lazy: {\r\n    //   // подгружать на старте переключения слайда\r\n    //   loadOnTransitionStart: false,\r\n    //   // подгрузить предидущию и следущую картинку\r\n    //   loadPrevNext: false,\r\n    // },\r\n    // // слежка за видимими слайдами\r\n    // watchSlidesProgress: true,\r\n    // // добавление класа видимим слайдам\r\n    // watchSlidesVisibility: true,\r\n\r\n    // zoom: {\r\n    //   maxRatio: 2,\r\n    //   minRatio: 1,\r\n    // },\r\n    a11y: {\r\n      enabled: true,\r\n      prevSlideMessage: 'Previous slide',\r\n      nextSlideMessage: 'Next slide',\r\n\r\n      firstSlideMessage: 'This is the first slide',\r\n      lastSlideMessage: 'This is the last slide',\r\n      paginationBulletMessage: 'Go to slide {{index}}',\r\n      notificationClass: 'swiper-notification',\r\n    },\r\n  });\r\n\r\n  // Запуск автопрокрути при наведении\r\n  let sliderBlock = document.querySelector('.image-slider');\r\n  sliderBlock.addEventListener('mouseenter', function (e) {\r\n    myImageSlider.params.autoplay.disableOnInteraction = false;\r\n    myImageSlider.params.autoplay.delay = 3000;\r\n    myImageSlider.autoplay.start();\r\n  });\r\n  sliderBlock.addEventListener('mouseleave', function (e) {\r\n    myImageSlider.autoplay.stop();\r\n  });\r\n\r\n  // Фракция - вивод индекса страници\r\n  // let mySliderAllSlides = document.querySelector('.hero-overlay__count__total');\r\n  let mySliderCurrentSlide = document.querySelector(\r\n    '.hero-overlay__count__current',\r\n  );\r\n  // mySliderAllSlides.innerHTML = myImageSlider.slides.length;\r\n  myImageSlider.on('slideChange', function () {\r\n    let currentSlide = '0' + ++myImageSlider.realIndex;\r\n    mySliderCurrentSlide.innerHTML = currentSlide;\r\n  });\r\n\r\n  myImageSlider.on({\r\n    transitionStart: function () {\r\n      var videos = document.querySelectorAll('video');\r\n\r\n      Array.prototype.forEach.call(videos, function (video) {\r\n        video.pause();\r\n      });\r\n    },\r\n\r\n    transitionEnd: function () {\r\n      var activeIndex = this.activeIndex;\r\n      var activeSlide =\r\n        document.getElementsByClassName('swiper-slide')[activeIndex];\r\n      var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];\r\n      activeSlideVideo.play();\r\n    },\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/script.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/feedback.js ./src/assets/js/menu-button.js ./src/assets/js/script.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\IT\\exit\\alfa-glamping\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! D:\\IT\\exit\\alfa-glamping\\src\\assets\\js\\feedback.js */\"./src/assets/js/feedback.js\");\n__webpack_require__(/*! D:\\IT\\exit\\alfa-glamping\\src\\assets\\js\\menu-button.js */\"./src/assets/js/menu-button.js\");\nmodule.exports = __webpack_require__(/*! D:\\IT\\exit\\alfa-glamping\\src\\assets\\js\\script.js */\"./src/assets/js/script.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/feedback.js_./src/assets/js/menu-button.js_./src/assets/js/script.js?");

/***/ })

/******/ });