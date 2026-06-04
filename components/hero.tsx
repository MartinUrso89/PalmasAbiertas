"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="imagen hero.png"
          alt="Mercedes-Benz ejecutivo en Buenos Aires"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center py-32">
          <div className="max-w-2xl">
            

            {/* Headline */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl">
              Soluciones de transporte para cada {" "}
              <span className="text-primary">necesidad</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-pretty text-lg text-background/80 sm:text-xl">
              Ofrecemos servicios de transporte para empresas, instituciones y personas
            </p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-lg px-8 py-3 h-auto" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>
                Solicitar Cotización
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-lg px-8 py-3 h-auto text-background hover:bg-background/10 hover:text-background"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conocer Servicios
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
