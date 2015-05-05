$(document).ready(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
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
                "z-index": "2000",
                "background-color": "rgb(20, 25, 30)",
                "margin-top": "-50px"
            });
            $('#onmotion').animate({
                "margin-top": "0px"
            });
            flag = true;
        } else if (scrol <= post.top && flag) {
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
    var value = document.getElementsByClassName('cut');
     

    for (var i = 0; i < value.length; i++) {
        value[i].style.webkitTransform = "rotate(" + value[i].getAttribute('data-rot') + "deg)";
        value[i].style.MozTransform = "rotate(" + value[i].getAttribute('data-rot') + "deg)";
        value[i].style.msTransform = "rotate(" + value[i].getAttribute('data-rot') + "deg)";
        value[i].style.OTransform = "rotate(" + value[i].getAttribute('data-rot') + "deg)";
        value[i].style.transform = "rotate(" + value[i].getAttribute('data-rot') + "deg)";
    };
});

// $(document).ready(function(){var i=!1;$(document).scroll(function(){var o=$(this).scrollTop(),n=$("header").position();o>n.top&&!i?($("nav").css({visibility:"hidden"}),$("#onmotion").css({visibility:"initial",position:"fixed",top:"0",width:"100%","background-color":"rgb(20, 25, 30)","margin-top":"-50px"}),$("#onmotion").animate({"margin-top":"0px"}),i=!0):o<=n.top&&($("#onmotion").animate({"margin-top":"-50px"},function(){$("nav").css({visibility:"initial"}),$("#onmotion").css({visibility:"hidden"})}),i=!1)})});
