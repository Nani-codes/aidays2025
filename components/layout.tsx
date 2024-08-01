import Link from "next/link";

import { PreviewAlert } from "./preview-alert";
import React from "react";
import FooterSection from "./shared/footer";
import HeaderSection from "./shared/header";
import Navbar from "./shared/navbar";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="flex min-h-screen flex-col justify-between">
        <header className="sticky top-0 z-50 w-full shrink-0 bg-white">
          <Navbar />
        </header>
        <main className="grow">{children}</main>
        <FooterSection />
      </div>
    </>
  );
}
