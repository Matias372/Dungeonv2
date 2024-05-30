<?php
// Incluir el archivo de conexión a la base de datos
require_once('db_connection.php');
// Incluir el script para generar UUID
require_once('UUIDGenerator.php');

// Obtener los datos del formulario de registro
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Generar un UUID para el nuevo usuario
$uuid = generateUUID();

// Generar el hash de la contraseña
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insertar los datos del nuevo usuario en la base de datos
$sql = "INSERT INTO Usuarios (Id, Usuario, Mail, Clave, Fecha) VALUES (?, ?, ?, ?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $uuid, $username, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "El usuario se registró exitosamente.";
} else {
    echo "Error al registrar el usuario: " . $stmt->error;
}

// Cerrar la conexión a la base de datos
$stmt->close();
$conn->close();
?>
