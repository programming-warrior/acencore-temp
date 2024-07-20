"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../ProfileCard";
let interval;

const CardStack = ({ items, offset, scaleFactor }) => {
    const CARD_OFFSET = offset || 60;
    const SCALE_FACTOR = scaleFactor || 0.05;
    const [cards, setCards] = useState(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative ">
            {cards && cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute"
                        style={{
                            transformOrigin: "top center",
                      
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, // decrease z-index for the cards that are behind
                        }}
                    >
                        <ProfileCard card_info={card} className={index!=0 ?"translate-x-16 opacity-40":""}/>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CardStack;
