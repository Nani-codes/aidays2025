import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode, JsonApiLinks } from 'next-drupal';

const type = "node--press_coverage_gallery";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "title",
      "field_link_to_image_clipping",
    ])
}

export interface PressCoverageGallery extends DrupalNode {
  field_link_to_image_clipping: {
    uri: string
  },
}

export default async function getPressCoverageGallery(context) {
  const res = await drupal.getResourceCollectionFromContext<PressCoverageGallery[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )
  return res;
}