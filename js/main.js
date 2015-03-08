/**
 *
 * @authors Your Name (you@example.org)
 * @date    2014-12-20 14:16:52
 * @version $Id$
 */
var speed1 = 10;
var speed2 = 20;
var trans = 'transition',
	eventName = 'transitionend';
if (typeof document.body.style.webkitTransition === 'string') {
	trans = 'webkitTransition';
	eventName = 'webkitTransitionEnd';
} else if (typeof document.body.style.MozTransition === 'string') {
	trans = 'MozTransition';
}
var cwidth=document.body.clientWidth;
var cheight=window.screen.availHeight;
var style = document.createElement('style');
style.rel = 'stylesheet';
style.type = 'text/css';
var animate2_=
   '@keyframes myfirst3 {'+
   'from {transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);} '+
   'to {transform:translate3d(-'+cwidth*2+'px,0,0);-webkit-'+
   'transform:translate3d(-'+cwidth*2+'px,0,0); }'+
   '} ';
var animate2_webkit=
   '@-webkit-keyframes myfirst3 {'+
   'from {-webkit-transform:translate3d(0,0,0);} '+
   'to {-webkit-transform:translate3d(-'+cwidth*2+'px,0,0); }'+
   '} ';
var animate2_mozi=
	'@-moz-keyframes myfirst3 {'+
   'from {-moz-transform:translate3d(0,0,0);} '+
   'to {-moz-transform:translate3d(-'+cwidth*2+'px,0,0); }'+
   '} ';
var animate2_o=
	'@-o-keyframes myfirst3 {'+
   'from {-o-transform:translate3d(0,0,0);} '+
   'to {-o-transform:translate3d(-'+cwidth*2+'px,0,0); }'+
   '} ';
var page1='.page1{left:0 ; -webkit-transition: all 1.8s; transition: all 1.8s;} ';
var page2='.page2{left:-'+cwidth+'px ; -webkit-transition: all 1.8s; transition: all 1.8s;} ';
var page3='.page3{left:-'+cwidth*2+'px ; -webkit-transition: all 1.8s; transition: all 1.8s;} ';
speed1=cwidth*3/200;
var begintime=0;
document.getElementsByTagName('HEAD').item(0).appendChild(style);
style.innerHTML=animate2_+animate2_mozi+animate2_webkit+animate2_o+page2+page1+page3;
$("document").ready(function() {
	$(".wazi").css({"left":cwidth/2-120});
	$(".wenzi").css({"left":cwidth/2-631.5});
	$(".wenzi2").css({"left":cwidth/2-631.5});
	$(".merrychristmas").css({"left":cwidth/2-695});
	$(".tatatuzi").css({"left":cwidth/2-132});
	document.body.scrollLeft = 0;
	$(".wrapper").css({
		"height": cheight
	})
	$(".y").css({
		"width": cwidth * 3,
	})
	$(".j").css({
		"width": cwidth * 3,
	})
	$(".y").find(".dw").css({
		"width": cwidth,
	})
	$(".j").find(".dw").css({
		"width": cwidth,
	});
	$(".y").addClass("distantview");
	$(".j").addClass("sceneryclose");
	begintime=new Date().getTime()/1000;
	setTimeout(function(){	
	$(".warziwarapper").css({"display":"block"})
	$(".scen1").append('<div class="snowman"></div>');
	$(".scen2").append('<div class="house"></div>');
	$(".scen3").append('<div class="deer"></div>');$(".snowman").addClass("act")},100);
	var jinjing=document.getElementById("jinjing");
	jinjing.addEventListener("webkitAnimationiteraion",animationing);
	jinjing.addEventListener("animation",animationing);
	jinjing.addEventListener("webkitAnimationEnd", animationover);
	// 标准语法
	jinjing.addEventListener("animationend", animationover);
	$(".rightarrow").on("click",function(){
		var left= Math.abs($(".j").offset().left);
		var pagenum=Math.floor(left/cwidth);
		var endtime=new Date().getTime()/1000;
		var length=(endtime-begintime)*speed1;
		//begintime=endtime;
		if(pagenum==0){
			$(".j").css({"left":-(cwidth-length)+"px"});
			//$(".j").removeClass("page1");
			//$(".j").removeClass("page3");
			//$(".j").addClass("page2");
			//$(".y").css({"animation-play-state":"running"});
			//$(".j").css({"animation-play-state":"running"});
		}
		if(pagenum==1){
			$(".j").css({"left":-(cwidth*2-length)+"px"});
			//$(".j").removeClass("page1");
			//$(".j").removeClass("page2");
			//$(".j").addClass("page3");
			$(".y").css({"animation-play-state":"paused"});
			$(".j").css({"animation-play-state":"paused"});
			setTimeout(animationover,1000)
		}
	})
	$(".leftarrow").on("click",function(){
		var left= Math.abs($(".j").offset().left);
		var pagenum=Math.floor(left/cwidth);
		var endtime=new Date().getTime()/1000;
		var length=(endtime-begintime)*speed1;
		if(pagenum==1){
			$(".j").css({"left":-(cwidth-length)+"px"});
			//$(".j").removeClass("page2");
			//$(".j").removeClass("page3");
			//$(".j").addClass("page1");
			//$(".y").css({"animation-play-state":"running"});
			//$(".j").css({"animation-play-state":"running"});
		}
		if(pagenum==2){
			$(".j").css({"left":-(cwidth*2-length)+"px"});
		
		}
	})

})
function animationover(){
	setTimeout(wrapperhideandsockscome,2000);
}
function wrapperhideandsockscome(){
	$(".deer").addClass('scalone');
	setTimeout(sockscome,3000);
}
function sockscome(){
	$(".warziwarapper").addClass("wrazshow");
	$(".wazi").addClass("wazicome");
	setTimeout(comefonts,4000);
}
function comefonts(){
	$(".wenzi").addClass("wenzicome");
	setTimeout(removefonts,4000);
}
function removefonts(){
	$(".wenzi").removeClass("wenzicome");
	setTimeout(removesocks,1000);
}
function removesocks(){
	$(".wazi").removeClass("wazicome");
	setTimeout(wenzi2come,1000);
}
function wenzi2come(){
	$(".wenzi2").addClass("wenzi2come");
	setTimeout(merrychristmas,4000);
}
function merrychristmas(){
	$(".wenzi2").removeClass("wenzi2come");
	setTimeout(tatatuzi,2000);
}	
function tatatuzi(){
	$(".merrychristmas").addClass("mcome");
	$(".warziwarapper").css({"background":"rgba(0,0,0,0)"});
	$(".wrapper").addClass("wrapperout");
	setTimeout(cometata,3000);
}
function cometata(){
	$(".wrapper").addClass("wrapperfadeout");
	$(".merrychristmas").removeClass("mcome");
	$(".tatatuzi").addClass("tatacome");
}
function animationing(){alert("animation is begin")}
