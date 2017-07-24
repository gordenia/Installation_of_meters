$(document).ready(function(){
    smoothScroll();
    gallery();
});

function smoothScroll(){
    $('a.menu-item').click(function (){
        $('html, body').animate({scrollTop: $($(this).attr('href')).position().top - 60}, 2000);
    });
}

function gallery() {
    $('.gallery').lightGallery({
        selector: 'a'
    });
}

