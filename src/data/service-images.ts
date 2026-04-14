import type { ImageMetadata } from "astro";
import laboratorioImage from "@images/sections/services/laboratorios_cib_26.webp";
import asesoriaImage from "@images/sections/services/asesoria-candidate-4.jpg";
import analisisSuelosImage from "@images/sections/services/analisis-suelos-lab-v3.jpg";
import clonacionPlantasImage from "@images/sections/services/clonacion-plantas-external.jpg";

const serviceImageMap: Record<string, ImageMetadata> = {
    "asesoria-tecnica-agricola": asesoriaImage,
    "analisis-de-suelos": analisisSuelosImage,
    "clonacion-de-plantas": clonacionPlantasImage,
    "micropropagacion-in-vitro": laboratorioImage,
};

export function getServiceImage(slug: string): ImageMetadata {
    return serviceImageMap[slug] ?? laboratorioImage;
}
