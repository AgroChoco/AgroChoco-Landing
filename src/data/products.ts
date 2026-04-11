import type { ImageMetadata } from "astro";
import { globalPlaceholderImage } from "./media";

export interface ProductItem {
  name: string;
  image: ImageMetadata;
  desc: string;
}

export const products: ProductItem[] = [
  {
    name: "Clones de Cacao Elite",
    image: globalPlaceholderImage,
    desc: "Plantas de cacao seleccionadas por su alta resistencia a enfermedades y excelente rendimiento productivo en campo.",
  },
  {
    name: "Plantulas In Vitro Homogeneas",
    image: globalPlaceholderImage,
    desc: "Material genetico puro, libre de patogenos. Ideal para garantizar un desarrollo y crecimiento parejo en toda la parcela.",
  },
  {
    name: "Paquete Tecnologico Nutricional",
    image: globalPlaceholderImage,
    desc: "Formulas desarrolladas a medida a partir del analisis profundo de suelo para maximizar la absorcion de nutrientes.",
  },
];
