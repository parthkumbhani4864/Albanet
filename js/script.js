// -Header fix start-------------------------------------------------------------- //
$(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

    if (scroll >= 80) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
// -Header fix end-------------------------------------------------------------- //

// -Preloader start-------------------------------------------------------------- //
$(document).ready(function(){
  setTimeout (function(){
    $('.preloader').fadeOut();
  },3000)
})
// -Preloader end-------------------------------------------------------------- //

// --Counter start-----------------------------------------------------------------
$('.number-counter').each(function () {
  $(this).prop('Counter',0).animate({
    Counter: $(this).text()
  }, 
  {
    duration: 5000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
// --Counter end-----------------------------------------------------------------

// --Owl-carousel start-----------------------------------------------------------------
$('.owl-carousel').owlCarousel({
  loop:false,
  margin:10,
  nav:false,
  dots:false,
  items:1    
})
  // --Owl-carousel end-----------------------------------------------------------------