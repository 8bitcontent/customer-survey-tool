'use client';
import React, { useState } from 'react';
import { JSX } from 'react';

interface SurveyTemplate {
  title: string;
  description: string;
  icon: string;
  labels: string[];  // ADD THIS LINE
  questions: string[];
}

interface SurveyTemplates {
  [key: string]: SurveyTemplate;
}

// Temporary inline components (we'll use proper ones later)
const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Made event parameter required
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
  industry: '',
  productService: '',
  uncertaintyAreas: [] as string[]
});

const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([]);
const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
const [selectedTemplate, setSelectedTemplate] = useState('');
const [showTemplateOptions, setShowTemplateOptions] = useState(false);
const [fillGapsCategory, setFillGapsCategory] = useState('any');
const [showPreview, setShowPreview] = useState(false);

  // Question templates focused on customer discovery and ICP development
  const discoveryQuestions = {
    demographicsPsychographics: [
      "What is your role/title at your company?",
      "How big is your company (number of employees)?",
      "What industry are you in?",
      "How would you describe your professional identity or approach to your role?",
      "What are your biggest professional goals this year?",
      "What does a typical day look like for you?",
      "How long have you been in your current role?",
      "What are the biggest challenges in your industry right now?",
      "What makes your situation different from others who might use our solution?",
      "How would you categorize yourself compared to our typical customer?",
      "What personal values or priorities (e.g., efficiency, creativity, collaboration) shape your professional decisions?",
      "What types of content (e.g., blogs, videos, webinars) do you rely on for professional development or decision-making?",
      "What unique challenges do you face that others in your position might not?"
    ],
    painPointsDiscovery: [
      "What was the biggest challenge you were facing before finding our solution?",
      "What keeps you up at night when it comes to [relevant area]?",
      "What’s the most frustrating part of your [content creation/customer engagement/sales process] that impacts your results?",
      "If you could wave a magic wand and fix one thing about [relevant area], what would it be?",
      "What problems do you face that you haven't found a good solution for yet?",
      "What adjacent problems do you face that we don't currently solve?",
      "What's the biggest obstacle preventing you from achieving your goals?",
      "What would you say is your number one business challenge right now?",
      "What aspect of [relevant area] takes up the most time in your day?",
      "What's the most expensive problem you're currently dealing with?",
      "On a scale of 1-10, how severe is this challenge for your team?",
      "What part of working with us could be improved?",
      "What's the biggest frustration you've experienced with our service?",
      "How do these challenges affect your team’s performance or business outcomes (e.g., revenue, customer satisfaction)?",
      "What process in your work do you wish was completely automated?"
    ],
    jobsToBeDone: [
      "What were you trying to accomplish when you first looked for a solution like ours?",
      "What specific task or outcome are you hoping to achieve?",
      "What specific outcomes (e.g., time saved, increased leads, better engagement) would make this solution a success for you?",
      "When you use our [product/service], what job are you 'hiring' it to do?",
      "What would have to happen for you to feel like this was a great investment?",
      "What are you hoping to be able to do that you can't do now?",
      "What outcome would make this purchase worth every penny?",
      "If you could accomplish one thing this quarter, what would it be?",
      "How long did it take you to see value from our solution?",
      "What capability are you missing that would transform your results?",
      "What would achieving your goal mean for you personally?",
      "What features do you use most often and why?",
      "What would prevent you from achieving this job with our solution?",
      "How would achieving this job impact you personally (e.g., less stress, more recognition) or your team’s perception in the organization?",
      "Before finding our solution, what workarounds or tools were you using to get this job done, and what were their limitations?",
      "What specific metrics or results do you track to measure success with solutions like ours?",
      "How do you know when a solution like this is working well for you?",
      "What would you measure 3 months after implementing our solution to prove ROI?"
    ],
    motivationsDrivers: [
      "What specific event or goal motivated you to seek a solution?",
      "What was the trigger event that made you realize you needed help?",
      "Why was solving this problem important to you personally?",
      "What consequences were you trying to avoid?",
      "What opportunities were you hoping to unlock?",
      "What finally pushed you over the edge to take action?",
      "How does solving this problem align with your long-term business or career goals?",
      "What finally pushed you over the edge to take action?",
      "What external factors (e.g., competitor actions, industry trends, peer recommendations) influenced your decision to seek a solution?",
      "What would happen if you didn't solve this problem?",
      "What made this a priority for you right now?",
      "How quickly do you need to see results to consider this purchase successful?",
      "How long had this problem been bothering you before you started looking for solutions?"
    ],
    purchasingBehavior: [
      "How do you typically research and evaluate solutions like ours?",
      "Who else was involved in the decision to work with us?",
      "What information would have shortened your decision-making process?",
      "What alternatives did you consider before choosing us?",
      "What would have made the sales process easier for you?",
      "Which online platforms (e.g., Google, LinkedIn, industry forums) do you use to research solutions like ours?",
      "What was the most important factor (e.g., cost, features, ease of use) in choosing our solution over others?",
      "What budget constraints or approval processes influenced your purchasing decision?",
      "How long did it take you to make the decision to purchase, and what information or experience would have shortened it?",
      "Where do you typically go to research solutions like this?",
      "What review sites or resources do you trust most?",
      "How do you typically justify purchases like this to others?",
      "What's your typical timeline for implementing new solutions like this and what resources could help simplify the implementation process?"
    ],
    hesitationsBarriers: [
      "What almost stopped you from moving forward with us?",
      "What were your biggest concerns or fears about choosing our solution, and how were they addressed?",
      "What questions did you need answered before feeling comfortable?",
      "Were there any concerns about our pricing before purchasing?",
      "What would have made the decision easier for you?",
      "What red flags do you typically watch out for when evaluating vendors?",
      "What could make you switch to a competitor?",
      "What was the biggest obstacle during implementation?",
      "What concerns did you have about implementing or adopting our solution (e.g., time, training, integration)?",
      "What do people in your position typically worry about with solutions like ours?",
      "How did you overcome any emotional hesitations (e.g., fear of change, risk of failure) about choosing our solution?",
      "What objections did others raise when you proposed this solution?",
      "What red flags do you typically watch out for?"
    ],
    languageVoice: [
      "How would you describe our solution to a colleague in your own words?",
      "What words would you use to describe the problem we solve?",
      "If you were recommending us to someone, what would you say?",
      "How would you describe your experience from first contact to implementation?",
      "What tone or style (e.g., technical, conversational, inspirational) resonates most when we communicate about our solution?",
      "How do you explain what we do to people who aren't familiar with it?",
      "What language resonates with you when talking about this type of solution?",
      "How do you typically share recommendations about solutions like ours (e.g., email, social media, in-person)?",
      "What's the elevator pitch you'd give for our solution?",
      "What messaging resonated most with you in our recent communications?",
      "How would you describe our solution to someone who's never heard of it?",
      "How would you describe the before and after of using our solution?",
      "What analogy or metaphor would you use to explain our solution’s value to a colleague?"
    ],
    categoryEntryPoints: [
      "In what situations do you find yourself needing a solution like ours?",
      "What typically happens right before you start looking for help with [relevant area]?",
      "What events or circumstances make this a priority for you?",
      "When during the year/quarter/month do you most need this type of solution?",
      "What prompted you to engage with our recent [campaign/launch/offer]?",
      "What has to go wrong for you to start actively seeking a solution?",
      "What specific event or failure (e.g., a failed campaign, lost sale) prompted you to seek a solution like ours?",
      "What specific triggers (e.g., budget approval, new project, leadership directive) prompt you to research tools like ours?",
      "Are there specific times of the year or business cycles when this need becomes more urgent?",
      "At what point do you realize you need outside help?",
      "Were there any new trends in your industry that created new needs for solutions like ours?",
      "What warning signs tell you it's time to find a better solution?"
    ],
    competitors: [
      "What alternatives did you consider before choosing us?",
      "Who do you see as our main competitors?",
      "Were there any specific features or benefits that our competitors lacked that led you to choose us?",
      "What made you choose us over other options in the market?",
      "Are there any emerging tools, technologies, or in-house solutions you considered as alternatives to ours?",
      "What do you think we do better than our competitors?",
      "What do you think would make this solution worth paying more for?",
      "What features do our competitors offer that you wish we provided?",
      "What specific features or experiences do our competitors offer that you wish we provided?",
      "How did you first hear about our competitors?",
      "What other departments or teams could benefit from our solution?",
      "What would make you switch to a competitor?",
      "How do you typically compare different solutions in our category?",
      "Before considering paid solutions, what free or DIY methods did you try?",
      "What internal processes or workarounds were you using before seeking outside help?",
      "Besides direct competitors, what completely different approaches did you consider?"
    ]
  };

  // Updated surveyTemplates with labels for filtering and display
