// Función para obtener los datos de sesión del servidor
async function getSessionData() {
    try {
        const response = await fetch("../../Control/Check_Session.php");
        if (!response.ok) {
            throw new Error('Error al obtener los datos de sesión');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos', error);
        // Ajustar el retorno para que coincida con la estructura esperada
        return { status: 'error', sessionData: { isLoggedIn: false, message: 'Sesion no activada' } };
    }
}

// Función para actualizar el encabezado basado en los datos de sesión
function updateHeader(sessionData) {
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const userDropdown = document.querySelector('.user-dropdown');
    const username = document.getElementById('username');

    if (sessionData.status === 'success' && sessionData.sessionData.isLoggedIn === true) {
        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';
        if (userDropdown) userDropdown.style.display = 'block';
        if (username) username.textContent = sessionData.sessionData.username;
    } else if (sessionData.sessionData.isLoggedIn === false) {
        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';
        if (userDropdown) userDropdown.style.display = 'none';
    }
}

async function HeaderOnload (){
    console.log("Cargando encabezado...");
    const sessionData = await getSessionData();
    updateHeader(sessionData);
}

// Ejecutar la verificación de sesión y actualizar el encabezado al cargar la página
document.addEventListener('DOMContentLoaded', async function() {
    HeaderOnload ();
});
