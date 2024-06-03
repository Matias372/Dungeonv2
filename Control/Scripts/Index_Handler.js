// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si hay una sesión activa
    checkSession();
});

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
    window.location.href = "../../Visual/HTML/Game.html";
}
