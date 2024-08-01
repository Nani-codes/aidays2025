import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SpeakerCard from "./speaker-card";
import { SpeakerPreview } from "data/drupal/node--speakers";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}

export default function SpeakersSlider({
  speakers,
}: {
  speakers: SpeakerPreview[]
}) {
  return (
    <div>
      <Link href="/speakers" className="mb-8 flex items-center justify-center gap-2">
        <h1 className="text-center text-4xl font-bold">
          Speakers
        </h1>
        <FontAwesomeIcon
        icon={faLink}
        className="text-slate-600"
        />
      </Link>
      <div className="flex flex-col">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
      >
        {speakers.length &&
          speakers.map((speaker, index) => {
            const speakerProps = {
              name: speaker.title,
              image: speaker.field_link_to_image?.uri,
              designation: speaker.field_designation,
              socials: {
                linkedin: speaker.field_linkedin_profile?.uri,
              },
              href: speaker.path.alias,
            };
            return (
              <div className="flex size-full flex-1 flex-col px-2 pb-10" key={index}>
                <SpeakerCard  {...speakerProps} />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  </div>)
}