import { ConferenceEvent } from "data/drupal/node--conference_events";
import { Day } from "./agenda";
import { TrackEvent } from "data/drupal/node--track";
import { Speaker } from "components/speakers/speaker";

const timeZone = "Asia/Kolkata";

const dateToString = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone,
  });
};

const timeToString = (time: Date) => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
  };
  return time.toLocaleTimeString("en-US", timeFormat);
};

type ParsedEvent = {
  topic: string;
  description: string;
  startTime: Date;
  endTime: Date;
  badges: string[];
  speakers: string[];
  venue: string;
};

const parseEventData = (
  eventData: TrackEvent[] | ConferenceEvent[],
): ParsedEvent[] => {
  const p1 = eventData.map((e) => ({
    topic: e.title.split(":::")[0],
    description: e.field_short_description,
    startTime: new Date(e.field_time_start),
    endTime: new Date(e.field_time_end),
    badges: e.field_badges?.split(",").map((b) => b.trim()),
    speakers: e.field_speakers,
    venue: e.field_venue,
  }));

  p1.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  return p1;
};

type PrintEvent = {
  topic: string;
  description: string;
  startTime: string;
  endTime: string;
  badges: string[];
  speakers: Speaker[];
  venue: string;
};

const groupDataByDate = (
  eventData: ParsedEvent[],
): {
  [date: string]: PrintEvent[];
} =>
  eventData.reduce((acc, event) => {
    const dateString = dateToString(event.startTime);

    acc[dateString] = acc[dateString] || [];
    acc[dateString].push({
      ...event,
      startTime: timeToString(event.startTime),
      endTime: timeToString(event.endTime),
    });
    return acc;
  }, {});

export const getDaysArray = (
  eventData: TrackEvent[] | ConferenceEvent[],
): Day[] => {
  const parsedEvent = parseEventData(eventData);
  const groupedByDate = groupDataByDate(parsedEvent);
  const days: Day[] = Object.keys(groupedByDate).map((date, i) => ({
    date,
    description: `Day ${i + 1}`,
    events: groupedByDate[date],
  }));

  return days;
};
