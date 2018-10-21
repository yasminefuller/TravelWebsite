$(document).ready(() => {

    $("#about-page").hide();
    $("#tips-tricks-page").hide();
    $("#trips-page").hide();
    $("#contact-page").hide();

    $(".about").on('click', () => {
        $("#about-page").show();
        $("#home-page").hide();
        $("#tips-tricks-page").hide();
        $("#trips-page").hide();
        $("#contact-page").hide();
    });

    $(".tips-tricks").on('click', () => {
        $("#tips-tricks-page").show();
        $("#home-page").hide();
        $("#about-page").hide();
        $("#trips-page").hide();
        $("#contact-page").hide();
    });

    $(".trips").on('click', () => {
        $("#trips-page").show();
        $("#home-page").hide();
        $("#tips-tricks-page").hide();
        $("#about-page").hide();
        $("#contact-page").hide();
    });

    $(".contact").on('click', () => {
        $("#contact-page").show();
        $("#home-page").hide();
        $("#tips-tricks-page").hide();
        $("#about-page").hide();
        $("#trips-page").hide();
    });

    $(".home").on('click', () => {
        $("#home-page").show();
        $("#contact-page").hide();
        $("#tips-tricks-page").hide();
        $("#about-page").hide();
        $("#trips-page").hide();
    });

});
