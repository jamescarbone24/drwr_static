$(document).ready(function() {
	$('#lastPage').click(reload);

	$('#home').click(reload);

	$('#profile').click(reload);

	$('#about').click(reload);

	$('#faqs').click(reload);


	function reload(event) {
		event.preventDefault();

		$('.container1').slideUp();

		$('.hide').show();    
	}


});