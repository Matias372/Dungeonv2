// Función para seleccionar una clase de personaje
function seleccionarClase(clase) {
    console.log('Clase seleccionada:', clase);
    const personajes = document.querySelectorAll('.personaje');
    personajes.forEach(personaje => {
        personaje.classList.remove('seleccionado');
    });

    const personajeSeleccionado = document.getElementById(clase);
    if (personajeSeleccionado) {
        personajeSeleccionado.classList.add('seleccionado');
        console.log('Personaje seleccionado:', personajeSeleccionado);
    } else {
        console.error('Personaje no encontrado:', clase);
    }
}


// Función para crear un nuevo juego
async function createNewGame() {
    
}
