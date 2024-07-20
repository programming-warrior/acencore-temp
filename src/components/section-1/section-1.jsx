import React, { useRef, useState, useEffect } from 'react';
import { cn } from "../../utils/cn";
import "./styles.css";
import AnimatedGradientText from '../ui/animation-gradient-text';

function Section1() {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    const instructionsBoxRef = useRef(null);

    const [leftSectionVisible, setLeftSectionVisible] = useState(false);
    const [rightSectionVisible, setRightSectionVisible] = useState(false);
    const [instructionsBoxVisible, setInstructionsBoxVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === leftSectionRef.current) {
                            setLeftSectionVisible(true);
                        } else if (entry.target === rightSectionRef.current) {
                            setRightSectionVisible(true);
                        } else if (entry.target === instructionsBoxRef.current) {
                            setInstructionsBoxVisible(true);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (leftSectionRef.current) {
            observer.observe(leftSectionRef.current);
        }
        if (rightSectionRef.current) {
            observer.observe(rightSectionRef.current);
        }
        if (instructionsBoxRef.current) {
            observer.observe(instructionsBoxRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const codeLines = `
    import mongoose, { Schema } from 'mongoose';
    
    export const collection = 'Project';
    
    const schema = new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        }
    }, {timestamps: true});
    `.trim().split('\n');

    // Add 4 empty lines after the code
    const emptyLinesCount = 4;
    const codeWithEmptyLines = [...codeLines, ...Array(emptyLinesCount).fill('')];
    const highlightCode = (line) => {
        const keywords = ['import', 'from', 'export', 'const', 'new', 'Schema', 'true'];
        const types = ['type', 'name', 'required', 'description', 'collection', 'mongoose'];
        let highlightedLine = line;

        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            highlightedLine = highlightedLine.replace(regex, `<span class="keyword">${keyword}</span>`);
        });

        types.forEach(type => {
            const regex = new RegExp(`\\b${type}\\b`, 'g');
            highlightedLine = highlightedLine.replace(regex, `<span class="type">${type}</span>`);
        });

        highlightedLine = highlightedLine.replace(/(\{|\}|\(|\)|\[|\])/g, '<span class="bracket">$1</span>'); // brackets

        return highlightedLine;
    };

    return (
        <>

            <div className="grid grid-cols-2 gap-4 my-20">
                <div className={`left-section slide-in ${leftSectionVisible ? 'visible' : ''}`} ref={leftSectionRef}>
                    <div className="text-4xl font-bold flex items-center mx-20 my-20">Assesments that{' '}<AnimatedGradientText><span
                        className={cn(
                            `animate-gradient bg-gradient-to-r from-[#22B4F8] via-[#2EB8F5] to-[#EDF3C2] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-4xl font-bold`,
                        )}
                    >
                        Adapt
                    </span></AnimatedGradientText></div>
                    <div className="mx-20 text-sm">Our assessments align with each candidate's abilities, helping you find the right match and retain your existing talent for other potential roles.</div>
                    <div className='section-1-list'>

                        <div className='section-1-list-item'>
                            <div className='section-1-list-item-1-border'>
                                <div className='section-1-list-image-1'>
                                    <img src="../../../public/images/star.png" alt="star" />
                                </div>

                            </div>
                            <div className='section-1-list-label-1'>Engage Qualified Candidates with Adaptive Testing</div>
                        </div>
                        <div className='section-1-list-item'>
                            <div className='section-1-list-image-border-box'>
                            <div className='section-1-list-image'>
                                <img src="../../../public/images/Vector.png" alt="" />
                            </div></div>
                            <div className='section-1-list-label-2'>No More Test Tampering with Orion’s AI Proctoring</div>
                        </div>
                        <div className='section-1-list-item'>
                        <div className='section-1-list-image-border-box'>
                            <div className='section-1-list-image'>
                                <img src="../../../public/images/Frame.png" alt="" />
                            </div></div>
                            <div className='section-1-list-label-3'>Unmatched Accuracy for Equitable Outcomes</div>
                        </div>
                    </div>
                    {/* <ul className="custom-list mx-20 my-10">
                        <li className="list-item-1 py-10 text-lg">Engage Qualified Candidates with Adaptive Testing</li>
                        <li className="list-item-2 py-10 text-lg">No More Test Tampering with Orion’s AI Proctoring</li>
                        <li className="list-item-3 py-10 text-lg">Unmatched Accuracy for Equitable Outcomes</li>
                    </ul> */}
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block mx-20 my-20">
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

                <div className={`border border-sky-500 right-section slide-in ${rightSectionVisible ? 'visible' : ''}`} ref={rightSectionRef}>
                    <div className="code-box my-20">
                        <div className="line-numbers">
                            {codeWithEmptyLines.map((_, index) => (
                                <div key={index}>{index + 1}</div>
                            ))}
                        </div>
                        <div className="code">
                            {codeWithEmptyLines.map((line, index) => (
                                <pre key={index}><code dangerouslySetInnerHTML={{ __html: highlightCode(line) }}></code></pre>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`instructions-box right-section slide-in ${instructionsBoxVisible ? 'visible' : ''}`} ref={instructionsBoxRef}>
                    <h2>Q1. Implement a dynamic form generator with validation.</h2>
                    <div className="instruction-button">Instructions:</div>
                    <ul>
                        <li>1. Create a form with at least one field initially.</li>
                        <li>2. Allow users to add or remove fields dynamically.</li>
                        <li>3. Each field should have a label, type, and optional validation rules.</li>
                    </ul>
                    <div className="optional">Optional: Implement advanced validation, conditional fields, field rearrangement.</div>
                </div>
            </div>

        </>
    )
}

export default Section1;