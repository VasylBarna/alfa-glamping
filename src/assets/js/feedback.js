$(document).ready(function () {
  let feedbackSlider = new Swiper('.image-feedback', {
    pagination: {
      el: '.swiper-pagination-feedback',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, classname) {
        return '<span class="' + classname + '">' + (index + 1) + '</span>';
      },
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    // горизонтальний слайдер
    direction: 'horizontal',

    // Переключение при клике на слайд
    slideToClickedSlide: true,
    // breakpointsBase: 'container',
    // grabCursor: true,
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
    // hashNavigation: {
    //   // Отслеживать состояние
    //   watchState: true,
    // },
    keyboard: {
      // вкл /отк
      enabled: true,
      // вкл /отк только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // вкл /отк управление клавишами pageUp, pageDown
      pageUpDown: true,
    },
    // Автовисота
    autoHeight: true,
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

    // скорость переключение слайдо
    speed: 700,

    // Брейк поинти (адаптив)
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   480: {
    //     slidesPerView: 2,
    //   },
    //   990: {
    //     slidesPerView: 3,
    //   },
    // },

    lazy: false,

    a11y: {
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
    },
  });

  // Запуск автопрокрути при наведении
  let newsliderBlock = document.querySelector('.image-feedback');
  newsliderBlock.addEventListener('mouseenter', function (e) {
    feedbackSlider.params.autoplay.disableOnInteraction = false;
    feedbackSlider.params.autoplay.delay = 3000;
    feedbackSlider.autoplay.start();
  });
  newsliderBlock.addEventListener('mouseleave', function (e) {
    feedbackSlider.autoplay.stop();
  });
});

// VARIANT

let childSwiper = document.querySelectorAll('.swiper-v');
childSwiper.forEach(function (index, value) {
  console.log(index.parentElement.querySelector('.single-slider__button-next'));
  let swyper = new Swiper(index, {
    slidesPerView: 1,
    navigation: {
      nextEl: index.parentElement.querySelector('.single-slider__button-next'),
      prevEl: index.parentElement.querySelector('.single-slider__button-prev'),
    },
    pagination: {
      el: index.parentElement.querySelector('.single-slider__pagination'),
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      },
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +
          currentClass +
          '"></span>' +
          ' / ' +
          '<span class="' +
          totalClass +
          '"></span>'
        );
      },
    },
  });
});
