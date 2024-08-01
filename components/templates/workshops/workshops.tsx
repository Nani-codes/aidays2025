import { Layout } from 'components/layout';
import WorkshopOverview from 'components/templates/workshops/WorkshopOverview';
import Head from 'next/head';
import React from 'react'
import { getMetaDescription, getTitle } from "utils/meta";

const WorkshopsPage = () => {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Workshops")}</title>
        <meta name="description" content={getMetaDescription("Workshops")} />
      </Head>
      <WorkshopOverview />
    </Layout>
  );
};

export default WorkshopsPage;
