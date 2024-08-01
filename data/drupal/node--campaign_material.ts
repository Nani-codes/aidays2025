import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode, JsonApiLinks } from 'next-drupal';

const type = "node--campaign_material";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "title",
      "field_link_to_image",
    ])
}

export interface CampaignMaterialGallery extends DrupalNode {
  field_link_to_image: {
    uri: string
  },
}

export default async function getCampaignMaterialGallery(context) {
  const res = await drupal.getResourceCollectionFromContext<CampaignMaterialGallery[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )
  return res;
}