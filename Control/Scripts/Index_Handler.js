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

// Ejecutar checkSession cuando la página se carga
window.onload = function() {
    checkSession();
};
