<?php
// Iniciar la sesión
session_start();

// Incluir la conexión a la base de datos
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Verificar si el correo electrónico existe
    $sql = "SELECT * FROM Usuarios WHERE Mail = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        // Verificar la contraseña
        if (password_verify($password, $user['Clave'])) {
            // Iniciar sesión y redirigir al usuario
            $_SESSION['user_id'] = $user['Id'];
            $_SESSION['username'] = $user['Usuario'];
            echo "<script>alert('Inicio de sesión exitoso.'); window.location.href = '../../Visual/HTML/index.html';</script>";
        } else {
            echo "<script>alert('Contraseña incorrecta.'); window.history.back();</script>";
        }
    } else {
        echo "<script>alert('El correo electrónico no está registrado.'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>
