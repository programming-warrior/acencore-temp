"use client"; // Add this line at the top of the file

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../Acertinity/Utils"; // Adjust the path as needed
import Image from "next/image";
import RightSection from "../RightSection";

const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);
  console.log(tabs);
  console.log(propTabs);

  const [showDefault, setShowDefault] = useState(true);

  function handleClick(id) {
    console.log("clicked", id);

    setShowBorder(true);
    setShowDefault(false);

    setCardId(id);

    // setActive({...tabs.find((t) => t.id === id) });
    // moveSelectedTabToTop(tabs.findIndex((t) => t.id === id));
  }

  const [cardId, setCardId] = useState(null);

  const [showBorders, setShowBorder] = useState(false);

  return (
    <>
      <div
        className={cn(
          "relative  bottom-[15px] right-[15px]",

          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              />
            )}

            {showDefault ? (
              <div
                className={`w-[298px]   h-[94px] flex gap-[12px]  hover:cursor-pointer  rounded-[15px]   justify-center items-center ${
                  tab.id == 1 ? "custom-gradient border" : " "
                } `}
                onMouseEnter={() => {
                  handleClick(tab.id);
                }}
              >
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src={`/${tab.img}`}
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[165px] h-[70px] text-start">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    {tab.name}
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    {tab.position}
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    {tab.city}
                  </h1>
                </div>
              </div>
            ) : (
              <div
                className={`w-[298px]   h-[94px] flex gap-[12px]  hover:cursor-pointer  rounded-[15px]   justify-center items-center ${
                  tab.id == cardId ? "custom-gradient border" : " "
                } `}
                onMouseEnter={() => {
                  handleClick(tab.id);
                }}
              >
                <Image
                  className="w-[70px] h-[70px] rounded-full"
                  src={`/${tab.img}`}
                  width={1}
                  height={1}
                  alt="Picture of the author"
                />
                <div className="w-[165px] h-[70px] text-start">
                  <h1 className="font-bold text-[20px] text-[#cccccc] leading-[140%]">
                    {tab.name}
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    {tab.position}
                  </h1>
                  <h1 className="text-[14px] leading-[150%] text-[#cccccc]">
                    {tab.city}
                  </h1>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({ className, tabs, active, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative  w-full h-full md:bottom-[604px] md:left-[360px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0 ", className)}
        >
          <RightSection tab={tab} />
        </motion.div>
      ))}
    </div>
  );
};

export { Tabs, FadeInDiv };
