import React, { useState } from 'react';
import { EXPERIENCE_STEPS } from '../data/coffeeData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = EXPERIENCE_STEPS[activeStepIndex];

  return (
    <section 
      id="experience" 
      aria-label="The Coffee Experience Journey"
      className="py-20 md:py-28 bg-[#1B120C] text-[#FBF9F5] border-b border-[#2C1E16]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#2C1E16] text-[#C4976E] border border-[#593E2B] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The Alchemy of Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FBF9F5] mb-3">
            From Soil to Sanctuary
          </h2>
          <p className="text-base text-[#DFD3C3] leading-relaxed">
            Trace the four intentional stages behind every single cup poured at Roast &amp; Cocoa.
          </p>
        </div>

        {/* 4 Interactive Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {EXPERIENCE_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                id={`exp-step-btn-${idx + 1}`}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-lg text-left transition-all duration-200 border flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#A86D3B] ${
                  isSelected
                    ? 'bg-[#2C1E16] border-[#A86D3B] text-[#FBF9F5] shadow-sm'
                    : 'bg-[#140D07] border-[#2C1E16] text-[#9E897B] hover:text-[#DFD3C3] hover:border-[#3A281E]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[11px] font-mono font-semibold tracking-wider ${
                    isSelected ? 'text-[#C4976E]' : 'text-[#7D5836]'
                  }`}>
                    0{idx + 1}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A86D3B]" />
                  )}
                </div>
                <h3 className={`font-serif text-sm sm:text-base font-bold leading-tight ${
                  isSelected ? 'text-[#FBF9F5]' : 'text-[#DFD3C3]'
                }`}>
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Experience Showcase Card (Solid Depth & Layering) */}
        <div className="bg-[#241812] border border-[#3A281E] rounded-xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Image Side */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] bg-[#140D07]">
              <img
                src={activeStep.image}
                alt={`${activeStep.title} - ${activeStep.subtitle}`}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
                key={activeStep.id}
              />
              <div className="absolute top-4 left-4 bg-[#1B120C] text-[#DFD3C3] px-3 py-1.5 rounded border border-[#3A281E] text-xs font-mono">
                {activeStep.subtitle}
              </div>
            </div>

            {/* Description Side */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#A86D3B] font-semibold block mb-1">
                  Stage 0{activeStepIndex + 1} of 04
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF9F5] tracking-tight">
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-base text-[#DFD3C3] leading-relaxed">
                {activeStep.description}
              </p>

              <div className="p-4 bg-[#1B120C] rounded-lg border border-[#3A281E]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C4976E] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#DFD3C3] leading-relaxed">
                    {activeStep.detail}
                  </p>
                </div>
              </div>

              {/* Navigation between steps */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#9E897B]">
                  Click each stage above to explore the craft
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % EXPERIENCE_STEPS.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C4976E] hover:text-[#FBF9F5] focus:outline-none focus:ring-1 focus:ring-[#A86D3B] px-2 py-1 rounded"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
