import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { getStationNearby } from "service/api";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const IntegrationPage = () => {
  const [nearData, setNearData] = React.useState();
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { params: { request: location?.state?.address } };

    getStationNearby(req)
      .then((res) => {
        setNearData(res?.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/nostation", {
          state: { searchedAddress: location?.state?.address },
        });
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[62px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <header
          className="bg-cover bg-no-repeat flex flex-col h-[228px] items-center justify-center md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group60.svg')" }}
        >
          <Header className="flex gap-[304px] items-center justify-center mb-[93px] md:ml-[0] ml-[260px] mr-[140px] mt-[60px] w-full" />
        </header>
        <div className="flex flex-col font-kumbhsans items-center justify-center max-w-[754px] md:px-5 w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center tracking-[-0.64px] w-auto"
            size="txtKumbhSansExtraBold64"
          >
            Gas rates in your area:
          </Text>
        </div>
        <div className="flex flex-col font-nunito items-center justify-start max-w-[1400px] mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-[41px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            {nearData?.payload?.map((nearElement, index) => {
              return (
                <React.Fragment key={`nearElement${index}`}>
                  <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start sm:px-5 px-[39px] py-[42px] rounded-[30px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[100px] h-[340px] md:h-auto items-center justify-center w-[361px]">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-[361px]">
                        <div className="bg-white-A700 flex flex-col h-[111px] items-end justify-end p-[19px] rounded-[20px] w-[111px]">
                          <Img
                            className="h-[63px] md:h-auto mt-2 object-cover w-[63px]"
                            alt="iconEleven"
                            src="nearElement?.stationLogoUrl"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-[219px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-auto"
                            size="txtNunitoBold40"
                          >
                            {nearElement?.gasPrice}
                          </Text>
                          <Text
                            className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl w-auto"
                            size="txtNunitoRegular22"
                          >
                            Current Selling Price
                          </Text>
                          <Text
                            className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl w-auto"
                            size="txtNunitoRegular22"
                          >
                            {nearElement?.distance}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[361px]">
                        <Text
                          className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900_01 underline w-auto"
                          size="txtNunitoBold30"
                          onClick={() =>
                            navigate("/stationdetails", {
                              state: { stationId: nearElement?.id },
                            })
                          }
                        >
                          View Station
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <footer className="flex font-nunito items-center justify-center md:px-5 w-full">
          <div className="flex flex-col gap-[51px] items-center justify-center w-[96%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[154px] items-center justify-start max-w-[1424px] w-full">
              <Line className="bg-gray-300 h-px w-[99%]" />
              <div className="flex md:flex-col flex-row gap-[58px] items-center justify-center max-w-[1424px] w-full">
                <div className="flex flex-col gap-9 items-start justify-start w-[366px]">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-[366px]">
                    <div className="flex flex-row font-poppins gap-[7px] items-center justify-start w-[61%] md:w-full">
                      <Img
                        className="h-[63px] md:h-auto object-cover w-[63px]"
                        src="images/img_icon11.png"
                        alt="iconEleven_One"
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

export default IntegrationPage;
