import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode } from 'next-drupal';
import { Speaker } from './node--speakers';

const type = "node--track";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "uid",
      "title",
      "field_icon_name",
      "body",
      "path",
      "field_speakers",
      "field_events"
    ])
}

export type TrackEvent = {
  title: string,
  field_short_description: string,
  field_badges: string,
  field_speakers: Speaker[],
  field_time_start: any,
  field_time_end: any,
  field_venue: string
}

export interface Track extends DrupalNode {
  field_icon_name: string,
  field_speakers: Speaker[]
  field_events: TrackEvent[],
}

export default async function getTracks(context) {
  const res = await drupal.getResourceCollectionFromContext<Track[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )

  return res;
}