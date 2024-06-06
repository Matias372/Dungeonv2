function seleccionarClase(clase){
    const personajes = document.querySelectorAll('.personaje');
    personajes.forEach(personaje => {
        personaje.classList.remove('seleccionado');
    });

    const personajeSeleccionado = document.getElementById(clase);
    personajeSeleccionado.classList.add('seleccionado');

    // Aquí puedes hacer algo con la variable 'clase' si es necesario
}


// Función para crear un nuevo juego
function createNewGame() {
    // Llamar a la función checkSession para obtener los datos de la sesión
    checkSession()
        .then(() => {
            // Obtener los datos de la sesión de las variables globales
            const userId = window.sessionUserId;
            const username = window.sessionUsername;

            // Verificar si los datos de la sesión están disponibles
            if (!userId || !username) {
                console.error('No se pudieron obtener los datos de la sesión.');
                return;
            }

            // Obtener la clase de personaje seleccionada
            const selectedCharacter = document.querySelector('.personaje.seleccionado');
            if (!selectedCharacter) {
                alert('Por favor, selecciona un personaje.');
                return;
            }
            const characterId = selectedCharacter.id;

            // Obtener el nombre del personaje ingresado
            const characterNameInput = document.getElementById('nombre');
            const characterName = characterNameInput.value.trim();
            if (!characterName) {
                alert('Por favor, ingresa un nombre para tu personaje.');
                return;
            }

            // BORRAR DESPUES DE PRUEBAS
            console.log('Datos para crear nuevo juego:');
            console.log('ID de Usuario:', userId);
            console.log('Nombre de Usuario:', username);
            console.log('ID de Clase de Personaje:', characterId);
            console.log('Nombre del Personaje:', characterName);

            // Aquí puedes enviar estos datos a tu servidor para procesarlos y guardarlos en la base de datos
            // Por ejemplo, usando fetch() para hacer una petición POST
        })
        .catch(error => {
            console.error('Error al obtener los datos de la sesión:', error);
        });
}
