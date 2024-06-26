// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el formulario
    var form = document.getElementById("loginForm");

    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener("submit", function(event) {
        // Evita que se envíe el formulario por defecto
        event.preventDefault();

        // Obtiene los valores de los campos de entrada
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Crea un objeto FormData y añade los valores del formulario
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        // Ajusta la ruta para la solicitud POST al archivo PHP
        fetch("/Dungeonv2/Model/Database/Valid_Sesion.php", {
            method: "POST",
            body: formData
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json(); // Cambia esto para esperar una respuesta JSON
        })
        .then(function(data) {
            // Maneja la respuesta del servidor
            console.log("Response from PHP: ", data); // Agrega un log para ver la respuesta
            handleResponse(data);
        })
        .catch(function(error) {
            console.error("Error al enviar la solicitud:", error);
            // Muestra un mensaje de error genérico
            showMessage("Hubo un error al procesar la solicitud.");
        });
    });

    // Función para manejar la respuesta del servidor
    function handleResponse(response) {
        console.log(response);
        if (response.status === "success" && response.message === "Exito") {
            alert("¡Inicio de sesión exitoso!");
            window.location.href = "/Dungeonv2/Visual/HTML/Index.html";
        } else if (response.status === "error" && response.message === "contraseña incorrecta") {
            showMessage("La contraseña ingresada es incorrecta.");
        } else if (response.status === "error" && response.message === "Mail no existe") {
            showMessage("El correo electrónico ingresado no existe.");
        } else {
            showMessage("Hubo un error.");
        }
    }

    function showMessage(message) {
        var errorMessageDiv = document.getElementById("error-message");
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = 'red';
    }
});
