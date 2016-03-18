// FitText
// fitText(document.getElementById('fittext'), 1.2)
window.fitText( document.getElementsByClassName("fittext") );

// Hide quotes
$('.quotes').css('display', 'none');

// Add custom cursor
$('body').addClass('cursor-stop');

// Text roller
var Roller= {
    roller: null,
    Start: function(i) {
        this.roller = setInterval(function() {
            // Roller code
             var current_element = $('.huge-text-container').find('.is-active');
                    var next_element = current_element.next('.quotes');

                    setTimeout(
                        function() {
                            current_element.toggleClass('is-active');
                        }, 75);

                    setTimeout(
                        function() {
                            next_element.toggleClass('is-active');

                            if (next_element.length < 1) {
                                $('.quotes').removeClass('is-active');
                                $('.quotes').first().toggleClass('is-active');
                            }


                        }, 75);
        }, 150); // Time between rolling elements (min double toggle timeout)
    },
    Stop: function() {
        window.clearTimeout(this.roller);
    }
};

Roller.Start(1); // Start the roller
// Roller.Stop(); // Stop the roller

$('body').on('click', function() {
    
    // Lights off
    $(this).toggleClass('is-blacked');
    // Set play cursor
    $('body').removeClass('cursor-stop').addClass('cursor-play');
    // Stop roller
    Roller.Stop();

    if (!$('body').hasClass('is-blacked')) {
        // Start roller
        Roller.Start(1);
        // Set stop cursor
        $('body').removeClass('cursor-play').addClass('cursor-stop');
    }

});

// Follower
// var mouseX = 0,
//     mouseY = 0;

// $(document).mousemove(function(e){
//    mouseX = e.pageX;
//    mouseY = e.pageY; 
// });

// var follower = $("#follower");
// var xp = 40, yp = 40;
// var loop = setInterval(function(){
//     // change 12 to alter damping higher is slower
//     xp += (mouseX - xp) / 12 -1;
//     yp += (mouseY - yp) / 12 -1;
//     follower.css({left:xp, top:yp});

// }, 15); 


// Mouse move event (with delay)
// var timer = null;
// var isIntervalSet = false;

// $('body').mousemove(function() {
//     if (isIntervalSet) {
//         return;
//     }
//     timer = window.setInterval(function() {

//         $('body').addClass('is-blacked')

//         Roller.Stop(); // Stop the slider

//     }, 125);
//     isIntervalSet = true;
// }).mousestop(function() {
//     isIntervalSet = false;
//     window.clearTimeout(timer);
//     timer = null;

//     $('body').removeClass('is-blacked');

//     Roller.Start(1); // Start the roller

// });

// timer = window.setInterval(function() {
//     enableHandler = true;
// }, 10);

// // Magnific popup
// $(document).ready(function() {
//     $('.popup-link').magnificPopup({
//       // Delay in milliseconds before popup is removed
//       removalDelay: 300,
//       mainClass: 'mfp-fade'
//     });
// });
