'use client';
import React, { useState } from 'react';
import { JSX } from 'react';

// Temporary inline components (we'll use proper ones later)
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements; // allows 'div', 'h2', etc.
};

const CardTitle = ({ children, className = '', style, as: Tag = 'div' }: CardTitleProps) => (
  <Tag className={`text-2xl font-semibold leading-none tracking-tight ${className}`} style={style}>
    {children}
  </Tag>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, variant = "default", size = "default", disabled = false, className = "", style }: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "default" | "sm";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:scale-105 active:scale-95 cursor-pointer";
  const variants: Record<string, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground hover:shadow-md"
};
  const sizes: Record<string, string> = {
  default: "h-10 py-2 px-4",
  sm: "h-9 px-3 rounded-md"
};
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ placeholder, value, onChange, className = "" }: InputProps) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

interface TextareaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Select = ({ onValueChange, children, className = "" }: { 
  onValueChange?: (value: string) => void, 
  children: React.ReactNode,
  className?: string 
}) => (
  <div className={`relative ${className}`}>
    <select 
      className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onValueChange?.(e.target.value)}
    >
      {children}
    </select>
  </div>
);

const SelectValue = ({ placeholder }: { placeholder: string }) => (
  <option value="">{placeholder}</option>
);

const SelectContent = ({ children }: { children: React.ReactNode }) => children;

const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <option value={value}>{children}</option>
);

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}

const Checkbox = ({ checked, onCheckedChange }: CheckboxProps) => (

  <input
    type="checkbox"
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="h-4 w-4 rounded border border-primary text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
  />
);

// Icons (simplified)
const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const RefreshCw = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Copy = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Lightbulb = ({ className }: { className?: string }) => (
  <svg className={className} fill="nocurrentColorne" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const SurveyCreatorTool = () => {
  const [businessInfo, setBusinessInfo] = useState({
    businessType: '',
    industry: '',
    productService: '',
    currentCustomerKnowledge: '',
    uncertaintyAreas: [] as string[]
  });

  const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Question templates focused on customer discovery and ICP development
  const discoveryQuestions = {
    demographicsPsychographics: [
      "What is your role/title at your company?",
      "How big is your company (number of employees)?",
      "What industry are you in?",
      "How would you describe yourself professionally in one sentence?",
      "What are your biggest professional goals this year?",
      "What does a typical day look like for you?",
      "How long have you been in your current role?",
      "What are the biggest challenges in your industry right now?",
      "What makes your situation different from others who might use our solution?",
      "How would you categorize yourself compared to our typical customer?",
      "What unique challenges do you face that others in your position might not?"
    ],
    painPointsDiscovery: [
      "What was the biggest challenge you were facing before finding our solution?",
      "What keeps you up at night when it comes to [relevant area]?",
      "What's the most frustrating part of your current [relevant process]?",
      "If you could wave a magic wand and fix one thing about [relevant area], what would it be?",
      "What problems do you face that you haven't found a good solution for yet?",
      "What's the biggest obstacle preventing you from achieving your goals?",
      "What would you say is your number one business challenge right now?",
      "What aspect of [relevant area] takes up the most time in your day?",
      "What's the most expensive problem you're currently dealing with?",
      "What process in your work do you wish was completely automated?"
    ],
    jobsToBeDone: [
      "What were you trying to accomplish when you first looked for a solution like ours?",
      "What specific task or outcome are you hoping to achieve?",
      "What does success look like for you in [relevant area]?",
      "When you use our [product/service], what job are you 'hiring' it to do?",
      "What would have to happen for you to feel like this was a great investment?",
      "What are you hoping to be able to do that you can't do now?",
      "What outcome would make this purchase worth every penny?",
      "If you could accomplish one thing this quarter, what would it be?",
      "What capability are you missing that would transform your results?",
      "What would achieving your goal mean for you personally?",
      "What specific metrics or results do you track to measure success with solutions like ours?",
      "How do you know when a solution like this is working well for you?",
      "What would you measure 3 months after implementing our solution to prove ROI?"
    ],
    motivationsDrivers: [
      "What motivated you to start looking for a solution in the first place?",
      "What was the trigger event that made you realize you needed help?",
      "Why was solving this problem important to you personally?",
      "What consequences were you trying to avoid?",
      "What opportunities were you hoping to unlock?",
      "What finally pushed you over the edge to take action?",
      "What would happen if you didn't solve this problem?",
      "What made this a priority for you right now?",
      "How quickly do you need to see results to consider this purchase successful?",
      "How long had this problem been bothering you before you started looking for solutions?"
    ],
    purchasingBehavior: [
      "How do you typically research and evaluate solutions like ours?",
      "Who else was involved in the decision to work with us?",
      "What alternatives did you consider before choosing us?",
      "What was the most important factor in your decision?",
      "How long did it take you to make the decision to purchase?",
      "Where do you typically go to research solutions like this?",
      "What review sites or resources do you trust most?",
      "How do you typically justify purchases like this to others?",
      "What's your typical timeline for implementing new solutions like this?"
    ],
    hesitationsBarriers: [
      "What almost stopped you from moving forward with us?",
      "What concerns did you have before making the purchase?",
      "What questions did you need answered before feeling comfortable?",
      "What would have made the decision easier for you?",
      "What do people in your position typically worry about with solutions like ours?",
      "What was your biggest fear about making this investment?",
      "What objections did others raise when you proposed this solution?",
      "What red flags do you typically watch out for?"
    ],
    languageVoice: [
      "How would you describe our solution to a colleague in your own words?",
      "What words would you use to describe the problem we solve?",
      "If you were recommending us to someone, what would you say?",
      "How do you explain what we do to people who aren't familiar with it?",
      "What language resonates with you when talking about this type of solution?",
      "What's the elevator pitch you'd give for our solution?",
      "How would you describe the before and after of using our solution?",
      "What metaphor would you use to explain what we do?"
    ],
    categoryEntryPoints: [
      "In what situations do you find yourself needing a solution like ours?",
      "What typically happens right before you start looking for help with [relevant area]?",
      "What events or circumstances make this a priority for you?",
      "When during the year/quarter/month do you most need this type of solution?",
      "What has to go wrong for you to start actively seeking a solution?",
      "What triggers usually make you research new tools or services?",
      "At what point do you realize you need outside help?",
      "What warning signs tell you it's time to find a better solution?"
    ],
    competitors: [
      "What alternatives did you consider before choosing us?",
      "Who do you see as our main competitors?",
      "What made you choose us over other options in the market?",
      "What do you think we do better than our competitors?",
      "What do our competitors do better than us?",
      "How did you first hear about our competitors?",
      "What would make you switch to a competitor?",
      "How do you typically compare different solutions in our category?",
      "Before considering paid solutions, what free or DIY methods did you try?",
      "What internal processes or workarounds were you using before seeking outside help?",
      "Besides direct competitors, what completely different approaches did you consider?"
    ]
  };

// Force height recalculation after content changes
const recalculateHeight = () => {
  setTimeout(() => {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ type: 'resize', height }, '*');
  }, 150);
};

