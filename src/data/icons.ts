export const ICON_NAMES = [
    "arrow-left",
    "arrow-up-right",
    "chevron-down",
    "chevron-right",
    "map-pin",
    "mail",
    "phone",
    "sprout",
    "dna",
    "flask-conical",
    "tractor",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
