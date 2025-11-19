
import * as React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionContextProps {
  value?: string;
  onValueChange: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextProps | undefined>(undefined);

export const Accordion: React.FC<{
  type: 'single';
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  const [value, setValue] = React.useState<string>('');

  const handleValueChange = (newValue: string) => {
    setValue(prev => prev === newValue ? '' : newValue);
  };

  return (
    <AccordionContext.Provider value={{ value, onValueChange: handleValueChange }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<{
  value: string;
  className?: string;
  children: React.ReactNode;
}> = ({ value, className = '', children }) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.value === value;

  return (
    <div className={`border-b ${className}`} data-state={isOpen ? 'open' : 'closed'}>
       {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, { value });
        }
        return child;
       })}
    </div>
  );
};

export const AccordionTrigger: React.FC<{
  className?: string;
  children: React.ReactNode;
  value?: string;
}> = ({ className = '', children, value }) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.value === value;

  return (
    <button
      onClick={() => value && context?.onValueChange(value)}
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 ${className}`}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-slate-400" />
    </button>
  );
};

export const AccordionContent: React.FC<{
  className?: string;
  children: React.ReactNode;
  value?: string;
}> = ({ className = '', children, value }) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context?.value === value;

  if (!isOpen) return null;

  return (
    <div className={`overflow-hidden text-sm transition-all animate-fade-in ${className}`}>
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