const surveyTemplates: SurveyTemplates = {
  'new-business': {
    title: 'New Business (No Existing Customers)',
    description: 'Survey potential customers: email subscribers, industry contacts, niche communities, and target demographics',
    icon: '🚀',
    labels: ['Market & Customer Fit', 'Positioning & Differentiation'],
    questions: [
      "What problem are you currently facing that you're looking to solve?",
      "What solutions have you tried before, and what didn't work about them?",
      "When you research solutions like this, what do you typically search for?",
      "What would have to happen for a solution to be worth the investment?",
      "What concerns do you typically have when evaluating new solutions?"
    ]
  },
  'existing-product': {
    title: 'Existing Product (Current Customers)',
    description: 'Learn from your customers why they chose you and how to attract more customers like them',
    icon: '✅',
    labels: ['Messaging & Language Insights', 'Voice of Customer'],
    questions: [
      "What problem were you trying to solve before finding our solution?",
      "What alternatives did you consider before choosing us?",
      "What almost stopped you from moving forward with us?",
      "How would you describe our solution to a colleague in your own words?",
      "What specific outcome has made this purchase worth it for you?"
    ]
  },
  'competitive-research': {
    title: 'Competitive Research (Market Analysis)',
    description: 'Understand your competitive landscape and identify positioning opportunities against alternatives',
    icon: '🏆',
    labels: ['Positioning & Differentiation', 'Voice of Customer'],
    questions: [
      "What alternatives did you consider before choosing us?",
      "What made you choose us over other options in the market?",
      "What do you think we do better than our competitors?",
      "What features do our competitors offer that you wish we provided?",
      "How do you typically compare different solutions in our category?",
      "What would make you switch to a competitor?"
    ]
  },
  'content-strategy': {
    title: 'Content Strategy (Messaging Focus)',
    description: 'Capture the exact language, messaging, and voice insights customers use for better copy and content',
    icon: '💬',
    labels: ['Messaging & Language Insights', 'Voice of Customer'],
    questions: [
      "How would you describe the problem we solve to someone who's never heard of it?",
      "If you were recommending us to a colleague, what would you say?",
      "What words would you use to describe our solution?",
      "What was the trigger event that made you start looking for help?",
      "What tone or communication style resonates most with you when discussing solutions like ours?"
    ]
  },
  'customer-satisfaction': {
    title: 'Customer Satisfaction & Experience',
    description: 'Measure satisfaction levels and identify specific experience improvement opportunities',
    icon: '😊',
    labels: ['Voice of Customer', 'Retention & Loyalty Signals'],
    questions: [
      "What part of working with us exceeded your expectations?",
      "What was your first impression of our company/solution?",
      "What's the biggest frustration you've experienced with our service?",
      "What part of working with us could be improved?",
      "What would make you more likely to choose us again?"
    ]
  },
  'sales-optimization': {
    title: 'Sales Process Optimization',
    description: 'Improve sales effectiveness and reduce sales cycle length by understanding the buying journey',
    icon: '📈',
    labels: ['Sales & Conversion Drivers', 'Messaging & Language Insights'],
    questions: [
      "What information would have shortened your decision-making process?",
      "Who else was involved in the decision to work with us?",
      "What would have made the sales process easier for you?",
      "What red flags do you typically watch out for when evaluating vendors?",
      "What finally pushed you over the edge to take action?"
    ]
  },
  'feature-development': {
    title: 'Feature Development & Product',
    description: 'Guide product roadmap decisions with customer-driven insights about feature usage and gaps',
    icon: '⚡',
    labels: ['Product & UX Feedback', 'Positioning & Differentiation'],
    questions: [
      "What are the top 3 benefits you receive from our solution?",
      "What features do our competitors offer that you wish we provided?",
      "What capability are you missing that would transform your results?",
      "What features do you use most often and why?",
      "What would you change about our solution if you could wave a magic wand?"
    ]
  }
};

