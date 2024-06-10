
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


