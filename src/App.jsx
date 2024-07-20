
import './index.css';
import './App.css'
import OrionSmartSend from './components/OrionSmartSend'
import Screening from './components/Screening'
import PlotRegistration from './components/PlotRegistration';
import Section1 from './components/section-1/section-1'
import Section2 from './components/section-2/section-2'
import Section3 from './components/section-3/section-3'
// import TalentPool from "../Components/TalentPool";
// import GetStarted from "../Components/Footer/GetStarted";
import AIAssistedLiveInterview from './components/AIAssistedLiveInterview/AIAssistedLiveInterview';
import AIDrivenAutomations from './components/AIDrivenAutomations/AIDrivenAutomations';


function App() {

  return (
    <div className='app flex flex-col gap-48 '>

      <section className='my-20 mx-auto'>
        <PlotRegistration />
      </section>
      <section className='my-20'>
        <OrionSmartSend />
      </section>

      <section className='my-20'>
        <Screening />
      </section>

      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>

      <div className='w-screen h-screen overflow-auto '>
        <AIDrivenAutomations />
        <AIAssistedLiveInterview />
      </div>

      {/* <TalentPool></TalentPool>
      <GetStarted></GetStarted> */}
    </div>
  )
}

export default App
