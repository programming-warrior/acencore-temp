import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <>
      <div className="md:w-[180%] lg:w-full w-[105vw]  h-[568px] bg-[#000000] flex flex-col px-[120px] py-[100px]  ">
        <div className="w-[800px] h-[96px]   mx-auto px-2 ">
          <h1 className="text-[40px] font-bold leading-[120%] text-center text-[#FFFFFF] ">
            Get early access to <span className="textgradient">milestone</span>.
            close your books faster and grow.
          </h1>
        </div>

        <div className="mt-[60px] w-[373px] h-[90px]  bg-gradient-to-r from-[#22B4F8] to-[#EDF3C2]    rounded-full mx-auto ">
          <div className="  w-[369px] h-[86px] ml-[2px] mt-[2px]   bg-black  buttonGradientClass rounded-full py-[20px] px-[53px]    flex justify-center items-center gap-[15px] ">
            <h1 className="font-medium text-[40px]  leading-[120%] text-[white] textgradient">
              Get Started
            </h1>

            <Image
              src="/rightSideIcon.svg"
              width={15}
              height={25}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="w-[1200px] h-[56px] mt-[60px] flex items-center gap-[24px]  mx-auto ">
          <div className="w-[385.6px] h-[57.6px] rounded-[100px]  custom-gradient">
            <div className="p-[12px]    ml-[1px] mt-[1px]   w-[384px] h-[56px] rounded-[100px] flex justify-center items-center gap-[12px] ">
              <Image
                src="/checkbookButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
              />
              <h1 className="w-[185px] h-[32px] text-[20px] text-[#ffffff]">
                No Learning Curve
              </h1>
            </div>
          </div>

          <div className="p-[12px]   custom-gradient  w-[384px] h-[56px] rounded-[100px] flex justify-center items-center gap-[12px] ">
            <Image
              src="/checkbookButton.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <h1 className="w-[270px]   h-[32px] text-[20px] text-[#ffffff]">
              Control in Natural Language
            </h1>
          </div>
          {/* <div className="w-[384.5px] h-[56.5px] rounded-[100px]  bg-gradient-to-tr from-[#0077C2]/40 to-[#4470E2]/15 px-[1.1px] py-[0.7px]">
            <div className="bg-[#02090D] flex items-center justify-center  w-full h-full rounded-[100px] gap-[12px]">
              <Image
                src="/checkbookButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
              />
              <h1 className="w-[270px]   h-[32px] text-[20px] text-[#ffffff]">
                Control in Natural Language
              </h1>
            </div>
          </div> */}

          {/* <div className="w-[384px] h-[56px] rounded-[100px] bg-gradient-to-tr from-[#0077C2]/40 to-[#4470E2]/15 p-[1px]">
            <div className="bg-[#02090D] w-full h-full rounded-[100px] ">
              <div className="bg-gradient-to-br from-[#0077C2]/10 to-[#70757A]/10 w-full h-full rounded-[100px] flex items-center justify-center gap-[khud se value add karedana jaise design me ho]">
              <Image
                src="/checkbookButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
              />
              <h1 className="w-[270px]   h-[32px] text-[20px] text-[#ffffff]">
                Control in Natural Language
              </h1></div>
            </div>
          </div> */}
          {/* <div className="w-[384px] h-[56px] rounded-[100px] bg-gradient-to-tr from-[#0077C2]/40 to-[#4470E2]/15 px-[1px] py-[1.7px]">
      <div className="bg-[#02090D] w-full h-full rounded-[100px] ">
        <div className="bg-gradient-to-br from-[#0077C2]/15 to-[#70757A]/15 w-full h-full rounded-[100px] flex items-center justify-center gap-[12px]">
        <Image
                src="/checkbookButton.svg"
                width={32}
                height={32}
                alt="Picture of the author"
              />
              <h1 className="w-[270px]   h-[32px] text-[20px] text-[#ffffff]">
                Control in Natural Language
              </h1></div>
      </div>
    </div> */}

          
          <div className="p-[12px] custom-gradient w-[384px] h-[56px] rounded-[100px] flex justify-center items-center gap-[12px] ">
            <Image
              src="/checkbookButton.svg"
              width={32}
              height={32}
              alt="Picture of the author"
            />
            <h1 className="w-[205px]  h-[32px] text-[20px] text-[#ffffff]">
              Automate your Hiring
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
