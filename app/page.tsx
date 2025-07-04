'use client';
import React, { useState } from 'react';

// Temporary inline components (we'll use proper ones later)
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

const CardTitle = ({ children, className = "", style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} style={style}>{children}</h3>
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
      "What are the biggest challenges in your industry right now?"
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
      "What would achieving your goal mean for you personally?"
    ],
    motivationsDrivers: [
      "What motivated you to start looking for a solution in the first place?",
      "What was the trigger event that made you realize you needed help?",
      "Why was solving this problem important to you personally?",
      "What consequences were you trying to avoid?",
      "What opportunities were you hoping to unlock?",
      "What finally pushed you over the edge to take action?",
      "What would happen if you didn't solve this problem?",
      "What made this a priority for you right now?"
    ],
    purchasingBehavior: [
      "How do you typically research and evaluate solutions like ours?",
      "Who else was involved in the decision to work with us?",
      "What alternatives did you consider before choosing us?",
      "What was the most important factor in your decision?",
      "How long did it take you to make the decision to purchase?",
      "Where do you typically go to research solutions like this?",
      "What review sites or resources do you trust most?",
      "How do you typically justify purchases like this to others?"
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
      "How do you typically compare different solutions in our category?"
    ]
  };

const generateQuestions = () => {
  const { businessType, industry, productService, uncertaintyAreas } = businessInfo;
  
  if (!businessType || !productService) return;

  let questionPool: string[] = [];
  
  // ONLY add questions from selected categories
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

  // If no categories are selected, don't generate any questions
  if (uncertaintyAreas.length === 0) {
    setGeneratedQuestions([]);
    setSelectedQuestions([]);
    return;
  }

  // Remove duplicates and shuffle
  questionPool = [...new Set(questionPool)];
  questionPool = shuffleArray(questionPool);

  // Customize questions with business-specific terms
  const customizedQuestions = questionPool.map(q => {
    return q
      .replace('[product/service]', productService || 'product/service')
      .replace('[relevant area]', getRelevantArea(industry))
      .replace('[relevant process]', getRelevantProcess(industry));
  });

  // Filter out questions that are already selected to avoid duplicates
const newQuestions = customizedQuestions.filter(q => !selectedQuestions.includes(q));

// Combine existing selected questions with new ones, but limit total to 12
const availableSlots = Math.max(0, 12 - selectedQuestions.length);
const limitedNewQuestions = newQuestions.slice(0, availableSlots);
const combinedQuestions = [...selectedQuestions, ...limitedNewQuestions];
  
  setGeneratedQuestions(combinedQuestions);
  
  // If this is the first generation and no questions are selected, auto-select some
  if (selectedQuestions.length === 0) {
    setSelectedQuestions(customizedQuestions.slice(0, Math.min(6, customizedQuestions.length)));
  }
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
    setBusinessInfo(prev => ({
      ...prev,
      uncertaintyAreas: prev.uncertaintyAreas.includes(area)
        ? prev.uncertaintyAreas.filter(a => a !== area)
        : [...prev.uncertaintyAreas, area]
    }));
  };

  const toggleQuestionSelection = (question: string) => {
    setSelectedQuestions(prev => {
      if (prev.includes(question)) {
        return prev.filter(q => q !== question);
      } else if (prev.length < 10) {
        return [...prev, question];
      }
      return prev;
    });
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
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2" style={{color: '#ff5757'}}>
            <Users className="w-6 h-6" />
            Customer Discovery Survey Creator
          </CardTitle>
          <p className="text-center text-gray-600">Generate targeted questions to better understand your ideal customer profile - their pain points, jobs-to-be-done, purchasing hesitations/motivations, and more!</p>
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
      placeholder="Brief description of what you offer"
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
  <div className="grid grid-cols-2 gap-4">
    {[
      { key: 'demographics', label: 'Demographics & Role Details', icon: <Target className="w-4 h-4 text-gray-600" /> },
      { key: 'pain-points', label: 'Pain Points & Challenges', icon: <Lightbulb className="w-4 h-4 text-gray-600" /> },
      { key: 'jobs-to-be-done', label: 'Jobs-to-be-Done & Goals', icon: <Target className="w-4 h-4 text-gray-600" /> },
      { key: 'purchasing', label: 'Purchasing Behavior', icon: <Users className="w-4 h-4 text-gray-600" /> },
      { key: 'hesitations', label: 'Hesitations & Concerns', icon: <Lightbulb className="w-4 h-4 text-gray-600" /> },
      { key: 'language', label: 'Language & Voice', icon: <Users className="w-4 h-4 text-gray-600" /> },
      { key: 'triggers', label: 'Purchase Triggers', icon: <Target className="w-4 h-4 text-gray-600" /> },
      { key: 'competitors', label: 'Competitors & Alternatives', icon: <Users className="w-4 h-4 text-gray-600" /> }
    ].map(area => (
      <div key={area.key} className="flex items-center space-x-3">
        <Checkbox
          checked={businessInfo.uncertaintyAreas.includes(area.key)}
          onCheckedChange={() => toggleUncertaintyArea(area.key)}
        />
        <div className="flex items-center space-x-2">
  <div className="flex items-center">{area.icon}</div>
  <span className="text-sm text-black">{area.label}</span>
</div>
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
      {businessInfo.uncertaintyAreas.length === 0 ? 'Select categories first' : 'Generate Discovery Questions'}
    </Button>
  </div>
</CardContent>
      </Card>

      {generatedQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Available Questions</CardTitle>
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
            <CardTitle className="text-black">Customer Discovery Survey Preview</CardTitle>
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
          <CardTitle className="text-lg text-black">Customer Discovery Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <div>
            <p className="font-medium text-black">Survey Guidelines:</p>
            <ul className="mt-2 space-y-1">
              <li className="text-black">• Target customers who purchased/worked with you in the last 3-6 months</li>
              <li className="text-black">• Keep to 6-8 questions maximum for best response rates</li>
              <li className="text-black">• Focus on open-ended questions to capture authentic language</li>
              <li className="text-black">• Send with a clear, direct subject line asking for help</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium text-black">After collecting responses:</p>
            <ul className="mt-2 space-y-1">
              <li className="text-black">• Look for patterns in pain points and language used</li>
              <li className="text-black">• Identify common motivations and trigger events</li>
              <li className="text-black">• Note demographic patterns among your best customers</li>
              <li className="text-black">• Use their exact words in your marketing and website copy</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="text-center p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100">
  <p className="text-gray-700 mb-3">
    Need help turning these customer insights into better websites and content marketing strategy?
  </p>
  <a
    href="mailto:start@8bitcontent.com?subject=Customer Survey Tool – Help with insights"
    className="block text-xl font-bold text-red-600 hover:text-red-700 hover:underline"
  >
    Reach out to us at 8-Bit Content today!
  </a>
</div>
    </div>
  </div>
);
};

export default SurveyCreatorTool;