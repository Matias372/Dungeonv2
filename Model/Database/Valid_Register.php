<?php
// Incluir el archivo de conexión a la base de datos
include 'db_connection.php';

// Obtener el usuario del formulario
$usuario = $_POST["usuario"];

// Consulta para verificar si el usuario ya existe
$sql = "SELECT * FROM Usuarios WHERE usuario = '$usuario'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Si el usuario ya existe, enviar respuesta "existe"
    echo "existe";
} else {
    // Si el usuario no existe, enviar respuesta vacía
    echo "";
}

// Cerrar conexión
$conn->close();
?>
