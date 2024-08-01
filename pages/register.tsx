import React from "react";
import { Layout } from "../components/layout";
import EmbeddedPage from "../components/shared/embedded-page";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Head from "next/head";
import { DrupalNode } from "next-drupal";
import { drupal } from "../lib/drupal";
import { getMetaDescription, getTitle } from "utils/meta";

export default function RegisterPage({ resource }) {
  return (
    <Layout>
      <Head>
        <title>{getTitle("Register")}</title>
        <meta name="description" content={getMetaDescription("register")} />
      </Head>
      <EmbeddedPage
        url="https://konfhub.com/widget/aidays?desc=true"
        title={"Register for AI Days 2024 Conference"}
      />
    </Layout>
  );
}
