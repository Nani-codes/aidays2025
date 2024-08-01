import getSupporter, { Supporter, Tier } from "data/drupal/node--supporter";
import Head from "next/head";
import { getMetaDescription, getTitle } from "utils/meta";
import { Layout } from "../components/layout";
import { SupportersTemplate } from "components/supporters/SupportersTemplate";

type SupporterPageArgs = {
  supporters: Supporter[];
};

type TemplateProps = {
  supporters: Supporter[];
};

type StaticProps = {
  props: SupporterPageArgs;
};

export function Template(props: TemplateProps) {
  return (
    <section className="container">
      <SupportersTemplate supporters={props.supporters} />
    </section>
  );
}

export default function SupportersPage(props: SupporterPageArgs) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Supporters")}</title>
        <meta name="description" content={getMetaDescription("Supporters")} />
      </Head>
      <Template supporters={props.supporters} />
    </Layout>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const supporters = await getSupporter(context, true);
  return {
    props: {
      supporters,
    },
  };
}
