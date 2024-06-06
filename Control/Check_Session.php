<?php
session_start();

if (isset($_SESSION['Id']) && isset($_SESSION['Usuario'])) {
    // La sesión está activa, devuelve los datos de la sesión en formato JSON
    echo json_encode(["status" => "success", "sessionData" => ["Id" => $_SESSION['Id'], "Usuario" => $_SESSION['Usuario']]]);
} else {
    // La sesión no está activa, devuelve un mensaje de error
    echo json_encode(["status" => "error", "message" => "La sesión no está activa"]);
}
?>
