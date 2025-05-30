import React, { Suspense } from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Advanced Health Services - Xeventy2.0 Health",
  description: "Discovered Xeventy2.0 Health's EMR & EHR solutions for streamlined clinical workfolws, enhanced patient data management, and integrated healthcare technology.",
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Page />
    </Suspense>
  );
}

