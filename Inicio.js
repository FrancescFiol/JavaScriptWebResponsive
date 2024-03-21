// Cuando la página se carga completamente
window.onload = function () {
    // Variables
    const IMAGENES = [
        "IMG_H/CamisH1.jpg", // Aqui van las imagenes
        "IMG_H/SudaH1.jpg", 
        "IMG_H/PantH1.jpg", 
        "IMG_M/SudaderaM1.1.jpg", 
        "IMG_M/PantM1.1.jpg", 
        "IMG_M/Tops3.1.jpg", 
    ];

    let posicionActual = 0; // Indice de la imagen actual

    // Elementos del DOM
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    // Funciones
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`; // Mostrar la imagen actual
    }

    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0; // Si es la última imagen, volver a la primera
        } else {
            posicionActual++; // Ir a la siguiente imagen
        }
        renderizarImagen(); // Mostrar la nueva imagen
    }

    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1; // Si es la primera imagen, ir a la última
        } else {
            posicionActual--; // Retroceder a la imagen anterior
        }
        renderizarImagen(); // Mostrar la nueva imagen
    }

    // Asociar eventos a los botones
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonAvanzar.addEventListener('click', pasarFoto);

    // Mostrar la primera imagen al cargar la página
    renderizarImagen();
};

// Función para cambiar entre Modo Claro y Modo Oscuro
function ModoNoche() {
    const body = document.body; // Seleccionar el cuerpo del documento
    body.classList.toggle('dark-mode'); // Alternar la clase 
}


