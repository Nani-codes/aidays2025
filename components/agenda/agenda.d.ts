import { Speaker } from "data/drupal/node--speakers";

export type Event = {
  speakers?: SpeakerPreview[];
  topic: string;
  description?: string;
  startTime: string;
  endTime?: string;
  badges?: string[];
  venue?: string;
};

export type Day = {
  date: string;
  description: string;
  events: Event[];
};

export type ScheduleData = {
  title: string;
  description: string;
  days: Day[];
};
