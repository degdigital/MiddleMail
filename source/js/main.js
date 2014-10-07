(function($, window, document) {

    window.MIDDLEMAIL = window.MIDDLEMAIL || {};

    MIDDLEMAIL.init = function() {

    	this.buttonClass = '.scroll-to';

    	$(this.buttonClass).on('click', function(e) {
    		e.preventDefault();
    		var scrollTarget = $(this).attr('href');
    		$('body, html').animate({
    			scrollTop: $(scrollTarget).offset().top - 40
    		}, 500, 'linear', function(){
    			window.location.hash = scrollTarget;
    		});
    	});

        $('.nav-toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('body').toggleClass('menu-active');
        });  


        this.navClass = '.interior-nav a';

        $(this.navClass).on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('menu-active');
            var scrollTarget = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(scrollTarget).offset().top
            }, 500, 'linear', function(){
                window.location.hash = scrollTarget;
            });
        });  
    };

    $(document).ready(function() {
        MIDDLEMAIL.init();
    }); 

})(jQuery, window, document);