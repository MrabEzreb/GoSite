//Navbar.js

var $ = window.$;

function button(name, link) {
    var liitem = $("<li></li>");
    var alink = $("<a>" + name + "</a>").attr("href", link);
    liitem.append(alink);
    return liitem;
}

function drop(name, navElements) {
    var liitem = $("<li></li>").addClass("dropdown");
    var atoggle = $("<a></a>").addClass("dropdown-toggle").attr("data-toggle", "dropdown").attr("href", "#").append(name);
    var spancaret = $("<span></span>").addClass("caret");
    atoggle.append(spancaret);
    liitem.append(atoggle);
    var ulmenu = $("<ul></ul>").addClass("dropdown-menu");
    for (var i = 0; i < navElements.length; i = i + 1) {
        ulmenu.append(navElements[i]);
    }
    liitem.append(ulmenu);
    return liitem;
}

var siteName = "MrabEzreb's Site";

var account = [button("THIS IS WIP", "#"), button("Login", "/account/login"), button("Signup", "/account/signup")];

var mainNav = [button("Home", "/")];
var mainNavR = [drop("Account", account)];

function getNavData(navbar) {
    var name = navbar.attr("array");
    var active = navbar.attr("active");
    if (name === "main") {
        return mainNav;
    }
}

function getNavDataR(navbar) {
    var name = navbar.attr("arrayR");
    if (name === "main") {
        return mainNavR;
    }
}

function buildItems(data, active) {
    var items = "";
    for (i = 0; i < data.length; i = i + 1) {
        if (data[i].find("a").attr("href") === active) {
            data[i].addClass("active");
        }
        items = items + data[i].prop("outerHTML");
//        window.alert(data[i].prop("outerHTML"));
    }
    return items;
}

function insertNavbar() {
    var navbar = $("navbar");
//    window.alert(navbar.attr("array"));
    var navData = getNavData(navbar);
//    window.alert(navbar.attr("array"));
    var navDataR = getNavDataR(navbar);
//    window.alert(navbar.attr("array"));
    var listItems = buildItems(navData, navbar.attr("active"));
//    window.alert(navbar.attr("array"));
    var listItemsR = buildItems(navDataR, "");
//    window.alert(navbar.attr("array"));
    var nav = $("<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">" + siteName + "<\/a>\r\n    <\/div>\r\n    <ul class=\"nav navbar-nav\">\r\n" + listItems + "    <\/ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n" + listItemsR +"    <\/ul>\n\r  <\/div>\r\n<\/nav>");
    navbar.append(nav);
//    window.alert(navbar.attr("array"));
}

$(document).ready(function() {
//    window.alert("hello");
    insertNavbar();
//    window.alert("hello");
});
