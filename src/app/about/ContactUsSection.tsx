import { Text, Button, Heading } from "../../components";
import React from "react";

export default function ContactUsSection() {
  return (
    <>
      {/* contact us section */}
      <div className="h-[988px] md:h-auto">
        <div className="flex h-[988px] flex-col items-center py-[130px] md:h-auto md:py-5">
          <div className="container-xs md-[198px] flex h-[528px] flex-col items-start gap-[34px] px-1 md:h-auto md:px-5">
            <Heading
              className="ml-4 h-[256px] text-[70px] font-medium !text-colors1 md:ml-0 md:text-[48px]"
            >
              <>
                Have a question?
                <br />
                Our team is happy to assist you
              </>
            </Heading>
            <Text
              size="textlg"
              className="ml-4 h-[98px] text-[21px] font-normal md:ml-0"
            >
              Ask about Xeventy2.0 Health services, pricing implementation, or
              anything else. Our highly trained reps are standing by, ready to
              help.
            </Text>
            <div className="flex h-[102px] ites-end gap-[34px] px-4 md:h-auto">
              <Button
                color="blue_A700_8e"
                className="mt-[50px] min-w-[198px] rounded-[10px] px-[32px] text-colors6 sm:px-5"
              >
                Contact Us
              </Button>
              <Text className="mb-3.5 h-[22px] text-[18px] font-normal">
                Or call +234 105-9064
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

