$(document).ready(() => {

    $('#about-page').hide();
    $('#tips-tricks-page').hide();
    $('#past-trips-page').hide();
    $('#future-trips-page').hide();
    $('#contact-page').hide();

    $('.about').on('click', () => {
        $('#about-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#past-trips-page').hide();
        $('#future-trips-page').hide();
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
        $('#past-trips-page').hide();
        $('#future-trips-page').hide();
        $('#contact-page').hide();
        $('.blog-page').hide();
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

    $('#tip-1').on('click', () => {
        $('#tip-1-page').show();
        $('.blog-post-box').hide();
    }).on('mouseenter', () => {
        $('#tip-1').css({
            color: 'blue'
        });
    }).on('mouseleave', () => {
        $('#tip-1').css({
            color: 'black'
        });
    });

    $('.past-trips').on('click', () => {
        $('#past-trips-page').show();
        $('.blog-post-box').show();
        $('#home-page').hide();
        $('#future-trips-page').hide();
        $('#tips-tricks-page').hide();
        $('#about-page').hide();
        $('#contact-page').hide();
        $('.blog-page').hide();
    }).on('mouseenter', () => {
        $('.past-trips').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.past-trips').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });


    $('#tulum').on('click', () => {
        $('#tulum-page').show();
        $('.blog-post-box').hide();
    }).on('mouseenter', () => {
        $('#tulum').css({
            color: 'blue'
        });
    }).on('mouseleave', () => {
        $('#tulum').css({
            color: 'black'
        });
    });
    $('#newyorkcity').on('click', () => {
        $('#newyorkcity-page').show();
        $('.blog-post-box').hide();
    }).on('mouseenter', () => {
        $('#newyorkcity').css({
            color: 'blue'
        });
    }).on('mouseleave', () => {
        $('#newyorkcity').css({
            color: 'black'
        });
    });

    $('.future-trips').on('click', () => {
        $('#future-trips-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#past-trips-page').hide();
        $('#about-page').hide();
        $('#contact-page').hide();
    }).on('mouseenter', () => {
        $('.future-trips').css({
            color: 'blue',
            backgroundColor: 'grey'
        });
    }).on('mouseleave', () => {
        $('.future-trips').css({
            color: 'black',
            backgroundColor: 'beige'
        });
    });

    $('.contact').on('click', () => {
        $('#contact-page').show();
        $('#home-page').hide();
        $('#tips-tricks-page').hide();
        $('#about-page').hide();
        $('#past-trips-page').hide();
        $('#future-trips-page').hide();
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
        $('#past-trips-page').hide();
        $('#future-trips-page').hide();
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