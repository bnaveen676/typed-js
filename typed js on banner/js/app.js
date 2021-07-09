//start preloader
$(window).on('load', () => {
    $(".preloader").fadeOut(800);
    $(".preloadContainer").delay(800).fadeOut(1000);
});
// end preloader

// dom content is loading
$(() => {
    var typed = new Typed('.animateText', {
        strings: ['ui developer', 'ui designer', 'web developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
});