var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.offer'
})
.setClassToggle('.offer', 'fade-in')
.addTo(controller);

var controller2 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.components'
})
.setClassToggle('.components', 'fade-in')
.addTo(controller2);

var controller3 = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.col-3-of-3'
})
.setClassToggle('.col-3-of-3', 'fade-in')
.addTo(controller2);

var controller4 = new ScrollMagic.Controller();



// media

$(document).ready(function(){
    $(".menu").on("click", function(){
        $("nav ul li").toggleClass("open");
    });
});