import React from "react";
import InnerFillPieChart from "../InnerFillPieChart";
import StackingCard from "../StackingCard";

const PerformanceNotes = () => {
  const cardData = [
    {
      id: 1,
      title: "#01 Notes on Soft Skills",
      description: "Sheldon Junior excels in Java, ensuring efficient task execution and contributing efficiently....",
      skill: "Soft skills",
      percentage: 83
    },
    {
      id: 2,
      title: "#02 Notes on Technical Skills",
      description: "Sheldon Junior demonstrates advanced proficiency in backend systems, leveraging his expertise to tackle complex challenges and drive innovation.",
      skill: "Technical",
      percentage: 90
    },
    {
      id: 3,
      title: "#03 Notes on Communication",
      description: "Sheldon Junior's positive attitude fosters a collaborative environment, inspiring team m..",
      skill: "Commun",
      percentage: 88
    },

  ];
   


  return (
    <div className="flex flex-col gap-9 w-[700px] px-[48px] py-[46px] box-border h-[550px] linear-gradient-top rounded-[20px]">
      
      <div className="h-[61px] flex justify-between items-center">
        <div className="flex gap-3">
          <img src="/images/sheldon.svg" alt="sheldon" />
          <div className="flex flex-col justify-between">
            <div className="flex gap-[10px] items-center">
              <p className="text-xl font-bold">Sheldon Junior</p>
              <div className="blue-gradient text-black w-[62px] h-[15px] flex items-center justify-center rounded-[30px]">
                <p className="font-medium text-[8px] px-1">Open to work</p>
              </div>
            </div>
            <div className="flex gap-[10px] text-[#CCCCCC]">
              <p>FullTime</p>
              <p>Hybrid</p>
              <p>New York, USA</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold blue-gradient-text">Orion Score</p>
          <div className="w-[60px]">
            <InnerFillPieChart
              percentage_value={91}
              change=""
              gradient_color={[
                "#22B4F8", 
                "#28B6F6", 
                "#41BEF0", 
                "#56C4EA", 
                "#6ECCE4", 
                "#92D7DA",
                "#AFE0D2", 
                "#D3EBC9", 
                "#EDF3C2"  
              ]}
            />
          </div>
        </div>
      </div>

      {/* CardStack Component */}
      <div className="mt-6 flex items-center justify-center"> 
        <StackingCard items={cardData} offset={10} scaleFactor={0.06} />
      </div>
   
    </div>
  );
};

export default PerformanceNotes;
