"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "54 9 11 5311 0944",
    href: "https://wa.me/5491112345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@palmasabiertas.com.ar",
    href: "mailto:Contacto@palmasabiertas.com.ar",
  },
  {
    icon: Clock,
    label: "Horario de Atención",
    value: "Lun - Vie: 8:00 - 20:00",
    href: null,
  },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-secondary py-[75px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Contacto
            </p>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              Solicite su cotización
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Complete el formulario y un ejecutivo comercial se comunicará para entender sus necesidades y
              ofrecerle la mejor solución.
            </p>

            {/* Contact Info Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg bg-card p-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-card-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-card-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="border-border bg-card">
            <CardContent className="p-6 lg:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                    Solicitud Enviada
                  </h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Un ejecutivo se comunicará con
                    usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="empresa"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="servicio"
                      className="mb-2 block text-sm font-medium text-card-foreground"
                    >
                      Servicio de interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="transfer">Transfer Aeropuerto</option>
                      <option value="corporativo">Transporte Regular</option>
                      <option value="eventos">Eventos Empresariales</option>
                      <option value="abono">Abono Mensual </option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="mb-2 block text-sm font-medium text-card-foreground"
                    >
                      Cuéntenos su necesidad
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Describa brevemente sus requerimientos de transporte..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Al enviar este formulario acepta nuestra política de
                    privacidad. Sus datos serán tratados de forma confidencial.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
