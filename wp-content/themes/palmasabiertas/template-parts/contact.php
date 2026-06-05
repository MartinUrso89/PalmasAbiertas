<section id="contacto" class="section-padding bg-secondary">
    <div class="container">
        <div class="contact-grid">
            <div>
                <span class="section-label">Contacto</span>
                <h2 class="section-title">Solicite su Cotización Personalizada</h2>
                <p class="section-desc" style="text-align:left;margin-bottom:32px;">Complete el formulario y un ejecutivo comercial se comunicará en menos de 2 horas hábiles para entender sus necesidades y ofrecerle la mejor solución.</p>
                <div class="contact-cards">
                    <div class="contact-card">
                        <div class="contact-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div>
                            <p class="contact-card-label">Teléfono</p>
                            <a href="tel:+5491153110944" class="contact-card-value">11 5311 0944</a>
                        </div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <div>
                            <p class="contact-card-label">Email</p>
                            <a href="mailto:contacto@palmasabiertas.com.ar" class="contact-card-value">contacto@palmasabiertas.com.ar</a>
                        </div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <div>
                            <p class="contact-card-label">Horario de Atención</p>
                            <p class="contact-card-value">Lun - Vie: 8:00 - 20:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="form-card">
                    <?php if (isset($_GET['enviado']) && $_GET['enviado'] === 'true') : ?>
                    <div class="form-success">
                        <div class="form-success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <h3>Solicitud Enviada</h3>
                        <p>Gracias por contactarnos. Un ejecutivo se comunicará con usted a la brevedad.</p>
                    </div>
                    <?php else : ?>
                    <form method="POST" action="<?php echo admin_url('admin-post.php'); ?>">
                        <input type="hidden" name="action" value="palmasabiertas_contact">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="nombre">Nombre completo *</label>
                                <input type="text" id="nombre" name="nombre" required placeholder="Juan Pérez">
                            </div>
                            <div class="form-group">
                                <label for="empresa">Empresa *</label>
                                <input type="text" id="empresa" name="empresa" required placeholder="Nombre de su empresa">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">Email corporativo *</label>
                                <input type="email" id="email" name="email" required placeholder="email@empresa.com">
                            </div>
                            <div class="form-group">
                                <label for="telefono">Teléfono *</label>
                                <input type="tel" id="telefono" name="telefono" required placeholder="+54 9 11 1234-5678">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="servicio">Servicio de interés *</label>
                            <select id="servicio" name="servicio" required>
                                <option value="">Seleccione una opción</option>
                                <option value="transfer">Transfer Aeropuerto</option>
                                <option value="corporativo">Transporte Corporativo Regular</option>
                                <option value="eventos">Eventos Empresariales</option>
                                <option value="abono">Abono Mensual Ejecutivo</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="mensaje">Cuéntenos su necesidad</label>
                            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Describa brevemente sus requerimientos de transporte..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg">
                            Enviar Solicitud
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                        <div class="form-footer">
                            <p>Al enviar este formulario acepta nuestra política de privacidad. Sus datos serán tratados de forma confidencial.</p>
                        </div>
                    </form>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
