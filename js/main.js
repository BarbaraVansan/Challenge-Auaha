$(document).ready(function () {
  $('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.slider-vitrine').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$("#menu-compras").hover(() => {
  $("#section-menu-flutuante").toggleClass('hide show');
}, () => {
  $("#section-menu-flutuante").toggleClass('show hide');
});

