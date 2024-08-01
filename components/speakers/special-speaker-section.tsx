import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SpeakerDetailBase from "./speaker-detail-base";
import { Speaker } from "./speaker";

export default function SpecialSpeaker({
  speaker
}: {
  speaker: Speaker
}) {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <SpeakerDetailBase {...speaker} />
    </div>
  )
}
