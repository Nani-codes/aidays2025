import { CourseSidebar } from "components/CourseSidebar";
import RegisterButton from "components/RegisterButton";
import { Badge } from "components/ui/badge";
import { Course } from "data/drupal/node--courses";
import { capitalise } from "lib/utils";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { getTitle } from "utils/meta";

const CoursePage = ({ resource }: { resource: Course }) => {
  const audience = resource?.field_target_audience?.processed;
  const body = resource?.body?.processed;
  const courseType =
    resource.field_type === "workshop" ? "Workshop" : "Masterclass";
  const poster = resource.field_poster?.uri;

  const price = resource.field_price;
  const tools = resource.field_tools;
  const requirements = resource.field_requirements;

  return (
    <>
      <Head>
        <title>{getTitle(`${courseType} - ${resource.title}`)}</title>
      </Head>
      <div className="mx-auto max-w-4xl p-8">
        <div className="mb-4 flex flex-col justify-between border-b pb-4">
          <div className="mb-4 flex flex-col items-start justify-between md:mb-0 md:flex-row md:items-center">
            <h1 className="mb-4 text-3xl font-bold">{resource.title}</h1>

            <div className="flex gap-2">
              {resource.field_difficulty.map((d) => (
                <Badge variant="secondary" key={d}>
                  {capitalise(d)}
                </Badge>
              ))}
            </div>
          </div>
          <p className="">{resource.field_subtitle}</p>

          {/* <Badge variant="secondary">{resource.field_difficulty.map((d)=> d.charAt(0).toUpperCase() + d.slice(1)).join(" / ")}</Badge> */}
        </div>

        <div className="mb-4 flex flex-wrap">
          <div className="w-full">
            <p className="mb-2 text-lg">{resource.field_short_description}</p>
            {/* <p className="text-gray-600">{course.duration}</p>
          <p className="text-gray-600">{course.level}</p>
          <p className="text-gray-600">{course.instructor}</p> */}

            <div className="pb-4">
              <RegisterButton />
            </div>
            {poster && (
              <Image src={poster} alt="poster" width={700} height={700} />
            )}
          </div>
        </div>
        {audience && (
          <div className="flex flex-col gap-4">
            <div className={poster ? 'mt-8' : ''}>
              <h2 className="mb-4 text-2xl font-bold">Target Audience</h2>
              <div
                className="course-target-audience"
                dangerouslySetInnerHTML={{
                  __html: audience,
                }}
              />
            </div>
            { (price || tools || requirements) && <div className="lg:w-2/3">
              <CourseSidebar >
                <h3 className="mb-4 text-2xl font-semibold">Overview Info</h3>
                <ul className="space-y-4">
                  <li className="flex flex-row gap-4">
                    <span className="font-semibold">Price: </span>
                    {price}
                  </li>
                  {tools && <li className="flex gap-4">
                    <span className="font-semibold">Tools:</span>
                    {tools}
                  </li>}
                  {requirements && <li className="flex gap-4">
                    <span className="font-semibold"> Requirements: </span>
                    {requirements}
                  </li>}
                </ul>
              </CourseSidebar>
            </div>}
          </div>
        )}

        {body && (
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Description</h2>
            <div
              className="prose mt-6 leading-loose"
              dangerouslySetInnerHTML={{
                __html: body,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CoursePage;
