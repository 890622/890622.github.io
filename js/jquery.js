$(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 1) {
                $('#nav').slideDown(200);
            } else {
                $('#nav').slideUp(200);
            }
        });
    });



