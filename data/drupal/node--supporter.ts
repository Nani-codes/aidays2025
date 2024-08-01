import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "lib/drupal";
import { DrupalNode } from "next-drupal";

const type = "node--supporter";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFilter("status", "1")
    .addFields(type, [
      "uid",
      "title",
      "field_link_to_organisation",
      "field_image_url",
      "field_tier",
      "body",
      "field_hidden",
    ]);
}

type Image = {
  uri: string;
  title: "";
  options: any[];
};

export enum Tier {
  Silver = "silver",
  Gold = "gold",
  Platinum = "platinum",
  Associate = "associate",
}

export interface Supporter extends DrupalNode {
  field_image_url: Image;
  field_link_to_organisation?: {
    uri: string;
  };
  field_tier: Tier;
  body: {
    processed: string;
  };
  tier: Tier;
  field_hidden: boolean
}

export default async function getSupporter(context, includeHidden = false) {
  const res = await drupal.getResourceCollectionFromContext<Supporter[]>(
    type,
    context,
    {
      params: params().getQueryObject(),
    }
  );

  if (!includeHidden) {
    return res.filter((s) =>!s.field_hidden);
  }

  return res;
}
