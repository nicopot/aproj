$(document).ready(function() {	

$('body').on('touchmove', function(evt) { evt.preventDefault(); })

$('#page_start').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {	
	$('#page_accueil_duphaston').css('background-image','url(./images/eadv_decoupe_Page_03_light.jpg)');
	$('#page_accueil_oesclim').css('background-image','url(./images/eadv_decoupe_Page_16_light.jpg)');
	$('#page_accueil_climaston').css('background-image','url(./images/eadv_decoupe_Page_07_light.jpg)');
	$('#page_accueil_oesclim_duphaston').css('background-image','url(./images/eadv_decoupe_Page_24_light.jpg)');
	$(this).css({x:'-1024px'});$('#page_menu').show();
	$('#page_menu').css({x:'-1024px'});},threshold:0
});

$('#page_menu').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'1024px'});;$('#page_start').css({x:'0px'});},threshold:0});

$('#page_accueil_duphaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {
	$(this).css({x:'-2048px'});
	$('#page_duphaston_1').css({x:'-1024px'});},threshold:0
});

$('#page_accueil_climaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {
	$(this).css({x:'-2048px'});
	$('#page_climaston_1').css({x:'-1024px'});},threshold:0
});
$('#page_accueil_oesclim').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_1').css({x:'-1024px'});},threshold:0});
$('#page_oesclim_bonusage_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_bonusage_2').css({x:'-1024px'});},threshold:0});
$('#page_oesclim_bonusage_2').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_bonusage_3').css({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_oesclim_bonusage_1').css({x:'-1024px'});},
  	threshold:0});
$('#page_oesclim_bonusage_3').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_bonusage_4').css({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_oesclim_bonusage_2').css({x:'-1024px'});},
  	threshold:0});
$('#page_oesclim_bonusage_4').swipe(
	{
		swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_bonusage_5').css({x:'-1024px'});},
		swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_oesclim_bonusage_3').css({x:'-1024px'});},
	threshold:0});
$('#page_oesclim_bonusage_5').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_oesclim_bonusage_4').css({x:'-1024px'});},threshold:0});

$('#page_accueil_oesclim_duphaston').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_duphaston_1').css({x:'-1024px'});},threshold:0});
$('#page_oesclim_duphaston_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_oesclim_duphaston_2').css({x:'-1024px'});},threshold:0});
$('#page_oesclim_duphaston_2').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_oesclim_duphaston_1').css({x:'-1024px'});},threshold:0});

$('#page_climaston_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_climaston_2').css({x:'-1024px'});},threshold:0});

$('#page_climaston_bonusage_1').swipe({swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_climaston_bonusage_2').css({x:'-1024px'});},threshold:0});
$('#page_climaston_bonusage_2').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_climaston_bonusage_3').css({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_climaston_bonusage_1').css({x:'-1024px'});},
  	threshold:0});
$('#page_climaston_bonusage_3').swipe(
  {
  	swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_climaston_bonusage_4').css({x:'-1024px'});},
  	swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_climaston_bonusage_2').css({x:'-1024px'});},
  	threshold:0});
$('#page_climaston_bonusage_4').swipe(
	{
		swipeLeft:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'-2048px'});$('#page_climaston_bonusage_5').css({x:'-1024px'});},
		swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_climaston_bonusage_3').css({x:'-1024px'});},
	threshold:0});
