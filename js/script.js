$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-1024px'});$('#page_menu').show();$('#page_menu').transition({x:'-1024px'});},threshold:0});
$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'1024px'});;$('#page_start').transition({x:'0px'});},threshold:0});

$('#page_menu').on('webkitTransitionEnd',
function(event) {
 $('#bloc_menu_1').css({'margin-left':'1024px'});  
$('#bloc_menu_1').on('webkitTransitionEnd', 
function() {
 $('#bloc_menu_2').css({'margin-left':'1024px'});  
});
$('#bloc_menu_2').on('webkitTransitionEnd', 
function() {
 $('#bloc_menu_3').css({'margin-left':'1024px'});  
});
$('#bloc_menu_3').on('webkitTransitionEnd', 
function() {
 $('#bloc_menu_4').css({'margin-left':'1024px'});  
});

});

});