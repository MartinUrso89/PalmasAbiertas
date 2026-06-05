<section id="faq" class="section-padding bg-white">
    <div class="faq-container">
        <div class="text-center mb-16">
            <span class="section-label">Preguntas Frecuentes</span>
            <h2 class="section-title">Resolvemos sus Dudas</h2>
            <p class="section-desc">Encuentre respuestas a las consultas más comunes sobre nuestros servicios de transporte corporativo.</p>
        </div>
        <div class="faq-list">
            <?php
            $faqs = [
                ['¿Cuáles son sus zonas de cobertura?', 'Cubrimos toda el área metropolitana de Buenos Aires (AMBA), incluyendo Capital Federal y Gran Buenos Aires. También realizamos traslados interurbanos a cualquier punto del país, como Rosario, Córdoba, Mar del Plata, entre otros.'],
                ['¿Qué tipos de vehículos tienen disponibles?', 'Nuestra flota está compuesta principalmente por Mercedes-Benz Clase E y Clase V. Para grupos más grandes, contamos con Sprinter y minibuses ejecutivos. Todos los vehículos son modelos recientes, con menos de 3 años de antigüedad.'],
                ['¿Cómo funciona la facturación para empresas?', 'Ofrecemos facturación mensual consolidada con detalle de cada viaje realizado. Trabajamos con cuenta corriente a 30 días para clientes corporativos. Emitimos facturas A y B según corresponda, y proporcionamos reportes detallados para control interno.'],
                ['¿Qué pasa si necesito cancelar o modificar un viaje?', 'Puede cancelar o modificar sin cargo hasta 4 horas antes del horario programado. Para cancelaciones con menor anticipación, se aplica un cargo del 50%. Nuestra central de operaciones está disponible 24/7 para gestionar cambios.'],
                ['¿Los choferes están capacitados en protocolo corporativo?', 'Sí, todos nuestros choferes pasan por un riguroso proceso de selección y capacitación. Incluye verificación de antecedentes, curso de manejo defensivo, protocolo corporativo, primeros auxilios y actualización constante. Mantienen estricta confidencialidad.'],
                ['¿Cuál es el tiempo de respuesta para cotizaciones?', 'Para solicitudes estándar, respondemos en menos de 2 horas hábiles. Para eventos o requerimientos especiales, entregamos una propuesta detallada en máximo 24 horas. Puede solicitar cotización por WhatsApp para mayor agilidad.'],
                ['¿Tienen seguros y habilitaciones al día?', 'Absolutamente. Contamos con todas las habilitaciones de la CNRT para transporte ejecutivo, seguros de responsabilidad civil por pasajero transportado, ART para choferes y seguro automotor completo. Toda la documentación está disponible para auditoría.'],
            ];
            foreach ($faqs as $i => $faq) : ?>
            <div class="faq-item">
                <button class="faq-question" aria-expanded="false">
                    <span><?php echo $faq[0]; ?></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-inner"><?php echo $faq[1]; ?></div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
