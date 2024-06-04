// Función para cargar un escenario en el game-section
function loadScene(scene) {
    const gameSection = document.getElementById('game-section');
    gameSection.innerHTML = ''; // Limpia el contenido anterior

    switch(scene) {
        case 'StartMenu':
            loadHTMLScene('Escenarios/G_Menu.html');
            break;
        case 'NewGame':
            loadHTMLScene('Escenarios/NewGame.html');
            break;
        case 'LoadGame':
            loadHTMLScene('Escenarios/LoadGame.html');
            break;
        default:
            loadHTMLScene('Escenarios/Void404.html');
            break;
    }
}

// Función para cerrar sesión
function logout() {
    fetch("../../Model/Database/LogOutUser.php")
        .then(response => {
            if (response.ok) {
                window.location.href = "../../Visual/HTML/index.html";
            } else {
                console.error('Error al cerrar sesión');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Ejemplo de cargar un escenario al iniciar
window.onload = function() {
    checkSession();
    loadScene('StartMenu'); // Cargar el primer escenario al iniciar
};
