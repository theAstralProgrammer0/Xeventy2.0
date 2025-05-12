import React, { Suspense } from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "About Xeventy2.0 Health - Transforming Digital Healthcare",
  description: "Discovered Xeventy2.0 Health's mission to brisge professionals and patients with transformative digital health solutions. Learn about our services, teams, and commitment to excellence in healthcare innovation.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Page />;
    </Suspense>
  );
}

