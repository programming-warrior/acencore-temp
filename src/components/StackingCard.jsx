// src/components/CardStack.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ConversionRateChart from "./ConversionRateChart";
let interval;


const StackingCard = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };
  return (
    <div className="relative p-6 gap-3 w-[334px] rounded-[15px] md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white dark:bg-black w-[334px] p-6  rounded-[15px] shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{ transformOrigin: 'top center' }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className='h-[21px] mb-[6px] flex justify-between'>
            <p>{card.title}</p>
            <p>...</p>
          </div>
          <p className="text-[10px] font-normal text-[#59A5F5]">Nov 24</p>
          <div className="my-3 border border-1 border-solid border-white/50"></div>
          <div className="text-xs text-[#CCCCCC]">
            {card.description}<span className='text-[#59A5F5] ml-2'>see more</span>
          </div>
          <div className="my-3 border border-1 border-solid border-white/50"></div>
          <div className="w-[90px] flex justify-center items-center py-1 gap-[6px] rounded-2xl border border-solid border-white/50 button2">
            <div className="w-[14px] rounded-full h-[14px] bg-[#0077C2]"></div>
            <p className="text-xs font-medium">{card.skill}</p>
          </div>
          <div>
            <ConversionRateChart percentage_value={card.percentage} converted_num="" />
          </div>
          <div className='flex justify-between font-medium'>
            <p className="performance-p text-[#CCCCCC] text-[10px]">Performance</p>
            <p className='text-[#CCCCCC] text-[10px]'>{card.percentage}%</p>
          </div>
          <div className='flex items-center flex-col justify-center gap-3'>
            <p className='text-[#CCCCCC] text-[11px]'>Interviewer feedback</p>
            <div className="flex items-center justify-center">
              <img src="/images/male2.svg" alt="male" />
              <img src="/images/female3.svg" alt="female" className='relative right-2' />
              <img src="/images/female2.svg" alt="female" className='relative right-4' />
              <div className="bg-blue-400 rounded-full px-2 py-1 relative right-6">
                <p>+1</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StackingCard;
