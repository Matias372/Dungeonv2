<?php
// Generar un UUID (Identificador Único Universal) de 36 caracteres
function generateUUID() {
    // Crear un UUID v4 (aleatorio) según RFC 4122
    $data = openssl_random_pseudo_bytes(16);
    assert(strlen($data) == 16);

    // Cambiar el primer byte para especificar la versión del UUID (4 para UUID v4)
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // Versión 4
    // Cambiar los cuatro bits más significativos del primer byte para 01
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // Variant bits

    // Formatear el UUID en el formato estándar (8-4-4-4-12 caracteres)
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

// Generar un UUID y devolverlo como respuesta
echo generateUUID();
?>
