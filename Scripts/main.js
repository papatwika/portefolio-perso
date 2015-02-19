
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-59930311-1', 'auto');
ga('send', 'pageview');

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function moveToSection(id) {
    $('html, body').animate({ scrollTop: $(id).offset().top - $("#menu").height()}, 800);
};

var activeId = "";

window.onscroll = function () {

    if (window.pageYOffset + $("#menu").height() >= $("#loisirs").offset().top && activeId != "#loisirsButton" && $("#loisirs").offset().top + $("#loisirs").height() > window.pageYOffset) {
        $("#loisirsButton").addClass("active");
        $(activeId).removeClass("active");
        activeId = "#loisirsButton";
    }
    else if (window.pageYOffset + $("#menu").height() >= $("#portefolio").offset().top && activeId != "#portefolioButton" && $("#portefolio").offset().top + $("#portefolio").height() > window.pageYOffset) {
        $("#portefolioButton").addClass("active");
        $(activeId).removeClass("active");
        activeId = "#portefolioButton";
    }
    else if (window.pageYOffset + $("#menu").height() >= $("#experience").offset().top && activeId != "#experienceButton" && $("#experience").offset().top + $("#experience").height() > window.pageYOffset) {
        $("#experienceButton").addClass("active");
        $(activeId).removeClass("active");
        activeId = "#experienceButton";
    }
    else if (window.pageYOffset + $("#menu").height() < $("#experience").offset().top && activeId != "#accueilButton" && $("#experience").offset().top + $("#experience").height() > window.pageYOffset) {
        $("#accueilButton").addClass("active");
        $(activeId).removeClass("active");
        activeId = "#accueilButton";
    };
};