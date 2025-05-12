"use client";

import React from "react";
import { Button, Img, Text, CheckBox, TextArea, Input, Heading } from "../../components";
import Link from "next/link";

export default function ContactFormSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-xs mx-auto px-6">
        <div className="max-w-4xl border border-thin mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <Heading className="text-3xl font-bold mb-4 text-center text-gray-900">
            We'd love to help
          </Heading>
          <Text className="text-center text-lg !text-gray-700 mb-8">
            Reach out and we'll get in touch within 24 hours.
          </Text>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  shape="round"
                  className="mt-1 w-full rounded-lg border border-gray-300 transition-colors hover:border-green-500 hover:bg-green-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  shape="round"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                shape="round"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700">
                  Team size
                </label>
                <Input
                  id="teamSize"
                  name="teamSize"
                  placeholder="e.g. 5"
                  shape="round"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  placeholder="City, Country"
                  shape="round"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="messageinput" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <TextArea
                id="messageinput"
                name="messageinput"
                placeholder="Your message..."
                shape="round"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 h-32 transition-colors hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center">
              <CheckBox
                id="checkbox"
                name="checkbox"
                label="You agree to our friendly"
                className="text-gray-600"
              />
              <Link href="/landing" target="_blank" rel="noreferrer">
                <Text className="ml-2 text-sm !text-indigo-600 underline">
                  privacy policy
                </Text>
              </Link>
            </div>
            <div className="text-right">
              <Button
                type="submit"
                size="xl"
                shape="round"
                rightIcon={
                  <Img
                    src="img_send_airplane_icon.svg"
                    width={30}
                    height={30}
                    alt="Send airplane icon"
                    className="h-[30px] w-[30px] object-contain"
                  />
                }
                className="bg-blue-a700_5b rounded-lg px-8 py-3 font-medium"
              >
                Send message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

