$(function() {
    initNav();
    initLinks();
});

function initNav() {
    var $nav = $("#nav");
    
    $(window).scroll(function() {
        if ($nav.offset().top > 200) {
            $nav.addClass("top-nav-collapse");
        } else {
            $nav.removeClass("top-nav-collapse");
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