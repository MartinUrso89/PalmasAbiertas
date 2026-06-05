<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> data-theme-url="<?php echo get_template_directory_uri(); ?>">
<?php wp_body_open(); ?>

<header class="site-header transparent" id="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="#" class="header-logo">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-header-light.png"
                     alt="Palmas Abiertas"
                     id="header-logo-img">
            </a>

            <nav class="nav-desktop">
                <a href="#servicios">Servicios</a>
                <a href="#beneficios">Beneficios</a>
                <a href="#proceso">Cómo Funciona</a>
                <a href="#testimonios">Testimonios</a>
                <a href="#faq">FAQ</a>
            </nav>

            <div class="header-cta">
                <a href="#contacto" class="btn btn-primary">Solicitar Cotización</a>
            </div>

            <button class="mobile-toggle" id="mobile-toggle" aria-label="Abrir menú">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
        </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <div class="container">
            <div class="mobile-menu-inner">
                <nav>
                    <a href="#servicios">Servicios</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#proceso">Cómo Funciona</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#faq">FAQ</a>
                    <hr>
                    <a href="#contacto" class="btn btn-primary btn-block">Solicitar Cotización</a>
                </nav>
            </div>
        </div>
    </div>
</header>
