// Función para verificar si hay una sesión activa
function checkSession() {
    console.log('checkSession ejecutado'); // Línea de depuración
    fetch("../../Control/Check_Session.php")
        .then(response => response.text())
        .then(data => {
            console.log('Respuesta de checkSession:', data); // Línea de depuración
            if (data.trim() === "sesion_activa") {
                // Si hay una sesión activa, mostrar botón de jugar y cerrar sesión
                document.getElementById("play-button").style.display = "inline";
                document.getElementById("logout-button").style.display = "inline";
                document.getElementById("login-button").style.display = "none";
                document.getElementById("register-button").style.display = "none";
            } else {
                // Si no hay una sesión activa, mostrar botón de inicio de sesión y registro
                document.getElementById("play-button").style.display = "none";
                document.getElementById("logout-button").style.display = "none";
                document.getElementById("login-button").style.display = "inline";
                document.getElementById("register-button").style.display = "inline";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Función para cerrar sesión
function logout() {
    fetch("../../Model/Database/LogOutUser.php")
        .then(response => {
            if (response.ok) {
                // Una vez que se recibe la respuesta del servidor
                // redireccionamos al usuario a la página de inicio
                window.location.href = "../../Visual/HTML/index.html";
            } else {
                console.error('Error al cerrar sesión');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Ejecutar checkSession cuando la página se carga
window.onload = function() {
    console.log('window.onload ejecutado'); // Línea de depuración
    checkSession();
};
