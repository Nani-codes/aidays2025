import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function TrackCard({ name, href, icon }) {
  return (
    <Link href={href} className="flex w-full flex-col justify-between
        rounded-[40px]
        bg-gray-100 p-8
        text-3xl
        text-black
        transition-shadow
        hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600
        hover:text-gray-100">
        <div className="m-3">
          <FontAwesomeIcon icon={Icons[icon]} color="#0000f"/>
        </div>
      <h3 className="font-semibold">{name}</h3>
      <div className="mt-2 text-sm">Know more
        <FontAwesomeIcon icon={Icons.faLink} className="ml-2" color="#0000f"/>
      </div>
    </Link>
  )
}