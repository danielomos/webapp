import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const NoStationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[58px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start m-auto w-full">
            <div className="flex flex-col gap-[52px] items-center justify-start w-full">
              <div className="flex flex-col gap-[58px] items-center justify-start w-full">
                <Header2 className="flex gap-[304px] items-center justify-center py-20 w-full" />
                <Img
                  className="h-[37px] w-[1920px]"
                  src="images/img_group42981.svg"
                  alt="group42981"
                />
              </div>
              <div className="flex flex-col font-nunito items-center justify-center max-w-[845px] w-full">
                <div className="flex flex-col gap-[33px] items-center justify-start max-w-[845px] w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="md:text-5xl text-[75px] text-center text-gray-900_01"
                      size="txtNunitoExtraBold75"
                    >
                      So Sorry
                    </Text>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-center rounded-[50px] w-auto md:w-full">
                    <div className="flex flex-col gap-[41px] items-center justify-start max-w-[781px] w-full">
                      <div className="flex flex-col gap-[25px] items-center justify-center max-w-[764px] w-full">
                        <Text
                          className="leading-[110.00%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900_01"
                          size="txtNunitoExtraBold50"
                        >
                          <>
                            We Are Yet To Deliver to/Cover
                            <br /> Your Area
                          </>
                        </Text>
                        <Text
                          className="leading-[157.40%] max-w-[621px] md:max-w-full text-[22px] text-center text-gray-600 sm:text-lg md:text-xl"
                          size="txtNunitoRegular22"
                        >
                          Stay updated! we want to inform you when we available
                          in your area
                        </Text>
                      </div>
                      <div className="flex flex-col gap-10 items-center justify-start w-[600px] md:w-full">
                        <Input
                          name="button"
                          placeholder="Enter Your name"
                          className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                          wrapClassName="border border-blue_gray-100 border-solid w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Input
                          name="button_One"
                          placeholder="Enter Your email Address"
                          className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                          wrapClassName="border border-blue_gray-100 border-solid w-full"
                          type="email"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Input
                          name="button_Two"
                          placeholder="Enter Your Phone number"
                          className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                          wrapClassName="border border-blue_gray-100 border-solid w-full"
                          type="number"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[238px] text-center text-lg"
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          Submit Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[809px] inset-x-[0] mx-auto object-cover top-[0] w-[1918px]"
            src="images/img_banner.png"
            alt="banner"
          />
        </div>
        <Footer className="flex font-nunito gap-[51px] items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default NoStationPage;
