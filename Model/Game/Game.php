<?php
// Aquí va la lógica para determinar qué escenario mostrar
$scenario = "escenario1.html"; // Por ejemplo, supongamos que es el escenario 1
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to the Game</h1>
    <!-- Contenido del escenario -->
    <?php include $scenario; ?>
</body>
</html>
