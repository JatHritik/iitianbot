
import * as React from 'react';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerSection() {
  return (
    <section className="py-16 px-4 md:px-6 border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="p-4 bg-amber-50 rounded-xl flex-shrink-0 border border-amber-100">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg text-slate-900">Educational Disclaimer</h3>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                IITIAN TRADING BOT is an educational AI assistant. It does not provide investment advice or buy/sell recommendations.
                The entry/target zones shown are educational strategy interpretations, not trading calls.
                <span className="block mt-2 font-bold text-slate-800">Trading involves risk. Please consult a certified financial advisor before making investment decisions.</span>
              </p>
            </div>
        </div>
        <div className="text-center mt-10 text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} IITIAN TRADING BOT. All rights reserved.
        </div>
      </div>
    </section>
  );
}
