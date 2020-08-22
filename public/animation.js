$(window).on('load', () => {
    setTimeout(() => {
        $('.preloader')[0].classList.toggle('loaded');
    }, 1000);
});

$(window).on('scroll', () => {
    let navbar = $('.navbar')[0];
    navbar.classList.toggle('sticky_navbar', window.scrollY > 0);
});

$('.sidebar_switcher').on('click', () => {
    $('.menu_toggle')[0].classList.toggle('active');
})