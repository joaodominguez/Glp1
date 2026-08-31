import Image from "next/image";
import {
  getManufacturer,
  manufacturerIdForCompany,
  type MedicationImage,
  type Manufacturer,
} from "@/content/medication-media";

export function MedicationMedia({
  company,
  brandName,
  images,
}: {
  company: string;
  brandName: string;
  images: MedicationImage[];
}) {
  const manufacturerId = manufacturerIdForCompany(company);
  const manufacturer = getManufacturer(manufacturerId);
  const hasIllustrative = images.some((img) => img.illustrative);

  if (!images.length) return null;

  return (
    <section
      className="med-media"
      aria-label={`Imagens de ${brandName}`}
    >
      <div className="med-media-header">
        <ManufacturerBadge manufacturer={manufacturer} />
        <p className="med-media-note">
          Fotografias reais do medicamento ou dispositivo. O aspeto comercial pode
          variar consoante o mercado e a dose.
          {hasIllustrative ? " Algumas imagens são ilustrativas — ver legenda." : null}
        </p>
      </div>

      <div
        className={`med-gallery${images.length === 1 ? " med-gallery--single" : ""}`}
      >
        {images.map((image) => (
          <figure key={image.src} className="med-gallery-item">
            <div className="med-gallery-frame">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 560px"
                className="med-gallery-img"
              />
            </div>
            <figcaption className="med-gallery-caption">
              {image.illustrative ? (
                <span className="med-gallery-tag">Imagem ilustrativa</span>
              ) : null}
              <span>{image.alt}</span>
              <span className="med-gallery-credit">{image.attribution}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ManufacturerBadge({ manufacturer }: { manufacturer: Manufacturer }) {
  return (
    <div className="med-manufacturer">
      <Image
        src={manufacturer.logo}
        alt={manufacturer.logoAlt}
        width={manufacturer.id === "astrazeneca" ? 160 : 120}
        height={48}
        className="med-manufacturer-logo"
      />
      <span className="med-manufacturer-name">{manufacturer.name}</span>
    </div>
  );
}
