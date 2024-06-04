<?php
session_start();

if (isset($_SESSION['Id']) && isset($_SESSION['Usuario'])) {
    echo "sesion_activa";
} else {
    echo "no_sesion";
}
?>
