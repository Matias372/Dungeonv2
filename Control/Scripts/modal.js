// Mostrar el modal
function showModal(message) {
    var modal = document.getElementById("success-modal");
    var modalMessage = document.getElementById("modal-message");
    console.log("Mensaje recibido:", message); // Agregar esta línea para verificar el mensaje
    modalMessage.innerHTML = message;
    modal.style.display = "block";
}

// Cerrar el modal
function closeModal() {
    var modal = document.getElementById("success-modal");
    modal.style.display = "none";
}

// Redirigir a la página de inicio
function redirectToIndex() {
    window.location.href = "../../Visual/HTML/index.html";
}
