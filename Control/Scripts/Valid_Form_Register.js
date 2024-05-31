function validarFormulario() {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;
    var confirmarClave = document.getElementById("confirmar_clave").value;
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerHTML = ""; // Limpiar mensajes anteriores
    mensajeError.style.display = "none"; // Ocultar por defecto

    var errores = [];

    // Verificar si la contraseña cumple con los requisitos
    if (clave.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres.");
    }
    if (!/[A-Z]/.test(clave)) {
        errores.push("La contraseña debe contener al menos una letra mayúscula.");
    }

    // Verificar si las contraseñas coinciden
    if (clave !== confirmarClave) {
        errores.push("Las contraseñas no coinciden.");
    }

    // Mostrar errores en el div mensaje-error si existen
    if (errores.length > 0) {
        mensajeError.innerHTML = errores.join("<br>");
        mensajeError.style.display = "block";
        return false;
    }

    // Enviar datos al archivo PHP para verificar si el usuario ya existe
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText === "existe") {
                mensajeError.innerHTML = "El usuario ya existe. Por favor, elige otro nombre de usuario.";
                mensajeError.style.display = "block";
            } else {
                // Si el usuario no existe, enviar datos al archivo PHP para registrar al usuario
                enviarDatosRegistro();
            }
        }
        // Manejar errores de solicitud
        if (this.status >= 400) {
            mensajeError.innerHTML = "Error al enviar la solicitud al servidor.";
            mensajeError.style.display = "block";
        }
    };
    xhttp.open("POST", "../../Model/Database/Valid_Register.php", true); // Asegúrate de que la ruta al archivo PHP sea correcta
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("usuario=" + usuario);
}

function enviarDatosRegistro() {
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Mostrar el modal en lugar de alert
            showModal(this.responseText);
        }
        // Manejar errores de solicitud
        if (this.status >= 400) {
            var mensajeError = document.getElementById("mensaje-error");
            mensajeError.innerHTML = "Error al enviar la solicitud al servidor.";
            mensajeError.style.display = "block";
        }
    };
    xhttp.open("POST", "../../Model/Database/Register_User.php", true); // Asegúrate de que la ruta al archivo PHP sea correcta
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("usuario=" + usuario + "&email=" + email + "&clave=" + clave);
}