$('#page_climaston_bonusage_5').swipe({swipeRight:function(event, direction, distance, duration, fingerCount) {$(this).css({x:'0px'});$('#page_climaston_bonusage_4').css({x:'-1024px'});},threshold:0});


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
$('.bt_home_second_level_1').bind('touchstart',function(){$(this).parent().transition({x:'1024px'},function(){setTimeout(init_pos_pages, 600);});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_duphaston').bind('touchstart',function(){$('#page_accueil_duphaston').transition({x:'0px'},function(){$('#page_duphaston_1').css({x:'0px'});});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_oesclim').bind('touchstart',function(){$('#page_accueil_oesclim').transition({x:'0px'},function(){$('#page_oesclim_1').css({x:'0px'});});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_oesclim_duphaston').bind('touchstart',function(){$('#page_accueil_oesclim_duphaston').transition({x:'0px'},function(){$('#page_oesclim_duphaston_1').css({x:'0px'});});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_climaston_1').bind('touchstart',function(){$('#page_accueil_climaston').transition({x:'0px'},function(){$('#page_climaston_1').css({x:'0px'});});$('#page_menu').css({x:'-1024px'});});
$('.bt_home_climaston_2').bind('touchstart',function(){$('#page_accueil_climaston').transition({x:'0px'},function(){$('#page_climaston_1,#page_climaston_2').css({x:'0px'});});$('#page_menu').css({x:'-1024px'});});


$('#bt_menu_1').bind('touchstart',function(){

	$('#page_menu').css({x:'-2048px'});
	$('#page_accueil_duphaston').css({x:'-1024px'});
  $('#page_duphaston_1').css('background-image','url(./images/eadv_decoupe_Page_04_light.jpg)');
  $('#page_duphaston_backup').css('background-image','url(./images/eadv_decoupe_Page_05_light.jpg)');
  $('#page_duphaston_bonusage').css('background-image','url(./images/eadv_decoupe_Page_06_light.jpg)'); 	
});

$('#bt_menu_2').bind('touchstart',function(){
  $('#page_climaston_1').css('background-image','url(./images/eadv_decoupe_Page_08_light.jpg)');
  $('#page_climaston_2').css('background-image','url(./images/eadv_decoupe_Page_09_light.jpg)');
  $('#page_climaston_backup_1,#page_climaston_backup_2').css('background-image','url(./images/eadv_decoupe_Page_10_light.jpg)');
	$('#page_climaston_bonusage_1').css('background-image','url(./images/eadv_decoupe_Page_11_light.jpg)');
	$('#page_climaston_bonusage_2').css('background-image','url(./images/eadv_decoupe_Page_12_light.jpg)');	
	$('#page_climaston_bonusage_3').css('background-image','url(./images/eadv_decoupe_Page_13_light.jpg)');	
	$('#page_climaston_bonusage_4').css('background-image','url(./images/eadv_decoupe_Page_14_light.jpg)');	
	$('#page_climaston_bonusage_5').css('background-image','url(./images/eadv_decoupe_Page_15_light.jpg)');	  
	$('#page_menu').css({x:'-2048px'});
	$('#page_accueil_climaston').css({x:'-1024px'});
});

$('#bt_menu_3').bind('touchstart',function(){
	$('#page_oesclim_1').css('background-image','url(./images/eadv_decoupe_Page_17_light.jpg)');
	$('#page_oesclim_backup').css('background-image','url(./images/eadv_decoupe_Page_18_light.jpg)');
	$('#page_oesclim_bonusage_1').css('background-image','url(./images/eadv_decoupe_Page_19_light.jpg)');
	$('#page_oesclim_bonusage_2').css('background-image','url(./images/eadv_decoupe_Page_20_light.jpg)');	
	$('#page_oesclim_bonusage_3').css('background-image','url(./images/eadv_decoupe_Page_21_light.jpg)');	
	$('#page_oesclim_bonusage_4').css('background-image','url(./images/eadv_decoupe_Page_22_light.jpg)');	
	$('#page_oesclim_bonusage_5').css('background-image','url(./images/eadv_decoupe_Page_23_light.jpg)');	
	$('#page_menu').css({x:'-2048px'});
	$('#page_accueil_oesclim').css({x:'-1024px'});
});

$('#bt_menu_4').bind('touchstart',function(){
	$('#page_oesclim_duphaston_1').css('background-image','url(./images/eadv_decoupe_Page_25_light.jpg)');
	$('#page_oesclim_duphaston_2').css('background-image','url(./images/eadv_decoupe_Page_26_light.jpg)');
	$('#page_menu').css({x:'-2048px'});
	$('#page_accueil_oesclim_duphaston').css({x:'-1024px'});
});

$('#bt_backup_duphaston').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-2048px'});$('#page_duphaston_backup').css({x:'-1024px'});});
$('#bt_bonusage_duphaston').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-2048px'});$('#page_duphaston_bonusage').css({x:'-1024px'});});

$('#bt_backup_oesclim').bind('touchstart',function(){$('#page_oesclim_1').css({x:'-2048px'});$('#page_oesclim_backup').css({x:'-1024px'});});
$('#bt_bonusage_oesclim').bind('touchstart',function(){$('#page_oesclim_1').css({x:'-2048px'});$('#page_oesclim_bonusage_1').css({x:'-1024px'});});

$('#bt_backup_2').bind('touchstart',function(){$('#page_climaston_1').css({x:'-2048px'});$('#page_climaston_backup_1').css({x:'-1024px'});});
$('#bt_backup_3').bind('touchstart',function(){$('#page_climaston_2').css({x:'-2048px'});$('#page_climaston_backup_2').css({x:'-1024px'});});

$('#bt_bonusage_2').bind('touchstart',function(){$('#page_climaston_1').css({x:'-2048px'});$('#retour_4_1').show();$('#retour_4_1_bis').hide();$('#page_climaston_bonusage_1').css({x:'-1024px'});});
$('#bt_bonusage_3').bind('touchstart',function(){$('#page_climaston_2').css({x:'-2048px'});$('#retour_4_1').hide();$('#retour_4_1_bis').show();$('#page_climaston_bonusage_1').css({x:'-1024px'});});

$('#retour_2').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-1024px'});$('#page_duphaston_bonusage').css({x:'+1024px'});});
$('#retour_1').bind('touchstart',function(){$('#page_duphaston_1').css({x:'-1024px'});$('#page_duphaston_backup').css({x:'+1024px'});});
$('#retour_3').bind('touchstart',function(){$('#page_6').transition({x:'-1024px'});$('#page_8').transition({x:'1024px'});});

$('#retour_5').bind('touchstart',function(){$('#page_oesclim_1').css({x:'-1024px'});$('#page_oesclim_backup').css({x:'0px'});});

$('#retour_6_1').bind('touchstart',function(){$('#page_oesclim_1').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_6_2').bind('touchstart',function(){$('#page_oesclim_bonusage_1').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_6_3').bind('touchstart',function(){$('#page_oesclim_bonusage_2').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_6_4').bind('touchstart',function(){$('#page_oesclim_bonusage_3').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_6_5').bind('touchstart',function(){$('#page_oesclim_bonusage_4').css({x:'-1024px'});$(this).parent().css({x:'0px'});});

$('#retour_4_1').bind('touchstart',function(){$('#page_climaston_1').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_4_1_bis').bind('touchstart',function(){$('#page_climaston_2').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_4_2').bind('touchstart',function(){$('#page_climaston_bonusage_1').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_4_3').bind('touchstart',function(){$('#page_climaston_bonusage_2').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_4_4').bind('touchstart',function(){$('#page_climaston_bonusage_3').css({x:'-1024px'});$(this).parent().css({x:'0px'});});
$('#retour_4_5').bind('touchstart',function(){$('#page_climaston_bonusage_4').css({x:'-1024px'});$(this).parent().css({x:'0px'});});

$('.bt_retour_climaston_1').on('touchstart',function(){$('#page_climaston_1').css({x:'-1024px'});$('#page_climaston_backup_1').css({x:'0px'});});
$('.bt_retour_climaston_2').on('touchstart',function(){$('#page_climaston_2').css({x:'-1024px'});$('#page_climaston_backup_2').css({x:'0px'});});

$('.bt_retour_climaston').on('touchstart',function(){alert($(this).attr("class"));});
	
});
