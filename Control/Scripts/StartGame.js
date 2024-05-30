function loadGame() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'game.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('game').innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el juego:', xhr.status);
            }
        }
    };
    xhr.send();
}