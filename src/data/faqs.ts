export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question:
      "¿Qué ventajas tiene la clonación in vitro sobre la semilla tradicional?",
    answer:
      "La micropropagación in vitro garantiza que todas las plantas sean genéticamente idénticas a la planta madre de alto rendimiento. Además, te aseguras de adquirir material libre de virus, hongos y bacterias desde el día uno.",
  },
  {
    question:
      "¿Atienden a pequeños productores o solo a grandes agroindustrias?",
    answer:
      "Atendemos a todo tipo de productor. Nuestros segmentos de clientes incluyen agricultores pequeños, medianos y grandes, así como invernaderos, viveros y cooperativas.",
  },
  {
    question: "¿Qué incluyen los contratos de manejo de cultivos?",
    answer:
      "Incluyen desde el diagnóstico inicial del suelo y la provisión de plantas élite, hasta un cronograma de fertilización, visitas técnicas constantes y control de plagas, acompañándote hasta la cosecha.",
  },
  {
    question: "¿Cómo puedo solicitar un análisis de suelo de mi parcela?",
    answer:
      "Puedes contactarnos directamente mediante nuestro formulario web, por WhatsApp o correo electrónico. Un asesor programará una visita a tu parcela para realizar la toma de muestras de manera profesional.",
  },
];
