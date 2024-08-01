import { Layout } from "components/layout";
import SpeakersGrid from "components/speakers/speakers-grid";
import Head from "next/head";
import { getMetaDescription, getTitle } from "utils/meta";
import getSpeakers, { Speaker } from "data/drupal/node--speakers";
import getPressCoverageGallery, {
  PressCoverageGallery,
} from "data/drupal/node--press_coverage_gallery";
import getPressCoverageLinks, {
  PressCoverageLink,
} from "data/drupal/node--press_coverage";
import ImageGallery from "components/image-gallery/image-gallery";
import NewsPostsList from "components/news/news-posts-list";
import SectionHeader from "components/sections/section-header";

type NewsroomArgs = {
  pressCoverage: PressCoverageGallery[];
  pressCoverageLinks: PressCoverageLink[];
};

type StaticProps = {
  props: NewsroomArgs;
};

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

function PressCoverageGalleryTemplate({
  images,
}: {
  images: PressCoverageGallery[];
}) {
  const imagesNew = images.map((i) => ({
    title: i.title,
    src: i.field_link_to_image_clipping.uri,
  }));
  return (
      <ImageGallery images={imagesNew} />
  );
}

export default function NewsRoom(props: NewsroomArgs) {
  const { pressCoverage, pressCoverageLinks } = props;
  return (
    <Layout>
      <Head>
        <title>{getTitle("Newsroom ")}</title>
        <meta name="description" content={getMetaDescription("Speakers")} />
      </Head>

      <section className="container mt-12">
        <div>
        <PressLinksTemplate articles={pressCoverageLinks} />

        </div>
        <div className="mt-10">
        <SectionHeader title="News Clippings" center />
        <PressCoverageGalleryTemplate images={pressCoverage} />

        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const [pressCoverage, pressCoverageLinks] = await Promise.all([
    getPressCoverageGallery(context),
    getPressCoverageLinks(context),
  ]);
  return {
    props: {
      pressCoverage,
      pressCoverageLinks,
    },
  };
}
