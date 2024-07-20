import React from "react";


const QuestionGeneration = () => {
  return (
    <div className="flex flex-col w-[700px] box-border p-[40px] gap-6 rounded-[20px] linear-gradient-top">
      <div className="flex flex-col gap-3 justify-center items-center box-border">
        <p className="animation2" >Suggested Questions</p>
        <div className="justify-center items-center flex gap-3">
          <div className="border text-xs font-medium border-solid border-white/50 flex items-center justify-center button1 w-[39px] h-[26px] py-1 px-3 rounded-2xl bg-black text-white">All</div>
          <div className="w-[90px] flex justify-center items-center py-1 gap-[6px] rounded-2xl border border-solid border-white/50 button2">
                 <div className="w-[14px] rounded-full h-[14px] bg-[#0077C2]"></div>
            <p className="text-xs font-medium">Soft skills</p>
          </div>
          <div className="w-[90px] flex justify-center items-center py-1 gap-[6px] rounded-2xl border border-solid border-white/50 button3">
                 <div className="w-[14px] rounded-full h-[14px] bg-[#16C098]"></div>
            <p className="text-xs font-medium">Behavioral</p>
          </div>
          <div className="w-[90px] flex justify-center items-center  py-1 gap-[6px] rounded-2xl border border-solid border-white/50 button4">
                 <div className="w-[14px] rounded-full h-[14px] bg-[#EB5757]"></div>
            <p className="text-xs font-medium">Technical</p>
          </div>
          <div className="w-[90px] flex justify-center items-center py-1 gap-[6px] rounded-2xl border border-solid border-white/50 button5">
                 <div className="w-[14px] rounded-full h-[14px] bg-[#9851E0]"></div>
            <p className="text-xs font-medium">Others</p>
          </div>
        </div>
      </div>
      <div className="box-border flex flex-col p-6 gap-3 rounded-[20px] linear-gradient-top animation3">
        <div className="flex gap-[6px] flex-col">
          <p className="text-white text-[10px] font-medium text-left plainblue-gradient-text ">Orion</p>
          <img className="w-[140px]" src="/images/Greenline.svg" alt="" />
        </div>
        <div className="text-[15px] font-medium text-left">
        Can you provide an example of a challenging situation you faced at
          work and how you handled it?
        </div>
        <div className="flex justify-between">
          <div className=" flex justify-center button6 items-center p-1 gap-[6px] rounded-[16px] border border-solid border-white/50">
          <div className="w-[14px] rounded-full h-[14px] bg-[#0077C2]"></div>
            <p className="text-xs font-medium ">Soft skills</p>
        
          </div>
          <img src="/images/RedCross.svg" alt=""/>
        </div>
      </div>
      <div className="box-border flex flex-col p-6 gap-3 rounded-[20px] linear-gradient-top animation4">
        <div className="flex gap-[6px] flex-col">
          <p className="text-white text-[10px] font-medium text-left plainblue-gradient-text ">Orion</p>
          <img className="w-[140px]" src="/images/Greenline.svg" alt="" />
        </div>
        <div className="text-[15px] font-medium text-left">
        How do you prioritize tasks and manage your time effectively?
        </div>
        <div className="flex justify-between">
          <div className=" flex justify-center items-center p-1 gap-[6px] rounded-[16px] border border-solid border-white/50 button7 ">
          <div className="w-[14px] rounded-full h-[14px] bg-[#EB5757]"></div>
            <p className="text-xs font-medium  ">Technical</p>
        
          </div>
          <img src="/images/RedCross.svg" alt=""/>
        </div>
      </div>



    </div>
  );
};

export default QuestionGeneration;
