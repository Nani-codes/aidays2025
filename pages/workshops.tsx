import { Layout } from "components/layout";
import SectionHeader from "components/sections/section-header";
import WorkshopCard from "components/templates/workshops/WorkshopCard";
import getCourses, { Course } from "data/drupal/node--courses";
import Head from "next/head";
import Link from "next/link";
import { getTitle } from "utils/meta";


type WorkshopsPageArgs = {
  courses: Course[];
};

type StaticProps = {
  props: WorkshopsPageArgs;
};

function Template({ courses}: WorkshopsPageArgs) {
  return (<>
    <section className="container mb-12 mt-10">
    <SectionHeader
      title="Workshops"
      pretitle="Learn more about leveraging AI in innovative ways"
    />

      <div
        className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {
        courses.map((c) =>
          <Link href={c.path.alias} key={c.title}>
            <WorkshopCard
              title={c.title}
              description={c.field_short_description}
              badge={c.field_difficulty.map((d)=> d.charAt(0).toUpperCase() + d.slice(1)).join("/")}
            />
          </Link>
        )
      }
      </div>

    </section>
  </>)
}

export default function WorkshopsPage({
  courses
}:WorkshopsPageArgs) {
  return (<Layout>
    <Head>
      <title>{getTitle("Workshops")}</title>
    </Head>
    <Template courses={courses} />
  </Layout>)
}

export async function getStaticProps(context) : Promise<StaticProps> {
  const courses = (await getCourses(context)).filter((c) => c.field_type === "workshop")
  return {
    props: {
      courses
    }
  }

}