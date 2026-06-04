import { Card, CardContent } from "@/components/ui/card";
import { Plane, Building2, Users, Calendar, Car, MapPin } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Transfer Aeropuerto",
    description:
      "Traslados ejecutivos desde y hacia Ezeiza y Aeroparque. Monitoreo de vuelos en tiempo real y espera sin cargo adicional.",
    features: ["Monitoreo de vuelos", "Espera incluida", "Meet & Greet"],
  },
  {
    icon: Building2,
    title: "Transporte Corporativo",
    description:
      "Servicio regular para empresas con rutas fijas. Traslado de personal entre oficinas, plantas y puntos estratégicos.",
    features: ["Rutas personalizadas", "Horarios fijos", "Facturación mensual"],
  },
  {
    icon: Users,
    title: "Eventos Empresariales",
    description:
      "Coordinación integral de transporte para congresos, convenciones y eventos corporativos de cualquier escala.",
    features: ["Flota completa", "Coordinación dedicada", "Logística integral"],
  },
  {
    icon: Calendar,
    title: "Abonos Mensuales",
    description:
      "Planes flexibles para ejecutivos y gerentes con necesidades recurrentes de movilidad premium.",
    features: ["Tarifas preferenciales", "Disponibilidad garantizada", "Sin sorpresas"],
  },
  {
    icon: Car,
    title: "Disposición por Hora",
    description:
      "Vehículo con chofer a disposición para reuniones de negocios, visitas a clientes o jornadas completas.",
    features: ["Flexibilidad total", "Chofer dedicado", "Rutas múltiples"],
  },
  {
    icon: MapPin,
    title: "Traslados Especiales",
    description:
      "Servicios a medida para necesidades específicas: viajes interurbanos, visitas VIP y requerimientos únicos.",
    features: ["Presupuesto a medida", "Cualquier destino", "Servicio VIP"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros Servicios
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Soluciones de Transporte a Medida
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Diseñamos cada servicio pensando en las necesidades específicas de
            su organización, garantizando eficiencia y profesionalismo en cada
            traslado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
