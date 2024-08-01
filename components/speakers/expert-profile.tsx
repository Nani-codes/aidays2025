import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/ui/button"
import Image from "next/image"
import Link from "next/link"

type ExpertProfileProps = {
  name: string;
  image: string;
  designation?: string;
  description?: string;
  htmlDescription?: string;
  socials?: {
    linkedin?: string;
    wikipedia?: string;
  };
};

export default function ExpertProfile({
  name,
  image,
  designation,
  description,
  htmlDescription,
  socials: {  linkedin, wikipedia },
}:ExpertProfileProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <header className="flex items-center justify-between border-b py-4">
        <h1 className="text-xl font-semibold">PROFILE</h1>
        <div className="flex space-x-4">
          {linkedin && (<a href={linkedin} target="_blank" rel="noreferrer">
          <Button className="flex items-center space-x-2" variant="ghost">
            <LinkedinIcon className="size-4" />
            <span>LinkedIn</span>
          </Button>
          </a>)}

          {wikipedia && (<a href={wikipedia} target="_blank" rel="noreferrer">
          <Button className="flex items-center space-x-2" variant="ghost">
            <WikipediaIcon className="size-4" />
            <span>Wikipedia</span>
          </Button>
          </a>)}
        </div>
      </header>
      <section className="py-8">
        <h2 className="text-4xl font-bold">{name}</h2>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row">
          <Image
            alt={name}
            className="w-full rounded-lg lg:w-1/2"
            height="300"
            src={image}
            style={{
              objectFit: "contain",
            }}
            width="300"
          />
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold">
              {designation}
            </h3>
            {description && <p className="mt-4">{description}</p>}
            {
              htmlDescription && <div className="prose mt-4 text-xl" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
            }
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function WikipediaIcon(props) {
  return (<FontAwesomeIcon
      icon={faWikipediaW}
      {...props}
    />)
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
