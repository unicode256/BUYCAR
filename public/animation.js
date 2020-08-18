$(window).on('scroll', () => {
    let navbar = $('.navbar')[0];
    navbar.classList.toggle('sticky_navbar', window.scrollY > 0);
});