import type { ImageMetadata } from "astro";
import type { IconName } from "./icons";
import { globalPlaceholderImage } from "./media";

export interface ServiceItem {
    icon: IconName;
    title: string;
    image: ImageMetadata;
    description: string;
    href?: string;
}

export const services: ServiceItem[] = [
    {
        icon: "sprout",
        title: "Micropropagacion in vitro",
        image: globalPlaceholderImage,
        description:
            "Proceso biotecnologico para la reproduccion masiva en laboratorio. Material libre de enfermedades y geneticamente uniforme.",
        href: "/articulos/micropropagacion-in-vitro"
    },
    {
        icon: "dna",
        title: "Clonacion de plantas",
        image: globalPlaceholderImage,
        description:
            "Reproducimos plantas por su alto desempeno productivo. Multiplica exactamente las mejores caracteristicas de tus cultivos.",
        href: "/articulos/clonacion-de-plantas"
    },
    {
        icon: "flask-conical",
        title: "Analisis de suelos",
        image: globalPlaceholderImage,
        description:
            "Estudios tecnicos para evaluar fertilidad. Disenamos estrategias de fertilizacion para maximizar el crecimiento por parcela.",
        href: "/articulos/analisis-de-suelos"
    },
    {
        icon: "tractor",
        title: "Asesoria tecnica agricola",
        image: globalPlaceholderImage,
        description:
            "Acompanamiento especializado ofreciendo soluciones practicas y cientificas para mejorar el manejo y reducir riesgos.",
        href: "/articulos/asesorias-tecnicas"
    }
];
