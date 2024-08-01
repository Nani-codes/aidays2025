import { Layout } from "components/layout";
import SpeakersGrid from "components/speakers/speakers-grid";
import Head from "next/head";
import { getMetaDescription, getTitle } from "utils/meta";
import getSpeakers, {
  FieldRole,
  Speaker,
  SpeakerPreview,
} from "data/drupal/node--speakers";
import { nullishSort } from "lib/utils";

type SpeakerPageArgs = {
  speakers: SpeakerPreview[];
  distinguishedSpeakers: SpeakerPreview[];
  closingSpeakers: any;
};

type StaticProps = {
  props: SpeakerPageArgs;
};

export default function SpeakersPage(props: SpeakerPageArgs) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Speakers")}</title>
        <meta name="description" content={getMetaDescription("Speakers")} />
      </Head>
      <Template
        speakers={props.speakers}
        distinguishedSpeakers={props.distinguishedSpeakers}
        closingSpeakers={props.closingSpeakers}
      />
    </Layout>
  );
}

function Template({
  speakers,
  distinguishedSpeakers,
  closingSpeakers,
}: SpeakerPageArgs) {
  return (
    <>
      <SpeakersGrid
        gridSize={3}
        title={"Distinguished Speakers"}
        speakers={distinguishedSpeakers.sort((a, b) =>
          nullishSort(a.field_speaker_weight, b.field_speaker_weight)
        )}
      />
      {/* <div className="container mt-10">
        <SpeakersGrid
          gridSize={1}
          title={""}
          speakers={closingSpeakers}
        />
      </div> */}
      <SpeakersGrid
        gridSize={4}
        title={"Speakers"}
        speakers={speakers.sort((a, b) => {
          return nullishSort(a.field_speaker_weight, b.field_speaker_weight);
        })}
      />
    </>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const allSpeakers: SpeakerPreview[] = (await getSpeakers(context)).map(
    ({ body, ...speaker }: Speaker) => speaker
  ); // optimising page load

  const speakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.Speaker)
  );

  const distinguishedSpeakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.DistinguishedSpeaker)
  );

  const closingSpeakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.closing)
  );

  return {
    props: {
      speakers,
      distinguishedSpeakers,
      closingSpeakers,
    },
  };
}
