import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SpeakerDetailBase from "./speaker-detail-base";
import { type Speaker } from "./speaker";


export default function SpeakerDetail(speaker: Speaker) {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <header className="flex items-center justify-between border-b pb-4">
        <h1 className="text-3xl font-bold">01 — EXPERT PROFILE</h1>
        <div>
          {
            speaker?.socials?.linkedin && (
              <a href={speaker.socials.linkedin}>
              <Button className="mr-2 py-5" variant="ghost">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Button>
              </a>
            )
          }
          {
            speaker?.socials?.twitter && (
              <a href={speaker.socials.twitter} className="text-blue-500">
                <Button className="mr-2 py-5" variant="ghost">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Button>
              </a>
            )
          }
        </div>
      </header>
      <SpeakerDetailBase {...speaker} />
    </div>
  )
}
