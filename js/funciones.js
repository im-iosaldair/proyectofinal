/*js para el slide */
$(function() {
    $(".slide1").responsiveSlides();
});

/*js del menu*/
$("#iconomenu").click(function () {
  $("#menu").slideToggle();
});

/*js para el boton anclado */
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $("#btnsubir").fadeIn();
      } else {
        $("#btnsubir").fadeOut();
      }
    });
  
    $(".#btnsubir").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });