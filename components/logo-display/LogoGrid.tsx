import Image from "next/image";
import { twMerge } from "tailwind-merge";

type props = {
  list: {
    name: string
    image: string
    htmlDescription?: string
  }[]
}

export default function Logo ({
  list
}: props) {
  const gridClasses = {
    5: "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    4: "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    3: "grid-cols-2 sm:grid-cols-2 md:grid-cols-3",
    2: "grid-cols-2 sm:grid-cols-2",
    1: "grid-cols-1"
  }

  let gridSize = list.length;

  const gridClass = gridClasses[gridSize] || gridClasses[gridClasses[5]];


  return (
  <div className={twMerge("grid gap-6", gridClass)}>
  {
    list.map((l) => (
      <div key={l.name} className="flex flex-col items-center">
        <Image
          alt={l.name}
          className="size-[150px]"
          height="150"
          src={l.image}
          style={{
            aspectRatio: "150/150",
            objectFit: "contain",
          }}
          width="150"
        />
        {l.htmlDescription?.length &&
            <div className="w-3/4 text-center text-lg font-semibold"
            dangerouslySetInnerHTML={
              {__html: l.htmlDescription}
            }
          />
        }
      </div>
    ))
  }
</div>)
}