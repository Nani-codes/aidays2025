import React from "react";
import { Layout } from "../components/layout";
import ProductDescription from "../components/sections/product-description";
import SectionHeader from "../components/sections/section-header";
import ImageGallery from "../components/image-gallery/image-gallery";
import Map from "../components/map";

export default function TemplatesPage() {
return (
  <Layout>
    <h1>Templates</h1>
    <SectionHeader {...{
  title: "Fostering Innovation For a Tomorrow AI Progress",
  pretitle: "01 — OUR MISSION",
  description: [
    "We are committed to pushing the boundaries of what AI can achieve, continuously investing in research and development, and collaborating with a brilliant team of experts.",
    "We are passionate about harnessing the potential of artificial intelligence to drive innovation and solve complex challenges. With a team of dedicated experts, we specialize in creating tailored AI solutions that empower businesses and industries to thrive in an ever-evolving digital landscape.",
  ]
    }} />
    <ProductDescription {...{
  title: "Product Title",
  description: "This is a description of the product",
  image: "https://via.placeholder.com/400",
  stats: [
    {
      title: "Clients",
      value: "35%",
      description: "Global companies invest in artificial intelligence regularly.",
    },
    {
      title: "Investment",
      value: "35%",
      description: "Global companies invest in artificial intelligence regularly.",
    },
  ],
}} />
    {/* <div className="mx-auto max-w-full md:max-w-xl xl:max-w-5xl">
      <ImageGallery />
    </div> */}

    <div className="mx-auto h-[500px] max-w-xl p-8">
      <span className="w-1/2">
      <Map />
      </span>
    </div>
  </Layout>
)
}