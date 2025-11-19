
import * as React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { ArrowLeft, Upload, ScanLine, Zap, Terminal, RefreshCw, CheckCircle, AlertTriangle, FileText, Download, ChevronRight } from 'lucide-react';

interface TerminalPageProps {
  onBack: () => void;
}

const ANALYSIS_LOGS = [
  "Initializing Image Recognition Engine...",
  "Detecting Candles (OHLC)...",
  "Identifying Support/Resistance Zones...",
  "Checking Moving Averages (20, 50, 200)...",
  "Measuring Relative Strength Index (RSI)...",
  "Scanning for Chart Patterns...",
  "Pattern Match: 'Bullish Flag' detected (Confidence 92%)...",
  "Applying Strategy #4: Momentum Breakout...",
  "Calculating Stop Loss & Target Levels...",
  "Finalizing Educational Report..."
];

export function TerminalPage({ onBack }: TerminalPageProps) {
  const [step, setStep] = React.useState<'upload' | 'analyzing' | 'results'>('upload');
  const [stockName, setStockName] = React.useState('RELIANCE');
  const [chartImage, setChartImage] = React.useState<string | null>(null);
  const [logIndex, setLogIndex] = React.useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setChartImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = () => {
    if (!chartImage) return;
    setStep('analyzing');
    setLogIndex(0);
  };

  React.useEffect(() => {
    if (step === 'analyzing') {
      if (logIndex < ANALYSIS_LOGS.length) {
        const timer = setTimeout(() => {
          setLogIndex(prev => prev + 1);
        }, 400);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => {
          setStep('results');
        }, 800);
      }
    }
  }, [step, logIndex]);

  return (
    <div className="min-h-screen w-full pb-12 animate-fade-in bg-slate-50">
      
      {/* Pro Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between mb-8 shadow-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold">
            <ArrowLeft className="h-5 w-5 mr-2" /> Exit
          </Button>
          <div className="h-6 w-px bg-slate-300" />
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center shadow-sm">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <div>
               <span className="font-heading font-bold text-slate-900 block leading-none text-lg">IITIAN TRADING BOT</span>
               <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">Pro Terminal v1.0</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-700 tracking-wide">SYSTEM ONLINE</span>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center shadow-lg ring-2 ring-white">
            <span className="font-bold text-xs text-white">USR</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Main Workspace */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Input Bar */}
            <Card className="border-slate-200 shadow-sm bg-white">
              <CardContent className="p-5 flex flex-col md:flex-row gap-5 items-end">
                <div className="w-full md:w-2/5 space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Stock Symbol</label>
                  <div className="relative">
                    <Input 
                      value={stockName} 
                      onChange={(e) => setStockName(e.target.value.toUpperCase())}
                      placeholder="Search..." 
                      className="pl-4 border-slate-300 font-heading font-bold text-lg h-12 focus:ring-blue-600 focus:border-blue-600 bg-slate-50 text-slate-900"
                    />
                    <div className="absolute right-3 top-3.5 text-xs font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">NSE</div>
                  </div>
                </div>
                <div className="w-full md:w-3/5 space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider ml-1">Timeframe Configuration</label>
                  <div className="flex bg-slate-100 rounded-lg p-1.5 border border-slate-200">
                    {['15m', '1H', '4H', '1D', '1W'].map((tf) => (
                      <button key={tf} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${tf === '1D' ? 'bg-white text-blue-700 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}`}>
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chart Viewport */}
            <div className="relative aspect-[16/9] w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-200/50 group">
              
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

              {/* Empty State */}
              {step === 'upload' && !chartImage && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-20">
                   <div className="w-full max-w-md p-10 border-2 border-dashed border-slate-300 rounded-3xl bg-slate-50/80 hover:bg-blue-50/50 hover:border-blue-400 transition-all duration-300 cursor-pointer relative group-hover:scale-[1.01]">
                     <input 
                        type="file" 
                        accept="image/*" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                        onChange={handleFileUpload}
                     />
                     <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:shadow-blue-200 transition-shadow">
                        <Upload className="h-10 w-10 text-blue-600" />
                     </div>
                     <h3 className="text-2xl font-heading font-bold text-slate-800 mb-2">Drop Chart Screenshot</h3>
                     <p className="text-slate-500 text-base font-medium">Support for TradingView, Zerodha, AngelOne</p>
                   </div>
                 </div>
              )}

              {/* Chart Preview */}
              {chartImage && (
                <div className="relative w-full h-full bg-white">
                   <img src={chartImage} alt="Chart" className="w-full h-full object-contain" />
                   
                   {/* Scanner Effect */}
                   {step === 'analyzing' && (
                     <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)] animate-[scan_2s_ease-in-out_infinite]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="bg-white border border-slate-200 p-10 rounded-2xl text-center shadow-2xl">
                              <RefreshCw className="h-12 w-12 text-blue-600 mx-auto mb-5 animate-spin" />
                              <p className="text-slate-900 font-bold text-xl tracking-tight">Analyzing Structure...</p>
                              <p className="text-slate-400 text-sm font-mono mt-2 font-semibold">AI-ENGINE-V2</p>
                           </div>
                        </div>
                     </div>
                   )}

                   {/* Results Overlay Annotations */}
                   {step === 'results' && (
                      <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute top-[35%] right-[25%] px-4 py-1.5 bg-emerald-500 text-white text-sm font-bold rounded shadow-lg animate-bounce">
                            ENTRY ZONE
                         </div>
                         <div className="absolute top-[20%] right-[20%] w-[30%] h-0.5 bg-blue-500 border-t border-dashed border-blue-200" />
                         <div className="absolute top-[20%] right-[18%] text-blue-700 font-bold text-sm bg-white px-2 rounded shadow-sm">TARGET</div>
                      </div>
                   )}
                </div>
              )}
              
              {/* Start Button Overlay */}
              {chartImage && step === 'upload' && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                   <Button onClick={startAnalysis} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 rounded-full shadow-xl shadow-blue-600/30 transition-all hover:scale-105 hover:shadow-blue-600/50 text-lg">
                      <ScanLine className="mr-2 h-6 w-6" /> Run Analysis
                   </Button>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Data Panel */}
          <div className="lg:col-span-4 space-y-6 h-full flex flex-col">
            
            {/* Live Logs */}
            <Card className="bg-slate-900 text-slate-300 border-slate-800 h-[320px] flex flex-col shadow-xl overflow-hidden">
               <CardHeader className="py-3 px-4 border-b border-slate-800 bg-slate-950 flex flex-row justify-between items-center">
                  <div className="flex items-center gap-2">
                     <Terminal className="h-4 w-4 text-blue-400" />
                     <span className="text-xs font-mono font-bold text-slate-400">CONSOLE_OUTPUT</span>
                  </div>
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500" />
                     <div className="w-3 h-3 rounded-full bg-amber-500" />
                     <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
               </CardHeader>
               <CardContent className="p-5 font-mono text-sm space-y-3 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  <div className="text-slate-500">// Session started</div>
                  {step !== 'upload' && ANALYSIS_LOGS.slice(0, logIndex + 1).map((log, i) => (
                     <div key={i} className={`animate-fade-in ${i === logIndex ? 'text-blue-400 font-bold' : 'text-slate-400'}`}>
                        <span className="text-slate-600 mr-2">{`>`}</span>
                        {log}
                     </div>
                  ))}
                  {step === 'analyzing' && logIndex < ANALYSIS_LOGS.length && (
                     <div className="animate-pulse text-blue-500">_</div>
                  )}
                  {step === 'results' && (
                     <div className="text-emerald-400 font-bold mt-4 border-t border-slate-800 pt-2">
                        ✔ Analysis Complete.
                     </div>
                  )}
               </CardContent>
            </Card>

            {/* Results Dashboard */}
            {step === 'results' && (
              <div className="space-y-4 animate-fade-in-up flex-1">
                 
                 {/* Strategy Highlight */}
                 <div className="bg-gradient-to-br from-blue-700 to-indigo-700 rounded-xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <Zap className="h-28 w-28" />
                    </div>
                    <div className="relative z-10">
                       <div className="text-xs font-bold text-blue-200 mb-2 uppercase tracking-wider">Strategy Detected</div>
                       <div className="text-3xl font-heading font-bold mb-3">Momentum Breakout</div>
                       <p className="text-base text-blue-50 font-medium leading-relaxed opacity-90">Strong bullish candle closing above resistance with volume confirmation.</p>
                    </div>
                 </div>

                 {/* Key Metrics */}
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                       <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">SUITABILITY</div>
                       <div className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
                          <CheckCircle className="h-6 w-6" /> HIGH
                       </div>
                    </div>
                    <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                       <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">RISK LEVEL</div>
                       <div className="flex items-center gap-2 text-amber-600 font-bold text-xl">
                          <AlertTriangle className="h-6 w-6" /> MEDIUM
                       </div>
                    </div>
                 </div>

                 {/* Levels */}
                 <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                       <div className="p-4 text-center">
                          <div className="text-xs font-bold text-slate-500 uppercase">Entry</div>
                          <div className="text-slate-800 font-mono font-bold mt-1 text-lg">2450</div>
                       </div>
                       <div className="p-4 text-center bg-blue-50/50">
                          <div className="text-xs font-bold text-blue-600 uppercase">Target</div>
                          <div className="text-blue-800 font-mono font-bold mt-1 text-lg">2600</div>
                       </div>
                       <div className="p-4 text-center">
                          <div className="text-xs font-bold text-slate-500 uppercase">Stop</div>
                          <div className="text-slate-800 font-mono font-bold mt-1 text-lg">2380</div>
                       </div>
                    </div>
                    <button className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors">
                       <Download className="h-5 w-5" /> Download PDF Report
                    </button>
                 </div>

              </div>
            )}

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}
