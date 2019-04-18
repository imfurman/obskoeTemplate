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

  $('#to_excurse').click(function() { fmodal_window('open', '.order-excurse'); });
  $('#back-call').click(function() { fmodal_window('open', '.back-form-modal'); });
  $("#get_pricelist").click(function() { fmodal_window('open', '.price-list-form'); });
  $('.black-bg-mw, .close').click(function() { fmodal_window('close', ''); });

  fform_validate('#back-call-form');
  fform_validate('#price-list-form');
  fform_validate('#order-excurse');

  $('#mobile-menu').click(function() {
    if ( $('.front-nav').length > 0 ) 
      $('.front-nav').slideToggle();
    if ( $('.main-top-nav').length > 0 ) 
      $('.main-top-nav').slideToggle();
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
          $('.background').css({'background-image':'url('+$('#sixth-slider .owl-stage > .owl-item:nth-child('+i+') .picture img').attr('blur-pic')+')'});
        }
      }
      
      $('.sislider-clicker').text(point_id+' / '+$('.sislider-clicker').attr('count'));
    });

    var len = $('.sixth-slider .owl-dots button').length;
    $('.sislider-clicker').text('1 / '+len).attr('count', len);


  }

  $('.gallery [data-fancybox]').fancybox({
    baseClass: 'ffsz-gallery'
  });

});
function fmodal_window( action, idclass ) {
  var delay = 300;
  if ( action == 'open' ) {
    $(idclass).fadeIn(delay);
    $('.black-bg-mw').fadeIn(delay);
  } else {
    $('.wmodal-window').fadeOut(delay);
    $('.black-bg-mw').fadeOut(delay);
  }
}

function fform_validate(id) {
  $(id).submit(function() {
    var action = true;
    
    if ( $(this).children('input[name="cw8y7ihg6"]').val() == '' || $(this).children('input[name="cw8y7ihg6"]').val().length < 3 ) {
      $(this).children('input[name="cw8y7ihg6"]').attr('placeholder', 'Ваше имя - обязательно к заполнению');
      if ( $(this).children('input[name="cw8y7ihg6"]').val().length < 3 && $(this).children('input[name="cw8y7ihg6"]').val().length > 0 )
        $(this).children('input[name="cw8y7ihg6"]').val('').attr('placeholder', 'Ваше имя - не менее 3-х символов');
      action = false;
    }

    if ( $(this).children('input[name="j89d782g6wuh"]').val() == '' ) {
      $(this).children('input[name="j89d782g6wuh"]').attr('placeholder', 'Ваш телефон - обязательно к заполнению');
      action = false;
    }

    if ( action == false )
      return false;
  });
}