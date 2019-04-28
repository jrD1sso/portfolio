/*global $, jQuery, alert, console*/
$(function () {
    'use strict';
    // portfolio fixed sidebar
    var fixedAside = function () {
        if ($('#portfolio #widthAbove-md').width() > 0) {
            $("#portfolio aside").trigger("sticky_kit:detach");
        } else if ($('#portfolio #widthAbove-md').width() <= 0) {
            $("#portfolio aside").stick_in_parent({offset_top: 0});
        }
    };
    fixedAside();
    $(window).on("resize", function () {
        fixedAside();
    });

});