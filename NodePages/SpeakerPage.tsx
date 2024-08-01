import ExpertProfile from "components/speakers/expert-profile";
import { Speaker } from "data/drupal/node--speakers";
import Head from "next/head";
import { getTitle } from "utils/meta";

export default function SpeakerPage({ resource }: {
  resource: Speaker
}) {
  return (<>
    <Head>
      <title>
        {getTitle(`Profile - ${resource.title}`)}
      </title>
    </Head>
    <div className="container">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ExpertProfile
        name={resource.title}
        image={resource.field_link_to_image.uri}
        designation={resource.field_designation}
        socials={{
          linkedin: resource.field_linkedin_profile?.uri,
          wikipedia: resource.field_wikipedia?.uri,
        }}
        htmlDescription={resource.body?.processed}
        />



      </section>
    </div>
    </>
  )
}