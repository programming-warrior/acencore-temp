import react from "react";
import BarChart from "./BarChart";

const ProfileCard = ({card_info,className}) => {
    const skills = ['Ruby', 'Python', 'Tensor', 'Java', 'C++', 'C#']
    return (
        <div className={`profile-card  ${className}`}>
            <div className="flex items-center gap-4">
                <div className="w-[72px] h-[72px]">
                    <img className="rounded-full" src={card_info.img_url} />
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <h3 className="font-roboto font-bold text-3xl">{card_info.name}</h3>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.86719" cy="7.5" r="7" fill="url(#paint0_linear_880_5008)" />
                            <defs>
                                <linearGradient id="paint0_linear_880_5008" x1="0.867188" y1="7.5" x2="14.8672" y2="7.5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00F5A0" />
                                    <stop offset="1" stop-color="#00D9F5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-roboto font-bold text-[#CCCCCC] text-sm">{card_info.designation}</p>
                        <span className="flex  gap-1 border border-[#FC9C51] px-2 py-1 rounded-[68px]">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45104 0.980584V1.34797C2.00395 1.41142 1.56151 1.48924 1.12423 1.58096C0.954216 1.61661 0.842828 1.77896 0.871754 1.94894C1.09228 3.24481 2.1806 4.2478 3.52376 4.34877C3.86318 4.62374 4.26657 4.82457 4.70855 4.92584C4.66585 5.42651 4.49466 5.8904 4.2278 6.28571H3.909C3.46163 6.28571 3.09896 6.64549 3.09896 7.08929V8.21429H2.7749C2.23805 8.21429 1.80285 8.64601 1.80285 9.17857C1.80285 9.35609 1.94792 9.5 2.12687 9.5H8.6072C8.78615 9.5 8.93121 9.35609 8.93121 9.17857C8.93121 8.64601 8.49601 8.21429 7.95916 8.21429H7.63519V7.08929C7.63519 6.64549 7.27252 6.28571 6.82515 6.28571H6.50613C6.23936 5.89045 6.06828 5.42655 6.0256 4.92589C6.46766 4.82464 6.87114 4.62379 7.21062 4.34877C8.55378 4.2478 9.6421 3.24481 9.86262 1.94894C9.89155 1.77896 9.78016 1.61661 9.61015 1.58096C9.17286 1.48924 8.73043 1.41142 8.28334 1.34797V0.980584C8.28334 0.818444 8.1616 0.681689 7.99941 0.661626C7.13698 0.55494 6.25848 0.5 5.36719 0.5C4.4759 0.5 3.5974 0.55494 2.73496 0.661626C2.57277 0.681689 2.45104 0.818444 2.45104 0.980584ZM2.45104 2.10714C2.45104 2.61979 2.58561 3.10141 2.82139 3.51896C2.23508 3.25859 1.78038 2.75847 1.58436 2.14437C1.87108 2.08925 2.16002 2.04028 2.45104 1.99759V2.10714ZM8.28334 2.10714V1.99759C8.57435 2.04028 8.8633 2.08925 9.15002 2.14438C8.954 2.75847 8.4993 3.25859 7.91299 3.51896C8.14877 3.10141 8.28334 2.61979 8.28334 2.10714Z" fill="url(#paint0_radial_880_5013)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.45104 0.980584V1.34797C2.00395 1.41142 1.56151 1.48924 1.12423 1.58096C0.954216 1.61661 0.842828 1.77896 0.871754 1.94894C1.09228 3.24481 2.1806 4.2478 3.52376 4.34877C3.86318 4.62374 4.26657 4.82457 4.70855 4.92584C4.66585 5.42651 4.49466 5.8904 4.2278 6.28571H3.909C3.46163 6.28571 3.09896 6.64549 3.09896 7.08929V8.21429H2.7749C2.23805 8.21429 1.80285 8.64601 1.80285 9.17857C1.80285 9.35609 1.94792 9.5 2.12687 9.5H8.6072C8.78615 9.5 8.93121 9.35609 8.93121 9.17857C8.93121 8.64601 8.49601 8.21429 7.95916 8.21429H7.63519V7.08929C7.63519 6.64549 7.27252 6.28571 6.82515 6.28571H6.50613C6.23936 5.89045 6.06828 5.42655 6.0256 4.92589C6.46766 4.82464 6.87114 4.62379 7.21062 4.34877C8.55378 4.2478 9.6421 3.24481 9.86262 1.94894C9.89155 1.77896 9.78016 1.61661 9.61015 1.58096C9.17286 1.48924 8.73043 1.41142 8.28334 1.34797V0.980584C8.28334 0.818444 8.1616 0.681689 7.99941 0.661626C7.13698 0.55494 6.25848 0.5 5.36719 0.5C4.4759 0.5 3.5974 0.55494 2.73496 0.661626C2.57277 0.681689 2.45104 0.818444 2.45104 0.980584ZM2.45104 2.10714C2.45104 2.61979 2.58561 3.10141 2.82139 3.51896C2.23508 3.25859 1.78038 2.75847 1.58436 2.14437C1.87108 2.08925 2.16002 2.04028 2.45104 1.99759V2.10714ZM8.28334 2.10714V1.99759C8.57435 2.04028 8.8633 2.08925 9.15002 2.14438C8.954 2.75847 8.4993 3.25859 7.91299 3.51896C8.14877 3.10141 8.28334 2.61979 8.28334 2.10714Z" fill="url(#paint1_radial_880_5013)" />
                                <defs>
                                    <radialGradient id="paint0_radial_880_5013" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.25152 2.66164) rotate(29.607) scale(1.59222 19.4455)">
                                        <stop offset="0.203125" stop-color="#FC9C51" />
                                        <stop offset="0.869792" stop-color="#F29246" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_880_5013" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.36719 0.5) rotate(90) scale(9)">
                                        <stop stop-color="white" stop-opacity="0.3" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <span className="font-roboto font-medium text-[8px] text-[#FC9C51]">
                                Class A
                            </span>
                        </span>
                        <span className="bg-gradient px-2 py-1 rounded-[30px] font-roboto font-medium text-[8px] text-center">
                            Open to Work
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 my-8 ">
                {
                    card_info.skills.map(e => {
                        return (

                            <div className="uppercase tracking-wide align-middle font-bold text-[10px] border-t-[0.25px] border-b-[0.25px]  border-[rgba(0,119,194,0.5)] bg-[rgba(0,119,194,0.07)] rounded-[65px]  text-center min-w-[58px] px-[16px] py-[6px]">
                                {e}
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <div className=" relative  box-border  border-t-[0.25px] border-b-[0.25px] border-[rgba(255,255,255,0.25)]  flex items-center justify-between  py-2">
                    <span className="font-bold text-sm text-[#CCCCCC]">Job fit</span>
                    <div className="absolute  w-24 right-0 -translate-x-1/2  ">
                        <BarChart percentage_value={card_info.job_score}/>
                    </div>
                    <span className="text-[#59A5F5] text-xs font-semibold">{card_info.job_score}%</span>
                </div>
                <div className="relative flex items-center justify-between py-2">
                    <span className="font-bold text-sm text-[#CCCCCC]">Orion Score</span>
                    <div className="absolute w-24 right-0   -translate-x-1/2">
                        <BarChart percentage_value={card_info.orion_score}/>
                    </div>
                    <span className="text-[#59A5F5] text-xs font-semibold"> {card_info.orion_score}%</span>
                </div>

            </div>
            <div className="border-t border-b border-[rgba(255,255,255,0.25)] py-2">
                <div className="flex items-center gap-1 ">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 2.66667C0.75 1.40959 0.75 0.781049 1.12658 0.390524C1.50315 0 2.10925 0 3.32143 0H7.17857C8.39075 0 8.99685 0 9.37342 0.390524C9.75 0.781049 9.75 1.40959 9.75 2.66667V9.33333C9.75 10.5904 9.75 11.219 9.37342 11.6095C8.99685 12 8.39075 12 7.17857 12H3.32143C2.10925 12 1.50315 12 1.12658 11.6095C0.75 11.219 0.75 10.5904 0.75 9.33333V2.66667Z" fill="#CCCCCC" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32143 3C3.32143 2.81591 3.46534 2.66667 3.64286 2.66667L6.85714 2.66667C7.03466 2.66667 7.17857 2.81591 7.17857 3C7.17857 3.1841 7.03466 3.33333 6.85714 3.33333L3.64286 3.33333C3.46534 3.33333 3.32143 3.18409 3.32143 3Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32143 5C3.32143 4.81591 3.46534 4.66667 3.64286 4.66667H5.57143C5.74895 4.66667 5.89286 4.81591 5.89286 5C5.89286 5.1841 5.74895 5.33333 5.57143 5.33333H3.64286C3.46534 5.33333 3.32143 5.18409 3.32143 5Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32143 7C3.32143 6.81591 3.46534 6.66667 3.64286 6.66667H6.21429C6.39181 6.66667 6.53571 6.81591 6.53571 7C6.53571 7.18409 6.39181 7.33333 6.21429 7.33333H3.64286C3.46534 7.33333 3.32143 7.18409 3.32143 7Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32143 9C3.32143 8.81591 3.46534 8.66667 3.64286 8.66667H5.57143C5.74895 8.66667 5.89286 8.81591 5.89286 9C5.89286 9.1841 5.74895 9.33333 5.57143 9.33333H3.64286C3.46534 9.33333 3.32143 9.1841 3.32143 9Z" fill="black" />
                        <path d="M2.03571 3C2.03571 2.81591 2.17962 2.66667 2.35714 2.66667C2.53466 2.66667 2.67857 2.81591 2.67857 3C2.67857 3.18409 2.53466 3.33333 2.35714 3.33333C2.17962 3.33333 2.03571 3.18409 2.03571 3Z" fill="black" />
                        <path d="M2.03571 5C2.03571 4.81591 2.17962 4.66667 2.35714 4.66667C2.53466 4.66667 2.67857 4.81591 2.67857 5C2.67857 5.18409 2.53466 5.33333 2.35714 5.33333C2.17962 5.33333 2.03571 5.18409 2.03571 5Z" fill="black" />
                        <path d="M2.03571 7C2.03571 6.81591 2.17962 6.66667 2.35714 6.66667C2.53466 6.66667 2.67857 6.81591 2.67857 7C2.67857 7.18409 2.53466 7.33333 2.35714 7.33333C2.17962 7.33333 2.03571 7.18409 2.03571 7Z" fill="black" />
                        <path d="M2.03571 9C2.03571 8.81591 2.17962 8.66667 2.35714 8.66667C2.53466 8.66667 2.67857 8.81591 2.67857 9C2.67857 9.1841 2.53466 9.33333 2.35714 9.33333C2.17962 9.33333 2.03571 9.1841 2.03571 9Z" fill="black" />
                    </svg>
                    <span className="font-bold text-sm text-[#CCCCCC] capitalize tracking-wide">Candidate Notes</span>
                </div>
                <div className="flex items-center justify-evenly gap-5 mt-3">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 20C15.6348 20 20 15.6348 20 10.25C20 4.86522 15.6348 0.5 10.25 0.500001C4.86522 0.500001 0.499999 4.86523 0.499999 10.25C0.5 15.6348 4.86522 20 10.25 20ZM5.96967 9.71967C5.82902 9.86032 5.75 10.0511 5.75 10.25C5.75 10.4489 5.82902 10.6397 5.96967 10.7803L8.96967 13.7803C9.26256 14.0732 9.73743 14.0732 10.0303 13.7803C10.3232 13.4874 10.3232 13.0126 10.0303 12.7197L8.31066 11L14 11C14.4142 11 14.75 10.6642 14.75 10.25C14.75 9.83579 14.4142 9.5 14 9.5L8.31066 9.5L10.0303 7.78033C10.3232 7.48744 10.3232 7.01256 10.0303 6.71967C9.73744 6.42678 9.26256 6.42678 8.96967 6.71967L5.96967 9.71967Z" fill="#CCCCCC" />
                        </svg>
                    </span>
                    <p className="font-normal text-sm text-[#CCCCCC]">
                        {card_info.content}
                    </p>
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 0.5C5.11522 0.5 0.75 4.86522 0.75 10.25C0.75 15.6348 5.11522 20 10.5 20C15.8848 20 20.25 15.6348 20.25 10.25C20.25 4.86522 15.8848 0.5 10.5 0.5ZM14.7803 10.7803C14.921 10.6397 15 10.4489 15 10.25C15 10.0511 14.921 9.86032 14.7803 9.71967L11.7803 6.71967C11.4874 6.42678 11.0126 6.42678 10.7197 6.71967C10.4268 7.01256 10.4268 7.48744 10.7197 7.78033L12.4393 9.5L6.75 9.5C6.33579 9.5 6 9.83579 6 10.25C6 10.6642 6.33579 11 6.75 11L12.4393 11L10.7197 12.7197C10.4268 13.0126 10.4268 13.4874 10.7197 13.7803C11.0126 14.0732 11.4874 14.0732 11.7803 13.7803L14.7803 10.7803Z" fill="#CCCCCC" />
                        </svg>
                    </span>
                </div>

            </div>
            <div className="text-center">
                <button type="button" class="text-white bg-[#0078c2d9] hover:bg-[#0077C2]  rounded-[180px] px-[24px]  py-[12px] font-medium  text-sm tracking-wide my-4">View Profile</button>
            </div>
        </div>
    )
}


/* Chips var 5 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 6px 16px;
// gap: 6px;
// isolation: isolate;

// margin: 0 auto;
// width: 58px;
// height: 23px;

// background: rgba(0, 119, 194, 0.07);
// box-shadow: inset 0px 4px 12px rgba(255, 255, 255, 0.1);
// backdrop-filter: blur(10px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 65px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


/* Style=Secondary, Small=False, Dark mode=False, Icon position=No icon */



// background: linear-gradient(92.12deg, rgba(34, 180, 248, 0.25) 0.47%, rgba(237, 243, 194, 0.25) 136.89%);
// border-radius: 30px;


export default ProfileCard;