$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                console.log(scroll_pos);
                if(scroll_pos > 150) {
                    $("#index-header").stop().animate({
                        backgroundColor: "rgba(0,0,0,1)"
                    }, 50);
                } else {
                    $("#index-header").stop().animate({
                        backgroundColor: "rgba(0,0,0,0)"
                    }, 50); 
                }
            });
        });