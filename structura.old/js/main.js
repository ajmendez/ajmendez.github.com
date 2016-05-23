/*global jQuery:false */
(function ($) {
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 50 });
    });
    
    var h = $(window).height();
    var w = $(window).width();
    // $('#intro').css('top', 50+'px');
    // $('#intro').css('height', h-50+'px');
    // $('.image-wrapper img').css('height', h-100+'px');
    

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});	

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 0) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
		if ($(this).scrollTop() >= h) {
			$('.navbar-brand').html("<a href='#intro'>Into The Distant Sky</a>");
		} else {
			$('.navbar-brand').html('<i class="fa fa-chevron-down"></i> Scroll to learn more');
		};
			
	});
    
    
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
    
    
    
	$('.conebox').nivoLightbox({
    effect: 'fadeScale',
    theme: 'default',
    keyboardNav: true,
    clickOverlayToClose: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.',
    });
    
    
    
    var owl = $('.owl-carousel');
    if (w < 800) {
        var navtext = ['<i class="fa fa-2x fa-chevron-left"></i><br />Closer to us', '<i class="fa fa-2x fa-chevron-right"></i><br>Further away']
    } else {
        var navtext = ['<i class="fa fa-5x fa-chevron-left"></i><br />Closer to us', '<i class="fa fa-5x fa-chevron-right"></i><br>Further away']
    }
    owl.owlCarousel({
        loop:false,
        nav:(w > 450),
        navText:navtext,
        smartSpeed: 600,
        fluidSpeed: 100,
        dotsSpeed: 100,
        dots: (w > 650),
        stagePadding: 0,
        responsive:{
            0:{
                items:1
            },
        }
    });
    $(document.documentElement).keyup(function(event) {
        // handle cursor keys
        if (event.keyCode == 37 | event.keyCode == 38) {
            owl.trigger('prev.owl');
        } else if (event.keyCode == 39 | event.keyCode == 40) {
            owl.trigger('next.owl');
        }
        console.log(event.keyCode);
    });
    // owl.on('mousewheel', '.owl-bottom', function (e) {
    //     if (e.deltaY<0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     // e.preventDefault();
    // });
    
    $('#navicon').click(function (ev) {
        $('#navicon').toggleClass('fa-chevron-down');
        // $('#explore-subtitle').toggleClass('link-hide')
    });
    
    
    
    $('#explore-open').click(function (ev) {
        $('#explore').toggleClass('link-hide');
        // $('#explore-subtitle').toggleClass('link-hide')
    });
    
    $('#use-open').click(function (ev) {
        $('#use').toggleClass('link-hide');
        // $('#use-subtitle').toggleClass('link-hide')
    });
    
    $('#involve-open').click(function (ev) {
        $('#involve').toggleClass('link-hide');
        // $('#involve-subtitle').toggleClass('link-hide')
    });
    
    
    
    $('.infoexpand').hide();
    $('.infoheader h3').click(function() {
        $(this).parent().find('ul').slideToggle();
    });
	
    // var clickflag = false;
	$('img.hovercone').bind("click touchstart", function (e) {
	    'use strict'; //satisfy code inspectors
        // if (!clickflag) {
        //     clickflag=true;
        //     setTimeout(function(){clickflag=false;}, 100);
        // };
	    var link = $(this); //preselect the link
	    if (link.hasClass('hover')) {
            link.removeClass('hover');
	        return true;
	    } else {
	        link.addClass('hover');
	        $('img.hovercone').not(this).removeClass('hover');
	        e.preventDefault();
	        return false; //extra, and to make sure the function has consistent return points
	    }
	});
	
    
    
})(jQuery);








