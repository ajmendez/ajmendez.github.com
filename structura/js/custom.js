/*global jQuery:false */
(function ($) {
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });
    
    
    
	$("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
	$(".post").wrap("<td></td>");
    
    // $("body").mousewheel(function(event, delta) {
    //     this.scrollLeft -= (delta * 5);
    //     event.preventDefault();
    // });
    
    
    var h = $(window).height();
    $('#intro').css('height', h-50+'px');
    

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});	

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
    
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');

            event.preventDefault();
            }
        });
        $('a.totop,a#btn-scroll,a.btn-scroll,.carousel-inner .item a.btn').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // //nivo lightbox
    // $('.astronomer-img a').nivoLightbox({
    //     effect: 'fadeScale',
    //     theme: 'default',
    //     keyboardNav: true,
    //     clickOverlayToClose: true,
    //     errorMessage: 'The requested content cannot be loaded. Please try again later.'
    // });
    
	$('#movie').nivoLightbox({
    effect: 'fadeScale',
    theme: 'default',
    keyboardNav: true,
    clickOverlayToClose: true,
    beforeShowLightbox: function(){
        try {
            pJSDom[0].pJS.particles.move.enable = false;
        } catch (ignore) {
        };
        
    },
    errorMessage: 'The requested content cannot be loaded. Please try again later.',
    videoAutoplay: true,
    });
    
    // jQuery('.appear').appear();
    // jQuery(".appear").on("appear", function(data) {
    //         var id = $(this).attr("id");
    //         jQuery('.nav li').removeClass('active');
    //         jQuery(".nav a[href='#" + id + "']").parent().addClass("active");
    //     });
	
})(jQuery);
