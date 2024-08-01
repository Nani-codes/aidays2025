import { DrupalJsonApiParams } from "drupal-jsonapi-params";
import { drupal } from "lib/drupal";
import { DrupalNode } from "next-drupal";

const type = "node--speakers";

function params() {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "title",
      "body",
      "path",
      "field_designation",
      "field_link_to_image",
      "field_linkedin_profile",
      "field_wikipedia",
      "field_role",
      "field_speaker_weight",
      "field_advisor_weight",
      "field_core_team_weight",
      "field_show_on_home_slider",
    ]);
}

export enum FieldRole {
  DistinguishedSpeaker = "distinguished_speakers",
  Speaker = "speakers",
  Advisor = "advisors",
  CoreTeam = "conference_core_team",
  closing = "closing_address",
}

export interface SpeakerPreview extends DrupalNode {
  field_designation: string;
  field_link_to_image: {
    uri: string;
  };
  field_linkedin_profile: {
    uri: string;
  };
  field_wikipedia: {
    uri: string;
  };
  field_role: FieldRole[];
  field_speaker_weight: number;
  field_advisor_weight: number;
  field_core_team_weight: number;
  field_show_on_home_slider: boolean;
}

export interface Speaker extends SpeakerPreview {
  body: {
    processed: string;
  };
}

export default async function getSpeakers(context) {
  const res = await drupal.getResourceCollectionFromContext<Speaker[]>(
    type,
    context,
    {
      params: params().getQueryObject(),
    }
  );

  const res2 = await drupal.getResourceCollectionFromContext<Speaker[]>(
    type,
    context,
    {
      params: params().addPageOffset(50).getQueryObject(),
    }
  );

  return [...res, ...res2];
}
