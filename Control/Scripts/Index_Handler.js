window.onload = function() {
    // Verificar si hay una sesión activa
    var sessionActive = checkSession();

    // Obtener los botones de inicio de sesión y registrarse
    var loginButton = document.getElementById("login-button");
    var registerButton = document.getElementById("register-button");

    // Obtener los botones de jugar y cerrar sesión
    var playButton = document.getElementById("play-button");
    var logoutButton = document.getElementById("logout-button");

    // Mostrar u ocultar botones según el estado de la sesión
    if (sessionActive) {
        loginButton.style.display = "none";
        registerButton.style.display = "none";
        playButton.style.display = "block";
        logoutButton.style.display = "block";
    } else {
        loginButton.style.display = "block";
        registerButton.style.display = "block";
        playButton.style.display = "none";
        logoutButton.style.display = "none";
    }
};

// Función para verificar si hay una sesión activa
function checkSession() {
    // Aquí podrías agregar la lógica para verificar la sesión del usuario
    // Por ejemplo, podrías comprobar si existe una variable de sesión en el servidor
    // o si estás utilizando cookies para mantener la sesión del usuario
    // Por ahora, simplemente devuelve true o false como ejemplo
    return false; // Cambia esto según tu implementación real
}

// Cerrar sesión
function logout() {
    // Aquí podrías agregar la lógica para cerrar la sesión del usuario
    // Por ejemplo, podrías eliminar la variable de sesión en el servidor
    // o limpiar las cookies que mantienen la sesión del usuario
    // Por ahora, simplemente redireccionaremos al usuario a la página de inicio
    window.location.href = "../../Visual/HTML/index.html";
}

function redirectLogin() {
    window.location.href = "../../Visual/HTML/IniciarSesion.html";
}

// Redireccionar a la página de registro
function redirectRegister() {
    window.location.href = "../../Visual/HTML/Registrarse.html";
}

// Redireccionar a la página del juego
function redirectToGame() {
    window.location.href = "../../Visual/HTML/Game.html";
}