/**
 * Manufacturer logos and product photography for medication detail pages.
 * Images sourced from Wikimedia Commons (CC BY / CC BY-SA / Public domain).
 * Attribution details in `MedicationImage.attribution`.
 */

export type ManufacturerId = "eli-lilly" | "novo-nordisk" | "astrazeneca" | "sanofi";

export type MedicationImage = {
  src: string;
  alt: string;
  /** Short credit line for caption (license + author when required) */
  attribution: string;
  /** When true, show "Imagem ilustrativa" disclaimer more prominently */
  illustrative?: boolean;
};

export type Manufacturer = {
  id: ManufacturerId;
  name: string;
  logo: string;
  logoAlt: string;
};

export const manufacturers: Record<ManufacturerId, Manufacturer> = {
  "eli-lilly": {
    id: "eli-lilly",
    name: "Eli Lilly",
    logo: "/manufacturers/eli-lilly.svg",
    logoAlt: "Logótipo da Eli Lilly",
  },
  "novo-nordisk": {
    id: "novo-nordisk",
    name: "Novo Nordisk",
    logo: "/manufacturers/novo-nordisk.png",
    logoAlt: "Logótipo da Novo Nordisk",
  },
  astrazeneca: {
    id: "astrazeneca",
    name: "AstraZeneca",
    logo: "/manufacturers/astrazeneca.svg",
    logoAlt: "Logótipo da AstraZeneca",
  },
  sanofi: {
    id: "sanofi",
    name: "Sanofi",
    logo: "/manufacturers/sanofi.svg",
    logoAlt: "Logótipo da Sanofi",
  },
};

/** Map medication `company` field to manufacturer id */
export function manufacturerIdForCompany(company: string): ManufacturerId {
  if (company.includes("Lilly")) return "eli-lilly";
  if (company.includes("Novo Nordisk")) return "novo-nordisk";
  if (company.includes("AstraZeneca")) return "astrazeneca";
  if (company.includes("Sanofi")) return "sanofi";
  return "novo-nordisk";
}

export const medicationImages: Record<string, MedicationImage[]> = {
  mounjaro: [
    {
      src: "/medications/mounjaro/pen-1.jpg",
      alt: "Caneta Mounjaro KwikPen com tirzepatida 5 mg por dose",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
    },
    {
      src: "/medications/mounjaro/pen-2.jpg",
      alt: "Embalagem e caneta Mounjaro KwikPen com tirzepatida",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
    },
  ],
  zepbound: [
    {
      src: "/medications/zepbound/pen-1.jpg",
      alt: "Caneta KwikPen com tirzepatida (mesma substância do Zepbound/Mounjaro)",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
      illustrative: true,
    },
  ],
  ozempic: [
    {
      src: "/medications/ozempic/pen-1.jpg",
      alt: "Caneta Ozempic com semaglutida 3 ml",
      attribution: "HualinXMN / CC BY-SA 4.0 (Wikimedia Commons)",
    },
  ],
  wegovy: [
    {
      src: "/medications/wegovy/pen-1.jpg",
      alt: "Caneta Wegovy com semaglutida para injeção subcutânea",
      attribution: "CC BY 4.0 (Wikimedia Commons)",
    },
  ],
  rybelsus: [
    {
      src: "/medications/rybelsus/tablets-1.jpg",
      alt: "Embalagens Rybelsus com comprimidos de semaglutida 3 mg e 7 mg",
      attribution: "CC BY-SA 4.0 (Wikimedia Commons)",
    },
  ],
  saxenda: [
    {
      src: "/medications/saxenda/pen-1.jpg",
      alt: "Caneta Saxenda com liraglutida 24 mg",
      attribution: "CC BY 3.0 (Wikimedia Commons)",
    },
    {
      src: "/medications/saxenda/pen-2.jpg",
      alt: "Aplicação da caneta Saxenda com liraglutida",
      attribution: "CC BY 3.0 (Wikimedia Commons)",
    },
  ],
  victoza: [
    {
      src: "/medications/victoza/pen-1.jpg",
      alt: "Caneta de liraglutida diária (mesma substância da Victoza)",
      attribution: "CC BY 3.0 (Wikimedia Commons)",
      illustrative: true,
    },
  ],
  trulicity: [
    {
      src: "/medications/trulicity/pen-1.jpg",
      alt: "Autoinjetor Trulicity com dulaglutida 0,75 mg",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
    },
    {
      src: "/medications/trulicity/pen-2.jpg",
      alt: "Caneta Trulicity com dulaglutida da Eli Lilly",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
    },
  ],
  byetta: [
    {
      src: "/medications/byetta/pen-1.jpg",
      alt: "Caneta Byetta com exenatida 10 mcg",
      attribution: "Domínio público (Wikimedia Commons)",
    },
  ],
  bydureon: [
    {
      src: "/medications/bydureon/pen-1.jpg",
      alt: "Caneta Byetta com exenatida (mesma substância, formulação diferente do Bydureon)",
      attribution: "Domínio público (Wikimedia Commons)",
      illustrative: true,
    },
  ],
  lyxumia: [
    {
      src: "/medications/lyxumia/pen-1.jpg",
      alt: "Caneta SoloStar da Sanofi (plataforma semelhante à do Lyxumia)",
      attribution: "© Raimond Spekking / CC BY-SA 4.0 (Wikimedia Commons)",
      illustrative: true,
    },
  ],
};

export function getMedicationImages(slug: string): MedicationImage[] {
  return medicationImages[slug] ?? [];
}

export function getManufacturer(id: ManufacturerId): Manufacturer {
  return manufacturers[id];
}
