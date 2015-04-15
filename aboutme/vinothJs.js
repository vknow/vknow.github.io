$(document).ready(function() {
    var a = !1;
    $(document).scroll(function() {
        var b = $(this).scrollTop(),
            c = $("header").position();
        b > c.top && !a ? ($("nav").css({
            visibility: "hidden"
        }), $("#onmotion").css({
            visibility: "initial",
            position: "fixed",
            top: "0",
            width: "100%",
            "background-color": "rgb(20, 25, 30)",
            "margin-top": "-50px"
        }), $("#onmotion").animate({
            "margin-top": "0px"
        }), a = !0) : b < c.top && ($("#onmotion").animate({
            "margin-top": "-50px"
        }, function() {
            $("nav").css({
                visibility: "initial"
            }), $("#onmotion").css({
                visibility: "hidden"
            })
        }), a = !1)
    })
});
