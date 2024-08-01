import Image from "next/image";
import React from "react";
import { Speaker } from "./speaker";

export default function SpeakerDetailBase({
  name,
  designation,
  image,
  description,
}: Speaker) {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Image
            alt={name}
            className="w-full rounded-lg"
            height="300"
            src={image}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-5xl font-bold">
            {name}
          </h2>
          <h3 className="my-4 text-xl text-gray-600">
            {designation}
          </h3>
          <div dangerouslySetInnerHTML={{
            __html: description,
          }}
          className="prose mt-6 leading-loose"
          ></div>
        </div>
      </div>
    </section>
  );
}
