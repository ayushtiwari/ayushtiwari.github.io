$(window).on("load",function() {
    $(".bottom").fadeIn(1000);
    // $(".bottom").slideUp(1000);
    $(".project-item").addClass("fade");
    $(".project-item:nth-of-type(1)").removeClass("fade");
    $(".project-item:nth-of-type(2)").removeClass("fade");

    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {

            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom+50) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(1000, 1);}
            }

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                $(".bottom").fadeOut(1000);
            }
        });
    }).scroll();
});