// Filter categories with colors
const filterCategories = [
  { key: 'all', label: 'All Templates', color: 'gray' },
  { key: 'voice-of-customer', label: '💬 Voice of Customer', color: 'blue' },
  { key: 'messaging-language', label: '🗣️ Messaging & Language', color: 'purple' },
  { key: 'positioning', label: '🎯 Positioning & Differentiation', color: 'green' },
  { key: 'sales-conversion', label: '📈 Sales & Conversion', color: 'red' },
  { key: 'retention-loyalty', label: '🔄 Retention & Loyalty', color: 'orange' },
  { key: 'product-feedback', label: '⚙️ Product & UX Feedback', color: 'indigo' }
];

// Add filter state to your component
const [selectedFilter, setSelectedFilter] = useState('');

// Filter function
const getFilteredTemplates = () => {
  // If no filter selected or filter is empty string, don't show any templates
  if (!selectedFilter || selectedFilter === '') return [];
  
  // If "all" is selected, show all templates
  if (selectedFilter === 'all') return Object.entries(surveyTemplates);
  
  const filterMap: { [key: string]: string } = {
    'voice-of-customer': 'Voice of Customer',
    'messaging-language': 'Messaging & Language Insights',
    'positioning': 'Positioning & Differentiation',
    'sales-conversion': 'Sales & Conversion Drivers',
    'retention-loyalty': 'Retention & Loyalty Signals',
    'product-feedback': 'Product & UX Feedback'
  };
  
  const targetLabel = filterMap[selectedFilter];
  return Object.entries(surveyTemplates).filter(([_, template]) => 
    template.labels.includes(targetLabel)
  );
};

