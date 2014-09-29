(function($, window, document) {

    window.MIDDLEMAIL = window.MIDDLEMAIL || {};

    MIDDLEMAIL.init = function() {

    	this.buttonClass = '.btn-more';

    	$(this.buttonClass).on('click', function(e) {
    		e.preventDefault();
    		var scrollTarget = $(this).attr('href');
    		$('body, html').animate({
    			scrollTop: $(scrollTarget).offset().top - 40
    		}, 500, 'linear', function(){
    			window.location.hash = scrollTarget;
    		});
    	});

    };

    $(document).ready(function() {
        MIDDLEMAIL.init();
    }); 

})(jQuery, window, document);