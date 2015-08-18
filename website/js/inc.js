$(function() {
    initNav();
    initLinks();
});

function initNav() {
    var $nav = $(".navbar-fixed-top");
    
    $(window).scroll(function() {
        if ($nav.offset().top > $(".jumbotron").height()) {
            $nav.addClass("navbar-shrink");
        } else {
            $nav.removeClass("navbar-shrink");
        }
    });
}

function initLinks() {
    $(".media").click(function() {
        var href = $(this).find(".media-heading a").attr("href");
        
        //Redirect
        location = href;
    });
}