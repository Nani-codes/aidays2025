import { Layout } from "components/layout";
import { Speaker } from "components/speakers/speaker";
import SpeakersGrid from "components/speakers/speakers-grid";
import getSpeakers, { FieldRole, SpeakerPreview } from "data/drupal/node--speakers";
import { nullishSort } from "lib/utils";
import Head from "next/head";
import Image from "next/image";
import { getTitle } from "utils/meta";
type SpeakerPageArgs = {
  advisor: SpeakerPreview[];
  coreTeam: SpeakerPreview[];
};

type StaticProps = {
  props: SpeakerPageArgs;
};
export default function AboutPage(props: SpeakerPageArgs) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("About")}</title>
        <meta name="description" content="About us" />
      </Head>

      <section className="p-12 md:py-24">
        <div className="mx-4 grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:mx-auto">
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-bold leading-tight md:text-left">
              About the event
            </h2>
            <p className="pl-4 text-center text-gray-600 dark:text-gray-400 md:text-left">
              AI Days aims to bring together experts and institutions from
              Industry, Academia, Startups and Government who work on a shared
              goal of people-centric AI. We envision the conference as the
              melting pot for breakthrough advancements in tech, policy, art and
              more avenues centred around responsible AI. In addition, this
              conference will help foster a better ecosystem for AI-based
              startups. We aim to conduct this as an annual conference.
            </p>
            <div className="flex justify-center md:justify-start"></div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              className="rounded-lg shadow-lg"
              height="550"
              src="/wpimg/Gal6-1536x1152.jpeg"
              style={{
                objectFit: "contain",
              }}
              width="900"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24">
        <div className="mx-4 grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:mx-auto">
          <div className="flex items-center justify-center">
            <Image
              alt="image"
              className="rounded-lg shadow-lg"
              height="500"
              src="/wpimg/signal-2024-02-20-202657_002.jpeg"
              style={{
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
              width="900"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-center text-4xl font-bold leading-tight md:text-left">
              Who we are?
            </h2>
            <p className="pl-4 text-center text-gray-600 dark:text-gray-400 md:text-left">
              We, Swecha, are the team behind Telugu language computing. We
              created the first Telugu operating system, free-type font, and
              glossary in Telugu. The glossary we developed two decades ago is
              still widely used every day. We have also recently developed
              Chandamama Kathalu, a storytelling platform where an AI generates
              moral stories in Telugu. Our activities and efforts are centred
              around democratising access to Tech!
            </p>
            <p className="pl-4 text-center text-gray-600 dark:text-gray-400 md:text-left">
              Every year, we conduct multiple workshops, seminars, conferences
              and more. We reach out to more than 40,000 IT professionals,
              engineering faculty and engineering students across Telangana. We
              have a network of IT professionals across the country who
              contribute to projects that help society.
            </p>
          </div>
        </div>
      </section>
      <Template
        advisor={props.advisor}
        coreTeam={props.coreTeam}
      />
    </Layout>
  );
}

function Template({ advisor, coreTeam }: SpeakerPageArgs) {
  return (
    <>
      <SpeakersGrid gridSize={4} title={"Advisor"} speakers={advisor.sort((a,b) => nullishSort(a.field_advisor_weight, b.field_advisor_weight))} />
      <SpeakersGrid gridSize={4} title={"Core Team"}
        speakers={coreTeam.sort((a,b) => nullishSort(a.field_core_team_weight, b.field_core_team_weight))} />
    </>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const allSpeakers: SpeakerPreview[] = await getSpeakers(context)
  const advisor = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.Advisor)
  );

  const coreTeam = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.CoreTeam)
  );

  return {
    props: {
      advisor,
      coreTeam,
    },
  };
}
