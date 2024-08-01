import { Layout } from "components/layout";
import LogoOnlyGrid from "components/logo-display/LogoGrid";
import { PartnersSection } from "components/partners/PartnersSection";
import SectionHeader from "components/sections/section-header";
import getPartners, { Partner } from "data/drupal/node--partner";
import { sortString } from "lib/utils";
import Head from "next/head";
import React from "react";
import { getMetaDescription, getTitle } from "utils/meta";

type PartnersArgs = {
  partners: Partner[];
};

type StaticProps = {
  props: PartnersArgs;
};


export default function Partners(props: PartnersArgs) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Partners")}</title>
        <meta name="description" content={getMetaDescription("Partners")} />
      </Head>
      <div className="container mb-8 mt-10">
      <SectionHeader title="Partners" center />
      <PartnersSection partners={props.partners} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const [partners] = await Promise.all([getPartners(context)]);

  return {
    props: {
      partners,
    },
  };
}
