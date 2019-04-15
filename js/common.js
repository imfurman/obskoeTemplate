$(function() {

	$('header .top .wrapper .menu .dropdown').mouseenter(function(){ 
		if ($(this).children('.dropdown-menu').length != 0){
			$('.header__menu .dropdown').removeClass('show');
		  $(this).addClass('show');
		  $(this).children('.dropdown-menu').addClass('show').css({transform: 'translate3d(0px, 50px, 0px)', position: 'absolute', top: '0px', left: '0px', willChange: 'transform'});
		}
	});
	$('header .top .wrapper .menu .dropdown').mouseleave(function(){ 
		if ($(this).children('.dropdown-menu').length != 0){
		  $(this).removeClass('show');
		  $(this).children('.dropdown-menu').removeClass('show');
		}
	});

	// Номер телефона
  $("[type=tel]").mask("+7 (999) 999-99-99");

  $('#mobile-menu').click(function(){
    $('.front-nav').slideToggle();
  });

  var gen_slider = $('#second-slider');
  gen_slider.owlCarousel({
      nav: false,
      loop: true,
      items: 1,
      mouseDrag: false,
      margin: 110,
  });

  gen_slider.on('changed.owl.carousel', function(e) {
    var point_id = 1,
        len = $('.second-slider .owl-dots button').length;

    for ( i = 1; i <= len; i++ ) {
        if ( $('.second-slider .owl-dots > button:nth-child('+i+')').hasClass('active') ) 
            point_id = i;
    }
    $('.sslider-clicker').text(point_id+' / '+$('.sslider-clicker').attr('count'));
  });

  var len = $('.second-slider .owl-dots button').length;
  $('.sslider-clicker').text('1 / '+len).attr('count', len);

});
