import Hackathon from "components/hackathon/Hackathon";
import { Layout } from "components/layout";
import Head from "next/head";
import { getTitle } from "utils/meta";

export default function page() {
  return (
    <Layout>
      <Head>
        <title>
          {getTitle("Hackathon")}
        </title>
      </Head>
      <Hackathon />
    </Layout>

  )
}
