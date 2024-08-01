import Head from "next/head";
import { Layout } from "../components/layout";
import HeaderSection from "../components/shared/header";
import React from "react";
import SpeakersGrid from "../components/speakers/speakers-grid";
import TracksGrid from "../components/tracks/tracks-grid";;
import getTracks, { Track } from "data/drupal/node--track";
import getPartners, { Partner } from "data/drupal/node--partner";
import { nullishSort, sortString } from "lib/utils";
import getPressCoverageLinks, {
  PressCoverageLink,
} from "data/drupal/node--press_coverage";
import NewsPostsList from "components/news/news-posts-list";
import SectionHeader from "components/sections/section-header";
import { getMetaDescription, getTitle } from "utils/meta";
import getSupporter, { Supporter, Tier } from "data/drupal/node--supporter";
import SupporterCard from "components/supporters/supporter-card";
import getSpeakers, {
  FieldRole,
  Speaker,
  SpeakerPreview,
} from "data/drupal/node--speakers";
import Image from "next/image";
import SpeakersSlider from "components/speakers/speakers-slider";
import { PartnersSection } from "components/partners/PartnersSection";
import { SupportersTemplate } from "components/supporters/SupportersTemplate";

interface IndexPageProps {
  tracks: Track[];
  partners: Partner[];
  pressCoverageLinks: PressCoverageLink[];
  supporters: Supporter[];
  distinguishedSpeakers: SpeakerPreview[];
  speakersOnSlider: SpeakerPreview[];
}

function PressLinksTemplate({ articles }: { articles: PressCoverageLink[] }) {
  const posts = articles.map((a) => ({
    title: a.title,
    body: a.body.processed,
    publisher: a.field_publisher_name,
    image: a.field_link_to_image.uri,
    externalLink: a.field_link_to_news_article.uri,
  }));
  return <NewsPostsList posts={posts} />;
}

export default function IndexPage({
  tracks,
  partners,
  pressCoverageLinks,
  supporters,
  distinguishedSpeakers,
speakersOnSlider}: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("main")}</title>
        <meta name="description" content={getMetaDescription("main")} />
      </Head>
      <HeaderSection />
      <div className="mt-10">
        <SpeakersSlider speakers={speakersOnSlider} />
      </div>

      <div className="container mt-10">
      <SpeakersGrid
        gridSize={2}
        title={"Distinguished Speakers"}
        speakers={distinguishedSpeakers}
      />
      </div>


      <div className="mt-10">
      <SectionHeader title="Tracks" center />
      <TracksGrid gridSize={3} tracks={tracks} />
      </div>

      <div className="container mt-10
        border-y-2 border-gray-200 bg-white py-20
      ">
      <SectionHeader title="Partners" center />
      <PartnersSection partners={partners} className="mt-20"/>
      </div>

      <div className="mb-20 mt-10 flex flex-col gap-12">
      <SectionHeader title="Supporters" center />
      <SupportersTemplate supporters={supporters} />
      </div>

      <div className="container mb-20">
        <PressLinksTemplate articles={pressCoverageLinks} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const [tracks, partners, pressCoverageLinks, supporters] = await Promise.all([
    getTracks(context),
    getPartners(context),
    getPressCoverageLinks(context),
    getSupporter(context, true),
  ]);

  const allSpeakers: SpeakerPreview[] = (await getSpeakers(context)).map(
    ({ body, ...speaker }: Speaker) => speaker
  );

  const distinguishedSpeakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.DistinguishedSpeaker)
  );

  const speakersOnSlider = allSpeakers.filter(s => !!s.field_show_on_home_slider)
    .sort((a,b)=> nullishSort(a.field_speaker_weight, b.field_speaker_weight));

  return {
    props: {
      tracks,
      partners,
      pressCoverageLinks,
      supporters,
      distinguishedSpeakers,
      speakersOnSlider,
    },
  };
}
