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

var slideNow = 1;
var slideCount = $('.gallery').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {

    $('.next_photo').click(function() {
        nextSlide();
    });

    $('.prev_photo').click(function() {
        prevSlide();
    });

    $('.selector_photo').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.gallery').width() * (navBtnId);
            $('.active_photo').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
			$('.selector_photo.s' + slideNow).removeClass('active');
            slideNow = navBtnId + 1;
			$('.selector_photo.s' + slideNow).addClass('active');
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.active_photo').css('transform', 'translate(0, 0)');
		$('.selector_photo.s' + slideNow).removeClass('active');
        slideNow = 1;
		$('.selector_photo.s' + slideNow).addClass('active');
    } else {
        translateWidth = -$('.gallery').width() * (slideNow);
        $('.active_photo').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
		$('.selector_photo.s' + slideNow).removeClass('active');
        slideNow++;
		$('.selector_photo.s' + slideNow).addClass('active');
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.gallery').width() * (slideCount - 1);
        $('.active_photo').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
		$('.selector_photo.s' + slideNow).removeClass('active');
        slideNow = slideCount;
		$('.selector_photo.s' + slideNow).addClass('active');
    } else {
        translateWidth = -$('.gallery').width() * (slideNow - 2);
        $('.active_photo').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
		$('.selector_photo.s' + slideNow).removeClass('active');
        slideNow--;
		$('.selector_photo.s' + slideNow).addClass('active');
    }
}