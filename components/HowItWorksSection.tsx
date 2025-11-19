
import * as React from 'react';
import { Upload, Search, Sparkles, FileText, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Chart',
    description: 'Drag & drop screenshot. No manual data entry.',
    color: 'text-blue-700 bg-blue-50 border-blue-200'
  },
  {
    icon: Search,
    title: 'AI Scan',
    description: 'Engine scans patterns against 13 strategies.',
    color: 'text-purple-700 bg-purple-50 border-purple-200'
  },
  {
    icon: Sparkles,
    title: 'Strategy Match',
    description: 'Locks onto the best-fitting strategy.',
    color: 'text-amber-700 bg-amber-50 border-amber-200'
  },
  {
    icon: FileText,
    title: 'Get Analysis',
    description: 'Clear PDF with Entry, Stop Loss, Target.',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4 md:px-6 relative bg-white/60 border-y border-slate-200/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-purple-700 font-extrabold tracking-widest text-sm uppercase bg-purple-100 px-4 py-1.5 rounded-full">Simple Process</span>
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-4 mt-6 text-slate-900">
            How It <span className="text-gradient-blue">Works</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 group">
                <div className="flex flex-col items-center text-center space-y-6">
                  
                  {/* Icon Bubble */}
                  <div className={`relative w-28 h-28 rounded-full bg-white border-4 ${step.color.split(' ')[2]} flex items-center justify-center shadow-xl group-hover:-translate-y-2 transition-transform duration-500 ease-out z-10`}>
                    <Icon className={`h-12 w-12 ${step.color.split(' ')[0]}`} />
                    
                    {/* Floating Pulse */}
                    <div className={`absolute inset-0 rounded-full ${step.color.split(' ')[1]} opacity-20 animate-ping`} />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-lg font-bold text-white shadow-md z-20">
                      {idx + 1}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-3 px-2 pt-6 bg-white/80 p-6 rounded-2xl backdrop-blur-sm hover:bg-white transition-colors border border-transparent hover:border-slate-200 hover:shadow-lg w-full">
                    <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                </div>
                
                {/* Mobile Arrow */}
                <div className="md:hidden flex justify-center my-4">
                   {idx < steps.length - 1 && <ChevronRight className="text-slate-300 rotate-90 h-8 w-8" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
