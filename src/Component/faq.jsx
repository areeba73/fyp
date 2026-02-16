import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "EmoTrack kaise kaam karta hai?",
      answer: "EmoTrack AI aur aapke inputs ka istemal karke aapke rozana ke emotions ko track karta hai aur aapko behtar mental health ke liye insights deta hai."
    },
    {
      question: "Kya mera data mahfooz hai?",
      answer: "Ji han, hum aapki privacy ka pura khayal rakhte hain. Aapka data encrypted hai aur sirf aap hi usay dekh sakte hain."
    },
    {
      question: "Kya main Doctors se rabta kar sakta hoon?",
      answer: "Bilkul! Humare platform par verified doctors maujood hain jinse aap apni reports share karke mashwara le sakte hain."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 md:my-20 px-4 md:px-6 pt-0 pb-2">
      {/* Heading - Responsive Text Sizes */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F357D] mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <p className="text-[#2F357D]/60 text-base md:text-lg">Aapke zehan mein uthne wale aam sawalon ke jawab.</p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="group overflow-hidden rounded-[20px] md:rounded-[25px] border border-white/30 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-white/20"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
            >
              <div className="flex items-center gap-3 md:gap-4">
                {/* Icon size adjusted for mobile */}
                <div className="p-2 bg-blue-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <HelpCircle size={20} className="md:w-6 md:h-6" />
                </div>
                <span className="text-base md:text-xl font-semibold text-[#2F357D] leading-tight">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                size={20}
                className={`text-[#2F357D] shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Answer with smooth height animation - max-height logic kept same */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-60 md:max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 md:p-6 pt-0 text-[#2F357D]/80 text-sm md:text-lg leading-relaxed border-t border-white/20 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;