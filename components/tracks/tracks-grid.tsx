import React from "react";
import { twMerge } from 'tailwind-merge';
import TrackCard from "./tracks-card";
import { Track } from "data/drupal/node--track";

export default function TracksGrid({
  gridSize, tracks
}: {
  gridSize: number,
  tracks: Track[],
}) {
  const gridClasses = {
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    2: "grid-cols-1 sm:grid-cols-2"
  }

  if (gridSize < 1 || gridSize > 4) throw new Error("Invalid grid size");

  const gridClass = gridClasses[gridSize] || "grid-cols-1";

  return (
    <div className="p-8 text-slate-900">
      <div className={twMerge("grid gap-6 mx-auto max-w-full xl:max-w-7xl",
        gridClass)}>
        {tracks.map((track) => (
          <TrackCard
          name={track.title}
          icon={track.field_icon_name}
          href={track?.path?.alias || "#"}
          key={track.title}/>
        ))}
      </div>
    </div>
  );
}