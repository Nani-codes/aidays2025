import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode, JsonApiLinks } from 'next-drupal';
import { Speaker } from './node--speakers';

const type = "node--conference_events";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid", "field_speakers"])
    .addFields(type, [
      "title",
      "field_badges",
      "field_short_description",
      "field_speakers",
      "field_time_start",
      "field_time_end",
      "field_venue",
    ])
}

export interface ConferenceEvent extends DrupalNode {
  field_short_description: string,
  field_badges: string,
  field_speakers: Speaker[],
  field_time_start: any,
  field_time_end: any,
  field_venue: string
}

export default async function getConferenceEvents(context) {
  const res = await drupal.getResourceCollectionFromContext<ConferenceEvent[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )
  return res;
}