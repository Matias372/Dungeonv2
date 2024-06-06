// Función para cargar un escenario dentro de game-section
function loadScene(sceneName) {
    let scenarioURL;
    switch(sceneName) {
        case 'Menu':
            scenarioURL = '../../Visual/HTML/Escenarios/G_Menu.html';
            break;
        case 'NewGame':
            scenarioURL = '../../Visual/HTML/Escenarios/NewGame.html';
            break;
        case 'LoadGame':
            scenarioURL = '../../Visual/HTML/Escenarios/LoadGame.html';
            break;
        // Agrega más casos según sea necesario
        default:
            console.error('Escenario no válido:', sceneName);
            scenarioURL = '../../Visual/HTML/Escenarios/Void404.html';
            break;
    }
    loadScenario(scenarioURL);
}

// Ejemplo de cómo cargar el menú inicial al iniciar el juego
document.addEventListener('DOMContentLoaded', function() {
    loadScene('Menu');
});

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

// Función para cargar el contenido del escenario usando fetch
function loadScenario(scenarioURL) {
    const gameSection = document.getElementById('game-section');
    fetch(scenarioURL)
        .then(response => response.text())
        .then(data => {
            gameSection.innerHTML = data;
            console.log("Escenario cargado exitosamente desde " + scenarioURL);
        })
        .catch(error => {
            console.error('Error al cargar el escenario:', error);
            gameSection.innerHTML = '<p>Error al cargar el escenario.</p>';
        });
}
