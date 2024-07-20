"use client";
import Image from "next/image";
import React from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import AnimatedSubscribeButton from "./AnimatedSubscribeButton";

const MainFooter = () => {
  return (
    <>
      <div className="w-full h-[600px] py-[100px] px-[120px] bg-black flex flex-col gap-[36px] footer-gradient  ">
        <Image
          className=" w-full h-[20px] mt-[-30px]  "
          src="/horizontalLine.svg"
          width={1}
          height={1}
          alt="Picture of the author"
        />

        <div className="w-[1200px] h-[270px] mx-auto flex items-center justify-between">
          <div className="w-[486px] h-[270px] flex flex-col   p-[24px] gap-[24px]">
            <div className="w-[146px] h-[29px] flex justify-center items-center  gap-[4px]">
              <Image
                className=" w-[28px] h-[29px]   "
                src="/acencoreLogo.svg"
                width={1}
                height={1}
                alt="Picture of the author"
              />
              <Image
                className=" w-[114px] h-[18px]   "
                src="/acencoreText.svg"
                width={1}
                height={1}
                alt="Picture of the author"
              />
            </div>
            <div className="w-[465px] h-[72px] ">
              <h1 className="text-[16px] leading-[150%] text-[#f5f5f5] text-start">
                Stay up to date on our latest features and releases by joining
                our newsletter. Stay up to date on our latest features and
                releases by joining our newsletter.
              </h1>
            </div>
            <div className="w-[300px] h-[74px] flex flex-col gap-[12px]">
              <div className="w-[296px] h-[21.25px] ">
                <h1 className="w-[92px] h-[21px] text-[14px] font-bold text-[#ffffff] leading-[150%]">
                  Social Media
                </h1>
              </div>
              <div className="flex items-center gap-[12px]">
                <Image
                  className=" w-[40px] h-[40px]   "
                  src="/footerLinkedin.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />

                <Image
                  className=" w-[40px] h-[40px]   "
                  src="/footerTwitter.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />

                <Image
                  className=" w-[40px] h-[40px]   "
                  src="/footerFacebook.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />

                <Image
                  className=" w-[40px] h-[40px]   "
                  src="/footerYoutube.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />

                <Image
                  className=" w-[40px] h-[40px]   "
                  src="/footerInstagram.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>

          <div className="p-[24px] w-[176px] h-[270px]">
            <div className="w-[128px] h-[222px] flex flex-col gap-[12px] ">
              <h1 className="w-[128px] h-[24px] text-[16px] font-semibold leading-[150%] text-[#f5f5f5] ">
                Services
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Skills Hub
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Counselor
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Counselor
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Find Jobs
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Competitions
              </h1>
              <h1 className="w-[128px] h-[24px] text-[16px]  leading-[150%] text-[#f5f5f5] ">
                Competitions
              </h1>
            </div>
          </div>

          <div className=" w-[458px] h-[163px] p-[24px] flex flex-col gap-[16px] text-white">
            <h1 className="w-[245px] h-[23px] text-[14px] font-bold leading-[22px] uppercase">
              Subscribe to our newsletter
            </h1>
            <div className="w-[410px] h-[76px] flex flex-col gap-[12px]">
              <h1 className="w-[345px] h-[23px] text-[15px]  leading-[24px]">
                Stay Updated with the Latest Insights
              </h1>
              <div className="w-[450px]  h-[40px] flex items-center  gap-[12px]   ">
                <div class="bg-white pl-[24px] rounded-[75px]  w-[278px] h-[40px] mt-4 ml-[115px] ">
                  <div class="relative bg-inherit -ml-32   ">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      class="peer rounded-[75px] text-[16px] leading-[150%] text-[#9E9E9E] w-[278px] pl-[24px] h-[40px] absolute right-[1.5px]  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                      placeholder="abc@xyz.com"
                    />
                    <label
                      for="username"
                      class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    >
                      Type inside me
                    </label>
                  </div>
                </div>

                <AnimatedSubscribeButton
                  buttonColor="#0077C2"
                  buttonTextColor="#F5F5F5"
                  subscribeStatus={false}
                  initialText={
                    <span className="group inline-flex items-center">
                      Subscribe{" "}
                      <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  }
                  changeText={
                    <span className="group inline-flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4" />
                      Subscribed{" "}
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <Image
          className=" w-full h-[20px] mt-[30px]  "
          src="/horizontalLine.svg"
          width={1}
          height={1}
          alt="Picture of the author"
        />

        <div className="flex  justify-between items-start w-[1300px] h-[21px]">
          <div className="w-[280px] h-[21px] text-white text-sm leading-[21px]">
            &copy; 2024 Acencore. All Rights Reserved.
          </div>
          <div className="flex flex-row items-start gap-[24px]">
            <a
              href="#"
              className="text-white text-sm leading-[21px] underline w-[97px] h-[21px]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-sm leading-[21px] underline w-[147px] h-[21px]"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="text-white text-sm leading-[21px] underline w-[94px] h-[21px]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
