$(window).on('load', () => {
    // setTimeout(() => {
        $('.preloader')[0].classList.toggle('loaded');
    // }, 1000);
});

$(window).on('scroll', () => {
    let navbar = $('.navbar')[0];
    navbar.classList.toggle('sticky_navbar', window.scrollY > 0);
});

$('.sidebar_switcher').on('click', () => {
    $('.navbar')[0].classList.toggle('sidebar_nav_active');
});

$('.account_info').on('click', () => {
    $('.account_menu')[0].classList.toggle('account_menu_open');
});

$('.menu_item').on('click', (event) => {
    console.log(event.target.nodeName);
    if(event.target.nodeName != 'LI'){
        return;
    }
    event.target.classList.toggle('submenu_open');
});

$('.bg').on('click', () => {
    $('.navbar')[0].classList.toggle('sidebar_nav_active');
});