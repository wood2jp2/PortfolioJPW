$(document).ready(function() {
  $('.slider').slider();
  $('.parallax').parallax();
  $('.carousel-slider').carousel();
  $('.button-collapse').sideNav('show');
  $(".button-collapse").sideNav();

  var carouselLink = $('<a>')

  $('.fixed-action-btn').on('click', function() {
    $('.fixed-action-btn').openFAB();
  });
});
