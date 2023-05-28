// Funcion de Sonido //

document.addEventListener('DOMContentLoaded', function() {
    reproducirSonido();
});


function reproducirSonido() {
    let sonido = new Audio('./Sonido/pista.mp3');

    let elementosConSonido = document.querySelectorAll('.sonido');
    elementosConSonido.forEach(function(elemento) {
    elemento.addEventListener('mouseover', function() {
        sonido.play();
        });
    });
}
