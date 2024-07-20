import React from "react";

const LiveTranscript = () => {
  return (
   
    <div className="w-[700px] h-[550px] linear-gradient-top relative rounded-[20px]">
    <img className="mr-[6px] absolute left-[37px] top-[86px] female" src="/images/female.svg" alt="female" />
    <span >
        <img className="absolute left-[74px] top-[53px] isolation1 " src="/images/isolation1.svg" alt="voice" />
      </span>
      <span >
      <img className="absolute top-[117px] left-[304px] isolation2" src="/images/isolation2.svg" alt="voice" />
    </span>
    <span>
      <img className="absolute top-[203px] right-[197px]" src="/images/male.svg" alt="male" />
    </span>
    <img className="absolute top-[266px] circle-box left-[429px]" src="/images/circleBox.svg" alt="circleBox"/>
    <span className="w-[240.57px] h-[137px] flex flex-col p-3 gap-3 rounded-xl absolute left-[54px] bottom-[38px] isolation3">
      <img src="/images/isolation3.svg" alt="voice" className="voice-part"  />
      <p className="text-[8.82px] text-left font-semibold isolation-para"> 
        John: In my experience, fostering a collaborative environment and
        listening to different perspectives has been effective in resolving
        conflicts and maintaining team morale.
      </p>
    </span>
    <span>
<img className="absolute right-[136px] top-[151px] orion-star " src="/images/OrionStar.svg" alt="OrionStar"/>
<img className="absolute top-[34px] right-[86px] circle-logo" src="/images/circlelogo.svg" alt="circlelogo"/>

   </span>
    </div>
  );
};

export default LiveTranscript;