const generateQuestions = () => {
  const { businessType, industry, productService, uncertaintyAreas } = businessInfo;
  
  if (!businessType || !productService) return;

// Clear everything if no categories selected
if (uncertaintyAreas.length === 0) {
  setGeneratedQuestions([]);
  setSelectedQuestions([]);
  return;
}

let questionPool: string[] = [];
  
  // Add questions from selected categories
  if (uncertaintyAreas.includes('demographics')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.demographicsPsychographics, 4));
  }
  
  if (uncertaintyAreas.includes('pain-points')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.painPointsDiscovery, 5));
  }
  
  if (uncertaintyAreas.includes('jobs-to-be-done')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.jobsToBeDone, 5));
  }
  
  if (uncertaintyAreas.includes('purchasing')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.purchasingBehavior, 4));
  }
  
  if (uncertaintyAreas.includes('hesitations')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.hesitationsBarriers, 4));
  }
  
  if (uncertaintyAreas.includes('language')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.languageVoice, 4));
  }
  
  if (uncertaintyAreas.includes('triggers')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.categoryEntryPoints, 4));
  }

  if (uncertaintyAreas.includes('competitors')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.competitors, 4));
  }

  if (uncertaintyAreas.length === 0) {
    setGeneratedQuestions([]);
    return;
  }

  // Customize questions with business-specific terms
  const customizedQuestions = questionPool.map(q => {
    return q
      .replace('[product/service]', `"${productService}"` || 'product/service')
      .replace('[relevant area]', `"${getRelevantArea(industry)}"`)
      .replace('[relevant process]', `"${getRelevantProcess(industry)}"`);
  });

  // Remove duplicates from new questions AND existing questions
  const allExistingQuestions = [...generatedQuestions, ...selectedQuestions];
  const newUniqueQuestions = customizedQuestions.filter(q => !allExistingQuestions.includes(q));
  
  // Add new unique questions to existing pool
const updatedQuestions = [...generatedQuestions, ...newUniqueQuestions];

// Limit total available questions to 15
const limitedQuestions = updatedQuestions.slice(0, 15);

