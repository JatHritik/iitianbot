
import * as React from 'react';
import { AlertCircle, Clock, TrendingUp, MessagesSquare, Brain, Heart, Target } from 'lucide-react';

const painPoints = [
  { icon: Clock, title: 'Time Crunch', text: 'No time to analyze during market hours?', color: 'bg-blue-50 text-blue-700' },
  { icon: AlertCircle, title: 'Info Overload', text: 'Confused by too many indicators?', color: 'bg-red-50 text-red-700' },
  { icon: MessagesSquare, title: 'Fake Tips', text: 'Tired of unreliable Telegram calls?', color: 'bg-amber-50 text-amber-700' },
  { icon: TrendingUp, title: 'Chart Noise', text: 'Difficulty spotting the real trend?', color: 'bg-emerald-50 text-emerald-700' },
  { icon: Brain, title: 'No Strategy', text: 'Trading randomly without rules?', color: 'bg-purple-50 text-purple-700' },
  { icon: Heart, title: 'Emotions', text: 'Fear & greed killing your profits?', color: 'bg-pink-50 text-pink-700' },
];

export function WhySection() {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-blue-700 font-extrabold tracking-widest text-sm uppercase bg-blue-100 px-4 py-1.5 rounded-full">The Problem</span>
          <h2 className="font-heading font-bold text-4xl md:text-6xl animate-fade-in-up text-slate-900">
            Why <span className="text-gradient-vibrant">IITIAN TRADING BOT</span>?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium animate-fade-in-up delay-100 leading-relaxed">
            Designed specifically for the intelligent Indian trader aged 35-65 who values logic over noise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div 
                key={idx}
                className="group glass p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-white hover:border-blue-300 bg-white/70"
              >
                <div className={`h-16 w-16 rounded-2xl ${point.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {point.text}
                </p>
              </div>
            );
          })}
          
          {/* Feature Card highlighting the Solution */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-10 md:p-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/20 transform transition-all hover:scale-[1.01]">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                The Solution is <span className="text-yellow-300">Structured Intelligence</span>
              </h3>
              <p className="text-blue-50 text-xl font-medium leading-relaxed">
                We replace confusion with clarity. Our bot doesn't guess; it calculates based on mathematical setups and proven price action models.
              </p>
            </div>
            
            <div className="relative z-10 h-28 w-28 rounded-full bg-white flex items-center justify-center shadow-xl animate-pulse-slow flex-shrink-0 border-4 border-blue-200/30">
              <Target className="h-12 w-12 text-blue-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
