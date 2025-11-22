
import * as React from 'react';
import { Upload, Tag, FileText, Lightbulb, MapPin, Target, TrendingUp, Download } from 'lucide-react';

const features = [
  { icon: Upload, title: '1-Click Upload', description: 'Instant chart recognition', color: 'bg-blue-100 text-blue-700' },
  { icon: Tag, title: 'Auto-Detection', description: 'Identifies stock name instantly', color: 'bg-indigo-100 text-indigo-700' },
  { icon: FileText, title: 'Smart Overview', description: 'Simple business summary', color: 'bg-sky-100 text-sky-700' },
  { icon: Lightbulb, title: '13 Strategies', description: 'Hemant Jain\'s Logic Applied', color: 'bg-amber-100 text-amber-700' },
  { icon: MapPin, title: 'Suitability Zone', description: 'Is it safe to enter now?', color: 'bg-emerald-100 text-emerald-700' },
  { icon: Target, title: 'Entry Guidance', description: 'Precise mathematical zones', color: 'bg-rose-100 text-rose-700' },
  { icon: TrendingUp, title: 'Target Range', description: 'Projected profit booking', color: 'bg-cyan-100 text-cyan-700' },
  { icon: Download, title: 'PDF Export', description: 'Save analysis for later', color: 'bg-slate-200 text-slate-700' },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-900">
              Premium <span className="text-gradient-vibrant">Intelligence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-xl font-medium leading-relaxed">
              Everything you need to make informed decisions, included in the ₹499/year plan.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <span className="text-sm font-bold tracking-wider text-emerald-700 border border-emerald-200 px-5 py-2.5 rounded-full bg-emerald-50 shadow-sm flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              LIVE STATUS: ACTIVE
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-blue-200"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
