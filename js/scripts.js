$(document).ready(function() {

	$('.menu-icon').click(function() {
		if ( $('nav').is(':visible') ) {
			$('nav').slideUp();
		} else {
			$('nav').slideDown();
		}
	});

});