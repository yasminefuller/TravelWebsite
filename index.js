$(document).ready(() => {
    const $about = $(".about");
    const $aboutPage = $("#about-page");

    $aboutPage.hide();

    $about.on('click', () => {
        $aboutPage.show();
        $(".home").hide();

    });
});
