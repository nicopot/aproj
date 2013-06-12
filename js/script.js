$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-1024px'});$('#page_menu').show();$('#page_menu').transition({x:'-1024px'});},threshold:0});
$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'1024px'});;$('#page_start').transition({x:'0px'});},threshold:0});
$('#page_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_2').transition({x:'-1024px'});},threshold:0});


$('#page_menu').on('webkitTransitionEnd',
function() {
 
 $('#bloc_menu_1').show().transition({x:'1024px'});  
$('#bloc_menu_1').on('webkitTransitionEnd', 
function() {
	
 $('#bloc_menu_2').show().transition({x:'1024px'});  
});
$('#bloc_menu_2').on('webkitTransitionEnd', 
function() {
 $('#bloc_menu_3').show().transition({x:'1024px'});  
});
$('#bloc_menu_3').on('webkitTransitionEnd', 
function() {
 $('#bloc_menu_4').show().transition({x:'1024px'});  
});

});

$('.bt_play').bind('touchstart', function() {$(this).css('background-image',"url(./images/play_on.png)");});
$('.bt_play').bind('touchend', function() {$(this).css('background-image',"url(./images/play_off.png)");});

$('.bt_home').bind('touchstart', function() {$(this).css('background-image',"url(./images/home_on.png)");});
$('.bt_home').bind('touchend', function() {$(this).css('background-image',"url(./images/home_off.png)");});
$('.bt_home').bind('touchstart',function(){$(this).parent().transition({x:'1024px'});$('#page_start').transition({x:'0px'});});


$('#bt_menu_1').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_1').transition({x:'-1024px'});});
	
});