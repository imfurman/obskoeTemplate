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
  $('#back-call').click(function(){
    $('.back-form-modal').fadeToggle(300);
    $('.black-bg-mw').fadeToggle(300);
  });
  $('.black-bg-mw, .close').click(function(){
    $('.back-form-modal').fadeOut(300);
    $('.black-bg-mw').fadeOut(300);
  });

  if ( $('#second-slider').length > 0 ) {
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
  }

  if ( $('#sixth-slider').length > 0 ) {
    var sixth_slider = $('#sixth-slider');
    sixth_slider.owlCarousel({
        nav: false,
        loop: false,
        items: 1,
        mouseDrag: false,
        margin: 110,
    });

    var point_id = 1,
        len = $('.sixth-slider .owl-dots button').length;

    for ( i = 1; i <= len; i++ )
      $('.sixth-slider .owl-dots > button:nth-child('+i+')').html('<img src="'+$('#sixth-slider .owl-stage > .owl-item:nth-child('+i+') .picture img').attr('mini-pic')+'">');

    sixth_slider.on('changed.owl.carousel', function(e) {
      for ( i = 1; i <= len; i++ ) {
        if ( $('.sixth-slider .owl-dots > button:nth-child('+i+')').hasClass('active') ) {
          point_id = i;
          $('.background').css({'background-image':'url('+$('#sixth-slider .owl-stage > .owl-item:nth-child('+i+') .picture img').attr('src')+')'});
        }
      }
      
      $('.sislider-clicker').text(point_id+' / '+$('.sislider-clicker').attr('count'));
    });

    var len = $('.sixth-slider .owl-dots button').length;
    $('.sislider-clicker').text('1 / '+len).attr('count', len);


  }

});
