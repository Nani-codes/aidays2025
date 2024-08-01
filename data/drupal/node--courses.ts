import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode } from 'next-drupal';

const type = "node--courses";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "uid",
      "title",
      "body",
      "path",
      "field_difficulty",
      "field_short_description",
      "field_subtitle",
      "field_target_audience",
      "field_type",
      "field_poster",
      "field_price",
    ])
}

type HTMLText = {
  processed: string
}

export interface Course extends DrupalNode {
  field_difficulty: string[];
  field_short_description: string;
  field_subtitle: string;
  field_target_audience: HTMLText;
  field_type: string;
  field_price: string;
  field_tools: string;
  field_requirements: string;
  field_poster: {
    uri: string;
  }
}

export default async function getCourses(context) {
  const res = await drupal.getResourceCollectionFromContext<Course[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )

  return res;
}