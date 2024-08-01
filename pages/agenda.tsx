import AgendaTemplate from "components/agenda/AgendaTemplate";
import MainAgenda from "components/agenda/MainAgenda";
import { Layout } from "components/layout";
import getConferenceEvents, { ConferenceEvent } from "data/drupal/node--conference_events";
import Head from 'next/head';


export default function AgendaPage({
  events
}: {
  events: ConferenceEvent[]
}) {
  return (<Layout>
    <Head>
      <title>Agenda - AI Days 2024</title>
    </Head>
    <MainAgenda events={events} />
  </Layout>)
}

export async function getStaticProps(context) {
  const events = await getConferenceEvents(context);

  return {
    props: {
      events,
    }
  };
}
