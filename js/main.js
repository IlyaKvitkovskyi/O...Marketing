$(function () {

  $('.slider__blog-inner').slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt="arrow-right"></button>',
  });

  $('.menu__btn').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.portfolio__content');
});
