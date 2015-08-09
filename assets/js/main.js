/**
* selectBox
* https://github.com/marcj/jquery-selectBox
*/
$('select').selectBox();


/**
* OwlCarousel
* http://owlgraphic.com/owlcarousel/
*/
$(document).ready(function() {

	// slider
	$("#slideshow .owl-carousel").owlCarousel({

		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		lazyLoad: true,
		navigationText: false,
		autoPlay: 4000,
		stopOnHover: true,
	});

	// favourites
	var owlDefault = $("#favourites .owl-carousel");

	owlDefault.owlCarousel({
		items: 4,
		navigation: true,
		pagination: false,
		lazyLoad: true,
		navigationText: false,
	});

});


/**
* Email Validation
*/
function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

$("#subscribe-submit").click(function(e){
	$(".subscribe-loading").fadeIn(100).css("display","block").delay(500).fadeOut(100);

	setTimeout(function(){
		var $email = $("#subscribe-input").val();
		if(validateEmail($email)){
			$(".subscribe-success").fadeIn(100).css("display","block").delay(2500).fadeOut(100);
		} else {
			$(".subscribe-fail").fadeIn(100).css("display","block").delay(2500).fadeOut(100);
		}
	},700)
});

