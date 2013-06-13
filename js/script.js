$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-1024px'});$('#page_menu').show();$('#page_menu').transition({x:'-1024px'});},threshold:0});
$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'1024px'});;$('#page_start').transition({x:'0px'});},threshold:0});
$('#page_accueil_duphaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_duphaston_1').transition({x:'-1024px'});},threshold:0});
$('#page_accueil_climaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_6').transition({x:'-1024px'});},threshold:0});
$('#page_accueil_oesclim').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_1').transition({x:'-1024px'});},threshold:0});
$('#page_oesclim_bonusage_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_bonusage_2').transition({x:'-1024px'});},threshold:0});
$('#page_oesclim_bonusage_2').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_bonusage_3').transition({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'0px'});$('#page_oesclim_bonusage_1').transition({x:'-1024px'});},
  	threshold:0});
$('#page_oesclim_bonusage_3').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_bonusage_4').transition({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'0px'});$('#page_oesclim_bonusage_2').transition({x:'-1024px'});},
  	threshold:0});
$('#page_oesclim_bonusage_4').swipe(
	{
		swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_bonusage_5').transition({x:'-1024px'});},
		swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'0px'});$('#page_oesclim_bonusage_3').transition({x:'-1024px'});},
	threshold:0});
$('#page_oesclim_bonusage_5').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'0px'});$('#page_oesclim_bonusage_4').transition({x:'-1024px'});},threshold:0});

$('#page_accueil_oesclim_duphaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_duphaston_1').transition({x:'-1024px'});},threshold:0});
$('#page_oesclim_duphaston_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'-2048px'});$('#page_oesclim_duphaston_2').transition({x:'-1024px'});},threshold:0});
$('#page_oesclim_duphaston_2').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).transition({x:'1024px'});$('#page_oesclim_duphaston_1').transition({x:'0px'});},threshold:0});

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
$('.bt_home_first_level').bind('touchstart',function(){$(this).parent().css({x:'0px'});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_second_level_1').bind('touchstart',function(){$(this).parent().transition({x:'1024px'},function(){setTimeout(init_pos_pages, 600);});$('#page_menu').transition({x:'-1024px'});});
$('.bt_home_duphaston').bind('touchstart',function(){$('#page_accueil_duphaston').transition({x:'0px'},function(){$('#page_duphaston_1').transition({x:'0px'});});$('#page_menu').transition({x:'-1024px'});});
$('.bt_home_oesclim').bind('touchstart',function(){$('#page_accueil_oesclim').transition({x:'0px'},function(){$('#page_oesclim_1').transition({x:'0px'});});$('#page_menu').transition({x:'-1024px'});});


$('#bt_menu_1').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_accueil_duphaston').transition({x:'-1024px'});});
$('#bt_menu_2').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_accueil_climaston').transition({x:'-1024px'});});
$('#bt_menu_3').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_accueil_oesclim').transition({x:'-1024px'});});
$('#bt_menu_4').bind('touchstart',function(){$('#page_menu').transition({x:'-2048px'});$('#page_accueil_oesclim_duphaston').transition({x:'-1024px'});});

$('#bt_backup_duphaston').bind('touchstart',function(){$('#page_duphaston_1').transition({x:'-2048px'});$('#page_duphaston_backup').transition({x:'-1024px'});});
$('#bt_bonusage_duphaston').bind('touchstart',function(){$('#page_duphaston_1').transition({x:'-2048px'});$('#page_duphaston_bonusage').transition({x:'-1024px'});});

$('#bt_backup_oesclim').bind('touchstart',function(){$('#page_oesclim_1').transition({x:'-2048px'});$('#page_oesclim_backup').transition({x:'-1024px'});});
$('#bt_bonusage_oesclim').bind('touchstart',function(){$('#page_oesclim_1').transition({x:'-2048px'});$('#page_oesclim_bonusage_1').transition({x:'-1024px'});});

$('#bt_backup_2').bind('touchstart',function(){$('#page_6').transition({x:'-2048px'});$('#page_8').transition({x:'-1024px'});});

$('#retour_2').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-1024px'});$('#page_duphaston_bonusage').css({x:'+1024px'});});
$('#retour_1').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-1024px'});$('#page_duphaston_backup').css({x:'+1024px'});});
$('#retour_3').bind('touchstart',function(){$('#page_6').transition({x:'-1024px'});$('#page_8').transition({x:'1024px'});});

$('#retour_5').bind('touchstart',function(){$('#page_oesclim_1').transition({x:'-1024px'});$('#page_oesclim_backup').transition({x:'0px'});});

$('#retour_6_1').bind('touchstart',function(){$('#page_oesclim_1').transition({x:'-1024px'});$(this).parent().transition({x:'0px'});});
$('#retour_6_2').bind('touchstart',function(){$('#page_oesclim_bonusage_1').transition({x:'-1024px'});$(this).parent().transition({x:'0px'});});
$('#retour_6_3').bind('touchstart',function(){$('#page_oesclim_bonusage_2').transition({x:'-1024px'});$(this).parent().transition({x:'0px'});});
$('#retour_6_4').bind('touchstart',function(){$('#page_oesclim_bonusage_3').transition({x:'-1024px'});$(this).parent().transition({x:'0px'});});
$('#retour_6_5').bind('touchstart',function(){$('#page_oesclim_bonusage_4').transition({x:'-1024px'});$(this).parent().transition({x:'0px'});});

	
});
