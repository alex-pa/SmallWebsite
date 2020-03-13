$(document).ready(function () {
    $('#searchbutton').click(function () {
        $('#searchbutton').prop("disabled", true);
        $('#cancelbutton').prop("disabled", false);
        $('#searchform').slideToggle(360);
        $('#menu').hide();
        $('#searchbutton').fadeOut(360, function () {
            $('#cancelbutton').show();
            $('#searchfield').focus();
        });
    });
    $('#cancelbutton').click(function () {
        $('#cancelbutton').prop("disabled", true);
        $('#searchbutton').prop("disabled", false);
        $('#cancelbutton').slideToggle(360, function () {
            $('#searchbutton').fadeIn();
        });
        $('#searchform').slideToggle(360, function () {
            $('#searchfield').val('');
            $('#menu').fadeIn();
        });
    });
})      //menu (nav) functionality

$(document).ready(function () {
    $("#submitbutton").click(function () {
        alert($('#searchfield').val() + '\nand now whaaat?');
    });
})      //searchengine (to do)

$(document).ready(function () {
    $("#menu > li:nth-child(1)").hover(function () {
        $("#menu li:nth-child(1) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(1) i").css("transform", "rotate(0deg)");
    });
    $("#menu li:nth-child(1) .submenu").hover(function () {
        $("#menu li:nth-child(1) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(1) i").css("transform", "rotate(90deg)");
    });
    $("#menu > li:nth-child(2)").hover(function () {
        $("#menu li:nth-child(2) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(2) i").css("transform", "rotate(0deg)");
    });
    $("#menu li:nth-child(2) .submenu").hover(function () {
        $("#menu li:nth-child(2) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(2) i").css("transform", "rotate(90deg)");
    });
    $("#menu > li:nth-child(3)").hover(function () {
        $("#menu li:nth-child(3) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(3) i").css("transform", "rotate(0deg)");
    });
    $("#menu li:nth-child(3) .submenu").hover(function () {
        $("#menu li:nth-child(3) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(3) i").css("transform", "rotate(90deg)");
    });
    $("#menu > li:nth-child(4)").hover(function () {
        $("#menu li:nth-child(4) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(4) i").css("transform", "rotate(0deg)");
    });
    $("#menu li:nth-child(4) .submenu").hover(function () {
        $("#menu li:nth-child(4) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(4) i").css("transform", "rotate(90deg)");
    });
    $("#menu > li:nth-child(5)").hover(function () {
        $("#menu li:nth-child(5) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(5) i").css("transform", "rotate(0deg)");
    });
    $("#menu li:nth-child(5) .submenu").hover(function () {
        $("#menu li:nth-child(5) i").css("transform", "rotate(90deg)");
    }, function () {
        $("#menu li:nth-child(5) i").css("transform", "rotate(90deg)");
    });
})      //header arrows functionality (can be optimized)

$(document).ready(function () {
    $("#searchform").hover(function () {
        $("#searchfield").css("background-color", "#ffffff");
        $("#submitbutton").css("background-color", "#ffffff");
    }, function () {
        $("#searchfield").css("background-color", "#e4f5ff");
        $("#submitbutton").css("background-color", "#e4f5ff");
    });
})      //searchfield change color function

$(document).ready(function () {
    $(".submenu, .menu a").hover(function () {
        $(".submenu").css("transition", ".25s");
    }, function () { 
        $(".submenu").css("transition", "none");
    });   
})