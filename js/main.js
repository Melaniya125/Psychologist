$(function(){
    $(".header-menu-mobile-opener").on("click",function(){
        $(".header-menu-mobile").addClass("isOpened");
    });
    $(".header-menu-mobile-closer, .header-menu-mobile-link").on("click",function(){
        $(".header-menu-mobile").removeClass("isOpened");
    });
    function getHeaderHeight(){
        return $(".fixed-header").innerHeight();
    };
    console.log(gsap);
    $(window).on("resize", function(){
        $(".about-block").css("padding-top", getHeaderHeight() + "px")
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fixed-header", {
        scrollTrigger: {
            trigger: ".about-block",
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            // markers: true
            onUpdate: () => {
                setTimeout(() => {
                    $(".about-block").css("padding-top", getHeaderHeight() + "px")
                }, 0);
            }
        }, // start the animation when ".box" enters the viewport (once)
        height: () => {
            return 130 * 100 / 1920 + "vw";
        },
    });
    $(window).trigger("resize");
    gsap.to(".header-background img", {
        scrollTrigger: {
            trigger: ".about-block",
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=500", // end after scrolling 500px beyond the start
            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            marcers: true
        }, // start the animation when ".box" enters the viewport (once)
        scale: 1.1
    });

});
