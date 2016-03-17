
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
                        }, 125);

                    setTimeout(
                        function() {
                            next_element.toggleClass('is-active');

                            if (next_element.length < 1) {
                                $('.quotes').removeClass('is-active');
                                $('.quotes').first().toggleClass('is-active');
                            }


                        }, 125);
        }, 500); // Time between rolling elements (min 250ms)
    },
    Stop: function() {
        window.clearTimeout(this.roller);
    }
};

Roller.Start(1); // Start the roller
// Roller.Stop(); // Stop the roller

var timer = null;
var isIntervalSet = false;

$('body').mousemove(function() {
    if (isIntervalSet) {
        return;
    }
    timer = window.setInterval(function() {

        $('body').addClass('is-blacked')

        Roller.Stop(); // Stop the slider

    }, 125);
    isIntervalSet = true;
}).mousestop(function() {
    isIntervalSet = false;
    window.clearTimeout(timer);
    timer = null;

    $('body').removeClass('is-blacked');

    Roller.Start(1); // Start the roller

});

timer = window.setInterval(function() {
    enableHandler = true;
}, 10);

$(document).ready(function() {
    // Initialize popup as usual
    $('.popup-link').magnificPopup({
      // Delay in milliseconds before popup is removed
      removalDelay: 300,

      // Class that is added to popup wrapper and background
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: 'mfp-fade'
    });
});