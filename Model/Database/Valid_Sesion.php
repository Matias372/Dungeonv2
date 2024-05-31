<?php
// Incluir el archivo de conexión a la base de datos
include 'db_connection.php';

// Obtener los datos del formulario
$email = $_POST["email"];
$password = $_POST["clave"];

// Consultar la base de datos para verificar las credenciales del usuario
$sql = "SELECT * FROM Usuarios WHERE Email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Si se encuentra el usuario, verificar la contraseña
    $user = $result->fetch_assoc();
    if (password_verify($password, $user["Clave"])) {
        // Si las credenciales son correctas, iniciar sesión
        session_start();
        $_SESSION["Usuario"] = $user["Usuario"];
        $_SESSION["ID"] = $user["Id"];
        echo "correcto";
    } else {
        // Si la contraseña es incorrecta, responder con "incorrecto"
        echo "Contraseña incorrecta.";
    }
} else {
    // Si el usuario no existe, responder con "incorrecto"
    echo "No se registra tal usuario.";
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
