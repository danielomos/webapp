import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header
        className={props.className}
        style={{ backgroundImage: "url('images/defaultNoData.png')" }}
      >
        <header className="flex items-center justify-center mb-20 ml-[262px] mr-[138px] mt-[76px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="header-row my-1.5">
              <div className="flex flex-row gap-[7px] items-center justify-start">
                <Img
                  className="h-[63px] md:h-auto object-cover w-[63px]"
                  src="images/img_icon11.png"
                  alt="iconEleven"
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
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-10 sm:hidden items-center justify-center max-w-[923px] w-full">
              <ul className="bg-gray-50 flex flex-row gap-2.5 sm:hidden items-center justify-center md:px-10 sm:px-5 px-[52px] py-6 rounded-[37px] w-auto common-row-list">
                <li>
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    <span className="text-gray-900_01 font-nunito text-left font-semibold">
                      Home
                    </span>
                    <span className="text-gray-900_01 font-jost text-left font-normal">
                      
                    </span>
                    <span className="text-gray-900_01 font-poppins text-left font-medium">
                      {" "}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    <span className="text-gray-900_01 font-nunito text-left font-semibold">
                      Our Story
                    </span>
                    <span className="text-gray-900_01 font-jost text-left font-normal">
                      
                    </span>
                    <span className="text-gray-900_01 font-poppins text-left font-medium">
                      {" "}
                    </span>
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-gray-900_01 text-lg"
                    size="txtPoppinsMedium18"
                  >
                    <span className="text-gray-900_01 font-nunito text-left font-semibold">
                      Contact
                    </span>
                    <span className="text-gray-900_01 font-jost text-left font-normal">
                      
                    </span>
                    <span className="text-gray-900_01 font-poppins text-left font-medium">
                      {" "}
                    </span>
                  </Text>
                </li>
              </ul>
              <Button
                className="cursor-pointer font-bold font-nunito leading-[normal] min-w-[206px] text-center text-lg"
                shape="round"
                color="deep_orange_600"
                size="xs"
                variant="fill"
              >
                Get Started
              </Button>
            </div>
          </div>
        </header>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
