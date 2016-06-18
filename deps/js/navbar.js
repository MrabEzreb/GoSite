$(document).ready(function() {
    var navbar = $("<span id=\"navbar\"><table><tr><td><a href=\"/\">Home</a></td><td><a href=\"/public\">Public</a></td><td><a href=\"/sitemap\">Sitemap</a></td></tr></table></span>");
    $("body").prepend(navbar);
    var navbars = $("<style>#navbar {width: 100%; text-align: center;} table {border: 1px solid black;} td {border: 1px dashed black;} a {text-decoration: none;}</style>");
    $("head").append(navbars);
});