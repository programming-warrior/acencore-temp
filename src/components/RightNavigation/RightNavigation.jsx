import React from 'react';

const RightNavigation = ({ selectedSection, setSelectedSection }) => {
  const navItems = [
    { id: 'liveTranscript', label: 'Live Transcript & Candidate State', description: 'Gain insights in real-time and assess candidate confidence levels instantly during interviews.', imgSrc: '/images/Transcript.svg' },
    { id: 'performanceNotes', label: 'Performance Based Candidates', description: 'Assess candidates objectively with detailed performance metrics and insights.', imgSrc: '/images/Performance.svg' },
    { id: 'questionGeneration', label: 'Real Time Question Generation', description: 'Dynamic, interactive learning experiences tailored to immediate learner needs.', imgSrc: '/images/QuestionGeneration.svg' }
  ];

  return (
    <div className="flex flex-col w-[440px] h-[550px] gap-9 justify-center items-center text-white">
      {navItems.map(item => (
        <div
          key={item.id}
          className={`flex gap-3 cursor-pointer ${selectedSection === item.id ? 'blue-gradient-text' : 'text-white'}`}
          onClick={() => setSelectedSection(item.id)}
        >
          <div className="flex flex-col">
            <div className="text-[17px] font-bold flex gap-3 items-center  ">
              <div className={`p-[2px] rounded-full  gradient-circle`}>

<img
  className={`rounded-full p-[11px]  cursor-pointer ${
    selectedSection === item.id ? 'fill-circle' : 'bg-black'
  }`}
  src={item.imgSrc}
  alt={item.label}
/>
              </div>
              <p className={`text-xl ${item.id === 'liveTranscript' ? 'text-[20px]' : ''}`}>{item.label}</p>
            </div>
            <p className="text-sm pl-[62px] text-[#CCCCCC]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightNavigation;
