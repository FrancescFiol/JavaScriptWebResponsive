
// CAMBIAR LAS DIFERENTES VENTANAS A LA HORA DE CLICAR DIFERENTES BOTONES

var botonLogin = document.getElementById("bIS");
var Login = document.getElementById("Login");
var botonRegistro = document.getElementById("bR");
var Registro = document.getElementById('Registro');
var x = document.getElementById('Ord');

// ENTRAR EN VENTANA DE INICIAR SESION
function ClicarIS(){
    Login.style.display = 'block';
    x.style.display = 'none';
    
}
botonLogin.onclick = ClicarIS;


//ENTRAR EN LA VENTANA DE REGISTRARME 
function CligarReg(){
    Registro.style.display = 'block';
    x.style.display = 'none';

}
botonRegistro.onclick = CligarReg;

//-------------------------------------------------------------------------------------------


/*no me entra bien el if comprobarlo*/

var botonAcceder = document.getElementById('botonIS');

function ConfirmarIS(){ 
    var correo = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    const correoCorrecto = "Usuario1@gmail.com";
    const contraseñaCorrecta = "1234567";

    
    if((correo === correoCorrecto) && (contraseña === contraseñaCorrecta)){
        console.log('Credenciales correctas. Redirigiendo a Inicio.html.');
        window.location.href = 'Inicio.html';
    } else {
        console.log('Usuario o contraseña incorrectas');
        alert('Usuario o contraseña incorrectas');
    
    }
}

//GUARDADO DE DATOS DEL FORMULARIO EN LA CONSOLA

const form = document.getElementById("formula");

const enviarFormulario = (event) => {
    event.preventDefault();
    //const {name, email, password} = event.target
    console.log(
        event.target.nombre.value,
        event.target.apellidos.value,
        event.target.email.value, 
        event.target.password.value
        );

};

form.addEventListener("submit", enviarFormulario);



//DIRIGE EL REGISTRO A LA PAGINA DE COMPRA

var botonReg = document.getElementById("botonR");
function entrarInicio(){
    window.location.href = 'Inicio.html'
}


