function hideDiv(){

    if ($(window).width() < 765) {

            $("#images").fadeOut("slow");

    }else{

        $("#images").fadeIn("slow");

    }

}


$(document).ready(function () {
    
    hideDiv();
    $(window).resize(function(){
        hideDiv();
    });

});
