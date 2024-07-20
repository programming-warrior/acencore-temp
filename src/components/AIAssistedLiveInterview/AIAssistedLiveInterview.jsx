import React, { useState } from "react";
import LiveTranscript from "../LiveTranscript/LiveTranscript";
import RightNavigation from "../RightNavigation/RightNavigation";
import PerformanceNotes from "../PerformanceNotes/PerformanceNotes";
import QuestionGeneration from "../QuestionGeneration/QuestionGeneration";

const AIAssistedLiveInterview = () => {
  const [selectedSection, setSelectedSection] = useState("liveTranscript");

  return (
    <div className="text-white md:mx-[100px] md:my-[120px] my-9 mx-4">
      <div className="flex flex-col gap-[12px] items-center justify-center text-center mb-[60px]">
        <div className="font-bold md:text-[50px] text-[18px] animation">
          AI Assisted<span className="ai-assisted"> Live Interview</span>
        </div>
        <p className="font-normal md:text-[20px] text-[10px] text-[#CCCCCC] animation">
          83% of candidates are influenced by their interview experience.
          Structure your interactions to attract top-quality talent, improve
          candidate engagement, and ensure a seamless interview experience.
        </p>
      </div>
      <div className="gap-[60px] flex items-center justify-center">
        {selectedSection === "liveTranscript" && <LiveTranscript />}
        {selectedSection === "performanceNotes" && <PerformanceNotes />}
        {selectedSection === "questionGeneration" && <QuestionGeneration />}
        <RightNavigation selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      </div>
    </div>
  );
};

export default AIAssistedLiveInterview;
