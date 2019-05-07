//Height of blocks :
$( document ).ready(function() {
    var viewportHeight = $(window).height();
    var header = $('header').outerHeight(true);
    var about = viewportHeight-header;
    $('#aboutme').css({
        "height": about
    });
    $('#aboutme img').css({
        "height": about
    });
    $('#footer').css('height',about);
});



//type animation
$(document).ready(function () {
    $(function(){
        $("#typed").typed({
            stringsElement: $('#bio'),
            showCursor: false
        });
    });
});

//brain increase percentage
$(document).ready(function () {
    $('#count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 66000,
            easing: 'linear',
            step: function (now) {
                $(this).text(Math.ceil(now)).append(' %');
            }
        });
    });
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        css3: true,
        scrollingSpeed: 2000,
        autoScrolling: false,
        resetSliders: true,
        fitToSection: false,
        fitToSectionDelay: 2000,
        //disable when mobile will be ready
        scrollBar: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        recordHistory: true,

        //Design
        verticalCentered: true
    });
});


