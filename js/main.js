$(document).ready(function() {
    $(function() { $('[data-toggle="tooltip"]').tooltip() });
    var a = !1;

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }

    $("#navbar > ul > li > a").click(function(e) {
        e.preventDefault();
        goToByScroll(this.dataset.sc);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#tp').stop().animate({
                bottom: '20px'    
            }, 500);
        } else {
            $('#tp').stop().animate({
               bottom: '-100px'    
            }, 500);
        }
    });
    $('#tp').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function() {
            $('#tp').stop().animate({
                bottom: '-100px'    
            }, 500);
        });
    });
    for (var b = document.getElementsByClassName("cut"), c = 0; c < b.length; c++) b[c].style.setProperty("-webkit-transition", "transform 5s linear"), b[c].style.setProperty("-moz-transition", "transform 5s linear"), b[c].style.setProperty("-o-transition", "transform 5s linear"), b[c].style.setProperty("transition", "transform 5s linear"), b[c].style.webkitTransform = "rotate(" + b[c].getAttribute("data-rot") + "deg)", b[c].style.MozTransform = "rotate(" + b[c].getAttribute("data-rot") + "deg)", b[c].style.msTransform = "rotate(" + b[c].getAttribute("data-rot") + "deg)", b[c].style.OTransform = "rotate(" + b[c].getAttribute("data-rot") + "deg)", b[c].style.transform = "rotate(" + b[c].getAttribute("data-rot") + "deg)"
});
