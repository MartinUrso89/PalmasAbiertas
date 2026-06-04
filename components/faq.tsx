import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuáles son sus zonas de cobertura?",
    answer:
      "Cubrimos toda el área metropolitana de Buenos Aires (AMBA), incluyendo Capital Federal y Gran Buenos Aires. También realizamos traslados interurbanos a cualquier punto de la provincia de Buenos Aires",
  },
  {
    question: "¿Qué tipos de vehículos tienen disponibles?",
    answer:
      "Nuestra flota está compuesta principalmente por ...",
  },
  {
    question: "¿Cómo funciona la facturación para empresas?",
    answer:
      "Ofrecemos facturación mensual consolidada con detalle de cada viaje realizado. Trabajamos con cuenta corriente a 30 días para clientes corporativos. Emitimos facturas A y B según corresponda, y proporcionamos reportes detallados para control interno.",
  },
  {
    question: "¿Qué pasa si necesito cancelar o modificar un viaje?",
    answer:
      "Puede cancelar o modificar sin cargo hasta 4 horas ...",
  },
  {
    question: "¿Los choferes están capacitados en protocolo corporativo?",
    answer:
      "Sí, todos nuestros choferes pasan por un riguroso proceso de selección y capacitación. Incluye verificación de antecedentes, curso de manejo defensivo, protocolo corporativo, primeros auxilios y actualización constante. Mantienen estricta confidencialidad.",
  },
   {
    question: "¿Cuál es el tiempo de respuesta para cotizaciones?",
    answer:
      "Para solicitudes estándar, respondemos en menos de 2 horas hábiles. Para eventos o requerimientos especiales, entregamos una propuesta detallada en máximo 24 horas. Puede solicitar cotización por WhatsApp para mayor agilidad.",
  },
  {
    question: "¿Tienen seguros y habilitaciones al día?",
    answer:
      "Absolutamente. Contamos con todas las habilitaciones de la CNRT para transporte ejecutivo, seguros de responsabilidad civil por pasajero transportado, ART para choferes y seguro automotor completo. Toda la documentación está disponible para auditoría.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-[75px]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Preguntas Frecuentes
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Resolvemos sus Dudas
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Encuentre respuestas a las consultas más comunes sobre nuestros
            servicios de transporte corporativo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible="true" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
