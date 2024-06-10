// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si la página actual es la página 404.html
    if (window.location.pathname.includes("404.html")) {
        // La página actual ya es la página 404.html, no es necesario redirigir
        return;
    }

    // Array que contiene las rutas válidas dentro de tu proyecto
    var rutasValidas = [
        "/Dungeonv2/Visual/HTML/",
        "/Dungeonv2/Visual/HTML/index.html",
        "/Dungeonv2/Visual/HTML/Index.html",  // Agrega aquí todas las rutas válidas dentro de tu proyecto
        "/Dungeonv2/Visual/HTML/IniciarSesion.html",
        "/Dungeonv2/Visual/HTML/Registrarse.html",
        "/Dungeonv2/Visual/HTML/game_template.html",        // Agrega más rutas según sea necesario
    ];

    // Verifica si la ruta actual está en la lista de rutas válidas
    var rutaActual = window.location.pathname;
    if (!rutasValidas.includes(rutaActual)) {
        alert(rutaActual);// La ruta actual no está en la lista de rutas válidas, redirige a la página 404.html
        window.location.href = "../../Visual/HTML/404.html";
    }
});
