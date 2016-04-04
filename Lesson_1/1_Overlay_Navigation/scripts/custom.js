$(function() {

  // NAV OVERLAY SCRIPTS
  $('#nav-overlay').hide();

  $('.jquery-open').on('click', function(e) {
      e.preventDefault();
    $('#nav-overlay').fadeIn(1000);
    $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 0);
  });

  // $('.jquery-close').on('click', function() {
  //   $('#nav-overlay').fadeOut(1000);
  //   $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 1);
  // });

  $('.nav-overlay-container').on('click', function() {
    $('#nav-overlay').fadeOut(1000);
    $('.hero-logo-jquery, .hero-h2-jquery').fadeTo(1000, 1);
  });

}); // END
