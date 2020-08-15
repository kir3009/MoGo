$(function () {

    var header=$("#header"),
        introH=$("#intro").innerHeight(),
        scrollOfset=$(window).scrollTop();

    checkScroll(scrollOfset);

    $(window).on("scroll",()=>{
        scrollOfset=$(this).scrollTop();

        checkScroll(scrollOfset);
        console.log(scrollOfset);
    });

    function checkScroll(scrollOfset){
        if (scrollOfset>=introH)
            header.addClass("fixed");
        else header.removeClass("fixed");
    }

//    Smoth Scroll

    $("[data-scroll]").on("click", function(event){
       event.preventDefault();

       var $this=$(this),
           blockId=$this.data('scroll'),
           blockOffset=$(blockId).offset().top;

       $("#nav a").removeClass("active");
       $this.addClass("active");


       $("html, body").animate({
           scrollTop:blockOffset
       },500);
        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
    });

//    Menu Nav Toggle
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

//    Collapse

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this=$(this);
        $this.toggleClass('active');

    })

//    Slider

    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});