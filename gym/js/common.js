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
	
	//TOP MENU + Mobile menu
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
	
slide($('.shop-item'), 4);
slide($('.subscription-item'),4);
//slider func
function slide (sel, q){
	if ($(window).width() < 480){
		q = q/4;
		$(sel).parent().toggleClass('col-xs-6');
	}else if($(window).width() <= 745 ){
		q = q/2;
	}else if ($(window).width() <= 973 ) {
		q = 3;
	}
	var n = q;
	var next = $(sel).parent().siblings('.next');
	var prev = $(sel).parent().siblings('.prev');
	//HIDE REST ELEMENTS
	if (sel.length > q){
			for (var i = q ; sel.length > i; i++) {
				$(sel[i]).parent().toggleClass('hidden');
			}
	}else{
			$(next).addClass('hidden');
			$(prev).addClass('hidden');
	}
	
	//NEXT CLICK HANDLER
	$(next).click(function (event) {
		event.preventDefault();
		if ($(sel[n]).parent().hasClass('hidden')){
			$(sel[n-q]).parent().toggleClass('hidden');
			$(sel[n]).parent().toggleClass('hidden');
			if(!$(sel[n+1]).parent().hasClass('hidden')){
				$(next).addClass('inactive');
			}
			$(prev).removeClass('inactive');
			++n;
		}
	});
	//PREV CLICK HANDLER
	$(prev).click(function(event) {
		event.preventDefault();
		if ($(sel[n-q-1]).parent().hasClass('hidden')){
			$(sel[n-q-1]).parent().toggleClass('hidden');
			$(sel[n-1]).parent().toggleClass('hidden');
			if(!$(sel[n-q-2]).parent().hasClass('hidden')){
				$(prev).addClass('inactive');
			}
			$(next).removeClass('inactive');
			--n;
		}
	});
}
});