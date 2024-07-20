"use client";
import React from "react";
import Image from "next/image";
import RightSection from "./RightSection";
import { Tabs } from "./Acertinity/Tabs";

const TalentPool = () => {
  const tabs = [
    {
      id: 1,
      img: "profileCardPhoto.svg",
      name: "Bruce Willis",
      position: "Data Analyst, Google",
      city: "New York",
      title: "Product",
      value: "product",

      jobType1: "Fulltime",
      jobType2: "Hybrid",
      about:
        "A determined and enthusiastic candidate with a deep-seated passion for innovation and resolving challenges. Demonstrated success in achieving objectives by fostering collaboration and employing strategic insight. Committed to ongoing development and advancement in varied professional settings.",

      companyLogo1: "linkedinLogo.svg",
      companyName1: "LinkedIn",
      jobRole1: "Sr. Data Analyst",
      date1: "June’23 to July’24 (1 Year)",

      companyLogo2: "airTable.svg",
      companyName2: " Air Table",
      jobRole2: "Sr. Data Analyst",
      date2: "Sep’22 to June’23 (9 Months)",

      companyLogo3: "microsoft.svg",
      companyName3: "Microsoft",
      jobRole3: "Sr. Data Analyst",
      date3: "June’23 to July’24 (1 Year)",

      // content: <RightSection></RightSection>,
    },
    {
      id: 2,
      img: "profileCardPhoto2.svg",
      name: "Sheldon Junior ",
      position: "Data Analyst, LinkedIn",
      city: "New York",
      title: "Services",
      value: "services",

      jobType1: "Fulltime",
      jobType2: "Hybrid",
      about:
        "A determined and enthusiastic candidate with a deep-seated passion for innovation and resolving challenges. Demonstrated success in achieving objectives by fostering collaboration and employing strategic insight. Committed to ongoing development and advancement in varied professional settings.",

      companyLogo1: "linkedinLogo.svg",
      companyName1: "LinkedIn",
      jobRole1: "Sr. Data Analyst",
      date1: "June’23 to July’24 (1 Year)",

      companyLogo2: "airTable.svg",
      companyName2: " Air Table",
      jobRole2: "Sr. Data Analyst",
      date2: "Sep’22 to June’23 (9 Months)",

      companyLogo3: "microsoft.svg",
      companyName3: "Microsoft",
      jobRole3: "Sr. Data Analyst",
      date3: "June’23 to July’24 (1 Year)",

      // content: <RightSection></RightSection>,
    },
    {
      id: 3,
      img: "profileCardPhoto3.svg",
      name: "Rob Stark",
      position: "Data Analyst, Salesforce",
      city: "New York",
      title: "Playground",
      value: "playground",

      jobType1: "Fulltime",
      jobType2: "Hybrid",
      about:
        "A determined and enthusiastic candidate with a deep-seated passion for innovation and resolving challenges. Demonstrated success in achieving objectives by fostering collaboration and employing strategic insight. Committed to ongoing development and advancement in varied professional settings.",

      companyLogo1: "linkedinLogo.svg",
      companyName1: "LinkedIn",
      jobRole1: "Sr. Data Analyst",
      date1: "June’23 to July’24 (1 Year)",

      companyLogo2: "airTable.svg",
      companyName2: " Air Table",
      jobRole2: "Sr. Data Analyst",
      date2: "Sep’22 to June’23 (9 Months)",

      companyLogo3: "microsoft.svg",
      companyName3: "Microsoft",
      jobRole3: "Sr. Data Analyst",
      date3: "June’23 to July’24 (1 Year)",

      // content: <RightSection></RightSection>,
    },
    {
      id: 4,
      img: "profileCardPhoto4.svg",
      name: "Arya William",
      position: "Data Analyst, Microsoft",
      city: "New York",
      title: "Content",
      value: "content",

      jobType1: "Fulltime",
      jobType2: "Hybrid",
      about:
        "A determined and enthusiastic candidate with a deep-seated passion for innovation and resolving challenges. Demonstrated success in achieving objectives by fostering collaboration and employing strategic insight. Committed to ongoing development and advancement in varied professional settings.",

      companyLogo1: "linkedinLogo.svg",
      companyName1: "LinkedIn",
      jobRole1: "Sr. Data Analyst",
      date1: "June’23 to July’24 (1 Year)",

      companyLogo2: "airTable.svg",
      companyName2: " Air Table",
      jobRole2: "Sr. Data Analyst",
      date2: "Sep’22 to June’23 (9 Months)",

      companyLogo3: "microsoft.svg",
      companyName3: "Microsoft",
      jobRole3: "Sr. Data Analyst",
      date3: "June’23 to July’24 (1 Year)",

      // content: <RightSection></RightSection>,
    },
  ];
  return (
    <>
    {/* w-[400%] sm:w-[220%]  md:w-[200%] lg:w-[150%] xl:w-full */}
      <div className="h-[920px] md:w-[100%] xl:w-full bg-[#000000]  flex flex-col ">
        <div className="h-[196px]  md:w-[700px] xl:w-[1200px] mx-auto  mt-[100px]   ">
          <div className="xl:w-[1200px] w-[400px]   md:mt-0 mt-[-50px]  md:w-[700px] xl:h-[120px] lg:hidden   ">
            <h1 className="xl:text-[50px]  md:text-[30px] text-2xl font-bold leading-[120%] md:px-[0px] px-[2px] text-white md:text-center ">
              Build Your Talent Pool with Orion 
            </h1>
            <h1 className="xl:text-[50px] md:text-[30px] text-2xl font-bold leading-[120%] text-white text-center md:text-center ">
            for Future Opportunities
            </h1>
          </div>
          <div className="xl:w-[1200px] w-[400px]  md:w-[700px] xl:h-[120px] hidden lg:block   ">
            <h1 className="xl:text-[50px]  md:text-[30px] text-[18.5px] font-bold leading-[120%] text-center text-white md:text-center ">
              Build Your Talent Pool with Orion for Future
            </h1>
            <h1 className="xl:text-[50px] md:text-[30px] text-[18.5px] font-bold leading-[120%] text-white text-center md:text-center ">
             Opportunities
            </h1>
          </div>
          <div className="lg:w-[1200px] lg:h-[60px] mt-[16px]">
            <h1 className="text-[19.5px] leading-[150%] text-center text-[#ffffff] ">
              Harness the power of Orion to store all candidates in your
              company’s talent pools, ready to be matched with future job
              openings. Optimize your recruitment strategy and streamline hiring
              processes with Orion’s robust talent management features.
            </h1>
          </div>
        </div>

        <div className="h-[460px]      w-[1200px] mx-auto mt-[120px]  flex  items-center gap-[24px]  ">
          <div className={`w-[346px]  h-[460px] bg-[#060C10] rounded-[20px]  ${"custom-gradient"} `}>
            <div className="m-[24px]   w-[298px] h-[412px] flex flex-col gap-[12px]  ">
              <Tabs tabs={tabs} />

              {/* <div className="w-[298px] h-[94px] flex gap-[12px] border   rounded-[15px]  justify-center items-center custom-gradient">
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src="profileCardPhoto.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[160px] h-[70px]">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    Bruce Willis
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    Data Analyst, Google
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    New York
                  </h1>
                </div>
              </div>
              <div className="w-[298px] h-[94px] flex gap-[12px] border  rounded-[15px]  justify-center items-center custom-gradient">
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src="profileCardPhoto.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[160px] h-[70px]">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    Bruce Willis
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    Data Analyst, Google
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    New York
                  </h1>
                </div>
              </div>
              <div className="w-[298px] h-[94px] flex gap-[12px] border  rounded-[15px]  justify-center items-center custom-gradient">
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src="profileCardPhoto.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[160px] h-[70px]">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    Bruce Willis
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    Data Analyst, Google
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    New York
                  </h1>
                </div>
              </div>
              <div className="w-[298px] h-[94px] flex gap-[12px] border  rounded-[15px]  justify-center items-center custom-gradient">
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src="profileCardPhoto.svg"
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[160px] h-[70px]">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    Bruce Willis
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    Data Analyst, Google
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    New York
                  </h1>
                </div>
          
          
              </div> */}
            </div>
          </div>

          {/* <RightSection></RightSection> */}
        </div>
      </div>
    </>
  );
};

export default TalentPool;
