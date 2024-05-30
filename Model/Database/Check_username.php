<?php
require_once('db_connection.php');

if (isset($_GET['username'])) {
    $username = $conn->real_escape_string($_GET['username']);
    $sql = "SELECT username FROM Usuarios WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "exists";
    } else {
        echo "available";
    }

    $conn->close();
} else {
    echo "no_username";
}
?>