// Label color mapping
const getLabelColor = (label: string) => {
  const colorMap: { [key: string]: string } = {
    'Voice of Customer': 'bg-blue-50 text-blue-600 border border-blue-100',
    'Messaging & Language Insights': 'bg-purple-50 text-purple-600 border border-purple-100',
    'Positioning & Differentiation': 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    'Sales & Conversion Drivers': 'bg-rose-50 text-rose-600 border border-rose-100',
    'Retention & Loyalty Signals': 'bg-amber-50 text-amber-600 border border-amber-100',
    'Product & UX Feedback': 'bg-slate-50 text-slate-600 border border-slate-100',
    'Market & Customer Fit': 'bg-cyan-50 text-cyan-600 border border-cyan-100',
    'Perceived Value & Pricing': 'bg-yellow-50 text-yellow-600 border border-yellow-100'
  };
  return colorMap[label] || 'bg-gray-50 text-gray-600 border border-gray-100';
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

  // Helper function to get random questions from a category
const getRandomQuestions = (questionArray: string[], count: number) => {
  if (!questionArray || !Array.isArray(questionArray)) {
    return [];
  }
  const shuffled = shuffleArray([...questionArray]);
  return shuffled.slice(0, count);
};

// Force height recalculation after content changes
const recalculateHeight = () => {
  setTimeout(() => {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ type: 'resize', height }, '*');
  }, 150);
};

