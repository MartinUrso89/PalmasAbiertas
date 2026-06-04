import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda López",
    role: "Directora de RRHH",
    company: "Grupo Financiero Austral",
    content:
      "Desde que contratamos a Palmas Abiertas, las quejas por traslados desaparecieron. La puntualidad y el profesionalismo de sus choferes son impecables. Nuestros ejecutivos llegan relajados a sus reuniones.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Operaciones",
    company: "Laboratorios Biotech SA",
    content:
      "Coordinamos más de 200 traslados mensuales con ellos. Su sistema de reportes y facturación nos simplificó enormemente la gestión. El servicio es consistente y confiable.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Office Manager",
    company: "Estudio Jurídico Martínez & Asociados",
    content:
      "La atención personalizada marca la diferencia. Nuestro ejecutivo de cuenta conoce las preferencias de cada socio. Es un servicio verdaderamente premium.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonios
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            La satisfacción de nuestros clientes corporativos es nuestra mejor
            carta de presentación.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-border bg-card"
            >
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-card-foreground">
                  {`"${testimonial.content}"`}
                </p>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
