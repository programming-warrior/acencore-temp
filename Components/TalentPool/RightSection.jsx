import { PieChart } from "lucide-react";
import Image from "next/image";
import React from "react";
// import InnerFillPieChart from "../PieChart";

const RightSection = ({ tab }) => {
  console.log(tab);
  return (
    <div className="w-[830px] flex     h-[460px] border border-[#003658]  bg-black custom-gradien rounded-[20px]  ">
      <div className="w-[782px]  h-[412px] m-[24px] bg-red flex flex-col gap-[30px] ">
        <div className="w-[782px]  h-[85px]  ">
          <div className="w-[782px] h-[61px] flex gap-[200px] items-center  ">
            <div className="w-[354.38px] h-[61px]">
              <div className="w-[298px] h-[57px]  flex justify-center items-center gap-[12px] ">
                <Image
                  className="w-[55px] h-[55px]  rounded-[100px] "
                  src={`/${tab.img}`}
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[231px] h-[56px]   flex flex-col  items-center ">
                  <div className="w-[231px] h-[56px] flex  items-center gap-[11px]">
                    <h1 className="text-[20px] leading-[140%] font-bold text-[#f5f5f5]">
                      {tab.name}{" "}
                    </h1>
                    <div className="w-[65px]  h-[15px] rounded-[30px] text-[8px] font-medium leading-[150%] text-[#000000] button-gradient flex justify-center items-center mb-[2px]">
                    Open To Work

                    </div>
                    {/* <Image
                      className="w-[62px] h-[15px] rounded-full"
                      src="/openToWork.svg"
                      width={1}
                      height={1}
                      alt="Picture of the author"
                    /> */}
                  </div>

                  <div className="w-[231px]  h-[21px] flex   items-center gap-[12px] ">
                    <div className="w-[93px] h-[21px] flex justify-center items-center gap-[12px]">
                      <h1 className="w-[50px] h-[21px] text-[14px] leading-[150%] text-[#cccccc]">
                        {tab.jobType1}{" "}
                      </h1>

                      <Image
                        className=" w-[5px] h-[20px]   "
                        // src="profileCardPhoto.svg"
                        src="/verticalLine.svg"
                        width={1}
                        height={1}
                        alt="Picture of the author"
                      />
                    </div>

                    <div className="w-[93px] h-[21px] flex justify-center items-center gap-[12px]">
                      <h1 className="w-[50px] h-[21px] text-[14px] leading-[150%] text-[#cccccc]">
                        {tab.jobType2}{" "}
                      </h1>
                      <Image
                        className=" w-[5px] h-[20px]   "
                        // src="profileCardPhoto.svg"
                        src="/verticalLine.svg"
                        width={1}
                        height={1}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="w-[193px]  h-[21px] flex justify-center items-center gap-[12px]">
                      <h1 className="w-[105px] h-[21px]  text-[14px] leading-[150%] text-[#cccccc]">
                        {tab.city}{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[198px]  h-[60px] flex justify-center items-center gap-[4px] ">
              <h1 className="w-[126px] text-white h-[28px] text-[20px] font-bold leading-[140%] textgradient">
                Orion Score
              </h1>
              <div className="w-[60px] h-[60px]">
                <InnerFillPieChart
                  percentage_value={91}
                  change=""
                   gradient_color = {[
                    "#22B4F8", // 0%
                    "#28B6F6", // 3%
                    "#41BEF0", // 15%
                    "#56C4EA", // 26%
                    "#6ECCE4", // 38%
                    "#92D7DA", // 55%
                    "#AFE0D2", // 70%
                    "#D3EBC9", // 87%
                    "#EDF3C2"  // 100%
                  ]}
                  
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          className=" w-[782px] h-[20px] mt-[-30px]  "
          src="/horizontalLine.svg"
          width={1}
          height={1}
          alt="Picture of the author"
        />

        <div className="w-[782px] h-[99px] flex flex-col gap-[6px]">
          <h1 className="text-[20px] font-bold text-[#f5f5f5] leading-[150%]">
            About
          </h1>
          <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
            {tab.about}
          </h1>
        </div>

        <div className="w-[782px] h-[24px] px-[120px] flex gap-[48px]   items-center">
          <div className="w-[81px] h-[24px] flex  items-center ">
            <Image
              className=" w-[17px] h-[22px]   "
              src="/resume.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
            <h1 className="w-[59px] h-[24px] ml-[6px] text-[16px] font-medium leading-[150%] text-[#cccccc]">
              Resume
            </h1>
            <Image
              className=" w-[5px] h-[20px] ml-6   "
              // src="profileCardPhoto.svg"
              src="/verticalLine.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
          </div>
          <div className="w-[150px] h-[24px] flex  items-center ">
            <Image
              className=" w-[17px] h-[22px]   "
              src="/coverLetter.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
            <h1 className="w-[120px]  h-[24px] ml-[6px] text-[16px] font-medium leading-[150%] text-[#cccccc]">
              Cover Letter
            </h1>
            <Image
              className=" w-[5px] h-[20px] ml-[24px]   "
              // src="profileCardPhoto.svg"
              src="/verticalLine.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
          </div>
          <div className="w-[81px] h-[24px] flex  items-center ml-[-24px]">
            <Image
              className=" w-[17px] h-[22px]   "
              src="/linkedin.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
            <h1 className="w-[59px] h-[24px] ml-[6px] text-[16px] font-medium leading-[150%] text-[#cccccc]">
              LinkedIn
            </h1>
            <Image
              className=" w-[5px] h-[20px] ml-[24px]   "
              // src="profileCardPhoto.svg"
              src="/verticalLine.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
          </div>
          <div className="w-[81px] h-[24px] flex  items-center ">
            <Image
              className=" w-[17px] h-[22px]   "
              src="/links.svg"
              width={1}
              height={1}
              alt="Picture of the author"
            />
            <h1 className="w-[59px] h-[24px] ml-[6px] text-[16px] font-medium leading-[150%] text-[#cccccc]">
              Links
            </h1>
          </div>
        </div>

        <div className="w-[782px] h-[108px] flex flex-col  gap-[12px] ">
          <h1 className="w-[294px] h-[30px] text-[20px] font-medium leading-[150%] text-[#cccccc]">
            Previous Experiences
          </h1>

          <div className="w-[782px] h-[66px] flex items-center gap-[12px] ">
            <div className="w-[252.67px] h-[66px] flex  border  rounded-[15px]  gap-[12px] items-center custom-gradient p-[12px] ">
              <Image
                className=" w-[40px] h-[40px] rounded-full   "
                src={`/${tab.companyLogo1}`}
                // src="/microsoft.svg"
                width={1}
                height={1}
                alt="Picture of the author"
              />

              <div className="w-[159px] h-[42px] flex flex-col justify-center gap-[3px]">
                <div className="w-[199px] h-[24px] flex  items-center gap-[6px] ">
                  <h1 className="text-[16px] font-semibold leading-[150%]  text-[#cccccc]">
                    {tab.companyName1}
                  </h1>
                  <Image
                    className=" w-[5px] h-[20px]    "
                    // src="profileCardPhoto.svg"
                    src="/verticalLine.svg"
                    width={1}
                    height={1}
                    alt="Picture of the author"
                  />
                  <h1 className="text-[12px] w-[180px]  text-[#cccccc] leading-[150%]">
                    {tab.jobRole1}
                  </h1>
                </div>
                <h1 className="text-[12px] italic leading-[150%] text-[#cccccc] ">
                  {tab.date1}
                </h1>
              </div>
            </div>
            <div className="w-[252.67px] h-[66px] flex  border  rounded-[15px]  gap-[12px] items-center custom-gradient p-[12px] ">
              <Image
                className=" w-[40px] h-[40px] rounded-full   "
                src={`/${tab.companyLogo2}`}
                width={1}
                height={1}
                alt="Picture of the author"
              />

              <div className="w-[159px] h-[42px] flex flex-col justify-center gap-[3px]">
                <div className="w-[199px] h-[24px] flex  items-center gap-[4px] ">
                  <h1 className="text-[16px] w-[115px]  font-semibold leading-[150%]  text-[#cccccc]">
                    {tab.companyName2}
                  </h1>
                  <Image
                    className=" w-[5px] h-[20px]    "
                    // src="profileCardPhoto.svg"
                    src="/verticalLine.svg"
                    width={1}
                    height={1}
                    alt="Picture of the author"
                  />
                  <h1 className="text-[12px] w-[180px]  text-[#cccccc] leading-[150%]">
                    {tab.jobRole2}
                  </h1>
                </div>
                <h1 className="text-[12px] italic leading-[150%] text-[#cccccc] ">
                  {tab.date1}
                </h1>
              </div>
            </div>
            <div className="w-[252.67px] h-[66px] flex  border  rounded-[15px]  gap-[12px] items-center custom-gradient p-[12px] ">
              <Image
                className=" w-[40px] h-[40px] rounded-full   "
                src={`/${tab.companyLogo3}`}
                width={1}
                height={1}
                alt="Picture of the author"
              />

              <div className="w-[159px] h-[42px] flex flex-col justify-center gap-[3px]">
                <div className="w-[199px] h-[24px] flex  items-center gap-[6px] ">
                  <h1 className="text-[16px] font-semibold leading-[150%]  text-[#cccccc]">
                    {tab.companyName3}
                  </h1>
                  <Image
                    className=" w-[5px] h-[20px]    "
                    // src="profileCardPhoto.svg"
                    src="/verticalLine.svg"
                    width={1}
                    height={1}
                    alt="Picture of the author"
                  />
                  <h1 className="text-[12px] w-[180px]  text-[#cccccc] leading-[150%]">
                    {tab.jobRole3}
                  </h1>
                </div>
                <h1 className="text-[12px] italic leading-[150%] text-[#cccccc] ">
                  {tab.date3}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
