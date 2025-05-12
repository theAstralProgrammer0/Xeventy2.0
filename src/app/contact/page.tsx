import React, { Suspense } from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Get in Touch with Xeventy2.0 Health Limited | Contact us",
  description: "Have questions or need assitance? Contact Xeventy2.0 Health Limited and out team will respond within 24 hours. We're here to help with your digital health solutions.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Page />
    </Suspense>
  );
}

