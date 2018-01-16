$(document).ready(function(){

	$("h4").on("click",function(){
    $(this).addClass("active");
    $("h4").not(this).removeClass("active");

    if($(this).is("#corelink")){
    	$("#marketing, #sponsorship, #content, #video").css("display","none");
    	$("#core").css("display","block");
    }

    if($(this).is("#marketinglink")){
    	$("#core, #sponsorship, #content, #video").css("display","none");
    	$("#marketing").css("display","block");
    }

    if($(this).is("#sponsorshiplink")){
    	$("#marketing, #core, #content, #video").css("display","none");
    	$("#sponsorship").css("display","block");
    }

    if($(this).is("#contentlink")){
    	$("#core, #sponsorship, #marketing, #video").css("display","none");
    	$("#content").css("display","block");
    }

    if($(this).is("#videolink")){
    	$("#marketing, #sponsorship, #content, #core").css("display","none");
    	$("#video").css("display","block");
    }
    });
});