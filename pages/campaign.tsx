import { Layout } from "components/layout";
import Head from "next/head";
import { getMetaDescription, getTitle } from "utils/meta";
import getCampaignMaterialGallery, {
  CampaignMaterialGallery,
} from "data/drupal/node--campaign_material";
import ImageGallery from "components/image-gallery/image-gallery";
import SectionHeader from "components/sections/section-header";

type CampaignMaterialArgs = {
  campaignMaterial: CampaignMaterialGallery[];
};

type StaticProps = {
  props: CampaignMaterialArgs;
};


function CampaignMaterialGalleryTemplate({
  images,
}: {
  images: CampaignMaterialGallery[];
}) {
  const imagesNew = images.map((i) => ({
    title: i.title,
    src: i.field_link_to_image.uri,
  }));
  return (
      <ImageGallery images={imagesNew} />
  );
}

export default function CampaignMaterialPage(props: CampaignMaterialArgs) {
  const { campaignMaterial } = props;
  return (
    <Layout>
      <section className="container my-12">
        <div className="my-10">
        <SectionHeader {...{
  title: "Campaign Material",
  pretitle: "AI DAYS 2024 > Campaign Material",
  description: [
    "We need your support to reach more people. Kindly use this campaign material to share extend the invitation to AI Days 2024 Conference in your networks.",
    "Please use official hashtags #AIDAYS2024 #AI4Society."
  ]
    }} center />
        <CampaignMaterialGalleryTemplate images={campaignMaterial} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const [campaignMaterial] = await Promise.all([
    getCampaignMaterialGallery(context),
  ]);
  return {
    props: {
      campaignMaterial,
    },
  };
}
