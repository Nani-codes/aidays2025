import ProductDescription from 'components/sections/product-description'
import SectionHeader from 'components/sections/section-header'
import { Track } from 'data/drupal/node--track'
import Head from 'next/head'
import React from 'react'
import { getTitle } from 'utils/meta'
import SpeakersGrid from "components/speakers/speakers-grid";
import TrackAgenda from 'components/agenda/TrackAgenda'

const TrackPage = ({ resource }: {
  resource: Track
}) => {
  const events = resource.field_events?.filter(e=>!!e.title); // filter unpublished

  const length = resource.field_speakers.length;
  return (
    <>
    <Head>
      <title>
        {getTitle(`${resource.title} Track`)}
      </title>
    </Head>

    <div className='container'>

    <SectionHeader
      title={resource.title}
      htmlDescription={resource.body.processed}
      />

    {length > 0 && <>
      <h2 className="mt-6 text-2xl font-bold leading-tight ">Track Speakers</h2>
      <SpeakersGrid dynClass='p-0' gridSize={4} speakers={resource.field_speakers} />
      </>
      }
    </div>
    {
      events.length > 0 && <TrackAgenda events={events} />
    }
</>
  )
}

export default TrackPage