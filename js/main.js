$(document).ready(function(){
  $("#owl-carousel-1").owlCarousel({
  	items: 1,
  	nav:true,
  	navText: ["<img src='img/amethyst/arrow-left.svg'>", "<img src='img/amethyst/arrow-right.svg'>"],
  });
  $("#owl-carousel-2").owlCarousel({
  	items: 1
  });
  $("#owl-carousel-3").owlCarousel({
  	nav: true,
  	dots: false,
  	navText: ["<img src='img/testimonials/arrow-left.svg'>", "<img src='img/testimonials/arrow-right.svg'>"],
  	responsive:{
  	          0:{
  	              items:2
  	          },
  	          576:{
  	          	  items:3
  	          },
  	          991:{
  	              items:4
  	          },
  	          1200:{
  	              items:6
  	          }
  	      }
  });
  $("#owl-carousel-4").owlCarousel({
  	items: 1
  });

  let tab = $('.section');
  tab.on('click', function(event) {
		event.preventDefault();
		let activeContent = $(this).attr('href');
		$('.visible').toggleClass('visible');
		$(activeContent).toggleClass('visible');
		$('.section-active').toggleClass('section-active');
		$(this).toggleClass('section-active');
	});

  	var isAnimatePriceInitialized = false;
	var serversTop = $(".container-5").offset().top;
	function animatePrice(){
	    $({numberValue: 0}).animate({numberValue: 1258}, {
	        duration: 1000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
	        easing: "linear",
	        step: function(val) {
	            $(".con-7_number1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
	        }
	    });
	    $({numberValue: 0}).animate({numberValue: 63}, {
	        duration: 1000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
	        easing: "linear",
	        step: function(val) {
	            $(".con-7_number2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
	        }
	    });
	    $({numberValue: 0}).animate({numberValue: 421}, {
	        duration: 1000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
	        easing: "linear",
	        step: function(val) {
	            $(".con-7_number3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
	        }
	    });
	    $({numberValue: 0}).animate({numberValue: 562}, {
	        duration: 1000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
	        easing: "linear",
	        step: function(val) {
	            $(".con-7_number4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
	        }
	    });
	    isAnimatePriceInitialized = true;
	}
	$(window).scroll(function() {
	    if ($(this).scrollTop() > serversTop){
	        if (!isAnimatePriceInitialized) {
	            animatePrice();
	        }
	    }
	});
});

$(document).ready(function() {
	  	var isAnimatePriceInitialized = false;
		var serversTop = $(".con-10_content").offset().top;
		function animatePrice(){
		    $({numberValue: 0}).animate({numberValue: 80}, {
		        duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		        easing: "linear",
		        step: function(val) {
		            $(".number-scale1-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		            $('.con-11_subscale1-1').css('width', '80%');
		            $('.con-11_subscale2-1').css('width', '20%');
		        }
		    });
		    $({numberValue: 0}).animate({numberValue: 97}, {
		        duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		        easing: "linear",
		        step: function(val) {
		            $(".number-scale1-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		            $('.con-11_subscale1-2').css('width', '97%');
		            $('.con-11_subscale2-2').css('width', '3%');
		        }
		    });
		    $({numberValue: 0}).animate({numberValue: 65}, {
		        duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		        easing: "linear",
		        step: function(val) {
		            $(".number-scale1-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		            $('.con-11_subscale1-3').css('width', '65%');
		            $('.con-11_subscale2-3').css('width', '35%');
		        }
		    });
		    $({numberValue: 0}).animate({numberValue: 72}, {
		        duration: 3000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		        easing: "linear",
		        step: function(val) {
		            $(".number-scale1-4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
		            $('.con-11_subscale1-4').css('width', '72%');
		            $('.con-11_subscale2-4').css('width', '28%');
		        }
		    });
		    isAnimatePriceInitialized = true;
		}
		$(window).scroll(function() {
		    if ($(this).scrollTop() > serversTop){
		        if (!isAnimatePriceInitialized) {
		            animatePrice();
		        }
		    }
		});

		$('.con-13_sel-1').on('click', () => {
			$('.con-13_sel-1').addClass('con-13_sel-1_active');
			$('.con-13_sel-2').removeClass('con-13_sel-2_active');
			$('.con-13_toggle').removeClass('con-13_toggle_active');
			$('.con-13_price1').html('10');
			$('.con-13_price2').html('40');
			$('.con-13_price3').html('80');
			$('.con-13_period1').html('mo');
			$('.con-13_period2').html('mo');
			$('.con-13_period3').html('mo');
		});
		$('.con-13_sel-2').on('click', () => {
			$('.con-13_sel-2').addClass('con-13_sel-2_active');
			$('.con-13_sel-1').removeClass('con-13_sel-1_active');
			$('.con-13_toggle').addClass('con-13_toggle_active');
			$('.con-13_price1').html('120');
			$('.con-13_price2').html('480');
			$('.con-13_price3').html('960');
			$('.con-13_period1').html('year');
			$('.con-13_period2').html('year');
			$('.con-13_period3').html('year');
		});


		$(".block-accordeon").on('click', function() {
		 	$(this).find('.block-accord-1').toggleClass('block-accord_active');
		 	$(this).find('.block-accord-2').toggleClass('block-accord-2_active');
		 	$(this).find('.block-accord-indication').toggleClass('block-accord-indication_active');
		 	$('.block-accordeon').not(this).find('.block-accord-1').removeClass('block-accord_active');
		 	$('.block-accordeon').not(this).find('.block-accord-2').removeClass('block-accord-2_active');
		 	$('.block-accordeon').not(this).find('.block-accord-indication').removeClass('block-accord-indication_active');
		});

		$('.con-14_titles_title1').on('click', () => {
		 	$('.con-14_titles_title1').addClass('con-14_titles_title-active');
		 	$('.con-14_titles_title2').removeClass('con-14_titles_title-active');
		 	$('.con-14_titles_title3').removeClass('con-14_titles_title-active');
		 	$('#con-14_block-text-1').css('display', 'block');
		 	$('#con-14_block-text-2').css('display', 'none');
		 	$('#con-14_block-text-3').css('display', 'none');
		});
		$('.con-14_titles_title2').on('click', () => {
		 	$('.con-14_titles_title1').removeClass('con-14_titles_title-active');
		 	$('.con-14_titles_title2').addClass('con-14_titles_title-active');
		 	$('.con-14_titles_title3').removeClass('con-14_titles_title-active');
		 	$('#con-14_block-text-1').css('display', 'none');
		 	$('#con-14_block-text-2').css('display', 'block');
		 	$('#con-14_block-text-3').css('display', 'none');
		});
		$('.con-14_titles_title3').on('click', () => {
		 	$('.con-14_titles_title1').removeClass('con-14_titles_title-active');
		 	$('.con-14_titles_title2').removeClass('con-14_titles_title-active');
		 	$('.con-14_titles_title3').addClass('con-14_titles_title-active');
		 	$('#con-14_block-text-1').css('display', 'none');
		 	$('#con-14_block-text-2').css('display', 'none');
		 	$('#con-14_block-text-3').css('display', 'block');
		});
});