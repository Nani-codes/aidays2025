import React from "react"
import { Badge } from "../../ui/badge"
import { Button } from "../../ui/button"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export type CourseDetailsProps = {
  title: string,
  actionBar: ActionBarProps,
  mainSection: MainSectionProps,
  secondSection: string,
  sidebar: Sidebar
}

export default function CourseDetails(props: CourseDetailsProps) {
  return (
    <div className="bg-white text-gray-800">
      <div className="mx-auto max-w-7xl p-8">
        <h1 className="mb-4 text-4xl font-bold">{props.title}</h1>
        <ActionBar {...{...props.actionBar}}  />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <MainSection {...{...props.mainSection}}/>
          <Sidebar {...{...props.sidebar}} />
        </div>
        <div className="my-20 text-2xl" dangerouslySetInnerHTML={
          {__html: props.secondSection}
        }>
        </div>
      </div>
    </div>
  )
}

type MainSectionProps = {
  title: string,
  description: string,
  videoSrc?: string,
  longDescription?: string,
}
function MainSection(props: MainSectionProps) {
  return (<div>
    <h2 className="mb-4 text-2xl font-semibold">{props.title}</h2>
    <p className="mb-4">
      {props.description}
    </p>
    {props.videoSrc && <div className="mb-4">
      <Image
        alt={props.title}
        className="aspect-video"
        height="200"
        src={props.videoSrc}
        width="400"
      />
    </div>
}
    <div className="mb-4" dangerouslySetInnerHTML={{__html: props.longDescription}} />
  </div>)
}

type ActionBarProps = {
  badges: string[],
  closesIn: string,
  bookedPercentage: string
}

function ActionBar({
  badges, closesIn, bookedPercentage
}: ActionBarProps) {
  return (
  <div className="mb-8 flex flex-col items-center justify-between gap-3 md:flex-row">
    <div className="flex flex-row items-center space-x-4">
      <div className="text-sm">
        <span>Closes in</span>
        <span className="font-semibold">{closesIn}</span>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={Icons.faClock} className="size-5 text-blue-500" />
        <span className="ml-1 text-sm">{bookedPercentage} booked</span>
      </div>
    </div>
    <div className="flex gap-2">
      {
        badges.map((badge, index) => (
          <Badge key={index} variant="secondary">{badge}</Badge>
        ))
      }
    <Button className="bg-blue-600 text-white">Register</Button>
    </div>
  </div>)
}

type SidebarBullet = {
  icon?: string,
  title: string,
  description?: string
}

type Sidebar = {
  title: string,
  bullets: SidebarBullet[]
}

function Sidebar(props: Sidebar) {
  return (          <div>
    <h3 className="mb-4 text-xl font-semibold">{props.title}</h3>
    <ul className="space-y-4">
      {
        props.bullets.map((bullet, index) => (
          <li key={index}>
            {bullet.icon && <FontAwesomeIcon icon={Icons[bullet.icon]} className="mr-2 inline-block size-5" /> }
            <span className="font-semibold">{bullet.title}</span>
            {bullet.description && <p>{bullet.description}</p>}
          </li>
        ))
      }
    </ul>
  </div>)
}
