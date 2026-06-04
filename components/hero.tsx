import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
          alt="Mercedes-Benz ejecutivo en Buenos Aires"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Award className="h-4 w-4" />
              Transporte Ejecutivo Premium
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
              Transporte Corporativo de{" "}
              <span className="text-primary">Excelencia</span> en Buenos Aires
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-pretty text-lg text-background/80 sm:text-xl">
              Soluciones de movilidad empresarial diseñadas para departamentos
              de RRHH e instituciones que demandan puntualidad, seguridad y
              profesionalismo absoluto.
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-base" asChild>
                <a href="#contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-base text-background hover:bg-background/10 hover:text-background"
                asChild
              >
                <a href="#servicios">Conocer Servicios</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 border-t border-background/20 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-background">100% Asegurados</p>
                  <p className="text-xs text-background/60">Cobertura total</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-background">99.8% Puntualidad</p>
                  <p className="text-xs text-background/60">Récord comprobado</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-background">+15 Años</p>
                  <p className="text-xs text-background/60">De experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