const generateQuestions = () => {
  console.log('generateQuestions called');
  const { industry, productService, uncertaintyAreas } = businessInfo;

  // If using a template, handle smart refill
  if (selectedTemplate) {
    console.log('=== FILL GAPS DEBUG ===');
    console.log('Template selected:', selectedTemplate);
    console.log('Generated questions:', generatedQuestions);
    console.log('Selected questions:', selectedQuestions);
    
    const template = surveyTemplates[selectedTemplate];
    
    // Get unselected questions (these are the gaps to fill)
    const unselectedQuestions = generatedQuestions.filter(q => !selectedQuestions.includes(q));
    console.log('Unselected questions:', unselectedQuestions);
    console.log('Number of gaps to fill:', unselectedQuestions.length);
    
    if (unselectedQuestions.length > 0) {
      console.log('Found gaps to fill, proceeding...');
      
      // Determine which questions to use for replacement based on fillGapsCategory
      let replacementPool: string[] = [];
      
      if (fillGapsCategory === 'any') {
        // Get all available questions from all categories
        replacementPool = [
          ...discoveryQuestions.demographicsPsychographics,
          ...discoveryQuestions.painPointsDiscovery,
          ...discoveryQuestions.jobsToBeDone,
          ...discoveryQuestions.purchasingBehavior,
          ...discoveryQuestions.hesitationsBarriers,
          ...discoveryQuestions.languageVoice,
          ...discoveryQuestions.motivationsDrivers,
          ...discoveryQuestions.competitors
        ];
      } else {
        // Get questions from specific category
        const categoryMap: { [key: string]: string[] } = {
  'demographics': discoveryQuestions.demographicsPsychographics,
  'pain-points': discoveryQuestions.painPointsDiscovery,
  'jobs-to-be-done': discoveryQuestions.jobsToBeDone,
  'purchasing': discoveryQuestions.purchasingBehavior,
  'hesitations': discoveryQuestions.hesitationsBarriers,
  'language': discoveryQuestions.languageVoice,
  'triggers': [...discoveryQuestions.motivationsDrivers, ...discoveryQuestions.categoryEntryPoints], // Combined both arrays
  'competitors': discoveryQuestions.competitors
};
        replacementPool = categoryMap[fillGapsCategory] || [];
      }
      
      // Filter out questions already in use
      const usedQuestions = [...generatedQuestions, ...selectedQuestions];
      const availableQuestions = replacementPool.filter(q => !usedQuestions.includes(q));
      
      // Get random replacement questions
      const shuffledAvailable = shuffleArray(availableQuestions);
      const replacementQuestions = shuffledAvailable.slice(0, unselectedQuestions.length);
      
      // Customize the replacement questions
      const customizedReplacements = replacementQuestions.map(q => {
        return q
          .replace('[product/service]', productService ? `"${productService}"` : 'product/service')
          .replace('[relevant area]', `"${getRelevantArea(industry)}"`)
          .replace('[relevant process]', `"${getRelevantProcess(industry)}"`);
      });
      
      // Create new list: selected questions + replacement questions
      const newQuestionsList = [...selectedQuestions, ...customizedReplacements];
      
      setGeneratedQuestions(newQuestionsList);
      
      // Trigger height recalculation
      setTimeout(() => {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'resize', height }, '*');
      }, 200);
      
      return;
      
    } else {
      console.log('No gaps to fill - all questions selected');
      // Just regenerate original template
      const customizedQuestions = template.questions.map(q => {
        return q.replace('[product/service]', productService ? `"${productService}"` : 'product/service');
      });
      
      setGeneratedQuestions(customizedQuestions);
      setSelectedQuestions(customizedQuestions);
      
      // Trigger height recalculation
      setTimeout(() => {
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'resize', height }, '*');
      }, 200);
      
      return;
    }
  }

  // Rest of your existing custom selection logic...
  let questionPool: string[] = [];
  
  // Add questions from selected categories
  if (uncertaintyAreas.includes('demographics')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.demographicsPsychographics, 8));
  }
  
  if (uncertaintyAreas.includes('pain-points')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.painPointsDiscovery, 8));
  }
  
  if (uncertaintyAreas.includes('jobs-to-be-done')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.jobsToBeDone, 8));
  }
  
  if (uncertaintyAreas.includes('purchasing')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.purchasingBehavior, 8));
  }
  
  if (uncertaintyAreas.includes('hesitations')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.hesitationsBarriers, 8));
  }
  
  if (uncertaintyAreas.includes('language')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.languageVoice, 8));
  }
  
  if (uncertaintyAreas.includes('triggers')) {
  questionPool.push(...getRandomQuestions([...discoveryQuestions.motivationsDrivers, ...discoveryQuestions.categoryEntryPoints], 8));
}

  if (uncertaintyAreas.includes('competitors')) {
    questionPool.push(...getRandomQuestions(discoveryQuestions.competitors, 8));
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

  // Always refresh unselected questions when button is clicked
  const unselectedQuestions = generatedQuestions.filter(q => !selectedQuestions.includes(q));

  if (unselectedQuestions.length > 0) {
    // Get fresh random questions that aren't duplicates
    const usedQuestions = [...generatedQuestions, ...selectedQuestions];
    const availableQuestions = customizedQuestions.filter(q => !usedQuestions.includes(q));
    
    // If we need more questions than available, get random ones from all questions
    const freshQuestions = availableQuestions.length >= unselectedQuestions.length 
      ? availableQuestions.slice(0, unselectedQuestions.length)
      : [...availableQuestions, ...customizedQuestions.filter(q => !selectedQuestions.includes(q))].slice(0, unselectedQuestions.length);
    
    // Stack selected questions at top, then new questions
    const updatedQuestions = [...selectedQuestions, ...freshQuestions];
    
    setGeneratedQuestions(updatedQuestions);
  } else {
    // If all questions are selected, add more unique questions
    const allExisting = [...generatedQuestions, ...selectedQuestions];
    const newQuestions = customizedQuestions.filter(q => !allExisting.includes(q));
    const moreQuestions = [...selectedQuestions, ...newQuestions].slice(0, 15);
    setGeneratedQuestions(moreQuestions);
  }

  // Trigger height recalculation
  setTimeout(() => {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ type: 'resize', height }, '*');
  }, 200);
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
    
    // Don't clear template or questions when user selects custom areas
    // This allows users to combine template + custom areas
    
    return {
      ...prev,
      uncertaintyAreas: newAreas
    };
  });
};

