// components/AnimatedSubscribeButton.js
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedSubscribeButton = ({
  buttonColor,
  buttonTextColor,
  subscribeStatus,
  initialText,
  changeText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(subscribeStatus);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[280px]   rounded-[75px] mt-4   items-center justify-center overflow-hidden  bg-white p-[9px] outline outline-1 outline-black"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full mt-[2px]  rounded-[75px] w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[280px] mt-4  rounded-[75px] cursor-pointer items-center justify-center  border-none p-[10px]"
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block  rounded-[75px] font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AnimatedSubscribeButton;
