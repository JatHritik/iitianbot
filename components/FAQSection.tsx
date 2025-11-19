
import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is IITIAN TRADING BOT financial advice?',
    answer: 'No, IITIAN TRADING BOT is purely an educational tool. It provides strategy-based analysis for learning purposes only and does not constitute financial advice, buy/sell recommendations, or trading calls. Always consult a certified financial advisor before making investment decisions.',
  },
  {
    question: 'Is this suitable for beginners?',
    answer: 'Yes! IITIAN TRADING BOT is designed specifically for traders aged 35-65 who may not have extensive technical analysis experience. The interface is beginner-friendly with simple upload functionality, and all analysis outputs are presented in clear, easy-to-understand language.',
  },
  {
    question: 'How many charts can I upload?',
    answer: 'With the ₹5,999/year active plan, you can upload unlimited charts for analysis. There are no daily or monthly limits—analyze as many stocks as you need to support your educational learning journey.',
  },
  {
    question: 'What is the accuracy of the strategy engine?',
    answer: "The bot applies Hemant Jain's 13 proven technical analysis strategies based on chart patterns. However, no strategy can guarantee 100% accuracy as markets are inherently unpredictable. The analysis is meant for educational understanding of how different strategies interpret chart structures.",
  },
  {
    question: 'How does the bot choose strategies?',
    answer: 'IITIAN TRADING BOT automatically analyzes the uploaded chart and identifies which of the 13 strategies is most applicable based on the visible patterns, trends, support/resistance levels, and technical indicators present in the chart. The selected strategy is then applied to generate the educational analysis.',
  },
  {
    question: 'What upgrades will come later?',
    answer: 'Two advanced plans are planned for the future: the Guided Signals Plan (₹9,999/year) with WhatsApp/Email alerts and AI doubt assistance, and the Algo Execution Plan (₹25,000/year) with semi-automated execution capabilities. Launching 2 December.',
  },
  {
    question: 'Is this safe for 35–65 traders?',
    answer: 'Yes, IITIAN TRADING BOT is designed with this age group in mind. The interface uses large, readable typography (Poppins + Inter fonts), high-contrast colors for easy visibility, simple one-click chart upload, and clear analysis outputs without confusing jargon. All features prioritize clarity and ease of use.',
  },
];

export function FAQSection() {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
            <HelpCircle className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-900">
            Common <span className="text-blue-600">Questions</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="border border-slate-200 rounded-2xl bg-white px-8 transition-all duration-300 hover:shadow-lg hover:border-blue-300 data-[state=open]:border-blue-500 data-[state=open]:ring-1 data-[state=open]:ring-blue-500/20"
            >
              <AccordionTrigger className="text-left text-xl font-heading font-bold text-slate-800 hover:text-blue-700 py-6 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-slate-600 leading-relaxed pb-8 font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
