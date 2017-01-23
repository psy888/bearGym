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
	//google map container
	$('.map-container').click(function(){
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
// next prev slider
	var products = $('.shop-item');
	var subscription = $('.subscription-item');
	var n = 4; //items per page
	var m = 4; 
	
	hideRest(products, 4);
	hideRest(subscription, 4);

	$('.p-next').click(function(event){
		event.preventDefault();
		if ($(products[n]).parent().hasClass('hidden')){
			$(products[n-4]).parent().toggleClass('hidden');
			$(products[n]).parent().toggleClass('hidden');
			if(!$(products[n+1]).parent().hasClass('hidden')){
				$(this).addClass('inactive');
			}
			$(this).siblings('.prev').removeClass('inactive');
			++n;
		}
	});
	$('.p-prev').click(function (event) {
		event.preventDefault();
		if ($(products[n-5]).parent().hasClass('hidden')){
			$(products[n-5]).parent().toggleClass('hidden');
			$(products[n-1]).parent().toggleClass('hidden');
			if(!$(products[n-6]).parent().hasClass('hidden')){
				$(this).addClass('inactive');
			}
			$(this).siblings('.next').removeClass('inactive');
			--n;
		}
	});
	$('.s-next').click(function(event){
		event.preventDefault();
		if ($(subscription[m]).parent().hasClass('hidden')){
			$(subscription[m-4]).parent().toggleClass('hidden');
			$(subscription[m]).parent().toggleClass('hidden');
			if(!$(subscription[m+1]).parent().hasClass('hidden')){
				$(this).addClass('inactive');
			}
			$(this).siblings('.prev').removeClass('inactive');
			++m;
		}
	});
	$('.s-prev').click(function (event) {
		event.preventDefault();
		if ($(subscription[m-5]).parent().hasClass('hidden')){
			$(subscription[m-5]).parent().toggleClass('hidden');
			$(subscription[m-1]).parent().toggleClass('hidden');
			if(!$(subscription[m-6]).parent().hasClass('hidden')){
				$(this).addClass('inactive');
			}
			$(this).siblings('.next').removeClass('inactive');
			--m;
		}
	});
	function hideRest(sel,q){
		if (sel.length > q){
			for (var i = q ; sel.length > i; i++) {
				$(sel[i]).parent().toggleClass('hidden');
			}
		}else{
			// console.log($(sel).parent().siblings());
			$(sel[0]).parent().siblings('.next').addClass('hidden');
			$(sel[0]).parent().siblings('.prev').addClass('hidden');
		}
	};
	
	function nextClick(sel){
		if ($(sel[n]).parent().hasClass('hidden')){
			$(sel[n-4]).parent().toggleClass('hidden');
			$(sel[n]).parent().toggleClass('hidden');
			if(!$(sel[n+1]).parent().hasClass('hidden')){
				$(scope).addClass('inactive');
			}
			$(scope).siblings('.prev').removeClass('inactive');
			++n;
		}
	}
	function prevClick(sel){
		if ($(sel[n-5]).parent().hasClass('hidden')){
			$(sel[n-5]).parent().toggleClass('hidden');
			$(sel[n-1]).parent().toggleClass('hidden');
			if(!$(sel[n-6]).parent().hasClass('hidden')){
				$(scope).addClass('inactive');
			}
			$(scope).siblings('.next').removeClass('inactive');
			--n;
		}
	}
});