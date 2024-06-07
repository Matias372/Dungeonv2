// Redirigir a la página de inicio de sesión
function redirectLogin() {
    window.location.href = "../../Visual/HTML/IniciarSesion.html";
}

// Redirigir a la página de registro
function redirectRegister() {
    window.location.href = "../../Visual/HTML/Registrarse.html";
}

// Redirigir a la página del juego
function redirectToGame() {
    window.location.href = "../../Visual/HTML/game_template.html";
}

// Mostrar el mensaje de éxito si el parámetro está presente
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.style.display = 'block';
}

// Función para cerrar el mensaje de éxito
function cerrarMensajeExito() {
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.style.display = 'none';
}

// Ejecutar checkSession y mostrar mensaje de éxito cuando la página se carga
window.onload = function() {
    checkSession();
    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const mensaje = urlParams.get('mensaje');

    if (mensaje === 'exito') {
        mostrarMensajeExito();
    }
};
