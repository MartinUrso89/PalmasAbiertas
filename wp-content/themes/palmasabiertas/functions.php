<?php
// Theme setup
function palmasabiertas_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'palmasabiertas_setup');

// Enqueue styles and scripts
function palmasabiertas_enqueue() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap', [], null);
    wp_enqueue_style('palmasabiertas-style', get_template_directory_uri() . '/assets/css/style.css', [], '1.0');
    wp_enqueue_script('palmasabiertas-script', get_template_directory_uri() . '/assets/js/script.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'palmasabiertas_enqueue');

// Contact form handler
function palmasabiertas_handle_contact() {
    if (!isset($_POST['action']) || $_POST['action'] !== 'palmasabiertas_contact') {
        return;
    }

    $nombre = sanitize_text_field($_POST['nombre']);
    $empresa = sanitize_text_field($_POST['empresa']);
    $email = sanitize_email($_POST['email']);
    $telefono = sanitize_text_field($_POST['telefono']);
    $servicio = sanitize_text_field($_POST['servicio']);
    $mensaje = sanitize_textarea_field($_POST['mensaje']);

    $to = 'ursomartin89@gmail.com';
    $subject = "Cotización de $empresa";
    $headers = ['Content-Type: text/html; charset=UTF-8', "From: $nombre <$email>"];

    $body = "<h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> $nombre</p>
        <p><strong>Empresa:</strong> $empresa</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Teléfono:</strong> $telefono</p>
        <p><strong>Servicio:</strong> $servicio</p>
        <p><strong>Mensaje:</strong> " . nl2br($mensaje) . "</p>";

    wp_mail($to, $subject, $body, $headers);

    wp_redirect(home_url('#contacto?enviado=true'));
    exit;
}
add_action('admin_post_palmasabiertas_contact', 'palmasabiertas_handle_contact');
add_action('admin_post_nopriv_palmasabiertas_contact', 'palmasabiertas_handle_contact');
