// Función para cargar un escenario dentro de game-section
//loadSceneWithScripts('NewGame', ['NewGame.js', 'OtroScript.js']);
function loadScene(sceneName) {
    let scenarioURL;
    switch(sceneName) {
        case 'Menu':
            scenarioURL = '../../Visual/HTML/Escenarios/G_Menu.html';
            loadScenario(scenarioURL);
            break;
        case 'NewGame':
            scenarioURL = '../../Visual/HTML/Escenarios/NewGame.html';
            loadScenarioWithScript(scenarioURL, 'NewGame.js');
            break;
        case 'LoadGame':
            scenarioURL = '../../Visual/HTML/Escenarios/LoadGame.html';
            loadScenario(scenarioURL);
            break;
        // Agrega más casos según sea necesario
        default:
            console.error('Escenario no válido:', sceneName);
            scenarioURL = '../../Visual/HTML/Escenarios/Void404.html';
            loadScenario(scenarioURL);
            break;
    }
}

// Función para cargar el contenido del escenario usando fetch
function loadScenario(scenarioURL) {
    const gameSection = document.getElementById('game-section');
    fetch(scenarioURL)
        .then(response => response.text())
        .then(data => {
            gameSection.innerHTML = data;
            console.log("Escenario cargado exitosamente desde " + scenarioURL);
            removePreviousScripts(); // Elimina los scripts de escenarios anteriores
        })
        .catch(error => {
            console.error('Error al cargar el escenario:', error);
            gameSection.innerHTML = '<p>Error al cargar el escenario.</p>';
        });
}

// Función para cargar el contenido del escenario y sus scripts correspondientes
function loadScenarioWithScripts(scenarioURL, scriptNames) {
    loadScenario(scenarioURL); // Carga el escenario primero
    scriptNames.forEach(scriptName => {
        loadScript('../../Control/Game_Scripts/' + scriptName, scriptName); // Luego carga cada script
    });
}

// Función para cargar un script
function loadScript(scriptURL, scriptName) {
    const script = document.createElement('script');
    script.src = scriptURL;
    script.defer = true;
    script.dataset.loaded = 'scenario-script'; // Marcamos el script como asociado con un escenario
    script.dataset.scriptName = scriptName; // Opcional: también puedes almacenar el nombre del script
    document.body.appendChild(script);
}


// Función para eliminar los scripts de escenarios anteriores
function removePreviousScripts() {
    const previousScripts = document.querySelectorAll('script[data-loaded="scenario-script"]');
    previousScripts.forEach(script => {
        script.parentNode.removeChild(script);
    });
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
