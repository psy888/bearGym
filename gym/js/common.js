// var $j = jQuery.noConflict();
$(document).ready(function() {
	$('.hero').parallax({
		bleed: 0,
		overScrollFix: true
	}); 
	$('.s_stuff').parallax();
	$('.s_bmi').parallax();

	function heightDetect(){
		$('.hero').css('height', $(window).height());
		// $('.main-header').css('margin-bottom', '-'+($('.main-header').height()));
		$('.slider').css('height', $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	

	// 	imageSrc: "img/hero2.jpg"
	// });
	//parallax();
	
	

	var menu = function (event) {
		event.preventDefault();
		$('.sandwich').toggleClass('active');
		$('.top-menu').toggleClass('mob-menu');
		if ($('.sandwich').hasClass('active')) {
			var navMarg = ($(window).height() - $('.nav').height())/2;
			$('.mob-menu .nav').css('margin-top', navMarg);
			console.log(navMarg);
		}else{
			$('.top-menu .nav').css('margin', '5px 0');
		}
	}
	$('.toggle-menu').click(menu);
	
	
	$('.top-menu').click(function(event) {
		if($('.sandwich').hasClass('active')){
		event.preventDefault();
		$('.sandwich').toggleClass('active');
		$('.top-menu').toggleClass('mob-menu');
		}
		});
	$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
	
	$('.calc').click(function(event){
		event.preventDefault();
		var h;
		var gender = $('#gender').val();
		var w = $('#weight').val();
		var height = $('#height').val();
		if(height > 60){
			h = height/100;
		}else{
			h = height;
		}
		var bmi = w / Math.pow(h, 2);
		if (bmi){
			$('#result').html(bmi.toFixed(1));
		}else{
			return;
		}
	});

	var products = $('.shop-item');
	var n = 4 //items per page
	if (products.length > 4){
		for (var i = n ; products.length > i; i++) {
			console.log(products[i]);
			$(products[i]).parent().toggleClass('hidden');
		}
	};
	$('.next').click(function (event) {
		event.preventDefault();
		if ($(products[n]).parent().hasClass('hidden')){
			$(products[n-4]).parent().toggleClass('hidden');
			$(products[n]).parent().toggleClass('hidden');
			if(!$(products[n+1]).parent().hasClass('hidden')){
				$('.next').addClass('inactive');
			}
			$('.prev').removeClass('inactive');
			++n;
		}
	});
		$('.prev').click(function (event) {
		event.preventDefault();
		if ($(products[n-5]).parent().hasClass('hidden')){
			$(products[n-5]).parent().toggleClass('hidden');
			$(products[n-1]).parent().toggleClass('hidden');
			if(!$(products[n-6]).parent().hasClass('hidden')){
				$('.prev').addClass('inactive');
			}
			$('.next').removeClass('inactive');
			--n;
		}
	});
	
	
});