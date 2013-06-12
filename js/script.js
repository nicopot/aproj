$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({"-webkit-transform":"translateX(-1024px)"});$('#page_menu').show();$('#page_menu').css({"-webkit-transform":"translateX(-1024px)"});},threshold:0});
$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({"-webkit-transform":"translateX(+1024px)"});$('#page_start').css({"-webkit-transform":"translateX(0px)"});},threshold:0});

$('#page_menu').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', 
function() {
 
});

});