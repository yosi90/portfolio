$(function () {
    $('#apagado').toggle();
    $('#cv').toggle();
    $('#portfolio').toggle();
});

$("#botonEncender").click(function () {
    if ($('#apagado').hasClass('actual')) {
        $('#inicio').toggle();
        $('#inicio').toggleClass("actual");
    } else {
        $(".actual").toggle();
        $(".actual").toggleClass("actual");
    }
    $('#apagado').toggle();
    $('#apagado').toggleClass("actual");
});