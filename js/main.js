/*global jQuery:false */
(function ($) {
	//nivo lightbox
	$('.research-img>a').nivoLightbox({
		effect: 'fadeScale',
		theme: 'default',
		keyboardNav: true,
		clickOverlayToClose: true,
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	});
    
    // Menu settings
    $('.navbar-toggle').on('click', function(){
        $('#menuIcon').toggleClass('fa-chevron-down');
    });
            
            // $(document).ready(function() {
            //   $('.rotate').css('height', $('.rotate').width());
            // });
            
            // Debug show
            // $(window).load(function(){
            //     $('#menuToggle').toggleClass('active');
            //     $('body').toggleClass('body-push-toleft');
            //     $('#theMenu').toggleClass('menu-open');
            //     $('#menuIcon').toggleClass('fa-chevron-right');
            // });
            
            
            // $('.masterTooltip').on('hover', function() {
            //     console.log('test');
            // });
            //
            // $('#researchCarousel').carousel({
            //     interval: 3000
            // });
            

        })(jQuery);




// $(document).ready(function() {
// // Tooltip only Text
// $('.masterTooltip').hover(function(){
//         // Hover over code
//         var title = $(this).attr('title');
//         $(this).data('tipText', title).removeAttr('title');
//         $('<p class="tooltip"></p>')
//         .text(title)
//         .appendTo('body')
//         .fadeIn('slow');
// }, function() {
//         // Hover out code
//         $(this).attr('title', $(this).data('tipText'));
//         $('.tooltip').remove();
// }).mousemove(function(e) {
//         var mousex = e.pageX + 20; //Get X coordinates
//         var mousey = e.pageY + 10; //Get Y coordinates
//         $('.tooltip')
//         .css({ top: mousey, left: mousex })
// });
// });