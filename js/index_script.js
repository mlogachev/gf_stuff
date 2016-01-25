$(document).ready(function(){  

    var scroll_pos = 0;
    //header bar color change 
    $(document).scroll(function() { 
        
        scroll_pos = $(this).scrollTop();
        console.log(scroll_pos);
        
        if(scroll_pos > 150) {
            $("#index-header").stop().animate({
                backgroundColor: "rgba(240,240,240,1)"
            }, 50);
        } else {
            $("#index-header").stop().animate({
                backgroundColor: "rgba(240,240,240,0)"
            }, 50); 
        }
    });

    $('.page-nav').on('click', function(event) {
        var target = $($(this).attr('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
});