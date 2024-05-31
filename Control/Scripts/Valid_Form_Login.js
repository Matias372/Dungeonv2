// Validar el formulario al enviarlo
function validarFormulario() {
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;

    // Enviar datos al archivo PHP para validar la sesión
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText === "incorrecto") {
                // Si los datos de inicio de sesión son incorrectos, mostrar mensaje de error
                mostrarError("El correo electrónico o la contraseña son incorrectos.");
            } else {
                // Si los datos son correctos, redirigir a index.html
                window.location.href = "../../Visual/HTML/index.html";
            }
        }
        // Manejar errores de solicitud
        if (this.status >= 400) {
            mostrarError("Error al enviar la solicitud al servidor.");
        }
    };
    xhttp.open("POST", "Valid_Sesion.php", true); // Asegúrate de que la ruta al archivo PHP sea correcta
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + email + "&clave=" + clave);
}

// Mostrar mensaje de error en el div correspondiente
function mostrarError(mensaje) {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.textContent = mensaje;
    mensajeError.style.display = "block";
}
