$(document).ready(function(){$(function(){$('[data-toggle="tooltip"]').tooltip()});var a=!1;$(document).scroll(function(){var b=$(this).scrollTop(),c=$("header").position();b>c.top&&!a?($("nav").css({visibility:"hidden"}),$("#onmotion").css({visibility:"initial",position:"fixed",top:"0",width:"100%","z-index":"2000","background-color":"rgb(20, 25, 30)","margin-top":"-50px"}),$("#onmotion").animate({"margin-top":"0px"}),a=!0):b<=c.top&&a&&($("#onmotion").animate({"margin-top":"-50px"},function(){$("nav").css({visibility:"initial"}),$("#onmotion").css({visibility:"hidden"})}),a=!1)});for(var b=document.getElementsByClassName("cut"),c=0;c<b.length;c++)b[c].style.setProperty("-webkit-transition","transform 5s linear"),b[c].style.setProperty("-moz-transition","transform 5s linear"),b[c].style.setProperty("-o-transition","transform 5s linear"),b[c].style.setProperty("transition","transform 5s linear"),b[c].style.webkitTransform="rotate("+b[c].getAttribute("data-rot")+"deg)",b[c].style.MozTransform="rotate("+b[c].getAttribute("data-rot")+"deg)",b[c].style.msTransform="rotate("+b[c].getAttribute("data-rot")+"deg)",b[c].style.OTransform="rotate("+b[c].getAttribute("data-rot")+"deg)",b[c].style.transform="rotate("+b[c].getAttribute("data-rot")+"deg)"});