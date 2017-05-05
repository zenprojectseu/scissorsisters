$(function(){

    //cache the window object
    var $window= $(window);
    //paralax background effect
    $('section[data-type="background"]').each(function(){

        var $bgobj = $(this); //assigning the oject
        $(window).scroll(function(){

           //scroll the background at var speed
            //the ypos is a negative value because we're scrolling it UP!

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            //put together our final background possition

            vr coords = '50% '+ yPos + 'px';
            //move the background
            $bgobj.css({backgroundPosition: coords});
        });// end window scroll
    });

});
