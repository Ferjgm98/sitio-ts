// if( 'ontouchstart' in window) {
//     var click = 'touchstart';
// } else {
//     var click = 'click';
// }
var click = 'click';
document.querySelector('#ts-header--nav_mobile--burger-btn').addEventListener('click', function(){
    if(!this.classList.contains('open')) {
        openMenu();
    } else {
        closeMenu();
    }
});

$('.ts-header--nav_mobile--list .ts--menu_item .ts--link').on('click', function(e) {
    closeMenu(); 
});

function openMenu(){
    document.querySelector('.menu-container').style.display = "block";
    document.querySelector('.circle').classList.add('expand');

    document.querySelector('#ts-header--nav_mobile--burger-btn').classList.add('open');
    $('.x, .y, .z').addClass('collapse');
    $('.ts--menu_item').addClass('animate');

    setTimeout(function(){
        document.querySelector('.y').style.display = "none";

        document.querySelector('.x').classList.add('rotate30');
        document.querySelector('.z').classList.add('rotate150');
    }, 70);

    setTimeout(function(){
        document.querySelector('.x').classList.add('rotate45');
        document.querySelector('.z').classList.add('rotate135');
    }, 120);
}

function closeMenu() {
    document.querySelector('.menu-container').style.display = "none";
    document.querySelector('#ts-header--nav_mobile--burger-btn').classList.remove('open');

    document.querySelector('.x').classList.remove('rotate45');
    document.querySelector('.x').classList.add('rotate30');
    document.querySelector('.z').classList.remove('rotate135');
    document.querySelector('.z').classList.add('rotate150');

    document.querySelector('.circle').classList.remove('expand');
    $('.ts--menu_item').removeClass('animate');

    setTimeout(function() {
        document.querySelector('.x').classList.remove('rotate30');
        document.querySelector('.z').classList.remove('rotate150');
    }, 50);

    setTimeout(function() {
        document.querySelector('.y').style.display = "block";

        $('.x, .y, .z').removeClass('collapse');
    }, 70);

}



function smoothScroll(action, destiny) {
    $(action).click(function() {
        $('html, body').animate({
            scrollTop: $(destiny).offset().top
        }, 200);
    });
}

smoothScroll('#home-m, #home-d', '#home');
smoothScroll('#about-m, #about-d', '#about-us');
smoothScroll('#projects-m, #projects-d', '#our-projects');
smoothScroll('#videos-m, #videos-d', '#vr-videos');
smoothScroll('#arrow-about', '#about-us');

