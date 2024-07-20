import { cn } from "../../utils/cn";
import "./styles.css";
import React, { useState, useEffect, useRef } from 'react';
import AnimatedGradientText from '../ui/animation-gradient-text';
import { useInView } from 'react-intersection-observer';
import CardStack from "../ui/card-stack1";

function Section3() {
    const [visible, setVisible] = useState(false);
    const section3Left = useRef(null);
    const section3Right = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (section3Left.current) {
            observer.observe(section3Left.current);
            
        }
        if (section3Right.current) {
            observer.observe(section3Right.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className={`left-side-section3 ${visible ? 'visible' : ''} mt-20`} ref={section3Left}>
                    <div className="text-4xl font-bold flex items-center mx-20 mt-20"><AnimatedGradientText><span
                        className={cn(
                            `animate-gradient bg-gradient-to-r from-[#22B4F8] via-[#2EB8F5] to-[#EDF3C2] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold`,
                        )}
                    >
                        Effortlessly
                    </span></AnimatedGradientText> Save Time </div>
                    <div className="text-4xl font-bold px-2 mx-20 my-1">With AI Auto Scheduling</div>
                    <div className="px-2 mx-20 my-10 text-sm">Experience the convenience of AI Auto Scheduling <br></br>and eliminate time conflicts by automating your interview <br></br>scheduling process, allowing you to focus on what matters<br />  most.</div>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block mx-20">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                            <span className="text-lg">{`Learn More`}</span>
                            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 7L22 14.0001L14 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 14L5 14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span className="absolute bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>

                </div>
                <div className={`right-side-section3 ${visible ? 'visible' : ''}`} ref={section3Right}>
                    <div className="h-[40rem] flex items-center justify-center w-full">
                        <CardStack items={CARDS} />
                    </div>


                </div>

            </div>
        </>

    )
}

const CARDS = [{
    id: 0,
    content: (

        <div className="chat-card">
            <div className={`chat-message visible`}>
                <div className="chat-avatar">
                    {/* <img src="../../../public/images/male-avatar-1.svg" alt="Josh Martin" /> */}
                </div>
                <div className="chat-content">
                    <div className="chat-name">Josh Martin</div>
                    <div className="chat-text">Hey, does 11 a.m. on 25th this month work for you?</div>
                </div>
            </div>
            <div className={`chat-message-orion visible`}>
                <div className="chat-avatar-orion-border-box">
                    <div className="chat-avatar-orion">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1286 4.55143C10.5808 4.55143 10.9782 4.85121 11.1025 5.28603L12.2007 9.12975C12.6813 10.8121 13.9964 12.1272 15.6788 12.6079L19.5225 13.7061C19.9574 13.8303 20.2571 14.2278 20.2571 14.68C20.2571 15.1322 19.9574 15.5297 19.5225 15.6539L15.6788 16.7521C13.9964 17.2328 12.6813 18.5479 12.2007 20.2303L11.1025 24.074C10.9782 24.5088 10.5808 24.8086 10.1286 24.8086C9.67635 24.8086 9.27892 24.5088 9.15469 24.074L8.05648 20.2303C7.5758 18.5479 6.26071 17.2328 4.57831 16.7521L0.734604 15.6539C0.299783 15.5297 0 15.1322 0 14.68C0 14.2278 0.299783 13.8303 0.734604 13.7061L4.57832 12.6079C6.26071 12.1272 7.5758 10.8121 8.05648 9.12974L9.15469 5.28603C9.27892 4.85121 9.67635 4.55143 10.1286 4.55143Z" fill="url(#paint0_linear_944_4071)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2829 0.5C22.7476 0.5 23.1528 0.816313 23.2655 1.2672L23.6151 2.66557C23.9326 3.93569 24.9243 4.92741 26.1944 5.24494L27.5928 5.59453C28.0437 5.70725 28.36 6.11238 28.36 6.57714C28.36 7.04191 28.0437 7.44704 27.5928 7.55976L26.1944 7.90935C24.9243 8.22688 23.9326 9.21859 23.6151 10.4887L23.2655 11.8871C23.1528 12.338 22.7476 12.6543 22.2829 12.6543C21.8181 12.6543 21.413 12.338 21.3002 11.8871L20.9507 10.4887C20.6331 9.2186 19.6414 8.22688 18.3713 7.90935L16.9729 7.55976C16.522 7.44704 16.2057 7.04191 16.2057 6.57714C16.2057 6.11238 16.522 5.70725 16.9729 5.59453L18.3713 5.24494C19.6414 4.92741 20.6331 3.93569 20.9507 2.66557L21.3002 1.2672C21.413 0.816313 21.8181 0.5 22.2829 0.5Z" fill="url(#paint1_linear_944_4071)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2571 18.7314C20.6931 18.7314 21.0802 19.0104 21.218 19.424L21.7504 21.0212C21.9521 21.6261 22.4267 22.1008 23.0316 22.3024L24.6289 22.8348C25.0425 22.9727 25.3214 23.3598 25.3214 23.7957C25.3214 24.2317 25.0425 24.6187 24.6289 24.7566L23.0316 25.289C22.4267 25.4906 21.9521 25.9653 21.7504 26.5702L21.218 28.1674C21.0802 28.581 20.6931 28.86 20.2571 28.86C19.8212 28.86 19.4341 28.581 19.2963 28.1674L18.7638 26.5702C18.5622 25.9653 18.0876 25.4906 17.4827 25.289L15.8854 24.7566C15.4718 24.6187 15.1929 24.2317 15.1929 23.7957C15.1929 23.3598 15.4718 22.9727 15.8854 22.8348L17.4827 22.3024C18.0876 22.1008 18.5622 21.6261 18.7638 21.0212L19.2963 19.424C19.4341 19.0104 19.8212 18.7314 20.2571 18.7314Z" fill="url(#paint2_linear_944_4071)" />
                            <defs>
                                <linearGradient id="paint0_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
                <div className="chat-content-orion">
                    <div className="chat-name-orion">Orion</div>
                    <div className="chat-text"><br></br>Sure, I've rescheduled the interview to 25th at 11 a.m.</div>
                </div>
            </div>
            <div className={`chat-message visible`}>
                <div className="chat-avatar">

                </div>
                <div className="chat-content">
                    <div className="chat-name">Josh Martin</div>
                    <div className="chat-text">Great, I’ll see you there!</div>
                </div>
            </div>
            <div className={`chat-schedule-border-box visible`}>
                <div className={`chat-schedule`}>
                    <div className="schedule-info">
                        <div className="schedule-date">
                            <span className="icon">📅</span> Live Interview Scheduled on Aug 25
                        </div>
                        <div className="schedule-time">12:00 P.M. PST</div>
                    </div>
                    <div className="join-button-border">
                        <button className="join-button">Join The Interview Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}, {
    id: 1,
    content: (
        <div className="chat-card">
            <div className={`chat-message visible`}>
                <div className="chat-avatar-2">
                    {/* <img src="../../../public/images/avatar-1.png" alt="Josh Martin" /> */}
                </div>
                <div className="chat-content">
                    <div className="chat-name">Mary Rose</div>
                    <div className="chat-text">Hey, I’ll be available at 8:00 p.m. tomorrow.</div>
                </div>
            </div>
            <div className={`chat-message-orion visible`}>
                <div className="chat-avatar-orion-border-box">
                    <div className="chat-avatar-orion">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1286 4.55143C10.5808 4.55143 10.9782 4.85121 11.1025 5.28603L12.2007 9.12975C12.6813 10.8121 13.9964 12.1272 15.6788 12.6079L19.5225 13.7061C19.9574 13.8303 20.2571 14.2278 20.2571 14.68C20.2571 15.1322 19.9574 15.5297 19.5225 15.6539L15.6788 16.7521C13.9964 17.2328 12.6813 18.5479 12.2007 20.2303L11.1025 24.074C10.9782 24.5088 10.5808 24.8086 10.1286 24.8086C9.67635 24.8086 9.27892 24.5088 9.15469 24.074L8.05648 20.2303C7.5758 18.5479 6.26071 17.2328 4.57831 16.7521L0.734604 15.6539C0.299783 15.5297 0 15.1322 0 14.68C0 14.2278 0.299783 13.8303 0.734604 13.7061L4.57832 12.6079C6.26071 12.1272 7.5758 10.8121 8.05648 9.12974L9.15469 5.28603C9.27892 4.85121 9.67635 4.55143 10.1286 4.55143Z" fill="url(#paint0_linear_944_4071)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2829 0.5C22.7476 0.5 23.1528 0.816313 23.2655 1.2672L23.6151 2.66557C23.9326 3.93569 24.9243 4.92741 26.1944 5.24494L27.5928 5.59453C28.0437 5.70725 28.36 6.11238 28.36 6.57714C28.36 7.04191 28.0437 7.44704 27.5928 7.55976L26.1944 7.90935C24.9243 8.22688 23.9326 9.21859 23.6151 10.4887L23.2655 11.8871C23.1528 12.338 22.7476 12.6543 22.2829 12.6543C21.8181 12.6543 21.413 12.338 21.3002 11.8871L20.9507 10.4887C20.6331 9.2186 19.6414 8.22688 18.3713 7.90935L16.9729 7.55976C16.522 7.44704 16.2057 7.04191 16.2057 6.57714C16.2057 6.11238 16.522 5.70725 16.9729 5.59453L18.3713 5.24494C19.6414 4.92741 20.6331 3.93569 20.9507 2.66557L21.3002 1.2672C21.413 0.816313 21.8181 0.5 22.2829 0.5Z" fill="url(#paint1_linear_944_4071)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2571 18.7314C20.6931 18.7314 21.0802 19.0104 21.218 19.424L21.7504 21.0212C21.9521 21.6261 22.4267 22.1008 23.0316 22.3024L24.6289 22.8348C25.0425 22.9727 25.3214 23.3598 25.3214 23.7957C25.3214 24.2317 25.0425 24.6187 24.6289 24.7566L23.0316 25.289C22.4267 25.4906 21.9521 25.9653 21.7504 26.5702L21.218 28.1674C21.0802 28.581 20.6931 28.86 20.2571 28.86C19.8212 28.86 19.4341 28.581 19.2963 28.1674L18.7638 26.5702C18.5622 25.9653 18.0876 25.4906 17.4827 25.289L15.8854 24.7566C15.4718 24.6187 15.1929 24.2317 15.1929 23.7957C15.1929 23.3598 15.4718 22.9727 15.8854 22.8348L17.4827 22.3024C18.0876 22.1008 18.5622 21.6261 18.7638 21.0212L19.2963 19.424C19.4341 19.0104 19.8212 18.7314 20.2571 18.7314Z" fill="url(#paint2_linear_944_4071)" />
                            <defs>
                                <linearGradient id="paint0_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_944_4071" x1="7.95471e-09" y1="4.20862" x2="40.0663" y2="5.69179" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#22B4F8" />
                                    <stop offset="1" stop-color="#EDF3C2" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>
                <div className="chat-content-orion">
                    <div className="chat-name-orion">Orion</div>
                    <div className="chat-text"><br></br>Great, thanks for the confirmation. I’ve arranged an
                        interview at 8 p.m. tomorrow. See you there Marry!</div>
                </div>
            </div>
            <div className={`chat-message visible`}>
                <div className="chat-avatar-2">

                </div>
                <div className="chat-content">
                    <div className="chat-name">Marry Rose</div>
                    <div className="chat-text">See you soon!</div>
                </div>
            </div>
            <div className={`chat-schedule-border-box visible`}>
                <div className={`chat-schedule`}>
                    <div className="schedule-info">
                        <div className="schedule-date">
                            <span className="icon">📅</span> Live Interview Scheduled on Aug 29
                        </div>
                        <div className="schedule-time">8:00 A.M. PST</div>
                    </div>
                    <div className="join-button-border">
                        <button className="join-button">Join The Interview Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

]


export default Section3;