<?php
// Incluir el archivo de conexión a la base de datos
require_once('db_connection.php');

// Obtener los datos del formulario de inicio de sesión
$email = $_POST['email'];
$password = $_POST['password'];

// Buscar el usuario por su correo electrónico en la base de datos
$sql = "SELECT Id, Clave FROM Usuarios WHERE Mail = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    // El correo electrónico existe, obtener la contraseña hash
    $stmt->bind_result($id, $hashedPassword);
    $stmt->fetch();

    // Verificar si la contraseña hash coincide
    if (password_verify($password, $hashedPassword)) {
        // Iniciar sesión
        session_start();
        $_SESSION['user_id'] = $id;
        echo "Inicio de sesión exitoso.";
    } else {
        // La contraseña no coincide
        echo "Contraseña incorrecta. Por favor, inténtalo de nuevo.";
    }
} else {
    // El correo electrónico no está registrado
    echo "El correo electrónico proporcionado no está registrado.";
}

// Cerrar la conexión a la base de datos
$stmt->close();
$conn->close();
?>
