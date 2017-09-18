$(document).ready(function() {
  $('.slider').slider();
  $('.parallax').parallax();
  $('.carousel-slider').carousel();

  var carouselLink = $('<a>')

  $('.fixed-action-btn').on('click', function() {
    $('.fixed-action-btn').openFAB();
  });


  // $(carouselLink).on('click', function() {
  //   if (this.attr('id') === 'curb') {
  //     window.location.href = "https://curb-your-comment.herokuapp.com/home"
  //   } else if (this.attr('id') === 'burger') {
  //     window.location.href = "www.google.com"
  //   };
  // })
});
