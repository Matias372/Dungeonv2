<?php
// Incluye el archivo de conexión a la base de datos
include 'db_connection.php';

// Verifica que los datos POST estén definidos
if (isset($_POST['email']) && isset($_POST['password'])) {
    // Obtiene los datos del formulario POST
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepara la consulta para verificar si el correo electrónico existe en la tabla usuarios
    $query = "SELECT Id, Usuario, Clave FROM usuarios WHERE Mail = ?";
    $stmt = $conn->prepare($query);
    if ($stmt) {
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Verifica si se encontró un usuario con el correo electrónico dado
        if ($result->num_rows > 0) {
            // Obtiene los datos del usuario
            $row = $result->fetch_assoc();
            $userId = $row['Id'];
            $username = $row['Usuario'];
            $hashedPassword = $row['Clave']; // Usa el nombre correcto de la columna

            // Verifica si la contraseña coincide
            if (password_verify($password, $hashedPassword)) {
                // La contraseña es correcta, inicia sesión y guarda el Id y el Usuario en la sesión
                session_start();
                $_SESSION['Id'] = $userId;
                $_SESSION['Usuario'] = $username;

                // Devuelve un mensaje de éxito al JavaScript
                echo json_encode(["status" => "success", "message" => "Exito"]);
            } else {
                // La contraseña es incorrecta, devuelve un mensaje de error al JavaScript
                echo json_encode(["status" => "error", "message" => "contraseña incorrecta"]);
            }
        } else {
            // No se encontró un usuario con el correo electrónico dado, devuelve un mensaje de error al JavaScript
            echo json_encode(["status" => "error", "message" => "Mail no existe"]);
        }

        // Cierra la conexión y libera los recursos
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Error en la consulta"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}
?>
