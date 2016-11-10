$(document).ready(function(){
  $('.home-test-slider').slick({
  	infinite: true,
  	arrows: true,
  	prevArrow: $('.home-prev'),
	nextArrow: $('.home-next')
  });

  $("[data-toggle=popover]").popover({ trigger: "hover", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' });


  $('.slick-slide img').popover('show');

  $('.slick-phone-slider').slick({
  	infinite: true,
  	arrows: true,
  	prevArrow: $('.phone-prev'),
	nextArrow: $('.phone-next')
  });

	$(".modal-fullscreen").on('show.bs.modal', function () {
	setTimeout( function() {
	$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	}, 0);
	});
	$(".modal-fullscreen").on('hidden.bs.modal', function () {
	$(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	});

	$( "#LT1" ).click(function(e) {
		e.preventDefault()
		$('.logo-text').css('display', 'none');
		$('#L1').css('display', 'block');

	});

	$( "#LT2" ).click(function(e) {
		e.preventDefault()
		$('.logo-text').css('display', 'none');
		$('#L2').css('display', 'block');

	});

	$( "#LT3" ).click(function(e) {
		e.preventDefault()
		$('.logo-text').css('display', 'none');
		$('#L3').css('display', 'block');

	});

	$( "#LT4" ).click(function(e) {
		e.preventDefault()
		$('.logo-text').css('display', 'none');
		$('#L4').css('display', 'block');

	});

});