$(document).ready(function() {
    var flag = false;
    $(document).scroll(function() {
        var scrol = $(this).scrollTop();
        var post = $('header').position();

        if (scrol > post.top && !flag) {
            $('nav').css({
                "visibility": "hidden"
            });
            $('#onmotion').css({
                "visibility": "initial",
                "position": "fixed",
                "top": "0",
                "width": "100%",
                "background-color": "rgb(20, 25, 30)",
                "margin-top": "-50px"
            });
            $('#onmotion').animate({
                "margin-top": "0px"
            });
            flag = true;
        } else   if(scrol <= post.top){
            $('#onmotion').animate({
                "margin-top": "-50px"
            }, function() {
                $('nav').css({
                        "visibility": "initial"
                    }),
                    $('#onmotion').css({
                        "visibility": "hidden"
                    });
            });
            flag = false;
        }
    })
})
