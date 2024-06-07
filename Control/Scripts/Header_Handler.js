// Función para obtener los datos de sesión del servidor
function getSessionData() {
    return fetch("../../Control/Check_Session.php")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de sesión');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                return data.sessionData;
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos de sesión:', error);
        });
}

// Función para actualizar el encabezado basado en los datos de sesión
function updateHeader(sessionData) {
    const navContent = document.getElementById('nav-content');
    if (sessionData.isLoggedIn) {
        navContent.innerHTML = `
            <li class="user-dropdown">
                <div class="user-avatar">
                    <img src="../../Recursos/img/User_img/${sessionData.userImg}" alt="Avatar de usuario">
                </div>
                <div class="user-info">
                    <div class="username">${sessionData.username}</div>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="Clasificaciones.php">Lista</a></li>
                            <li><a href="cuenta.php">Cuenta</a></li>
                            <li><a href="../../../Modelos/Pagina/logout.php">Salir</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="play-link">
                <a href="game.php" id="play-boton">Play</a>
            </li>
        `;
    } else {
        navContent.innerHTML = `
            <li class="login-link"><a href="inicio_sesion.php">Iniciar sesión</a></li>
            <li class="register-link"><a href="registro.php">Registrarse</a></li>
        `;
    }
}

// Ejecutar la verificación de sesión y actualizar el encabezado al cargar la página
document.addEventListener('DOMContentLoaded', async function() {
    console.log("Cargando encabezado...");
    const sessionData = await getSessionData();
    updateHeader(sessionData);
});
