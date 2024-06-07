document.addEventListener("DOMContentLoaded", function() {
    // Cargar el encabezado
    fetch("../../Visual/HTML/Header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Cargar el pie de página
    fetch("../../Visual/HTML/Footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
