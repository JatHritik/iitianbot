
import * as React from 'react';
import { Button } from './ui/button';
import { Play, Sparkles, TrendingUp, ShieldCheck, ArrowRight, BarChart2, CandlestickChart } from 'lucide-react';

interface HeroSectionProps {
  onStart?: () => void;
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-20 px-4 md:px-6 overflow-hidden">
      
      {/* 3D Floating Elements - Left (Bullish Flag) */}
      {/* Moved down to bottom-[20%] to match the right side element */}
      <div className="absolute bottom-[20%] left-4 2xl:left-12 animate-float hidden xl:block z-20">
         <div className="glass p-5 rounded-2xl rotate-[-6deg] w-72 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-l-4 border-blue-500 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-100 rounded-lg shadow-sm">
                <TrendingUp className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Detected Pattern</div>
                <div className="text-base font-bold text-slate-900">Bullish Flag</div>
              </div>
            </div>
            
            {/* Visual Candlestick Graphic */}
            <div className="h-24 w-full bg-slate-50 rounded-lg border border-slate-100 mb-3 p-2 flex items-end justify-between gap-1 relative overflow-hidden">
               <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,#000_25%,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)] bg-[length:10px_10px]" />
               {/* Candles */}
               <div className="w-2 h-10 bg-green-500 rounded-sm relative"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[1px] h-14 bg-green-600"></div></div>
               <div className="w-2 h-14 bg-green-500 rounded-sm relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-green-600"></div></div>
               <div className="w-2 h-8 bg-red-400 rounded-sm relative mb-4"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-red-500"></div></div>
               <div className="w-2 h-6 bg-red-400 rounded-sm relative mb-3"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-red-500"></div></div>
               <div className="w-2 h-5 bg-red-400 rounded-sm relative mb-2"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-7 bg-red-500"></div></div>
               <div className="w-2 h-16 bg-green-500 rounded-sm relative animate-pulse"><div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-green-600"></div></div>
            </div>

            <div className="flex justify-between text-sm border-t border-slate-100 pt-2">
               <span className="text-slate-600 font-medium">Probability</span>
               <span className="text-blue-700 font-extrabold">High (92%)</span>
            </div>
         </div>
      </div>

      {/* 3D Floating Elements - Right (Entry Zone) */}
      <div className="absolute bottom-[20%] right-4 2xl:right-12 animate-float-delayed hidden xl:block z-20">
         <div className="glass p-6 rounded-2xl rotate-[6deg] w-72 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-l-4 border-emerald-500 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-100 rounded-lg shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Action Zone</div>
                <div className="text-base font-bold text-slate-900">Safe Entry</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-emerald-50/50 rounded-lg border border-emerald-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Buy Above</span>
                  <span className="font-mono font-bold text-lg text-slate-800">1450.00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50/50 rounded-lg border border-blue-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Target</span>
                  <span className="font-mono font-bold text-lg text-emerald-600">1620.00</span>
              </div>
            </div>
         </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-200 shadow-sm animate-fade-in hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-base font-semibold text-slate-700 tracking-wide">
              Launching Date 2 December 
            </span>
           
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight animate-fade-in-up text-slate-900">
          IIT-Grade Trading <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 animate-gradient-x pb-2">Analysis</span>{' '}
          <span className="relative inline-block">
             For Everyone
             <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-400/80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>
        
        {/* Subheading - Increased contrast and size for 35-65 age group */}
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200 font-medium">
          Simplify your trading with <span className="text-slate-900 font-bold bg-slate-100 px-1 rounded">Hemant Jain's 13 proven strategies</span>. 
          Upload any chart to get instant, institutional-grade insights without the noise.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center items-center animate-fade-in-up delay-300">
          <Button 
            onClick={onStart}
            size="lg" 
            className="group relative text-lg px-12 py-8 bg-blue-700 hover:bg-blue-800 text-white border-0 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-1 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <Sparkles className="mr-2 h-6 w-6" />
            <span className="font-bold tracking-wide text-xl">Get Access ₹4999</span>
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-8 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-700 hover:border-blue-300 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:-translate-y-1 rounded-2xl font-semibold"
          >
            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
               <Play className="h-4 w-4 fill-blue-600 text-blue-600 ml-0.5" />
            </div>
            Watch Tutorial
          </Button>
        </div>

        {/* Social Proof Bar */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-500 mt-4 max-w-5xl mx-auto">
           {[
             { label: 'Strategies', value: '13+', icon: CandlestickChart },
             { label: 'Active Traders', value: '5k+', icon: TrendingUp },
             { label: 'Charts Analyzed', value: '50k+', icon: BarChart2 },
             { label: 'Accuracy', value: 'IIT-Grade', icon: ShieldCheck },
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center p-6 rounded-2xl bg-white/40 hover:bg-white/80 border border-transparent hover:border-blue-100 transition-all duration-300 shadow-sm hover:shadow-md">
               <stat.icon className="h-8 w-8 text-blue-600 mb-3" />
               <span className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</span>
               <span className="text-sm text-slate-600 uppercase tracking-wider font-bold">{stat.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
