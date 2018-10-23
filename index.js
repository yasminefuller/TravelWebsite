$(document).ready(() => {

    $('#about-page').hide();
    $('#tips-tricks-page').hide();
    $('#trips-page').hide();
    $('#contact-page').hide();
    $('.nav-trips').hide();

    $('.about').on('click', () => {
        $('#about-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#trips-page').hide();
        $('#contact-page').hide();
    }).on('mouseenter', () => {
        $('.about').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.about').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

    $('.tips-tricks').on('click', () => {
        $('#tips-tricks-page').show();
        $('#home-page').hide();
        $('#about-page').hide();
        $('#trips-page').hide();
        $('#contact-page').hide();
    }).on('mouseenter', () => {
        $('.tips-tricks').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.tips-tricks').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

    $('.trips').on('click', () => {
        $('#trips-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#about-page').hide();
        $('#contact-page').hide();
    }).on('mouseenter', () => {
//      $('.nav-trips').show(); Creates dropdown
        $('.trips').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
//      $('.nav-trips').hide(); Creates dropdown
        $('.trips').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

    $('.contact').on('click', () => {
        $('#contact-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#about-page').hide();
        $('#trips-page').hide();
    }).on('mouseenter', () => {
        $('.contact').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.contact').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

    $('.home').on('click', () => {
        $('#home-page').show();
        $('#contact-page').hide();
        $('#tips-tricks-page').hide();
        $('#about-page').hide();
        $('#trips-page').hide();
    }).on('mouseenter', () => {
        $('.home').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.home').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

});