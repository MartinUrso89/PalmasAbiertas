import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Solicite su Cotización",
    description:
      "Complete el formulario con los detalles de su necesidad de transporte. Respondemos en menos de 2 horas hábiles.",
  },
  {
    number: "02",
    title: "Reciba su Propuesta",
    description:
      "Nuestro equipo comercial diseña una solución personalizada con precios claros y sin costos ocultos.",
  },
  {
    number: "03",
    title: "Confirme el Servicio",
    description:
      "Apruebe la propuesta y reciba acceso a nuestro portal de reservas o coordine directamente con su ejecutivo de cuenta.",
  },
  {
    number: "04",
    title: "Disfrute la Experiencia",
    description:
      "Relájese mientras nuestros choferes profesionales se encargan de cada traslado con puntualidad y seguridad.",
  },
];

const guarantees = [
  "Sin costos ocultos ni sorpresas",
  "Cancelación flexible hasta 4 horas antes",
  "Ejecutivo de cuenta dedicado",
  "Reportes mensuales detallados",
  "Facturación a 30 días",
];

export function Process() {
  return (
    <section id="proceso" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Steps */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Cómo Funciona
            </p>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Contratar es Simple y Rápido
            </h2>
            <p className="mb-10 text-pretty text-lg text-muted-foreground">
              Diseñamos un proceso ágil para que pueda comenzar a disfrutar de
              nuestros servicios sin complicaciones administrativas.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute ml-6 mt-14 h-8 w-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Guarantees */}
          <div className="rounded-2xl bg-foreground p-8 lg:p-12">
            <h3 className="mb-6 text-2xl font-bold text-background">
              Nuestra Garantía de Servicio
            </h3>
            <p className="mb-8 text-background/80">
              Trabajamos con los más altos estándares de calidad para brindarle
              una experiencia de transporte corporativo sin igual.
            </p>
            <ul className="space-y-4">
              {guarantees.map((guarantee) => (
                <li key={guarantee} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-background">{guarantee}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-background/20 pt-8">
              <p className="text-sm text-background/60">
                Más de 150 empresas confían en nosotros para sus traslados
                corporativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
