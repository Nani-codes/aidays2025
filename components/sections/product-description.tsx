import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faUsers } from "@fortawesome/free-solid-svg-icons";
import StatsBox from "../small-ui-components/StatsBox";
import RegisterButton from "components/RegisterButton";

type ProductDescriptionProps = {
  title: string;
  description?: string;
  image: string;
  htmlDescription?: string;
  showRegister?: any;
  stats?: {
    title: string;
    value: string;
    description: string;
  }[];
};

export default function ProductDescription({
  title,
  description,
  htmlDescription,
  image,
  stats,
  showRegister
}: ProductDescriptionProps) {

  return (   <section className="mx-auto max-w-7xl p-8">
  <div className="flex flex-wrap md:flex-nowrap">
    <div className="mb-8 w-full md:mb-0 md:w-1/2">
      <Image
        alt="Innovation"
        className="h-auto w-full rounded-3xl"
        height="400"
        src={image}
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width="600"
      />
    </div>
    <div className="w-full md:w-1/2 md:pl-8">
      <p className="text-3xl font-bold">{title}</p>
      {
        htmlDescription && <div className="mt-4" dangerouslySetInnerHTML={{ __html: htmlDescription }} />
      }
      {
        description && <p className="mt-4">{description}</p>
      }
      {/* grid */}
      {
        stats?.length && <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {
          stats.map((stat, index) => (
            <StatsBox {...stat} key={index} />
          ))
        }
      </div>
      }
      {
        showRegister && <div className="pt-4">
          <RegisterButton />
        </div>
      }
    
    </div>
  </div>
</section>
)
}