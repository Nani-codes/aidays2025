import { Supporter, Tier } from "data/drupal/node--supporter";
import SupporterCard from "./supporter-card";

const gridSize = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

 function formatSupporter(supporters: Supporter[]) {
  return supporters.map((supporter) => {
    return {
      name: supporter.title,
      image: supporter.field_image_url.uri,
      tier: supporter.field_tier,
      href: supporter.field_link_to_organisation?.uri,
      body: supporter.body?.processed,
    };
  });
}

export function SupportersTemplate(props: { supporters: Supporter[] }) {
  const supporters = formatSupporter(props.supporters);

  const goldSupporters = supporters.filter(
    (supporter) => supporter.tier === Tier.Gold
  );
  const associateSupporters = supporters.filter(
    (supporter) => supporter.tier === Tier.Associate
  );
  const silverSupporters = supporters.filter(
    (supporter) => supporter.tier === Tier.Silver
  );
  const platinumSupporters = supporters.filter(
    (supporter) => supporter.tier === Tier.Platinum
  );
  return (
    <>
      <div className="mx-auto flex max-w-full flex-col gap-8 md:max-w-5xl xl:max-w-7xl">
        {platinumSupporters.length !== 0 && (
          <Sponsors sponsors={platinumSupporters} title="Platinum Supporters" />
        )}

        {goldSupporters.length !== 0 && (
          <Sponsors sponsors={platinumSupporters} title="Gold Supporters" />
        )}
        {silverSupporters.length !== 0 && (
          <Sponsors sponsors={silverSupporters} title="Silver Supporters" />
        )}
        {associateSupporters.length !== 0 && (
          <Sponsors
            sponsors={associateSupporters}
            title="  Associate Supporters"
          />
        )}
      </div>
    </>
  );
}
function Sponsors({ sponsors, title }) {
  const sponsorsSize = sponsors.length > 4 ? 4 : sponsors.length;

  return (
    <section className="mb-10">
      <h3 className="mb-8 text-center text-3xl font-bold lg:text-center">
        {title}
      </h3>
      <div
        className={`grid grid-cols-1 place-items-center gap-8 ${gridSize[sponsorsSize]}`}
      >
        {sponsors.map((sponsor, index) => (
          <SupporterCard
            description={""}
            href={sponsor.href}
            image={sponsor.image}
            key={index}
            title={sponsor.name}
            tier={sponsor.tier}
          />
        ))}
      </div>
    </section>
  );
}
