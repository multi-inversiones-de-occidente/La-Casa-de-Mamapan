<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

function limpiar(string $valor): string {
    return trim(strip_tags($valor));
}

$nombre   = limpiar($_POST['nombre'] ?? '');
$apellido = limpiar($_POST['apellido'] ?? '');
$email    = trim($_POST['email'] ?? '');
$telefono = limpiar($_POST['telefono'] ?? '');
$mensaje  = trim($_POST['mensaje'] ?? '');

if (
    $nombre === '' ||
    $apellido === '' ||
    $email === '' ||
    $telefono === '' ||
    $mensaje === ''
) {
    header('Location: index.html?error=campos');
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html?error=email');
    exit;
}

/*
|--------------------------------------------------------------------------
| CONFIGURACIÓN
|--------------------------------------------------------------------------
| Cambia el correo destino por el que quieras recibir los mensajes.
| Idealmente usa un correo del dominio final, por ejemplo:
| reservaciones@mamapan.com
|--------------------------------------------------------------------------
*/
$correoDestino = 'mamapan-ahuachapan@hotmail.com';
$asunto = 'Nuevo mensaje desde La Casa de Mamapán';

$contenido = "Se ha recibido un nuevo mensaje desde el formulario web.\n\n";
$contenido .= "Nombre: " . $nombre . " " . $apellido . "\n";
$contenido .= "Email: " . $email . "\n";
$contenido .= "Teléfono: " . $telefono . "\n\n";
$contenido .= "Mensaje:\n" . $mensaje . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: La Casa de Mamapán <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$enviado = @mail(
    $correoDestino,
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $contenido,
    implode("\r\n", $headers)
);

if ($enviado) {
    header('Location: gracias.html');
    exit;
}

header('Location: index.html?error=envio');
exit;
