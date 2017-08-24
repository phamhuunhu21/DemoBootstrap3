$(document).ready(function() {
	ScrollTop();
});

function ScrollTop(){
	$("#upbutton").click(function(e){
		e.preventDefault();
		$("body").animate({
           "scrollTop":$(".header-top").offset().top
       }, 1000);
	});
}