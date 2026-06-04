import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Transfer Aeropuerto", href: "#servicios" },
    { label: "Transporte Corporativo", href: "#servicios" },
    { label: "Eventos Empresariales", href: "#servicios" },
    { label: "Abonos Mensuales", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Nuestra Flota", href: "#" },
    { label: "Trabaje con Nosotros", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Política de Cancelación", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  PA
                </span>
              </div>
              <span className="text-lg font-semibold text-background">
                Palmas Abiertas
              </span>
            </a>
            <p className="mb-6 text-sm text-background/70">
              Transporte corporativo de excelencia para empresas que demandan
              los más altos estándares de servicio.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+5491112345678"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +54 9 11 1234-5678
              </a>
              <a
                href="mailto:empresas@palmasabiertas.com.ar"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                empresas@palmasabiertas.com.ar
              </a>
              <p className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                Av. del Libertador 6350, CABA
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-4 font-semibold text-background">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-background">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-background">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Palmas Abiertas. Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-background/50">
            Habilitación CNRT N° XXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
