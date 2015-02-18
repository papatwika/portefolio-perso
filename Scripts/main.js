function moveToSection(id) {
    $('html, body').animate({
        scrollTop: ($(id).offset().top - $("#menu").height())
    }, 1500);
};