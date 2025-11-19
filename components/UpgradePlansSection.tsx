
import * as React from 'react';
import { Lock, Zap, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function UpgradePlansSection() {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-slate-50/50">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-900">
            Future Roadmap
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto flex items-center justify-center gap-2 font-medium">
            <Lock className="w-4 h-4" /> These plans are currently in development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="relative group">
            <Card className="relative h-full bg-white border-slate-200 text-slate-600 overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-slate-100/40 backdrop-blur-[3px] z-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300">
                 <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg border border-slate-200 text-slate-800 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Lock className="w-4 h-4 text-amber-500" /> Coming Soon
                 </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                        <Zap className="h-6 w-6 text-amber-500" />
                    </div>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full border border-slate-200">LOCKED</span>
                </div>
                <div className="mt-6">
                    <CardTitle className="text-2xl font-heading text-slate-900 font-bold">Guided Signals</CardTitle>
                    <p className="text-3xl font-bold text-slate-800 mt-2">₹9,999 <span className="text-sm font-medium text-slate-400">/ year</span></p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 border-t border-slate-100 pt-6 mt-2 bg-slate-50/50 h-full">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-amber-400" />WhatsApp / Email Alerts</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-amber-400" />1-on-1 Mini Bot Guidance</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-amber-400" />24×7 AI Assistant</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Plan 2 */}
          <div className="relative group">
            <Card className="relative h-full bg-white border-slate-200 text-slate-600 overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-500">
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-slate-100/40 backdrop-blur-[3px] z-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-300">
                 <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg border border-slate-200 text-slate-800 font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Lock className="w-4 h-4 text-purple-500" /> Coming Soon
                 </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                        <Bot className="h-6 w-6 text-purple-500" />
                    </div>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full border border-slate-200">LOCKED</span>
                </div>
                <div className="mt-6">
                    <CardTitle className="text-2xl font-heading text-slate-900 font-bold">Algo Execution</CardTitle>
                    <p className="text-3xl font-bold text-slate-800 mt-2">₹25,000 <span className="text-sm font-medium text-slate-400">/ year</span></p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 border-t border-slate-100 pt-6 mt-2 bg-slate-50/50 h-full">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-purple-400" />Semi-automated execution</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-purple-400" />Capital Mgmt (₹50k–₹1Cr)</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-purple-400" />Options Selling Module</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
