import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import AnimatingMessageComponnet from './AnimatingMessageComponent';
import FlowChart from './FlowChart';
import ChatBox from './ChatBox';
import UseIntersectionObserver from './useIntersectionObserver';

function OrionSmartSend() {
    const parentContainer = useRef(null);
    const flowChartContainer = useRef(null);
    const animatingMessageContainer = useRef(null);
    const visible = UseIntersectionObserver(parentContainer, { threshold: 0.5 });
    const flowchart_visible = UseIntersectionObserver(flowChartContainer, { threshold: 0.8 });
    const animating_message_visible = UseIntersectionObserver(animatingMessageContainer, { threshold: 0.5 });

    return (
        <div ref={parentContainer} className=''>
            <div className='mb-[60px]'>
                <h1 className={`${visible ? 'text-appear' : 'text-hidden'} text-[50px] font-bold font-roboto text-center mb-4`}>Orion Smart Send</h1>
                <p className={`${visible ? 'text-appear' : 'text-hidden'} text-[20px] text-[#CCCCCC] font-normal font-roboto text-center`}>
                    Automate your communications and save your valuable time and resources, Orion automates your outreach at multiple levels ensuring every candidate receives the attention they deserve.
                </p>
            </div>
            <div className='flex gap-6'>
                <div className='flex flex-col gap-6 '>
                    <div ref={animatingMessageContainer} className='glassmorphic-card flex min-h-[330px]  p-[40px] gap-9'>
                        <div className='max-w-[264px] flex flex-col justify-center'>
                            <h1 className={`${animating_message_visible ? 'text-appear' : 'text-hidden'} text-wrap text-2xl font-bold font-roboto text-white mb-4`}>Personalized Feedbacks at Every Stage</h1>
                            <p className={`${animating_message_visible ? 'text-appear' : 'text-hidden'} text-wrap   text-[16px] font-normal text-[#CCCCCC]`}>Transform candidate journeys with personalized feedback at every step that drives growth and satisfaction.</p>
                        </div>
                        <AnimatingMessageComponnet />
                    </div>

                    <div ref={flowChartContainer} className='glassmorphic-card  p-[40px]  min-w-[711px] flex flex-col gap-6'>
                        <FlowChart />
                        <div >
                            <h1 className={`${flowchart_visible ? 'text-appear' : 'text-hidden'} text-2xl font-bold font-roboto text-white mb-3`}>Smart Personalized Candidate Outreach</h1>
                            <p className={`${flowchart_visible ? 'text-appear' : 'text-hidden'} text-[16px] font-normal text-[#CCCCCC] `}>Makes hiring operations more efficient with tools and processes that fit into your
                                existing workflow.</p>
                        </div>
                    </div>
                </div>
                
                <div >
                    <ChatBox />
                </div>
            </div>
        </div>
    )
}

export default OrionSmartSend




