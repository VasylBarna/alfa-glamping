$(document).ready(function () {
  var menu = [
    'Atlit Beach',
    'Another place',
    'Another place',
    'Another place',
    'Another place',
    'Another place',
    'Another place',
  ];
  let myImageSlider = new Swiper('.image-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',

      type: 'bullets',
      clickable: true,
      // dynamicBullets: true,
      renderBullet: function (index, classname) {
        var title = $('.swiper-slide').eq(index).attr('data-title');
        return (
          '<span class="' +
          classname +
          '">' +
          (index < 10 ? '0' + (index + 1) : index + 1) +
          ' ' +
          title +
          '</span>'
        );

        // return (
        //   '\
        //   <div class="' +
        //   className +
        //   '">\
        //   <div>' +
        //   (index < 10 ? '0' + (index + 1) : index + 1) +
        //   '</div>\
        //   <div>' +
        //   menu[index] +
        //   '</div>\
        //   </div>'
        // );
      },

      // type: 'fraction',
      // renderFraction: function (currentClass, totalClass) {
      //   return (
      //     'Фото <span class="' +
      //     currentClass +
      //     '"></span>' +
      //     ' из ' +
      //     '<span class="' +
      //     totalClass +
      //     '"></span>'
      //   );
      // },

      // type: 'progressbar',
    },

    // effect: 'flip',
    // flipEffect: {
    //   // тень
    //   slideShadows: true,
    //   // показ только активного слайда
    //   limitRotation: true,
    // },

    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 30,
    //   stretch: 50,
    //   slideShadows: true,
    //   scale: 1,
    //   modifier: 1,
    // },

    // effect: 'cube',
    // cubeEffect: {
    //   slideShadows: false,
    //   shadow: true,
    //   shadowOffset: 40,
    //   shadowScale: 0.94,
    // },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    // effect: 'slide',

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: 'true',
      dragSize: 16,
      snapOnRelease: true,
      hide: false,
    },
    mousewheel: {
      enabled: true,
      // Чуствителбность колеса миши
      sensitivity: 1,
      // Класс обьекта на котором будет срабативать прокрутка мишью
      eventsTarget: '.image-slider',
    },

    // горизонтальний слайдер
    direction: 'horizontal',

    // Переключение при клике на слайд
    slideToClickedSlide: true,
    breakpointsBase: 'container',
    grabCursor: true,
    // бесконечний слайдер
    loop: true,
    // кол-во дублирующих слайдов
    loopedSlides: 0,
    // Вкл / отк. перетаскивания на пк
    simulateTouch: true,
    // Чуствительность свайпа
    touchRatio: 1,
    // Угол срабативания свайпа . перетаскивания
    touchAngle: 45,

    //  Навигация по хешу
    hashNavigation: {
      // Отслеживать состояние
      // watchState: true,
    },
    keyboard: {
      // вкл /отк
      enabled: true,
      // вкл /отк только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // вкл /отк управление клавишами pageUp, pageDown
      pageUpDown: true,
    },
    // Автовисота
    autoHeight: false,
    // кол-во слайдов для показа
    slidesPerView: 1,
    // откл функционал слайдера при меншем кол-ве фото чем нужно
    watchOverflow: true,
    //отступ между фото
    spaceBetween: 0,
    // кол-во пролистиваемих слайдов
    slidesPerGroup: 1,
    // активний слайд по центру
    centeredSlides: true,
    // стартовий слайд
    initialSlide: 0,
    // Мультирядность
    slidesPerColumn: 1,

    // свободний режим
    // freeMode: true,

    // автопрокрутка
    // autoplay: {
    //   // пауза между прокруткою
    //   delay: 6000,
    //   // закончить на последнем слайде
    //   stopOnLastSlide: true,
    //   // отключить послу ручного переключения
    //   disableOnInteraction: false,
    // },

    // скорость переключение слайдо
    speed: 700,

    // Брейк поинти (адаптив)
    breakpoints: {
      320: {
        freeMode: true,
        mousewheel: {
          enabled: false,
          // Чуствителбность колеса миши
          sensitivity: 1,
          // Класс обьекта на котором будет срабативать прокрутка мишью
          eventsTarget: '.image-slider',
        },
      },
      480: {},
      990: {},
    },

    // рассчитать каждый прогресс слайдов c 'watchSlidesVisibility'
    watchSlidesProgress: true,
    //  слайды, которые находятся в видовом экране, будут иметь дополнительный видимый класс
    watchSlidesVisibility: true,
    //  отключить предзагрузку картинок
    // updateOnImagesReady: true,

    lazy: false,
    // preloadImages: false,
    // // lazy-loading
    // lazy: {
    //   // подгружать на старте переключения слайда
    //   loadOnTransitionStart: false,
    //   // подгрузить предидущию и следущую картинку
    //   loadPrevNext: false,
    // },
    // // слежка за видимими слайдами
    // watchSlidesProgress: true,
    // // добавление класа видимим слайдам
    // watchSlidesVisibility: true,

    // zoom: {
    //   maxRatio: 2,
    //   minRatio: 1,
    // },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',

      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
    },
  });

  // Запуск автопрокрути при наведении
  let sliderBlock = document.querySelector('.image-slider');
  sliderBlock.addEventListener('mouseenter', function (e) {
    myImageSlider.params.autoplay.disableOnInteraction = false;
    myImageSlider.params.autoplay.delay = 3000;
    myImageSlider.autoplay.start();
  });
  sliderBlock.addEventListener('mouseleave', function (e) {
    myImageSlider.autoplay.stop();
  });

  // Фракция - вивод индекса страници
  // let mySliderAllSlides = document.querySelector('.hero-overlay__count__total');
  let mySliderCurrentSlide = document.querySelector(
    '.hero-overlay__count__current',
  );
  // mySliderAllSlides.innerHTML = myImageSlider.slides.length;
  myImageSlider.on('slideChange', function () {
    let currentSlide = '0' + ++myImageSlider.realIndex;
    mySliderCurrentSlide.innerHTML = currentSlide;
  });

  myImageSlider.on({
    transitionStart: function () {
      var videos = document.querySelectorAll('video');

      Array.prototype.forEach.call(videos, function (video) {
        video.pause();
      });
    },

    transitionEnd: function () {
      var activeIndex = this.activeIndex;
      var activeSlide =
        document.getElementsByClassName('swiper-slide')[activeIndex];
      var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
      activeSlideVideo.play();
    },
  });
});
