// Función para mostrar el popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Función para cerrar el popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Función para mostrar el formulario de registro en el popup
function showRegisterForm() {
    var popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>Registrarse</h2>
        <form onsubmit="return validateRegistrationForm()" action="../../Model/Database/Register_User.php" method="post">
            <label for="newUsername">Nuevo Usuario:</label>
            <input type="text" id="newUsername" name="username" required oninput="checkUsernameAvailability()"><br><br>
            <span id="usernameStatus"></span><br>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="newPassword">Nueva Contraseña:</label>
            <input type="password" id="newPassword" name="password" required><br><br>
            <label for="confirmPassword">Confirmar Contraseña:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required><br><br>
            <input type="submit" value="Registrarse">
        </form>
        <button onclick="showLoginForm()">Volver a Iniciar Sesión</button>
    `;
}

// Función para mostrar el formulario de inicio de sesión en el popup
function showLoginForm() {
    var popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = `
        <span class="close" onclick="closePopup()">&times;</span>
        <h2>Iniciar Sesión</h2>
        <form action="../../Model/Database/LogInUser.php" method="post">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required><br><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Iniciar Sesión">
        </form>
        <button onclick="showRegisterForm()">Registrarse</button>
    `;
}

// Función para verificar la disponibilidad del nombre de usuario en tiempo real
function checkUsernameAvailability() {
    var username = document.getElementById('newUsername').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "check_username.php?username=" + encodeURIComponent(username), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var usernameStatus = document.getElementById('usernameStatus');
            if (xhr.responseText === "exists") {
                usernameStatus.textContent = "El nombre de usuario ya está en uso.";
                usernameStatus.style.color = "red";
            } else if (xhr.responseText === "available") {
                usernameStatus.textContent = "El nombre de usuario está disponible.";
                usernameStatus.style.color = "green";
            } else {
                usernameStatus.textContent = "Error al verificar el nombre de usuario.";
                usernameStatus.style.color = "red";
            }
        }
    };
    xhr.send();
}

// Función para validar el formulario de registro
function validateRegistrationForm() {
    var username = document.getElementById('newUsername').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validar el email, la contraseña, y la coincidencia de contraseñas...
    // (Código de validación existente)

    // Si todas las validaciones pasan, enviar datos al servidor
    if (username && email && password && confirmPassword) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../../Model/Database/Register_User.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Manejar la respuesta del servidor si es necesario
                console.log(xhr.responseText);
            }
        };
        var data = "username=" + encodeURIComponent(username) +
                   "&email=" + encodeURIComponent(email) +
                   "&password=" + encodeURIComponent(password);
        xhr.send(data);
    }

    return false; // Evitar que el formulario se envíe normalmente
}
