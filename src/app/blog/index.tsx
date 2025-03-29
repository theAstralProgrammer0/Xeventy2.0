import { Text, Button, Heading } from "../../components";
import InformationSection from "../../components/InformationSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsletterSubscription from "../../components/NewsletterSubscription";
import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <div className="flex w-full flex-col items-center bg-white-a700">
      <Header />
      <div className="container-xs mt-[38px] md:px-5">
        <div>
          <div className="bg-white-a700">
            <div className="mb-[74px] flex px-4">
              <Heading
                size="text17xl"
                className="text-[58px] font-medium md:text-[50px] sm:text-[44px]"
              >
                Our Trending Articles
              </Heading>
            </div>
          </div>
          <div className="flex flex-col">
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <InformationSection
              titleText="Understanding the EU Deforestation Regulation (EUDR)"
              descriptionText="Dive into the key aspects of EUDR and discover how business can comply with this groundbreaking regulation to entire sustainable supply chains..."
              buttonText="Read article"
              imageSrc = "article.png"
            />
            <Button
              color="white_a700"
              className="mx-[506px] flex-1 self-stretch rounded-[32px] border-t border-solid border-black-900_01 px-[33px] font-merriweathersans hover:border-[0.5px] hover:border-sold hover:border-green-a700_a5 hover:shadow-xs"
            >
              Load more articles
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-[76px] self-stretch">
        <NewsletterSubscription />
        <Footer />
      </div>
    </div>
  );
}

