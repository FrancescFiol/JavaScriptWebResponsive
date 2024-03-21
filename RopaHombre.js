var PagCompra = document.getElementById('PaginaHombre');
var Pag = document.getElementById('ROPA');


var ProductoSuda1 = document.getElementById('PagoSuda1');
function CompraSuda1(){
    PagCompra.style.display = 'none';
    ProductoSuda1.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoSuda2 = document.getElementById('PagoSuda2');
function CompraSuda2 (){
    PagCompra.style.display = 'none';
    ProductoSuda2.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoSuda3 = document.getElementById('PagoSuda3');
function CompraSuda3 (){
    PagCompra.style.display = 'none';
    ProductoSuda3.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoSuda4 = document.getElementById('PagoSuda4');
function CompraSuda4 () {
    PagCompra.style.display = 'none';
    ProductoSuda4.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoCami1 = document.getElementById('PagoCami1');
function CompraCami1 (){
    PagCompra.style.display = 'none';
    ProductoCami1.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoCami2 = document.getElementById('PagoCami2');
function CompraCami2 (){
    PagCompra.style.display = 'none';
    ProductoCami2.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoCami3 = document.getElementById('PagoCami3');
function CompraCami3 (){
    PagCompra.style.display = 'none';
    ProductoCami3.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoCami4 = document.getElementById('PagoCami4');
function CompraCami4 (){
    PagCompra.style.display = 'none';
    ProductoCami4.style.display = 'block';
    Pag.style.display = 'block';
}


var ProductoPant1 = document.getElementById('PagoPant1');
function CompraPant1 (){
    PagCompra.style.display = 'none';
    ProductoPant1.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoPant2 = document.getElementById('PagoPant2');
function CompraPant2 (){
    PagCompra.style.display = 'none';
    ProductoPant2.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoPant3 = document.getElementById('PagoPant3');
function CompraPant3 (){
    PagCompra.style.display = 'none';
    ProductoPant3.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoPant4 = document.getElementById('PagoPant4');
function CompraPant4 (){
    PagCompra.style.display = 'none';
    ProductoPant4.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoZapas1 = document.getElementById('PagoZapas1');
function CompraZapas1 (){
    PagCompra.style.display = 'none';
    ProductoZapas1.style.display = 'block';
    Pag.style.display = 'block';
}

var ProductoZapas2 = document.getElementById('PagoZapas2');
function CompraZapas2 (){
    PagCompra.style.display = 'none';
    ProductoZapas2.style.display = 'block';
    Pag.style.display = 'block';
}


var ProductoZapas3 = document.getElementById('PagoZapas3');
function CompraZapas3 (){
    PagCompra.style.display = 'none';
    ProductoZapas3.style.display = 'block';
    Pag.style.display = 'block';
}


var ProductoZapas4 = document.getElementById('PagoZapas4');
function CompraZapas4 (){
    PagCompra.style.display = 'none';
    ProductoZapas4.style.display = 'block';
    Pag.style.display = 'block';
}


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    if (nombre.trim() === '' || comentario.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear un nuevo elemento para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `<span>${nombre}:</span> ${comentario}`;

    // Agregar el nuevo comentario al contenedor de comentarios
    comentariosDiv.appendChild(nuevoComentario);

    // Limpiar los campos del formulario después de enviar el comentario
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
});