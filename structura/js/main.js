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
    var dots = (w > 500);
    owl.owlCarousel({
        loop:false,
        nav:true,
        // navText:['<i class="fa fa-2x fa-arrow-circle-left"></i>','<i class="fa fa-2x  fa-arrow-circle-right"></i>'],
        navText:['<i class="fa fa-5x fa-chevron-left"></i>','<i class="fa fa-5x  fa-chevron-right"></i>'],
        
        smartSpeed: 600,
        fluidSpeed: 100,
        dotsSpeed: 100,
        dots: dots,
        // startPosition:1,
        // dotData: '<i class="fa fa-circle"></i>',
        stagePadding: 0,
        
        // autoHeight: true,
        // autoWidth:true,
        
    
        // margin:10,
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
    
    
})(jQuery);








