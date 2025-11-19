
import * as React from 'react';
import { HeroSection } from './components/HeroSection';
import { WhySection } from './components/WhySection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { UpgradePlansSection } from './components/UpgradePlansSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { FAQSection } from './components/FAQSection';
import { TerminalPage } from './components/TerminalPage';

function App() {
  const [view, setView] = React.useState<'landing' | 'terminal'>('landing');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative selection:bg-blue-500 selection:text-white">
      
      {/* Vibrant Moving Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-blue-200/40 mix-blend-multiply blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-purple-200/40 mix-blend-multiply blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-200/40 mix-blend-multiply blur-[80px] animate-blob animation-delay-4000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/50 mix-blend-multiply blur-[80px] animate-blob animation-delay-2000" />

        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="relative z-10 transition-all duration-500 ease-in-out">
        {view === 'landing' ? (
          <div className="animate-fade-in">
            <HeroSection onStart={() => setView('terminal')} />
            <WhySection />
            <HowItWorksSection />
            <FeaturesSection />
            <UpgradePlansSection />
            <FAQSection />
            <DisclaimerSection />
          </div>
        ) : (
          <TerminalPage onBack={() => setView('landing')} />
        )}
      </div>
    </main>
  );
}

export default App;