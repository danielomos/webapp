import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

import { handleSectionNavigation } from "utils";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[71px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <header
          className="bg-cover bg-no-repeat flex h-[233px] md:h-auto items-center justify-center md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_banner_gray_300.png')" }}
        >
          <Header className="flex gap-[304px] items-center justify-center w-full" />
        </header>
        <div className="flex md:flex-col flex-row font-nunito md:gap-10 gap-[101px] items-center justify-start max-w-[1721px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[36%] md:w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-[615px] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto md:w-full">
                <Text
                  className="leading-[110.00%] md:text-5xl text-[75px] text-gray-900_01"
                  size="txtNunitoExtraBold75"
                >
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    Gas prices{" "}
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-normal">
                    <>
                      in your
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    neighborhood{" "}
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-normal">
                    <>
                      in
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    <>
                      less than a <br />
                      minute
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-[600px] md:w-full">
                  <Input
                    name="searchaddressa"
                    placeholder="Enter Your address"
                    className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[235px] text-center text-lg"
                    onClick={() =>
                      navigate("/integration", {
                        state: { address: "10,ikosi road, lagos" },
                      })
                    }
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  >
                    Search Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[551px] sm:h-auto object-cover rounded-[15px] w-[1010px] md:w-full"
            src="images/img_image2.png"
            alt="imagetwo"
          />
        </div>
        <div
          className="flex flex-col font-kumbhsans gap-[46px] h-[765px] md:h-auto items-center justify-start max-w-[1324px] mx-auto md:px-5 w-full"
          id="block2"
        >
          <div className="h-20 relative w-[639px] md:w-full">
            <div className="absolute bg-white-A700 h-14 inset-x-[0] mx-auto top-[6%] w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto md:text-5xl text-[64px] text-blue_gray-800 text-center tracking-[-0.64px] w-max"
              size="txtKumbhSansExtraBold64"
            >
              Our Story
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[47px] items-center justify-center max-w-[1323px] w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start w-[388px] sm:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    Who we are?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Placing an order for a gas refill should not be a challenge.
                    Provide your location, choose a gas station and select your
                    preferred payment option.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-gray-900_01 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18">Learn More</Text>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded-[40px] w-[35%] md:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start my-[198px] w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    What we do?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Don’t make the trip to the gas station and back just to get
                    a refill. We will take care of pick-up and delivery so you
                    can do more with your time.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-deep_purple-A400 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18DeeppurpleA400">Learn More</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    What we see?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Worried that your gas refill won’t last long? Use our smart
                    meter to monitor your gas usage. We’ll be right there before
                    you pause your adventure.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-gray-900_01 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18">Learn More</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex font-nunito items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-[51px] items-center justify-center w-[96%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[154px] items-center justify-start max-w-[1424px] w-full">
              <Line className="bg-gray-300 h-px w-[99%]" />
              <div
                className="common-pointer flex md:flex-col flex-row gap-[58px] items-center justify-center max-w-[1424px] w-full"
                id="block1"
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
              >
                <div className="flex flex-col gap-9 items-start justify-start w-[366px]">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-[366px]">
                    <div className="flex flex-row font-poppins gap-[7px] items-center justify-start w-[61%] md:w-full">
                      <Img
                        className="h-[63px] md:h-auto object-cover w-[63px]"
                        src="images/img_icon11.png"
                        alt="iconelevenone"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-600 sm:text-xl"
                        size="txtPoppinsExtraBold24"
                      >
                        <span className="text-gray-900 font-poppins text-left font-extrabold">
                          Revo{" "}
                        </span>
                        <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                          Energy
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="leading-[157.40%] text-[22px] text-gray-600 sm:text-lg md:text-xl"
                      size="txtNunitoRegular22"
                    >
                      <>
                        It is a long established fact that from
                        <br />
                        will be distracted by the readable <br />
                        from when looking.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-[293px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-row gap-[17px] items-end justify-start w-[87%] md:w-full">
                          <Img
                            className="h-[22px] my-1 w-[22px]"
                            src="images/img_mail.svg"
                            alt="mail"
                          />
                          <Text
                            className="text-[22px] text-gray-600 sm:text-lg md:text-xl"
                            size="txtNunitoRegular22"
                          >
                            help@revoenergy.live
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[39px] mt-0.5 text-[22px] text-gray-600 sm:text-lg md:text-xl"
                          size="txtNunitoRegular22"
                        >
                          conatact@revoenergy.live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[22px] mt-[7px] w-[22px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-[22px] text-gray-600 sm:text-lg md:text-xl"
                        size="txtNunitoRegular22"
                      >
                        +2347046339841
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-[416px] sm:w-full">
                  <div className="flex flex-col items-center justify-center w-[397px] sm:w-full">
                    <Text
                      className="capitalize text-deep_purple-A400 text-lg w-auto"
                      size="txtNunitoBold18DeeppurpleA400"
                    >
                      Download
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center w-[416px] sm:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[200px]"
                      leftIcon={
                        <Img
                          className="mb-[3px] mr-[9px]"
                          src="images/img_apple_logo.svg"
                          alt="Apple Logo"
                        />
                      }
                      shape="round"
                      color="deep_orange_600"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-bold leading-[normal] text-left text-lg">
                        App Store
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[200px]"
                      leftIcon={
                        <div className="mt-[3px] mb-1.5 mr-2 bg-gray-900_01">
                          <Img src="images/img_location.svg" alt="location" />
                        </div>
                      }
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="outline"
                    >
                      <div className="font-bold leading-[normal] text-left text-lg">
                        Play Store
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 flex sm:flex-1 flex-col items-center justify-start sm:px-5 px-[37px] py-[65px] rounded-[50px] w-[526px] sm:w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-[500px] sm:w-full">
                    <Text
                      className="leading-[157.40%] max-w-[397px] md:max-w-full text-[22px] text-center text-gray-900_01 sm:text-lg md:text-xl"
                      size="txtNunitoExtraBold22"
                    >
                      Keep up wth safety/cooking tips gist from us
                    </Text>
                    <Input
                      name="button"
                      placeholder="Enter Your Password"
                      className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      type="password"
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
            <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1401px] w-full">
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex sm:flex-col flex-row md:gap-10 gap-[582px] items-center justify-start max-w-[1401px] w-full">
                <Text
                  className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                  size="txtNunitoRegular22"
                >
                  Copyright © RevoEnergy Africa
                </Text>
                <div className="flex flex-row gap-[25px] items-center justify-end w-[138px]">
                  <Img
                    className="h-[21px] w-3"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-[21px] w-[18px]"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-[21px] w-4"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Img
                    className="h-[22px] w-[17px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepagePage;
