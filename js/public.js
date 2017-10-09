$(function(){
	
	$(".cart_a").mouseenter(function(){
		$(".no_goods").animate({opacity:"1"},500);
	});
	
	$(".cart_a").mouseleave(function(){
		$(".no_goods").animate({opacity:"0"},500);
	});
	
	
	setTimeout(function(){	
		if($(window).scrollTop()>=0){
			$($(".moves")[0]).animate({top:$($(".moves")[0]).offset().top-160+"px",opacity:"1"},600);
			$($(".moves")[1]).animate({top:$($(".moves")[1]).offset().top-150+"px",opacity:"1"},1000);
			$($(".moves")[2]).animate({top:$($(".moves")[2]).offset().top-150+"px",opacity:"1"},1500);
			$($(".moves")[3]).animate({top:$($(".moves")[3]).offset().top-150+"px",opacity:"1"},1900);
			$($(".moves")[4]).animate({top:$($(".moves")[4]).offset().top-150+"px",opacity:"1"},2000);
			$($(".moves")[5]).animate({top:$($(".moves")[5]).offset().top-100+"px",opacity:"1"},2500);
		}
	},1000);

	$(".search_a").toggle(
		function(){
			$(".search_a").css({background:"url(img/regular.png) no-repeat",backgroundPosition:"0px -36px"});
			$(".search_tit").show("fast");
			$(".search_list").show("slow");
			$(".nav-center").css({opacity:"0"},200);
			$(".cart").animate({opacity:"0"},200);
			$(".user").animate({opacity:"0"},200);
		},
	
		function(){
			$(".search_tit").hide("slow");
			$(".search_list").hide();
			$(".nav-center").css({opacity:"1"},500);
			$(".cart").animate({opacity:"1"},500);
			$(".user").animate({opacity:"1"},500);
			$(".search_a").css({backgroundImage:"url(img/icons.png)",backgroundPosition:"0px -30px"});	
		}
	);
	
	$(".search_input").click(function(){
		$(".search_input").css({border:"none"});
		$(".search_input").keydown(function(){
			if($(".search_input")[0].value==""){
				$(".search_input").css({border:"none"});
			}else{
				$(".search_input").css({placeholder:"none"});
			}	
		})
	});
	
});	