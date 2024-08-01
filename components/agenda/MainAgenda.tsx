import { ConferenceEvent } from "data/drupal/node--conference_events";
import AgendaTemplate from "./AgendaTemplate";
import { Day, Event, ScheduleData } from "./agenda";
import { getDaysArray } from "./agendaHelper";

export default function MainAgenda({ events }: { events: ConferenceEvent[] }) {
  const days = getDaysArray(events);
  const data: ScheduleData = {
    title: "Agenda",
    description: "",
    days,
  };
  return <AgendaTemplate data={data} showPopover={true} />;
}
