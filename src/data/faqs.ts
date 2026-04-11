export interface FaqItem {
    question: string;
    answer: string;
}

export const faqs: FaqItem[] = [
    {
        question: "Que ventajas tiene la clonacion in vitro sobre la semilla tradicional?",
        answer:
            "La micropropagacion in vitro garantiza que todas las plantas sean geneticamente identicas a la planta madre de alto rendimiento. Ademas, te aseguras de adquirir material libre de virus, hongos y bacterias desde el dia uno."
    },
    {
        question: "Atienden a pequenos productores o solo a grandes agroindustrias?",
        answer:
            "Atendemos a todo tipo de productor. Nuestros segmentos de clientes incluyen agricultores pequenos, medianos y grandes, asi como invernaderos, viveros y cooperativas."
    },
    {
        question: "Que incluyen los contratos de manejo de cultivos?",
        answer:
            "Incluyen desde el diagnostico inicial del suelo y la provision de las plantas elite, hasta un cronograma de fertilizacion, visitas tecnicas constantes y control de plagas, acompanandote hasta la cosecha."
    },
    {
        question: "Como puedo solicitar un analisis de suelo de mi parcela?",
        answer:
            "Puedes contactarnos directamente mediante nuestro formulario web, por WhatsApp o correo electronico. Un asesor programara una visita a tu parcela para realizar la toma de muestras de manera profesional."
    }
];
