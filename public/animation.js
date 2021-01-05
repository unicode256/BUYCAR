$(window).on('load', () => {
    // setTimeout(() => {
        $('.preloader')[0].classList.toggle('loaded');
    // }, 1000);
});

// setTimeout(() => {
//     $('.large_img').Lazy({
//         // your configuration goes here
//         scrollDirection: 'vertical',
//         effect: 'fadeIn',
//         effectTime: 500,
//         visibleOnly: true,
//         onError: function(element) {
//             console.log('error loading ' + element.data('src'));
//         }
//     });
// }, 1000);

$('.large_img').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    effectTime: 500,
    visibleOnly: true,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
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

$('.all_parameters').on('click', () => {
    $('.all_search_parameters_wrapper')[0].classList.toggle('all_search_parameters_wrapper_active');
    $('html')[0].classList.toggle('modal_open');
});

$('.all_search_parameters_wrapper').on('click', () => {
    console.log(000);
    if(event.target.classList.contains('all_search_parameters_wrapper')){
        $('.all_search_parameters_wrapper')[0].classList.toggle('all_search_parameters_wrapper_active');
        $('html')[0].classList.toggle('modal_open');
    }
});

$('.parameter_list').on('mousedown', (e) => {
    console.log(e.target);
    e.preventDefault();
    e.stopPropagation();
});

if($("div").is(".slider")){
    $(".slider").slider({
        min: 0,
        max: 300000,
        values: [0, 300000],
        range: true,
        animate: "fast",
        slide : function(event, ui) {    
            $("#slider_from").val(String(ui.values[0]).replace(/(\d)(?=(\d{3})+$)/g, '$1 '));   
            $("#slider_to").val(String(ui.values[1]).replace(/(\d)(?=(\d{3})+$)/g, '$1 '));  
        }    
    });
    $("#slider_from").val(String($(".slider").slider("values", 0)).replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
    $("#slider_to").val(String($(".slider").slider("values", 1)).replace(/(\d)(?=(\d{3})+$)/g, '$1 '));
    
    $(document).focusout(function() {
        var input_left = $("#slider_from").val().replace(/[^0-9]/g, ''),    
        opt_left = $(".slider").slider("option", "min"),
        where_right = $(".slider").slider("values", 1),
        input_right = $("#slider_to").val().replace(/[^0-9]/g, ''),    
        opt_right = $(".slider").slider("option", "max"),
        where_left = $(".slider").slider("values", 0); 
        if (input_left > where_right) { 
            input_left = where_right; 
        }
        if (input_left < opt_left) {
            input_left = opt_left; 
        }
        if (input_left == "") {
        input_left = 0;    
        }        
        if (input_right < where_left) { 
            input_right = where_left; 
        }
        if (input_right > opt_right) {
            input_right = opt_right; 
        }
        if (input_right == "") {
            input_right = 0;    
        }
        $("#slider_from").val(String(input_left).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')); 
        $("#slider_to").val(String(input_right).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')); 
        $(".slider").slider( "values", [ input_left, input_right ]);
    });
}