setGeneratedQuestions(limitedQuestions);
setTimeout(() => {
  const height = document.documentElement.scrollHeight;
  window.parent.postMessage({ type: 'resize', height }, '*');
}, 200);
};

  // Helper function to get random questions from a category
const getRandomQuestions = (questionArray: string[], count: number) => {
  if (!questionArray || !Array.isArray(questionArray)) {
    return [];
  }
  const shuffled = shuffleArray([...questionArray]);
  return shuffled.slice(0, count);
};

  // Helper function to shuffle array
  const shuffleArray = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getRelevantArea = (industry: string) => {
    const areaMap: { [key: string]: string } = {
      'marketing': 'marketing and lead generation',
      'software': 'software development and operations',
      'ecommerce': 'online sales and customer experience',
      'consulting': 'client delivery and business growth',
      'healthcare': 'patient care and operations',
      'education': 'teaching and student outcomes',
      'fitness': 'health and fitness goals',
      'finance': 'financial management'
    };
    return areaMap[industry] || 'your work';
  };

  const getRelevantProcess = (industry: string) => {
    const processMap: { [key: string]: string } = {
      'marketing': 'marketing process',
      'software': 'development workflow',
      'ecommerce': 'online store management',
      'consulting': 'client project delivery',
      'healthcare': 'patient care workflow',
      'education': 'teaching process',
      'fitness': 'fitness routine',
      'finance': 'financial planning process'
    };
    return processMap[industry] || 'current process';
  };

  const toggleUncertaintyArea = (area: string) => {
  setBusinessInfo(prev => {
    const newAreas = prev.uncertaintyAreas.includes(area)
      ? prev.uncertaintyAreas.filter(a => a !== area)
      : [...prev.uncertaintyAreas, area];
    
    // Only clear unselected questions from the available pool
    if (generatedQuestions.length > 0) {
      const unselectedQuestions = generatedQuestions.filter(q => !selectedQuestions.includes(q));
      if (unselectedQuestions.length > 0) {
        setGeneratedQuestions(selectedQuestions); // Keep only selected ones visible
      }
    }
    
    return {
      ...prev,
      uncertaintyAreas: newAreas
    };
  });
};

  const toggleQuestionSelection = (question: string) => {
  setSelectedQuestions(prev => {
    if (prev.includes(question)) {
      return prev.filter(q => q !== question);
    } else {
      return [...prev, question]; // No limit on selections
    }
  });
};

