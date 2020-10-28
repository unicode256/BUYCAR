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
var slideCount = $('.active_photo').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

var maxMoved = ((slideCount - 6) / 2) * 96 + 96;
var movedLeft = 0;
var movedRight = maxMoved;

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

function moveTapeRight(prevSlide) {
    if (prevSlide == 1 || prevSlide <= 0 || prevSlide > slideCount) {
        // translateWidth = -$('.selector_photo').width() * (slideCount - 6);
        translateWidth = -(maxMoved);
        $('.photos_selector').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        movedRight = 0;
        movedLeft = maxMoved;
        console.log(222);

    } else {
        // translateWidth = -$('.selector_photo').width() * (slideNow - 1);
        
        translateWidth = -(movedLeft - 96);
        $('.photos_selector').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        movedRight += 96;
        movedLeft -= 96;
    }
    console.log(translateWidth);
    console.log('maxMoved = ' + (maxMoved + 96));
    console.log('movedLeft = ' + movedLeft);
    console.log('movedRight = ' + movedRight);
}

function moveTapeLeft(prevSlide) {
    console.log(prevSlide);
    if (prevSlide == 1 || prevSlide == slideCount || prevSlide <= 0 || prevSlide > slideCount) {
        $('.photos_selector').css('transform', 'translate(0, 0)');
        console.log(333);
        movedLeft = 0;
        movedRight = maxMoved;
    } else {
        // translateWidth = -$('.selector_photo').width() * (prevSlide - 1);

        translateWidth = -(movedLeft + 96);
        $('.photos_selector').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        movedLeft += 96;
        movedRight -= 96;
    }
    console.log(translateWidth);
    console.log('movedLeft = ' + movedLeft);
    console.log('movedRight = ' + movedRight);
}

function nextSlide() {
    var prevSlide;
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.active_photo').css('transform', 'translate(0, 0)');
        $('.selector_photo.s' + slideNow).removeClass('active');
        prevSlide = slideNow;
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
        prevSlide = slideNow;
        slideNow++;
		$('.selector_photo.s' + slideNow).addClass('active');
    }
    if(movedLeft < maxMoved || prevSlide == slideCount){
        moveTapeLeft(prevSlide);
    }
}

function prevSlide() {
    var prevSlide;
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.gallery').width() * (slideCount - 1);
        $('.active_photo').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.selector_photo.s' + slideNow).removeClass('active');
        prevSlide = slideNow;
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
        prevSlide = slideNow;
        slideNow--;
		$('.selector_photo.s' + slideNow).addClass('active');
    }
    if((movedRight < maxMoved || prevSlide == 1) && prevSlide != slideCount){
        moveTapeRight(prevSlide);
    }
    
}