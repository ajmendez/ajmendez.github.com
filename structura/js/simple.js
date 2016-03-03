(function ($) {
    // $(".wrapper").wrapInner("<table cellspacing='30'><tr>");
    // $(".post").wrap("<td></td>");
    
    // var w = $(window).width();
    // $('.post').css('width', w+'px');
    
    
    // Horz Scroll
    // $("body").mousewheel(function(event, delta) {
    //     this.scrollLeft -= (delta * 5);
    //     event.preventDefault();
    // });
    
    
    
    // Carosel
    // $('.carousel').carousel({
    //     pause: true,
    //     interval: false,
    // });
    
    
    // $('.owl-carousel').owlCarousel();
    var w = $(window).width();
    var dots = (w > 500);
    
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:false,
        nav:true,
        navText:['<i class="fa fa-2x fa-arrow-circle-left"></i>','<i class="fa fa-2x  fa-arrow-circle-right"></i>'],
        smartSpeed:2000,
        fluidSpeed: 500,
        dotsSpeed: 100,
        dots: dots,
        // startPosition:1,
        // dotData: '<i class="fa fa-circle"></i>',
        // autoHeight: true,
        
        margin:10,
        responsive:{
            0:{
                items:1
            },
            // 1800:{
            //     items:2
            // }
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

    
    

    
    // owl.on('mousewheel', '.owl-stage', function (e) {
    //     if (e.deltaY>0) {
    //         owl.trigger('next.owl');
    //     } else {
    //         owl.trigger('prev.owl');
    //     }
    //     e.preventDefault();
    // });
    $("body").mousewheel(function(event, delta) {
        if (event.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
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
    
})(jQuery);
