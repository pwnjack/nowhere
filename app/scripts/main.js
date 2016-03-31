// Replace all SVG images with inline SVG
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

// FitText
if ($('body').hasClass('is-home')) {
    // console.log('this is home');
    window.fitText( document.getElementsByClassName("fittext") );
}

if ($('body').hasClass('is-about')) {
    // console.log('this is about');
    $('body').css('overflow', 'visible');
}

// On windows resize, brutally reload page, because fuck it!
window.onresize = function(event) {
    window.location.reload(false); 
};

// Hide quotes
$('.quotes').css('display', 'none');

// Add custom cursor
if ($('body').hasClass('is-home')) {
    $('body').addClass('cursor-stop');
}

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

if ($('body').hasClass('is-home')) {
    $('body').on('click', function() {
        // Change svg color
        $('.svg-home path').css('fill', 'white');
        $('.svg-home:hover path').css('fill', 'white');
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
            // Change svg color
            $('.svg-home path').css('fill', 'black');
            $('.svg-home:hover path').css('fill', 'white');
        }

    });
}
