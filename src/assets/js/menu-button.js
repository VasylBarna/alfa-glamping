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
