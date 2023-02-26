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

let canalIni = 2;
$('#cambiaCanal').mousedown(function (event) {
    switch (event.which) {
        case 1:
            switch (canalIni) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    break;
                default:
                    break;
            }
            if (canalIni < 3)
                canalIni++;
            break;
        case 2:
            // alert('Middle Mouse button pressed.');
            break;
        case 3:
            switch (canalIni) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
            if (canalIni > 0)
                canalIni--;
            break;
        default:
            alert('WTF!');
    }
});

let volIni = 2;
$('#cambiaVolumen').mousedown(function (event) {
    switch (event.which) {
        case 1:
            switch (volIni) {
                case 0:
                    $('#volumen').toggleClass("fa-volume-xmark");
                    $('#volumen').toggleClass("fa-volume-off");
                    break;
                case 1:
                    $('#volumen').toggleClass("fa-volume-off");
                    $('#volumen').toggleClass("fa-volume-low");
                    break;
                case 2:
                    $('#volumen').toggleClass("fa-volume-low");
                    $('#volumen').toggleClass("fa-volume-high");
                    break;
                default:
                    break;
            }
            if (volIni < 3)
                volIni++;
            break;
        case 2:
            // alert('Middle Mouse button pressed.');
            break;
        case 3:
            switch (volIni) {
                case 1:
                    $('#volumen').toggleClass("fa-volume-xmark");
                    $('#volumen').toggleClass("fa-volume-off");
                    break;
                case 2:
                    $('#volumen').toggleClass("fa-volume-off");
                    $('#volumen').toggleClass("fa-volume-low");
                    break;
                case 3:
                    $('#volumen').toggleClass("fa-volume-low");
                    $('#volumen').toggleClass("fa-volume-high");
                    break;
                default:
                    break;
            }
            if (volIni > 0)
                volIni--;
            break;
        default:
            alert('WTF!');
    }
});