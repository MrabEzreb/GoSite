$(document).ready(function() {
    var navbar = $("<span id=\"navbar\"><table><tr><td>Home</td><td>Public</td><td>Sitemap</td></tr></table></span>");
    $("body").prepend(navbar);
    var navbars = $("<style>#navbar {width: 100%; text-align: center;} table {border: 1px solid black;} td {border: 1px dashed black;}</style>")
});