const toggleDropdown = (key: string) => {
  console.log('toggleDropdown called with key:', key);
  console.log('current openDropdown:', openDropdown);
  setOpenDropdown(openDropdown === key ? null : key);
};

  const exportSurvey = () => {
    const intro = `Customer Discovery Survey
    
Goal: Understanding our customers better to improve how we serve you.

Instructions: Please answer as openly and honestly as possible. Your responses will help us understand your needs and challenges better.

Questions:
`;
    const surveyText = intro + selectedQuestions.map((q, i) => `${i + 1}. ${q}\n`).join('\n');
    
    const blob = new Blob([surveyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'customer-discovery-survey.txt';
    a.click();
  };

const copyToClipboard = async () => {
  const intro = `Customer Discovery Survey\n\nQuestions:\n`;
  const surveyText = intro + selectedQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
  
  try {
    await navigator.clipboard.writeText(surveyText);
    alert('Survey copied to clipboard!');
  } catch {
  alert('Copy failed, but you can manually select and copy the text.');
}
};

  return (
  <div className="h-auto bg-white pt-2 pb-6">
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2 mb-6" style={{color: '#ff5757'}}>
  <strong>Your Free Customer Research Survey Generator</strong>
</CardTitle>
<div className="text-left space-y-3">
  <p className="text-gray-600 text-lg">
     <strong>Get strategic survey questions that uncover your customers' real motivations, pain points, and decision triggers.<br />Use their words to create content and copy that connects and converts.</strong>
  </p>
  <p className="text-base text-gray-500">
    <em>Inspired by proven frameworks from customer research and conversion experts like Jennifer Havice, Tony Ulwick, Peep Laja, & others.</em>
  </p>
</div>
        </CardHeader>
        <CardContent className="space-y-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <label className="block text-sm font-medium mb-2 text-black">Business Type</label>
      <Select onValueChange={(value: string) => setBusinessInfo(prev => ({...prev, businessType: value}))} className="">
        <option value="">Select business type</option>
<option value="B2B SaaS">B2B SaaS</option>
<option value="B2C E-commerce">B2C E-commerce</option>
<option value="Service Business">Service Business</option>
<option value="Consulting">Consulting</option>
<option value="Agency">Agency</option>
<option value="Physical Product">Physical Product</option>
<option value="Course/Education">Course/Education</option>
      </Select>
    </div>

    <div>
      <label className="block text-sm font-medium mb-2 text-black">Industry</label>
      <Input 
        placeholder="e.g., marketing, healthcare, finance"
        value={businessInfo.industry}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusinessInfo(prev => ({...prev, industry: e.target.value}))}
      />
    </div>
  </div>

  <div className="mt-4">
    <label className="block text-sm font-medium mb-2 text-black">Product/Service Description</label>
    <Input 
      placeholder="Brief description of your offer"
      value={businessInfo.productService}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusinessInfo(prev => ({...prev, productService: e.target.value}))}
    />
  </div>

  <div className="mt-4">
    <label className="block text-sm font-medium mb-2 text-black">Current Customer Knowledge</label>
    <Select onValueChange={(value: string) => setBusinessInfo(prev => ({...prev, currentCustomerKnowledge: value}))}>
        <SelectValue placeholder="How well do you know your customers?" />
      <SelectContent>
        <SelectItem value="very-little">Very little - just starting out</SelectItem>
        <SelectItem value="some-ideas">Some ideas but need validation</SelectItem>
        <SelectItem value="fairly-good">Fairly good understanding</SelectItem>
        <SelectItem value="very-good">Very good, looking for deeper insights</SelectItem>
      </SelectContent>
    </Select>
  </div>

  <div className="mt-4">
  <label className="block text-sm font-medium mb-4 text-black">What would you like to learn about your customers? (Select all that apply)</label>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {[
    { key: 'demographics', label: 'Demographics & Role Details', icon: '👤', tooltip: 'Understand who your customers are and their role in the buying process. Critical for targeting the right audience.' },
    { key: 'pain-points', label: 'Pain Points & Challenges', icon: '💡', tooltip: 'Discover what problems keep customers awake at night. These insights drive your strongest marketing messages.' },
    { key: 'jobs-to-be-done', label: 'Jobs-to-be-Done & Goals', icon: '🎯', tooltip: 'Learn what outcomes customers want to achieve. This reveals why they buy and how they measure success.' },
    { key: 'purchasing', label: 'Purchasing Behavior', icon: '👥', tooltip: 'Understand how customers research and make buying decisions. Essential for optimizing your sales process.' },
    { key: 'hesitations', label: 'Hesitations & Concerns', icon: '⚠️', tooltip: 'Identify what stops customers from buying. Address these concerns to remove conversion barriers.' },
    { key: 'language', label: 'Language & Voice', icon: '💬', tooltip: 'Capture the exact words customers use to describe problems and solutions. Use their language in your copy.' },
    { key: 'triggers', label: 'Purchase Triggers', icon: '⚡', tooltip: 'Find out what events push customers to take action. These moments reveal when prospects become buyers.' },
    { key: 'competitors', label: 'Competitors & Alternatives', icon: '🏆', tooltip: 'Discover what alternatives customers consider. Learn how to position against competition and DIY solutions.' }
  ].map(area => (
    <div key={area.key} className="relative">
      <div 
        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer min-h-[70px]"
        onClick={() => toggleDropdown(area.key)}
      >
        <div className="flex items-center space-x-3" onClick={(e) => e.stopPropagation()}>
          <Checkbox
            checked={businessInfo.uncertaintyAreas.includes(area.key)}
            onCheckedChange={() => toggleUncertaintyArea(area.key)}
          />
          <span className="text-lg">{area.icon}</span>
          <span className="text-sm text-black">{area.label}</span>
        </div>
        
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {openDropdown === area.key && (
        <>
          <div 
            className="fixed inset-0 z-5"
            onClick={() => setOpenDropdown(null)}
          />
          <div 
            className="absolute z-10 mt-1 p-3 rounded-lg shadow-lg border-2 max-w-xs"
            style={{ 
              backgroundColor: '#ff5757', 
              borderColor: '#ff5757',
              left: '0',
              right: '0'
            }}
          >
            <p className="text-sm font-bold text-white">
              {area.tooltip}
            </p>
          </div>
        </>
      )}
    </div>
  ))}
</div>
</div> 

  <div className="pt-4">
    <Button 
      onClick={generateQuestions}
      className="w-full"
      disabled={!businessInfo.businessType || !businessInfo.productService || businessInfo.uncertaintyAreas.length === 0}
      style={{backgroundColor: '#ff5757', borderColor: '#ff5757'}}
    >
      <RefreshCw className="w-4 h-4 mr-2" />
      {businessInfo.uncertaintyAreas.length === 0 ? 'Select categories first' : 'Generate Key Questions'}
    </Button>
  </div>
</CardContent>
      </Card>

      {generatedQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle as="h2" className="text-black">Recommended Questions</CardTitle>
            <p className="text-sm text-gray-600">
              Select questions you want to include in your survey. And don't worry, your selected questions will remain even after you generate more options.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedQuestions.length === generatedQuestions.length && generatedQuestions.length > 0}
                  onCheckedChange={(checked: boolean) => {
                    if (checked) {
                      setSelectedQuestions([...generatedQuestions]);
                    } else {
                      setSelectedQuestions([]);
                    }
                  }}
                />
                <span className="text-sm font-medium text-black">Select All Questions</span>
              </div>
              <Button 
                onClick={generateQuestions} 
                variant="outline" 
                size="sm"
                className="text-xs"
                style={{borderColor: '#ff5757', color: '#ff5757'}}
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Add More Questions
              </Button>
            </div>

            <div className="space-y-3 mb-4">
              {generatedQuestions.map((question, index) => (
                <div key={index} className={`flex items-start space-x-3 p-3 border rounded-lg ${selectedQuestions.includes(question) ? 'bg-red-50 border-red-200' : ''}`}>
                  <Checkbox
                    checked={selectedQuestions.includes(question)}
                    onCheckedChange={() => toggleQuestionSelection(question)}
                  />
                  <p className="text-sm flex-1 text-black">{question}</p>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button onClick={copyToClipboard} variant="outline" style={{borderColor: '#ff5757', color: '#ff5757'}}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Selected ({selectedQuestions.length})
              </Button>
              <Button onClick={exportSurvey} variant="outline" style={{borderColor: '#ff5757', color: '#ff5757'}}>
                <Download className="w-4 h-4 mr-2" />
                Export Survey
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {selectedQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle as="h2" className="text-black">Your Customer Survey Preview</CardTitle>
            <p className="text-sm text-gray-600">This survey will help you identify your ideal customer profile and understand their motivations</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {selectedQuestions.map((question, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm" style={{color: '#ff5757'}}>Question {index + 1}</p>
                  <p className="text-sm mt-1 text-black">{question}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle as="h2" className="text-black">Marketing & Customer Experience Survey Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <div>
            <p className="font-medium text-black"><strong><h3>How to get quality survey responses?</h3></strong></p>
            <ul className="mt-2 space-y-1">
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Ask customers who bought from you within the last 6 months.</strong> Recent buyers are more likely to remember their decision-making process and respond.
  </span>
</li>
             <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Keep surveys to 7-10 questions maximum.</strong> Longer surveys kill response rates.
    </span>
</li>
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Use open-ended questions that capture authentic customer language.</strong> (Yes/no questions don't reveal the insights needed for effective copy.)
    </span>
</li>
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Send surveys with direct subject lines like "Can you help me with some quick questions?"</strong> - Or use your brand-moderated Facebook Group, Subreddit, etc. And always mention the time commitment upfront: "Takes 5-7 minutes."
    </span>
</li>
  <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Frame it as helping you improve:</strong> "We're always working to better serve customers like you and improve our products/services based on real feedback."
    </span>
</li>
   <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>If needed, consider small incentives:</strong> Discount codes, early access, exclusive content, etc.
    </span>
</li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-black"><strong><h3>What to do with the responses?</h3></strong></p>
            <ul className="mt-2 space-y-1">
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Look for recurring language patterns in customer responses.</strong> The words they repeat become your messaging goldmine.
    </span>
</li>
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Identify common trigger events that pushed customers to buy.</strong> These can reveal high-value insights.
    </span>
</li>
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Note demographic patterns among your best customers.</strong> This data helps you tailor content to similar prospects.
    </span>
</li>
              <li className="text-black flex items-start">
  <span className="text-red-500 mr-2">→</span>
  <span>
    <strong>Inject their exact words into your copy and content:</strong> Website headlines, product descriptions, marketing emails, and more.
    </span>
</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="text-left p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100 flex items-center gap-4">
  <a href="https://www.8bitcontent.com" target="_blank" className="inline-block flex-shrink-0">
    <img src="/8BitContentCoralRed.svg" alt="8-Bit Content Logo" className="w-16 h-16" />
  </a>
  <div>
    <p className="text-gray-700 mb-3">
      Need help using these customer insights to improve your website and content marketing strategy?
    </p>
    <a href="https://www.8bitcontent.com/contact" target="_blank" className="block text-xl text-red-500 hover:text-red-600 hover:underline">
      Reach out to us for a quick intro!
    </a>
  </div>
</div>
    </div>
  </div>
);
};

export default SurveyCreatorTool;