// Add the handleTemplateSelection function here (after line 522)
const handleTemplateSelection = (templateKey: string) => {
  const template = surveyTemplates[templateKey];
  
  if (selectedTemplate === templateKey) {
    // Deselect if clicking the same template
    setSelectedTemplate('');
    setGeneratedQuestions([]);
    setSelectedQuestions([]);
    setBusinessInfo(prev => ({...prev, uncertaintyAreas: []}));
  } else {
    // Select new template
    setSelectedTemplate(templateKey);
    
    // Customize questions with business-specific terms
    const customizedQuestions = template.questions.map(q => {
      return q.replace('[product/service]', `"${businessInfo.productService}"` || 'product/service');
    });
    
    setGeneratedQuestions(customizedQuestions);
    setSelectedQuestions(customizedQuestions); // Auto-select all template questions
    
    // DON'T clear custom uncertainty areas - let users combine them
    // setBusinessInfo(prev => ({...prev, uncertaintyAreas: []}));
  }
  
  // Trigger height recalculation
  setTimeout(() => {
    const height = document.documentElement.scrollHeight;
    window.parent.postMessage({ type: 'resize', height }, '*');
  }, 200);
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
    <em>Inspired by proven frameworks from customer research and conversion experts like Jennifer Havice, Tony Ulwick, Peep Laja, & others. Try our templates or scroll down to create your own!</em>
  </p>
</div>
        </CardHeader>
<CardContent className="space-y-8">
  {/* Quick Start Templates - Clean and focused */}
    
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
  <div className="flex items-center justify-between mb-3">
    <div>
      <h3 className="font-medium text-black flex items-center gap-2">
        🚀 Quick Start Templates
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        Get started instantly with proven survey templates for different business situations
      </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
  {selectedFilter && selectedFilter !== '' && (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        setSelectedFilter('');
        // Don't clear selectedTemplate or questions, just hide the templates
      }}
      className="text-blue-600 border-blue-300 text-xs"
    >
      Minimize Templates
    </Button>
  )}
  {selectedTemplate && (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        setSelectedTemplate('');
        setGeneratedQuestions([]);
        setSelectedQuestions([]);
        setBusinessInfo(prev => ({...prev, uncertaintyAreas: []}));
      }}
      className="text-red-600 border-red-300 text-xs"
    >
      Clear Template
    </Button>
  )}
</div>
  </div>

  {/* Compact Filter Dropdown */}
  <div className="mb-4">
  <select 
    className="flex h-10 w-full max-w-sm items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    value={selectedFilter}
    onChange={(e) => setSelectedFilter(e.target.value)}
  >
    <option value="" disabled>Choose Your Situation</option>
    {filterCategories.map(category => (
      <option key={category.key} value={category.key}>
        {category.label}
      </option>
    ))}
  </select>
