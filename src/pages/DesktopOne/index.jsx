import React from "react";

import { Img, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-blue_gray-800 font-montserrat h-[1024px] mx-auto p-[170px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto max-w-[944px] p-12 md:px-5 rounded-[25px] w-full">
          <div className="flex flex-col md:gap-10 gap-[69px] items-center justify-start mb-3.5 mt-1.5 w-1/2 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="mb-[3px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtMontserratRomanBold28"
                >
                  PRECIPITATION
                </Text>
                <Text
                  className="mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                  size="txtMontserratRomanMedium28"
                >
                  0%
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                <Text
                  className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtMontserratRomanBold28"
                >
                  HUMIDITY
                </Text>
                <Text
                  className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                  size="txtMontserratRomanMedium28"
                >
                  42%
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[13px] w-full">
                <Text
                  className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                  size="txtMontserratRomanBold28"
                >
                  WIND
                </Text>
                <Text
                  className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-right text-white-A700"
                  size="txtMontserratRomanMedium28"
                >
                  3 km/h
                </Text>
              </div>
              <div className="h-[168px] md:h-[243px] mt-[76px] relative w-full">
                <div className="absolute bg-blue_gray-900_fc flex flex-row gap-px h-max inset-[0] items-center justify-center m-auto md:px-10 sm:px-5 px-[102px] rounded-[12px] w-full">
                  <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-3 rounded-[10px] shadow-bs w-[49%]">
                    <Img
                      className="h-[54px] w-[54px]"
                      src="images/img_bicloudsun.svg"
                      alt="bicloudsun"
                    />
                    <Text
                      className="mt-[17px] text-center text-white-A700 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Wed
                    </Text>
                    <Text
                      className="mb-1.5 mt-[13px] text-center text-white-A700 text-xl"
                      size="txtMontserratRomanBold20"
                    >
                      22 °C
                    </Text>
                  </div>
                  <div className="bg-blue_gray-900_01 flex flex-col gap-[15px] items-center justify-start p-3.5 rounded-[10px] shadow-bs w-[49%]">
                    <Img
                      className="h-[54px] w-[54px]"
                      src="images/img_bicloudrain.svg"
                      alt="bicloudrain"
                    />
                    <Text
                      className="text-center text-white-A700 text-xl"
                      size="txtMontserratRomanRegular20"
                    >
                      Thu
                    </Text>
                    <Text
                      className="mb-1 text-center text-white-A700 text-xl"
                      size="txtMontserratRomanBold20"
                    >
                      06 °C
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col gap-3.5 h-full inset-y-[0] items-center justify-start left-[0] my-auto p-[15px] rounded-[10px] shadow-bs w-1/4">
                  <Img
                    className="h-[55px] w-[55px]"
                    src="images/img_outlinegeneralsun.svg"
                    alt="outlinegenerals"
                  />
                  <Text
                    className="text-black-900 text-center text-xl"
                    size="txtMontserratRomanRegular20Black900"
                  >
                    Tue
                  </Text>
                  <Text
                    className="mb-1 text-black-900 text-right text-xl"
                    size="txtMontserratRomanBold20Black900"
                  >
                    30 °C
                  </Text>
                </div>
                <div className="absolute bg-blue_gray-900_01 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-3.5 right-[0] rounded-[10px] shadow-bs w-1/4">
                  <Img
                    className="h-[54px] w-[54px]"
                    src="images/img_brightness.svg"
                    alt="brightness"
                  />
                  <Text
                    className="mt-4 text-center text-white-A700 text-xl"
                    size="txtMontserratRomanRegular20"
                  >
                    Fry
                  </Text>
                  <Text
                    className="mb-[3px] mt-2.5 text-center text-white-A700 text-xl"
                    size="txtMontserratRomanBold20"
                  >
                    26 °C
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex flex-col items-center justify-end p-[9px] rounded-[10px] w-full">
              <Img
                className="h-[33px] mt-0.5 w-[33px]"
                src="images/img_linkedin.svg"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[666px] inset-y-[0] left-[14%] my-auto w-[35%] sm:w-full">
          <Img
            className="h-[666px] m-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle2.png"
            alt="rectangleTwo"
          />
          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[6%] my-auto w-[34%]">
            <Text
              className="sm:text-[33px] md:text-[35px] text-[37px] text-white-A700"
              size="txtMontserratRomanBold37"
            >
              Tuesday
            </Text>
            <Text
              className="mt-1 text-[22px] sm:text-lg text-white-A700 md:text-xl"
              size="txtMontserratRomanMedium22"
            >
              20 Jun 2022
            </Text>
            <div className="flex flex-row gap-2 items-start justify-start mt-[19px] w-[91%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_linkedin.svg"
                alt="linkedin_One"
              />
              <Text
                className="mt-[3px] text-white-A700 text-xl"
                size="txtMontserratRomanSemiBold20"
              >
                Biarritz, FR
              </Text>
            </div>
            <Img
              className="h-[95px] mt-[198px] w-[95px]"
              src="images/img_outlinegeneralsun_white_a700.svg"
              alt="outlinegenerals_One"
            />
            <Text
              className="mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtMontserratRomanBold50"
            >
              29 °C
            </Text>
            <Text
              className="mt-[15px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtMontserratRomanBold30"
            >
              Sunny
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
