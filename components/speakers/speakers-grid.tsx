import React from "react";
import SpeakerCard from "./speaker-card";
import { twMerge } from "tailwind-merge";
import { SpeakerPreview } from "data/drupal/node--speakers";

export default function SpeakersGrid({
  title,
  gridSize,
  speakers,
  dynClass,
}: {
  title?: string;
  gridSize: number;
  speakers: SpeakerPreview[];
  dynClass?: string;
}) {
  const gridClasses = {
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    2: "grid-cols-1 sm:grid-cols-2",
  };

  if (gridSize < 1 || gridSize > 4) throw new Error("Invalid grid size");
  const gridClass = gridClasses[gridSize] || "grid-cols-1";
  return (
    <div className={twMerge("p-8 text-slate-900", dynClass)}>
      {title && (
        <h1 className="mb-8 text-center text-4xl font-bold">{title}</h1>
      )}
      <div
        className={twMerge(
          "grid gap-6 mx-auto max-w-full xl:max-w-7xl",
          gridClass,
        )}
      >
        {speakers.length &&
          speakers.map((speaker, index) => {
            const speakerProps = {
              name: speaker.title,
              image: speaker.field_link_to_image?.uri,
              designation: speaker.field_designation,
              socials: {
                linkedin: speaker.field_linkedin_profile?.uri,
                wikipedia: speaker.field_wikipedia?.uri,
              },
              href: speaker.path?.alias,
            };
            return (
              <div className="flex flex-1 flex-col" key={index}>
                <SpeakerCard {...speakerProps} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
