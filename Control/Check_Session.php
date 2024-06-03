<?php
session_start();

if(isset($_SESSION['Usuario']) && isset($_SESSION['ID'])) {
    echo "sesion_activa";
} else {
    echo "sesion_inactiva";
}
?>
