$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-1024px'});$('#page_menu').show();$('#page_menu').transition({x:'-1024px'});},threshold:0});
$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'1024px'});;$('#page_start').transition({x:'0px'});},threshold:0});
$('#page_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_2').transition({x:'-1024px'});},threshold:0});
$('#page_5').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_6').transition({x:'-1024px'});},threshold:0});
$('#page_6').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_7').transition({x:'-1024px'});},threshold:0});


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
$('.bt_home').bind('touchstart',function(){$(this).parent().transition({x:'1024px'},function(){init_pos_pages();});$('#page_menu').transition({x:'-1024px'});});


$('#bt_menu_1').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_1').transition({x:'-1024px'});});
$('#bt_menu_2').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_5').transition({x:'-1024px'});});

$('#bt_backup_1').bind('touchstart',function(){$('#page_2').transition({x:'-2048px'});$('#page_3').transition({x:'-1024px'});});
$('#bt_bonusage_1').bind('touchstart',function(){$('#page_2').transition({x:'-2048px'});$('#page_4').transition({x:'-1024px'});});

$('#bt_backup_2').bind('touchstart',function(){$('#page_6').transition({x:'-2048px'});$('#page_8').transition({x:'-1024px'});});

$('#retour_2').bind('touchstart',function(){$('#page_2').transition({x:'-1024px'});$('#page_4').transition({x:'1024px'});});
$('#retour_1').bind('touchstart',function(){$('#page_2').transition({x:'-1024px'});$('#page_3').transition({x:'1024px'});});
$('#retour_3').bind('touchstart',function(){$('#page_6').transition({x:'-1024px'});$('#page_8').transition({x:'1024px'});});
	
});

function init_pos_pages()
{
//alert($('#page_1').css('left'));
//$('#page_1,#page_2,#page_3,#page_4,#page_5,#page_6,#page_7').hide().css('x','1024px');
$('#page_1,#page_2,#page_3,#page_4,#page_5,#page_6,#page_7').transition({x:'0px'});		
}