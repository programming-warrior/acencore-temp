import React from 'react';
import { cn } from "../../utils/cn";
export default function AnimatedGradientText({ children, className }) {
    return  (
        <div
          className={cn(
            "group relative mx-2 flex max-w-fit flex-row bg-transparent px-0 py-0 text-sm font-medium  backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] ",
            className,
          )}
        >
          <div
            className={``}
          />
     
          {children}
        </div>
      );

}