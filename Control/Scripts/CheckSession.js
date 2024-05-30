// Verificar si hay sesión iniciada
function checkSession() {
    // Aquí puedes cambiar la lógica para verificar si hay una sesión iniciada
    // Por ejemplo, puedes usar localStorage, cookies, o una llamada a la API
    let sessionActive = localStorage.getItem('sessionActive');

    if (sessionActive) {
        document.getElementById('logo').classList.add('hidden');
        document.getElementById('loginButtons').classList.add('hidden');
        document.getElementById('game').classList.remove('hidden');
    } else {
        document.getElementById('logo').classList.remove('hidden');
        document.getElementById('loginButtons').classList.remove('hidden');
        document.getElementById('game').classList.add('hidden');
    }
}

// Llamar a la función al cargar la página
window.onload = checkSession;