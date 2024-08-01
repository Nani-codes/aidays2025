import { masterClass } from "data/courses";
import { Layout } from "../components/layout";
import Head from "next/head";
import { getMetaDescription, getTitle } from "utils/meta";
import getCourses from "data/drupal/node--courses";
import CoursePage from "NodePages/CoursePage";

export default function MasterClassPage({
  masterClass
}) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Masterclass")}</title>
        <meta name="description" content={getMetaDescription("masterclass")} />
      </Head>
       <CoursePage
      resource={masterClass}
      />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const masterClass = (await getCourses(context)).find((c)=>c.field_type===null); // masterclass is null

  return {
    props: {
      masterClass,
    },
  }
}
