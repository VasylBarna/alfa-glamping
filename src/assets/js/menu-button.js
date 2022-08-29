$(document).ready(function () {
  $('.header__burger').click(function (e) {
    e.preventDefault();
    $('.header__burger, .header__navigation').toggleClass('active');
    $('body').toggleClass('lock');
    $('#logo').toggle();
    $('#language').toggle();
    $('#logo--burger').toggle();
  });
});

$(document).ready(function () {
  $('#select__box__btn').click(function (e) {
    e.preventDefault();
    $('#select__box__list').toggle();
  });
});

$(document).ready(function () {
  $('#footer--select__box__btn').click(function (e) {
    e.preventDefault();
    $('#footer--select__box__list').toggle();
  });
});

$(document).ready(function () {
  $('#contacts__box__title-places').click(function (e) {
    e.preventDefault();
    $('#contacts__list-places').toggle();
  });
});

$(document).ready(function () {
  $('#contacts__box__title-mood').click(function (e) {
    e.preventDefault();
    $('#contacts__list-mod').toggle();
  });
});

$(document).ready(function () {
  $('#contacts__box__title-articles').click(function (e) {
    e.preventDefault();
    $('#contacts__list-articles').toggle();
  });
});

$(document).ready(function () {
  $('#contacts__box__title-games').click(function (e) {
    e.preventDefault();
    $('#contacts__list-games').toggle();
  });
});

$(document).ready(function () {
  $('#contacts__box__title-pages').click(function (e) {
    e.preventDefault();
    $('#contacts__list-pages').toggle();
  });
});
