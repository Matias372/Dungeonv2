<?php
session_start();

if (isset($_SESSION['Id']) && isset($_SESSION['Usuario'])) {
    // La sesión está activa, devuelve los datos de la sesión en formato JSON
    $sessionData = [
        "isLoggedIn" => true,
        "username" => $_SESSION['Usuario'],
        "userid" => $_SESSION['Id'],
        "message" => "La sesión está activa",
        // Ruta a la imagen del usuario, si está disponible
    ];
    echo json_encode(["status" => "success", "sessionData" => $sessionData]);
} else {
    // La sesión no está activa, devuelve un mensaje de error
    $sessionData = [
        "isLoggedIn" => false,
        "message" => "No hay una sesión activa"
    ];
    echo json_encode(["status" => "failure", "sessionData" => $sessionData]);
}
?>
