import {DrupalJsonApiParams} from 'drupal-jsonapi-params';
import { drupal } from 'lib/drupal';
import { DrupalNode } from 'next-drupal';

const type = "node--partner";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFilter('status', '1')
    .addFields(type, [
      "uid",
      "body",
      "title",
      "field_link_to_organisation",
      "field_image_url",
      "field_special_partner_title"
    ])
}

type Image = {
  uri: string
  title: ''
  options: any[],
}

export interface Partner extends DrupalNode {
  field_image_url: Image,
  field_special_partner_title?: string
  body?: {
    processed: string
  }
}

export default async function getPartners(context) {
  const res = await drupal.getResourceCollectionFromContext<Partner[]>(type, context,
    {
      params: params().getQueryObject()
    },
  )

  return res;
}