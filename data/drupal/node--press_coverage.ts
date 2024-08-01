import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode } from 'next-drupal';

const type = "node--press_coverage";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "title",
      "body",
      "field_publisher_name",
      "field_link_to_image",
      "field_link_to_news_article",
    ])
}

export interface PressCoverageLink extends DrupalNode {
  field_publisher_name: string
  field_link_to_image: {
    uri:string
  }
  field_link_to_news_article: {
    uri: string
  },
}

export default async function getPressCoverageLinks(context) {
  const res = await drupal.getResourceCollectionFromContext<PressCoverageLink[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )
  return res;
}