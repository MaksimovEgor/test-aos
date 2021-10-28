$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    infinitie: true,
    initialSlide: 1,
    centerMode: true,
    fade: true,
    asMavFor: '.sliderleft',
  }),
 $(".sliderleft").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  
  infinitie: true,
  initialSlide: 0,
  centerMode: true,
  fade: true,
  asMavFor: '.sliderright',
 }),
 $(".sliderright").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  infinitie: true,
  initialSlide: 2,
  fade: true,
  asMavFor: '.slider',
});
});
