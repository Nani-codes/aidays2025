import LogoGrid from "components/logo-display/LogoGrid";
import { Partner } from "data/drupal/node--partner";
import { twMerge } from "tailwind-merge";

const order = [
  'AI/ML Partners',
  'CX & AI Partner',
  'Venue Partner',
  'HealthCare Knowledge Partner',
  'Visual Media Partner',
  'Media Partner',
]

function SingleSection({
  title,
  partners,
}: {
  title: string;
  partners: {
    name: string;
    image: string;
    type: string;
    htmlDescription?: string;
  }[];
}) {
  return (
    <section className="flex flex-col items-center justify-between">
      <h3
      className="text-center text-3xl
      font-bold"
      >
        {title}
      </h3>
      <LogoGrid list={partners} />
      </section>
  )
}

export function PartnersSection({ partners, className }: { partners: Partner[], className?: string }) {
  const partnerLogos = partners.map((p) => ({
    name: p.title,
    image: p.field_image_url.uri,
    type: p.field_special_partner_title,
    htmlDescription: p.body?.processed,
  }));

  const otherPartners = partnerLogos.filter((p) => p.type === null);

  interface PartnerMap {
    [type: string]: typeof partnerLogos;
  }

  const partnersMap: PartnerMap = {};

  partnerLogos.forEach((p) => {
    const type = p.type;
    if (!type) return;
    partnersMap[type] ??= [];
    partnersMap[type].push(p);
  });

  return (
    <div className={twMerge("flex flex-col gap-12", className)}>
    <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2">
      {order.filter((c)=> typeof partnersMap[c]!== "undefined").map((category) => (
        <SingleSection key={category} title={category} partners={partnersMap[category]} />
      ))}
    </div>
    <SingleSection title="Partners" partners={otherPartners} />
    </div>
  );
}