<?php
// Incluir la conexión a la base de datos
include 'db_connection.php';

// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['usuario'];
    $email = $_POST['email'];
    $password = $_POST['clave'];

    // Encriptar la contraseña
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Generar un UUID
    include '../../Control/UUIDGenerator.php';
    $uuid = generateUUID();

    // Insertar el nuevo usuario en la base de datos
    $sql = "INSERT INTO Usuarios (Id, Usuario, Mail, Clave) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die('Error al preparar la consulta: ' . htmlspecialchars($conn->error));
    }
    $stmt->bind_param("ssss", $uuid, $username, $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "Usuario registrado exitosamente.";
    } else {
        echo "Error al registrar el usuario.";
    }

    $stmt->close();
}

$conn->close();
?>
