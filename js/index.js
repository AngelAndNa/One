$(function(){
	$("#close").click(function(){
		$("#toper").css({display:"none"});
	});
	
	
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
	
	
	$($("#btn")).mouseenter(function(){ 
			$("#progress").animate({width:"130px"},100);
			$(".join").css({color:"black",zIndex:"999"});
			console.log("mouseover");
			
	});	
	$($("#btn")).mouseleave(function(){
			$("#progress").animate({width:"0px"},100);
			$(".join").css({color:"white"});
			
	});

	
	
});