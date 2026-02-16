import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import bg from "../assets/bg.jpeg";

const Result = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-fixed bg-center relative font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-32">
        {/* Main Outer Container - Ultra Glassmorphism */}
        <div className="w-full max-w-[900px] bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[50px] p-4 md:p-8 shadow-2xl flex flex-col gap-6">
          
          {/* Section 1: Top Status Header */}
          <div className="bg-white/80 rounded-[35px] p-8 shadow-sm border border-white/50">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2F357D] mb-4">
              You're Feeling <span className="text-[#FF5E5E]">Stressed</span>
            </h2>
            <p className="text-[#718096] text-base md:text-lg leading-relaxed max-w-xl">
              It looks like you're experiencing <span className="text-[#FF5E5E] font-semibold">high</span> stress levels. Remember to take a deep breath.
            </p>
          </div>

         {/* Section 2: Emoji & Metrics Grid (Modified for Low/Medium/High) */}
<div className="bg-white/80 rounded-[35px] p-8 shadow-sm border border-white/50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  
  {/* Left: Emoji & Result Label */}
  <div className="flex items-center gap-6">
    {/* Emoji box with theme-based glow */}
    <div className="text-6xl p-4 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
       😟 
    </div>
    <div>
      <p className="text-[#718096] text-xs uppercase tracking-[0.2em] font-bold mb-1 opacity-70">Analysis Result</p>
      {/* Yahan 'High' ki jagah aap dynamic text use kar sakte hain */}
      <p className="text-[#2F357D] text-2xl font-bold">
        Stress Level: <span className="text-[#FF5E5E]">High</span>
      </p>
    </div>
  </div>

  {/* Right: Progress Indicator based on Low/Med/High */}
  <div className="space-y-4">
     <div className="flex justify-between items-center px-1">
        <span className="text-[#718096] text-xs font-bold tracking-wider uppercase opacity-60">Intensity Scale</span>
        {/* Percentage text (High ke liye 75%+, Medium 50%, Low 25%) */}
        <span className="text-[#FF5E5E] text-sm font-bold">75%</span>
     </div>
     
     {/* Progress Track */}
     <div className="w-full h-5 bg-gray-100/50 rounded-full overflow-hidden p-1 border border-gray-200/50 shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-[#FF8A8A] via-[#FF5E5E] to-[#E53E3E] rounded-full shadow-[0_0_15px_rgba(255,94,94,0.2)] transition-all duration-1000"
          style={{ width: '75%' }} // Low: 25%, Medium: 50%, High: 75-100%
        ></div>
     </div>
     
     {/* Scale Indicators */}
     <div className="flex justify-between px-2 text-[10px] font-bold text-[#A0AEC0] uppercase tracking-tighter">
        <span>Low</span>
        <span>Medium</span>
        <span className="text-[#FF5E5E]/60">High</span>
     </div>
  </div>
</div>

          {/* Section 3: Action Suggestions */}
          <div className="bg-[#EEF2FF]/60 backdrop-blur-md rounded-[35px] p-8 border border-white/60">
            <h3 className="text-[#2F357D] text-lg font-semibold mb-8 text-center">
              Would you like to explore some ways to feel better?
            </h3>
            
            {/* Horizontal Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-[#2F357D] hover:bg-[#2F357D] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg shadow-blue-200">
                <span>💬</span> Talk to Chatbot
              </button>
              
              <button className="flex items-center gap-2 bg-white/80 hover:bg-white text-[#2F357D] border border-[#2F357D]/20 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm">
                <span>🔍</span> View Suggestions
              </button>

              <button className="flex items-center gap-2 bg-white/80 hover:bg-white text-[#2F357D] border border-[#2F357D]/20 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm">
                <span>🩺</span> Find a Doctor
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Result;