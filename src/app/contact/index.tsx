import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactFormSection from "./ContactFormSection";
import FAQSection from "./FAQSection";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white-a700">
      <Header />
      <ContactFormSection />
      <div className="container-xs self-center">
        <FAQSection />
      </div>
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}

