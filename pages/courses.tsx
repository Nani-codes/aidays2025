import { Layout } from "components/layout";
import CourseDetails from "components/templates/workshops/CourseDetails";
import { masterClass } from "data/courses";
import getCourses, { Course } from "data/drupal/node--courses";
import React from "react";

type CoursesArgs = {
  courses: Course[];
};

type StaticProps = {
  props: CoursesArgs;
};

export default function Courses(props: CoursesArgs) {
  const workshops = props.courses.filter((c) => c.field_type !== null);
  const transformedWorkshops = workshops.map((c) => {
    return {
      title: c.title,
      description: c["field_short_description"],
      difficulty: c["field_difficulty"],
      subTitle: c["field_subtitle"],
    };
  });
  return (
    <Layout>
      <h1></h1>
      {/* {workshops.map((workshop) => (
        <CourseDetails {...workshop} />
      ))} */}
      <CourseDetails {...masterClass} />
    </Layout>
  );
}

export async function getStaticProps(context): Promise<StaticProps> {
  const [courses] = await Promise.all([getCourses(context)]);
  return {
    props: {
      courses,
    },
  };
}
