function navbarResize() {
    $("#navbar").css("width", $("#navtable").width()).css("left", ($(window).width()/2)-($("#navtable").width()/2));
}

$(document).ready(function() {
    var navbar = $("<span id=\"navbar\"><table cellspacing=\"0\" id=\"navtable\"><tr><td><a href=\"/\">Home</a></td><td><a href=\"/public\">Public</a></td><td><a href=\"/sitemap\">Sitemap</a></td></tr></table></span>");
    $("body").prepend(navbar);
    var navbars = $("<style>#navbar {position: relative; text-align: center;} tr {border: 1px solid black;} td {padding-left: 10px; padding-right: 10px; border: 1px dashed black;} a {text-decoration: none;}</style>");
    $("head").append(navbars);
    navbarResize();
});

$(window).resize(navbarResize);