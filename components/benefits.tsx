import {
  Shield,
  Clock,
  FileCheck,
  Headphones,
  Car,
  CreditCard,
  Users,
  MapPin,
} from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Planes Flexibles",
    description:
      "Modalidades de contratación adaptadas: por viaje, abonos mensuales o contratos anuales.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Choferes verificados con antecedentes, vehículos monitoreados por GPS y seguros de responsabilidad civil completos.",
  },
  {
    icon: Clock,
    title: "Puntualidad ",
    description:
      "Sistema de gestión que garantiza llegadas a tiempo.",
  },
     
  {
    icon: Users,
    title: "Profesionalidad",
    description:
      "Personal capacitado en protocolo corporativo, discreción absoluta y conocimiento experto de la ciudad.",
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-secondary py-[75px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Por Qué Elegirnos
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Beneficios que Marcan la Diferencia
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Cada detalle está pensado para brindar una experiencia de transporte
            superior, con estándares que superan las expectativas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-secondary-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
