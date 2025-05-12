import React, { Suspense } from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Xeventy2.0 Health Blog - Insights on Sustainab;e Healthcare",
  description: "Explore our trending articles and other key topics. Stay informed with Xeventy2.0 Health's expert insights into sustainable healthcare practices.",
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Page />;
    </Suspense>
  );
}

