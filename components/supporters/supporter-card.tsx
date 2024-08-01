import { CardContent, Card } from "../ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
export default function SupporterCard({
  title,
  description,
  href,
  image,
  tier,
}) {
  const sizes = {
    platinum: "h-[200px]",
    gold: "h-[180px]",
    silver: "h-[150px]",
    bronze: "h-[130px]",
    associate: "h-[110px]",
  };
  const size = sizes[tier];
  return (
    <Link href={href} target="_blank" className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <Image
          alt={title}
          height="250"
          src={image}
          className={twMerge("w-auto", size)}
          style={{
            objectFit: "contain",
          }}
          width="250"
        />
        <div className="mt-2 text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          {description && (
            <div className="text-sm" dangerouslySetInnerHTML={{ __html: description }}></div>
          )}
        </div>
      </div>
    </Link>
  );
}

