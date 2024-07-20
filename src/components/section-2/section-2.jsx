import React from "react";
import { cn } from "../../utils/cn";
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import AnimatedGradientText from '../ui/animation-gradient-text';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OrbitingCircles from "../ui/orbiting-circles.tsx";

import AvatarCircles from "../ui/avatar-circles";

function Section2() {
    const avatarUrls = [
        "https://avatars.githubusercontent.com/u/16860528",
        "https://avatars.githubusercontent.com/u/20110627",
        "https://avatars.githubusercontent.com/u/106103625",
    ];
    const performanceRef = useRef(null);
    const interviewRef = useRef(null);
    const cardRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);


    const [percentage, setPercentage] = useState(0);
    const [scheduled, setScheduled] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [cancelled, setCancelled] = useState(0);

    const [visible, setVisible] = useState(false);
    const [visibleCard1, setvisibleCard1] = useState(false);
    const [visibleCard2, setvisibleCard2] = useState(false);
    const [hrRoundPercentage, setHrRoundPercentage] = useState(0);
    const [culturalRoundPercentage, setCulturalRoundPercentage] = useState(0);
    const [jobFitScore1, setJobFitScore1] = useState(0);
    const [orionScore1, setOrionScore1] = useState(0);
    const [jobFitScore2, setJobFitScore2] = useState(0);
    const [orionScore2, setOrionScore2] = useState(0);

    // const targetPercentage = 83;
    // const scheduledTarget = 38;
    // const completedTarget = 60;
    // const cancelledTarget = 29;

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setvisibleCard1(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(card1Ref.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setvisibleCard2(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(card2Ref.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, []);


    useEffect(() => {
        if (visibleCard1) {
            const interval10 = setInterval(() => {
                setPercentage((prev) => {
                    if (prev < 83) return prev + 1;
                    clearInterval(interval10);
                    return prev;
                });
            }, 20);
        }
    }, [visibleCard1])
    useEffect(() => {

        if (visibleCard2) {
            const interval2 = setInterval(() => {
                setScheduled((prev) => {
                    if (prev < 38) return prev + 1;
                    clearInterval(interval2);
                    return prev;
                });
            }, 20);

            const interval3 = setInterval(() => {
                setCompleted((prev) => {
                    if (prev < 60) return prev + 1;
                    clearInterval(interval3);
                    return prev;
                });
            }, 20);

            const interval4 = setInterval(() => {
                setCancelled((prev) => {
                    if (prev < 29) return prev + 1;
                    clearInterval(interval4);
                    return prev;
                });
            }, 20);
        }
    }, [visibleCard2])
    useEffect(() => {
        if (visible) {

            const interval1 = setInterval(() => {
                setHrRoundPercentage((prev) => {
                    if (prev < 87) return prev + 1;
                    clearInterval(interval1);
                    return prev;
                });
            }, 20);

            const interval2 = setInterval(() => {
                setCulturalRoundPercentage((prev) => {
                    if (prev < 79) return prev + 1;
                    clearInterval(interval2);
                    return prev;
                });
            }, 20);

            const interval3 = setInterval(() => {
                setJobFitScore1((prev) => {
                    if (prev < 84) return prev + 1;
                    clearInterval(interval3);
                    return prev;
                });
            }, 20);

            const interval4 = setInterval(() => {
                setOrionScore1((prev) => {
                    if (prev < 79) return prev + 1;
                    clearInterval(interval4);
                    return prev;
                });
            }, 20);

            const interval5 = setInterval(() => {
                setJobFitScore2((prev) => {
                    if (prev < 84) return prev + 1;
                    clearInterval(interval5);
                    return prev;
                });
            }, 20);

            const interval6 = setInterval(() => {
                setOrionScore2((prev) => {
                    if (prev < 79) return prev + 1;
                    clearInterval(interval6);
                    return prev;
                });
            }, 20);
        }
    }, [visible]);


 

    return (
        <>
            <div className="grid grid-cols-3 gap-0">
                <div className="col-span-2 left-side-section2">
                    
                     <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black md:shadow-xl">
                     

                        
                        <OrbitingCircles
                            className="size-[300px] border-none bg-transparent"
                            duration={20}
                            delay={6}
                            radius={200}
                        >

                            <div className="card-container" ref={cardRef}>
                                <div className={`card ${visible ? 'visible' : ''}`}>
                                    <div className="round">
                                        <div className="round-header-parent grid grid-cols-2 gap-0">
                                            <div className="left-side-round-header">
                                                <div className="round-header">
                                                    <div className="round-title">HR Round</div>
                                                    <div className="round-badge">Top 10%</div>
                                                </div>


                                                <div className="round-parameters">Parameters Tested: 9</div>
                                            </div>
                                            <div className="round-percentage">
                                                <svg style={{ height: 0 }}>
                                                    <defs>
                                                        <linearGradient id="gradient">
                                                            <stop offset="0%" stopColor="#00F5A0" />
                                                            <stop offset="100%" stopColor="#00D9F5" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <CircularProgressbar
                                                    strokeWidth={15}
                                                    value={hrRoundPercentage}
                                                    text={`${hrRoundPercentage}%`}
                                                    styles={buildStyles({
                                                        textColor: '#fff',
                                                        pathColor: 'url(#gradient)',
                                                        trailColor: 'rgba(255, 255, 255, 0.1)'

                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="round-details">
                                            <div className="round-metrics">
                                                <hr></hr>
                                                <div className="round-metric">
                                                    <div className="metric-label">Job-Fit Score</div>
                                                    <div className="metric-bar">
                                                        <div className="metric-fill" style={{ width: `${jobFitScore1}%` }}></div>
                                                    </div>
                                                    <div className="metric-percentage">{jobFitScore1}%</div>
                                                </div>
                                                <hr></hr>
                                                <div className="round-metric">
                                                    <div className="metric-label">Orion Score</div>
                                                    <div className="metric-bar">
                                                        <div className="metric-fill" style={{ width: `${orionScore1}%` }}></div>
                                                    </div>
                                                    <div className="metric-percentage">{orionScore1}%</div>
                                                </div>
                                                <hr></hr>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="round">

                                        <div className="round-header-parent grid grid-cols-2 gap-0">
                                            <div className="left-side-round-header">
                                                <div className="round-header">
                                                    <div className="round-title">Cultural Round</div>
                                                    <div className="round-badge">Top 15%</div>

                                                </div>
                                                <div className="round-parameters">Parameters Tested: 9</div>
                                            </div>
                                            <div className="round-percentage">
                                                <svg style={{ height: 0 }}>
                                                    <defs>
                                                        <linearGradient id="gradient">
                                                            <stop offset="0%" stopColor="#00F5A0" />
                                                            <stop offset="100%" stopColor="#00D9F5" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <CircularProgressbar
                                                    strokeWidth={15}
                                                    value={culturalRoundPercentage}
                                                    text={`${culturalRoundPercentage}%`}
                                                    styles={buildStyles({
                                                        textColor: '#fff',
                                                        pathColor: 'url(#gradient)',
                                                        trailColor: 'rgba(255, 255, 255, 0.1)'
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <div className="round-details">

                                            <div className="round-metrics">
                                                <hr></hr>
                                                <div className="round-metric">
                                                    <div className="metric-label">Job-Fit Score</div>
                                                    <div className="metric-bar">
                                                        <div className="metric-fill" style={{ width: `${jobFitScore2}%` }}></div>
                                                    </div>
                                                    <div className="metric-percentage">{jobFitScore2}%</div>
                                                </div>
                                                <hr></hr>
                                                <div className="round-metric">
                                                    <div className="metric-label">Orion Score</div>
                                                    <div className="metric-bar">
                                                        <div className="metric-fill" style={{ width: `${orionScore2}%` }}></div>
                                                    </div>
                                                    <div className="metric-percentage">{orionScore2}%</div>
                                                </div>
                                                <hr></hr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OrbitingCircles>
                        <OrbitingCircles
                            className="size-[300px] border-none bg-transparent"
                            duration={20}
                            delay={13}
                            radius={200}
                        >
                            <div className={`interview-progress-box ${visibleCard2 ? 'visible' : ''}`} ref={card2Ref}>
                                <h2>Interview Progress</h2>
                                <div className="interview-progress-item">
                                    <div className="interview-progress-subbox">
                                        <div className="interview-progress-box-subheadings">Secheduled</div>
                                        <div className="interview-progress-box-numbers">3/8</div>
                                    </div>

                                    <div className="progress-bar-scheduled" ref={interviewRef}>
                                        <div className="progress-bar-fill-scheduled" style={{ width: `${scheduled}%` }}></div>
                                    </div>
                                </div>
                                <div className="interview-progress-item">
                                    <div className="interview-progress-subbox">
                                        <div className="interview-progress-box-subheadings">Completed</div>
                                        <div className="interview-progress-box-numbers">6/10</div>
                                    </div>
                                    <div className="progress-bar-completed" ref={interviewRef}>
                                        <div className="progress-bar-fill-completed" style={{ width: `${completed}%` }}></div>
                                    </div>
                                </div>
                                <div className="interview-progress-item">
                                    <div className="interview-progress-subbox">
                                        <div className="interview-progress-box-subheadings">Cncelled</div>
                                        <div className="interview-progress-box-numbers">2/7</div>
                                    </div>
                                    <div className="progress-bar-cancelled" ref={interviewRef}>
                                        <div className="progress-bar-fill-cancelled" style={{ width: `${cancelled}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </OrbitingCircles>
                        <OrbitingCircles
                            className="size-[300px] border-none bg-transparent"
                            duration={20}
                            delay={20}
                            radius={200}
                        >
                            <div className={`shimmer-border-notes-box ${visibleCard1 ? 'visible' : ''}`} ref={card1Ref}>
                                <div className="notes-on-david-box ">
                                    <h2>Notes on David Williams</h2>
                                    <div className="interviwed-on">
                                        Interviewed on Nov 24</div>
                                    <div className="text-david">David graduated top of his class in 2017 from Harvard. He started is career as a Analyst Programmer at Microsoft before moving to Florida.</div>
                                    <div className="performance-section" ref={performanceRef}>
                                        <div className="performance-bar">
                                            <div className="performance-bar-fill" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                        <span className="performance-percentage">{percentage}%</span>
                                    </div>
                                    <div className="performance">Performance Feedback</div>
                                    <div className="face-cards">

                                        <AvatarCircles numPeople={1} avatarUrls={avatarUrls} />
                                    </div>

                                </div>
                            </div>
                        </OrbitingCircles>
                    </div>
                    {/* <div className={`interview-progress-box ${visibleCard2 ? 'visible' : ''}`} ref={card2Ref}>
                        <h2>Interview Progress</h2>
                        <div className="interview-progress-item">
                            <div className="interview-progress-subbox">
                                <div className="interview-progress-box-subheadings">Secheduled</div>
                                <div className="interview-progress-box-numbers">3/8</div>
                            </div>

                            <div className="progress-bar-scheduled" ref={interviewRef}>
                                <div className="progress-bar-fill-scheduled" style={{ width: `${scheduled}%` }}></div>
                            </div>
                        </div>
                        <div className="interview-progress-item">
                            <div className="interview-progress-subbox">
                                <div className="interview-progress-box-subheadings">Completed</div>
                                <div className="interview-progress-box-numbers">6/10</div>
                            </div>
                            <div className="progress-bar-completed" ref={interviewRef}>
                                <div className="progress-bar-fill-completed" style={{ width: `${completed}%` }}></div>
                            </div>
                        </div>
                        <div className="interview-progress-item">
                            <div className="interview-progress-subbox">
                                <div className="interview-progress-box-subheadings">Cncelled</div>
                                <div className="interview-progress-box-numbers">2/7</div>
                            </div>
                            <div className="progress-bar-cancelled" ref={interviewRef}>
                                <div className="progress-bar-fill-cancelled" style={{ width: `${cancelled}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-container" ref={cardRef}>
                        <div className={`card ${visible ? 'visible' : ''}`}>
                            <div className="round">
                                <div className="round-header-parent grid grid-cols-2 gap-0">
                                    <div className="left-side-round-header">
                                        <div className="round-header">
                                            <div className="round-title">HR Round</div>
                                            <div className="round-badge">Top 10%</div>
                                        </div>


                                        <div className="round-parameters">Parameters Tested: 9</div>
                                    </div>
                                    <div className="round-percentage">
                                        <svg style={{ height: 0 }}>
                                            <defs>
                                                <linearGradient id="gradient">
                                                    <stop offset="0%" stopColor="#00F5A0" />
                                                    <stop offset="100%" stopColor="#00D9F5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <CircularProgressbar
                                            strokeWidth={15}
                                            value={hrRoundPercentage}
                                            text={`${hrRoundPercentage}%`}
                                            styles={buildStyles({
                                                textColor: '#fff',
                                                pathColor: 'url(#gradient)',
                                                trailColor: 'rgba(255, 255, 255, 0.1)'

                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="round-details">
                                    <div className="round-metrics">
                                        <hr></hr>
                                        <div className="round-metric">
                                            <div className="metric-label">Job-Fit Score</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${jobFitScore1}%` }}></div>
                                            </div>
                                            <div className="metric-percentage">{jobFitScore1}%</div>
                                        </div>
                                        <hr></hr>
                                        <div className="round-metric">
                                            <div className="metric-label">Orion Score</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${orionScore1}%` }}></div>
                                            </div>
                                            <div className="metric-percentage">{orionScore1}%</div>
                                        </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                            <div className="round">

                                <div className="round-header-parent grid grid-cols-2 gap-0">
                                    <div className="left-side-round-header">
                                        <div className="round-header">
                                            <div className="round-title">Cultural Round</div>
                                            <div className="round-badge">Top 15%</div>

                                        </div>
                                        <div className="round-parameters">Parameters Tested: 9</div>
                                    </div>
                                    <div className="round-percentage">
                                        <svg style={{ height: 0 }}>
                                            <defs>
                                                <linearGradient id="gradient">
                                                    <stop offset="0%" stopColor="#00F5A0" />
                                                    <stop offset="100%" stopColor="#00D9F5" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <CircularProgressbar
                                            strokeWidth={15}
                                            value={culturalRoundPercentage}
                                            text={`${culturalRoundPercentage}%`}
                                            styles={buildStyles({
                                                textColor: '#fff',
                                                pathColor: 'url(#gradient)',
                                                trailColor: 'rgba(255, 255, 255, 0.1)'
                                            })}
                                        />
                                    </div>
                                </div>
                                <div className="round-details">

                                    <div className="round-metrics">
                                        <hr></hr>
                                        <div className="round-metric">
                                            <div className="metric-label">Job-Fit Score</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${jobFitScore2}%` }}></div>
                                            </div>
                                            <div className="metric-percentage">{jobFitScore2}%</div>
                                        </div>
                                        <hr></hr>
                                        <div className="round-metric">
                                            <div className="metric-label">Orion Score</div>
                                            <div className="metric-bar">
                                                <div className="metric-fill" style={{ width: `${orionScore2}%` }}></div>
                                            </div>
                                            <div className="metric-percentage">{orionScore2}%</div>
                                        </div>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`shimmer-border-notes-box ${visibleCard1 ? 'visible' : ''}`} ref={card1Ref}>
                        <div className="notes-on-david-box ">
                            <h2>Notes on David Williams</h2>
                            <div className="interviwed-on">
                                Interviewed on Nov 24</div>
                            <div className="text-david">David graduated top of his class in 2017 from Harvard. He started is career as a Analyst Programmer at Microsoft before moving to Florida.</div>
                            <div className="performance-section" ref={performanceRef}>
                                <div className="performance-bar">
                                    <div className="performance-bar-fill" style={{ width: `${percentage}%` }}></div>
                                </div>
                                <span className="performance-percentage">{percentage}%</span>
                            </div>
                            <div className="performance">Performance Feedback</div>
                            <div className="face-cards">

                                <AvatarCircles numPeople={1} avatarUrls={avatarUrls} />
                            </div>

                        </div>
                    </div> */}





                </div>
                <div className="right-side-section2 my-10">
                    <div className="text-4xl font-bold flex items-center mx-10 mt-20"><AnimatedGradientText><span
                        className={cn(
                            `animate-gradient bg-gradient-to-r from-[#22B4F8] via-[#2EB8F5] to-[#EDF3C2] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold`,
                        )}
                    >
                        Autonomous
                    </span></AnimatedGradientText> HR & </div>
                    <div className="text-4xl font-bold px-2 mx-10 my-1">Culture Round</div>
                    <div className="px-2 mx-10 my-10 text-sm">Automate your HR and culture rounds with Orion and focus on what truly matters. With Orion, you can customize your HR and culture interviews to align with your company’s values and core principles, ensuring you find candidates who are the <br></br>perfect fit.</div>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block mx-12">
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

            </div>
        </>

    )
}

export default Section2;