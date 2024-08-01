import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import ConditionalLink from "components/ConditionalLink";

type SpeakerCardProps = {
  name: string;
  image: string;
  designation: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    wikipedia?: string;
  };
  href?: string;
};

const supportedSocials = [
  {
    name: "twitter",
    icon: faTwitter,
  },
  {
    name: "linkedin",
    icon: faLinkedin,
  },
  {
    name: "wikipedia",
    icon: faWikipediaW
  }
]

export default function SpeakerCard({
  name,
  image,
  designation,
  socials,
  href
}: SpeakerCardProps) {
 return (
  <div className="size-full rounded-lg px-2 pb-5 pt-8 text-center">
  <ConditionalLink href={href}>
  <Image
    alt={name}
    className="mx-auto mb-4 rounded-full"
    height="200"
    src={image}
    style={{
      aspectRatio: "200/200",
      objectFit: "cover",
    }}
    width="200"
  />
  <p className="mb-2 font-bold">{name}</p>
  <p className="mb-2 text-sm font-semibold uppercase">{designation}</p>
  </ConditionalLink>

  <div className="flex justify-center space-x-2">

    {supportedSocials.map((s) => (
      socials[s.name] && (
        <a
          className="text-gray-600 hover:text-gray-800"
          href={socials[s.name]}
          key={s.name}
          target="_blank"
        >
          <FontAwesomeIcon icon={s.icon} />
        </a>
      )
    ))}
  </div>
</div>
);
};