</div>

  {/* Template Grid - Only show when templates are filtered or selected */}
  {(selectedFilter && selectedFilter !== '') ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {getFilteredTemplates().map(([key, template]) => (
        <div
          key={key}
          className={`p-3 border rounded-lg cursor-pointer transition-all ${
            selectedTemplate === key 
              ? 'bg-blue-100 border-blue-400' 
              : 'bg-white border-gray-200 hover:border-blue-300'
          }`}
          onClick={() => handleTemplateSelection(key)}
        >
          <div className="flex items-start space-x-2">
            <span className="text-lg flex-shrink-0">{template.icon}</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-black leading-tight mb-1">
                {template.title}
              </h4>
              <p className="text-xs text-gray-600 mt-1 mb-2 leading-relaxed">
                {template.description}
              </p>
              
              {/* Labels */}
              <div className="flex flex-wrap gap-1 mb-2">
                {template.labels.map((label, index) => (
                  <span 
                    key={index}
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getLabelColor(label)}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              
              <p className="text-xs text-blue-600">
                {template.questions.length} questions
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null}
</div>

  {/* Generate Button for custom questions only */}
  {selectedTemplate === '' && (
    <div className="border-t pt-6">
      <h3 className="text-lg font-medium text-black mb-4">
        🛠️ Custom Question Generator
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Or create your own custom survey by selecting specific research areas:
      </p>
      
      {/* Business Info Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-black">
            Industry <span className="text-gray-400">(optional)</span>
          </label>
          <Input 
            placeholder="e.g., marketing, healthcare, finance"
            value={businessInfo.industry}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusinessInfo(prev => ({...prev, industry: e.target.value}))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-black">
            Product/Service Description <span className="text-gray-400">(optional)</span>
          </label>
          <Input 
            placeholder="Brief description of your offer"
            value={businessInfo.productService}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusinessInfo(prev => ({...prev, productService: e.target.value}))}
          />
        </div>
      </div>

      {/* Custom Selection Areas */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-black mb-3">Choose Specific Research Areas</h4>
        <p className="text-sm text-gray-600 mb-4">
          Select the areas you want to focus your research on:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: 'demographics', label: 'Demographics & Role Details', icon: '👤', tooltip: 'Understand who your customers are, their role, and what drives their professional decisions. Critical for targeting and personalization.' },
            { key: 'pain-points', label: 'Pain Points & Challenges', icon: '💡', tooltip: 'Discover the specific problems and frustrations that drive customers to seek solutions. These insights become your strongest marketing messages.' },
            { key: 'jobs-to-be-done', label: 'Jobs-to-be-Done & Goals', icon: '🎯', tooltip: 'Understand what outcomes customers want to achieve and how they measure success. Reveals why they buy and what they value most.' },
            { key: 'purchasing', label: 'Purchasing Behavior', icon: '👥', tooltip: 'Understand how customers research, evaluate, and make buying decisions. Essential for optimizing your sales process and messaging.' },
            { key: 'hesitations', label: 'Hesitations & Concerns', icon: '⚠️', tooltip: 'Identify what stops customers from buying and address concerns that create friction. Critical for removing conversion barriers.' },
            { key: 'language', label: 'Language & Voice', icon: '💬', tooltip: 'Capture the exact words customers use to describe problems and solutions. Use their language in your copy and messaging.' },
            { key: 'triggers', label: 'Motivations & Triggers', icon: '⚡', tooltip: 'Discover what events and motivations push customers to take action. Reveals when prospects become active buyers.' },
            { key: 'competitors', label: 'Competitors & Alternatives', icon: '🏆', tooltip: 'Discover what alternatives customers consider and why they choose you. Learn how to position against competition and alternatives.' }
          ].map(area => (
  <div key={area.key} className="relative">
    <div 
      className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer min-h-[70px]"
    >
      {/* Checkbox area - simple click handler */}
<div className="flex items-center space-x-3">
  <Checkbox
    checked={businessInfo.uncertaintyAreas.includes(area.key)}
    onCheckedChange={() => toggleUncertaintyArea(area.key)}
  />
  <span className="text-lg">{area.icon}</span>
  <span 
    className="text-sm text-black cursor-pointer"
    onClick={() => toggleUncertaintyArea(area.key)}
  >
    {area.label}
  </span>
</div>
      
      {/* Tooltip trigger area - larger click area */}
      <div 
        className="flex-1 flex justify-end items-center pl-4 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent checkbox from being triggered
          toggleDropdown(area.key);
        }}
      >
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {/* Make the entire right side clickable for tooltip */}
    <div 
      className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        toggleDropdown(area.key);
      }}
    />
    
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

      {/* Generate Button for custom questions */}
      <Button 
        onClick={generateQuestions}
        className="w-full text-white font-bold text-sm sm:text-base py-3"
        disabled={businessInfo.uncertaintyAreas.length === 0}
        style={{
          backgroundColor: '#ff5757', 
          borderColor: '#ff5757',
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        <RefreshCw className="w-4 h-4 mr-2 flex-shrink-0" />
        Generate Custom Questions
      </Button>
    </div>
  )}
</CardContent>
      </Card>

      {(generatedQuestions.length > 0 || selectedQuestions.length > 0) && (
  <Card>
    <CardHeader>
      <CardTitle as="h2" className="text-black">
        {selectedTemplate 
          ? `${surveyTemplates[selectedTemplate].icon} ${surveyTemplates[selectedTemplate].title}`
          : 'Your Custom Questions'
        }
      </CardTitle>
      <p className="text-sm text-gray-600">
        {selectedTemplate ? (
          <>
            <strong>Template: {surveyTemplates[selectedTemplate].description}</strong><br />
            Select the questions you want to include in your survey.
          </>
        ) : (
          <>
            <strong>Custom questions based on your selected research areas.</strong><br />
            Select the questions you want to include in your survey.
          </>
        )}
      </p>
    </CardHeader>
    <CardContent>
      {/* Question Selection Interface */}
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
  
  {/* Only show refresh button for custom questions, not templates */}
  {!selectedTemplate && (
    <div className="flex items-center space-x-2">
      <Button 
        onClick={generateQuestions}
        variant="outline" 
        size="sm"
        className="text-xs px-2 py-1"
        style={{borderColor: '#ff5757', color: '#ff5757'}}
      >
        <RefreshCw className="w-3 h-3 mr-1 flex-shrink-0" />
        <span className="hidden sm:inline">Refresh Questions</span>
        <span className="sm:hidden">Refresh</span>
      </Button>
    </div>
  )}
</div>

      {/* Questions List */}
      <div className="space-y-3 mb-6">
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

      {/* Advanced Customization Dropdown - Only show if template is selected */}
      {selectedTemplate && (
        <div className="border-t pt-6 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-3">🎯 Need More Question Options?</h4>
            <p className="text-sm text-gray-600 mb-4">
              Want to add more questions or replace some template questions? Choose a category to get additional options:
            </p>
            
            <div className="mb-4">
  <p className="text-sm text-gray-600 mb-3">
    💡 <strong>How it works:</strong> Deselect any template questions you don't want, choose a category below, then click "Fill Gaps" to replace them with new questions from that category.
  </p>
</div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2">
  <div className="flex-1 w-full sm:w-auto min-w-0">
    <Select onValueChange={setFillGapsCategory}>
      <SelectValue placeholder="Replace unselected questions with..." />
      <SelectContent>
        <SelectItem value="any">🎯 Any category</SelectItem>
        <SelectItem value="demographics">👤 Demographics & Role - Who your customers are</SelectItem>
        <SelectItem value="pain-points">💡 Pain Points - Problems that drive them to seek solutions</SelectItem>
        <SelectItem value="jobs-to-be-done">🎯 Goals & Jobs - Outcomes they want to achieve</SelectItem>
        <SelectItem value="purchasing">👥 Purchasing Behavior - How they research and buy</SelectItem>
        <SelectItem value="hesitations">⚠️ Hesitations - What stops them from buying</SelectItem>
        <SelectItem value="language">💬 Language & Voice - Words they use to describe problems</SelectItem>
        <SelectItem value="triggers">⚡ Motivations - Events that push them to take action</SelectItem>
        <SelectItem value="competitors">🏆 Competitors - Alternatives they consider</SelectItem>
      </SelectContent>
    </Select>
  </div>
  
  <Button 
    onClick={generateQuestions}
    variant="outline" 
    size="sm"
    className="text-xs px-3 py-1 w-full sm:w-auto whitespace-nowrap"
    style={{borderColor: '#ff5757', color: '#ff5757'}}
  >
    <RefreshCw className="w-3 h-3 mr-1 flex-shrink-0" />
    Fill Gaps
  </Button>
</div>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
)}

      {selectedQuestions.length > 0 && (
  <Card>
    <CardHeader>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <CardTitle as="h2" className="text-black mb-3">Ready to Use Survey</CardTitle>
          <p className="text-sm text-gray-600 leading-relaxed">
            Copy this formatted version directly into Google Forms, Typeform, or email it to customers.
          </p>
        </div>
        <Button 
          onClick={() => setShowPreview(!showPreview)}
          variant="outline"
          size="sm"
          className="flex-shrink-0 mt-1"
          style={{borderColor: '#ff5757', color: '#ff5757'}}
        >
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </div>
    </CardHeader>
    {showPreview && (
      <CardContent>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="mb-4">
            <h3 className="font-medium text-black mb-2">Customer Discovery Survey</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Goal: Understanding our customers better to improve how we serve you.
              <br />
              Instructions: Please answer as openly as possible. Your responses help us understand your needs.
            </p>
          </div>
          <div className="space-y-4">
            {selectedQuestions.map((question, index) => (
              <div key={index}>
                <p className="font-medium text-sm" style={{color: '#ff5757'}}>
                  Question {index + 1}
                </p>
                <p className="text-sm mt-1 text-black leading-relaxed">{question}</p>
                <div className="mt-2 text-xs text-gray-500">
                  [Open text response]
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Move Copy/Export buttons to preview section */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={copyToClipboard} 
            variant="outline" 
            className="flex-1"
            style={{borderColor: '#ff5757', color: '#ff5757'}}
          >
            <Copy className="w-4 h-4 mr-2" />
            Copy Selected ({selectedQuestions.length})
          </Button>
          <Button 
            onClick={exportSurvey} 
            variant="outline" 
            className="flex-1"
            style={{borderColor: '#ff5757', color: '#ff5757'}}
          >
            <Download className="w-4 h-4 mr-2" />
            Export Survey
          </Button>
        </div>
      </CardContent>
    )}
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