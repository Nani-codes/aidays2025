import { ScheduleData } from "./agenda";
import { getDaysArray } from "./agendaHelper";
import React from "react";
import AgendaTemplate from "./AgendaTemplate";
import { TrackEvent } from "data/drupal/node--track";

export default function TrackAgenda({ events }: { events: TrackEvent[] }) {
  const days = getDaysArray(events);

  const data: ScheduleData = {
    title: "Schedule",
    description: "",
    days,
  };


  return <AgendaTemplate data={data} />
};