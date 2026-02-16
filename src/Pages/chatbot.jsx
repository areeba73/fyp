// import React from 'react';
// import Navbar from '../Component/Navbar'; 
// import Footer from '../Component/Footer'; 
// import bg from '../assets/bg.jpeg'; 

// const Chatbot = () => {
//   return (
//     <div className="relative min-h-screen w-full flex flex-col">
//       {/* Background Layer */}
//       <div 
//         className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className="absolute inset-0 bg-blue-50/20 backdrop-blur-[2px]"></div>
//       </div>

//       <Navbar />

//       <main className="flex-grow pt-32 md:pt-40 pb-20 px-[5%] flex items-center justify-center">
        
//         {/* Chatbot Container */}
//         <div className="w-full max-w-md h-[600px] md:h-[680px] bg-white/40 backdrop-blur-3xl rounded-[40px] shadow-2xl border border-white/60 flex flex-col overflow-hidden">
          
//           {/* Header */}
//           <div className="p-6 text-center border-b border-white/20 bg-white/10">
//             <div className="w-14 h-14 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-lg">
//               <span className="text-2xl">🤖</span>
//             </div>
//             <h2 className="text-lg font-black text-[#2F357D]">EmoBot</h2>
//             <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">● Online</p>
//           </div>

//           {/* Chat Area - Scrollbar Hidden via CSS */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//             <style>
//               {`
//                 .no-scrollbar::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}
//             </style>
            
//             {/* Bot Message */}
//             <div className="flex flex-col items-start">
//               <div className="bg-white/80 p-4 rounded-3xl rounded-tl-none shadow-sm max-w-[85%] border border-white/50">
//                 <p className="text-sm text-[#2F357D] font-medium leading-relaxed">
//                   Hi! I'm EmoBot. I'm here to support you. How are you feeling right now?
//                 </p>
//               </div>
//             </div>
            
//             {/* User Message */}
//             <div className="flex flex-col items-end">
//               <div className="bg-[#2F357D] p-4 rounded-3xl rounded-tr-none shadow-xl max-w-[85%] text-white">
//                 <p className="text-sm font-medium">I'm feeling a bit stressed lately.</p>
//               </div>
//             </div>

//             {/* Bot Message 2 */}
//             <div className="flex flex-col items-start">
//               <div className="bg-white/80 p-4 rounded-3xl rounded-tl-none shadow-sm max-w-[85%] border border-white/50">
//                 <p className="text-sm text-[#2F357D] font-medium leading-relaxed">
//                   I understand. Stress can be tough. Is it related to work or something personal?
//                 </p>
//               </div>
//             </div>

//             {/* Suggestions */}
//             <div className="grid grid-cols-1 gap-2 pt-4">
//               {["It's about my career", "Just personal issues", "I'm not sure"].map((txt, i) => (
//                 <button 
//                   key={i} 
//                   className="bg-white/40 hover:bg-white/80 transition-all py-3 px-5 rounded-2xl text-[11px] font-bold text-[#2F357D] border border-white/60 text-left"
//                 >
//                   {txt}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Input Area */}
//           <div className="p-5 bg-white/10">
//             <div className="relative flex items-center">
//               <input 
//                 type="text" 
//                 placeholder="Message EmoBot..." 
//                 className="w-full bg-white/90 border border-white rounded-full py-4 px-6 text-sm text-[#2F357D] shadow-lg focus:outline-none" 
//               />
//               <button className="absolute right-2 bg-[#2F357D] w-10 h-10 rounded-full text-white flex items-center justify-center shadow-md">
//                 ➤
//               </button>
//             </div>
//           </div>
//         </div>

//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Chatbot;




































// import React from 'react';
// import Navbar from '../Component/Navbar'; 
// import Footer from '../Component/Footer'; 
// import bg from '../assets/bg.jpeg'; 

// const Chatbot = () => {
//   return (
//     <div className="relative min-h-screen w-full flex flex-col">
//       {/* Background Layer */}
//       <div 
//         className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className="absolute inset-0 bg-blue-50/10 backdrop-blur-[1px]"></div>
//       </div>

//       <Navbar />

//       {/* Main Content - Expanded Container */}
//       <main className="flex-grow pt-24 md:pt-36 pb-10 px-4 md:px-[10%] flex items-center justify-center">
        
//         {/* Chatbot Container - max-w-6xl for wide look */}
//         <div className="w-full max-w-6xl h-[75vh] md:h-[80vh] bg-white/40 backdrop-blur-3xl rounded-[40px] shadow-2xl border border-white/60 flex flex-col overflow-hidden animate-in fade-in duration-700">
          
//           {/* Top Header - Simple & Wide */}
//           <div className="p-6 border-b border-white/20 bg-white/10 flex items-center justify-between px-8 md:px-12">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg text-2xl">
//                 🤖
//               </div>
//               <div>
//                 <h2 className="text-xl font-black text-[#2F357D] tracking-tight">EmoBot</h2>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                   <p className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Always Active</p>
//                 </div>
//               </div>
//             </div>
//             {/* Optional: Add a 'Clear Chat' or 'End Session' text button */}
//             <button className="text-[10px] font-black text-[#2F357D]/50 uppercase hover:text-red-500 transition-colors">
//               End Session
//             </button>
//           </div>

//           {/* Chat Area - Full Width Messages */}
//           <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
//             <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            
//             {/* Bot Message - Left Aligned */}
//             <div className="flex flex-col items-start">
//               <div className="bg-white/90 p-6 rounded-[35px] rounded-tl-none shadow-sm max-w-[85%] md:max-w-[60%] border border-white/50">
//                 <p className="text-sm md:text-base text-[#2F357D] font-medium leading-relaxed">
//                   Hi David! I'm your dedicated EmoBot. You have the floor—feel free to share anything on your mind. How are you feeling today?
//                 </p>
//               </div>
//               <span className="text-[9px] text-[#2F357D]/40 mt-2 ml-4 font-black uppercase">EmoBot • Official Support</span>
//             </div>

//             {/* User Message - Right Aligned */}
//             <div className="flex flex-col items-end">
//               <div className="bg-[#2F357D] p-6 rounded-[35px] rounded-tr-none shadow-2xl max-w-[85%] md:max-w-[60%] text-white">
//                 <p className="text-sm md:text-base font-medium leading-relaxed">
//                   I've been feeling a bit overwhelmed lately with the balance between work and personal health. It’s hard to stay focused.
//                 </p>
//               </div>
//               <span className="text-[9px] text-[#2F357D]/40 mt-2 mr-4 font-black uppercase">You • Sent</span>
//             </div>

//             {/* Suggestions Row - Wide Layout */}
//             <div className="pt-6">
//               <p className="text-[10px] font-black text-[#2F357D]/30 uppercase tracking-[0.3em] mb-4 text-center">Suggested Topics</p>
//               <div className="flex flex-wrap justify-center gap-3">
//                 {["Work-Life Balance", "Anxiety Relief", "Better Sleep", "Mindfulness Techniques", "Just Venting"].map((txt, i) => (
//                   <button 
//                     key={i} 
//                     className="bg-white/40 hover:bg-[#2F357D] hover:text-white transition-all duration-500 py-3 px-8 rounded-full text-[11px] font-black text-[#2F357D] border border-white shadow-sm active:scale-95"
//                   >
//                     {txt}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Wide Input Area */}
//           <div className="p-8 md:p-12 bg-white/10 border-t border-white/10">
//             <div className="max-w-4xl mx-auto relative flex items-center">
//               <input 
//                 type="text" 
//                 placeholder="Type your message here..." 
//                 className="w-full bg-white/95 border border-white rounded-[30px] py-6 px-10 text-sm md:text-base text-[#2F357D] shadow-2xl focus:outline-none focus:ring-4 ring-blue-500/10 placeholder:text-[#2F357D]/30" 
//               />
//               <button className="absolute right-4 bg-[#2F357D] hover:bg-indigo-900 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-90">
//                 <span className="text-2xl transform -rotate-45 translate-x-0.5 -translate-y-0.5">➤</span>
//               </button>
//             </div>
//           </div>
//         </div>

//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Chatbot;






import React from 'react';
import Navbar from '../Component/Navbar'; 
import Footer from '../Component/Footer'; 
import bg from '../assets/bg.jpeg'; 

const Chatbot = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Background Image Layer */}
      <div 
        className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-blue-50/30 backdrop-blur-[4px]"></div>
      </div>

      <Navbar />

      {/* Main Chat Content - No Box, Direct on Page */}
      <main className="flex-grow pt-32 md:pt-40 pb-32 px-4 md:px-[15%]">
        
        {/* Chat Header - Floating */}
        <div className="max-w-4xl mx-auto mb-12 flex items-center gap-6 animate-in fade-in slide-in-from-top-5 duration-700">
          <div className="w-16 h-16 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border border-white">
            <span className="text-4xl">🤖</span>
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#2F357D] tracking-tight">EmoBot</h2>
            <p className="text-sm font-bold text-blue-600/70 uppercase tracking-[0.3em]">AI Emotional Support</p>
          </div>
        </div>

        {/* Messages Area - Direct on screen */}
        <div className="max-w-4xl mx-auto space-y-10 mb-20">
          
          {/* Bot Message Bubble */}
          <div className="flex flex-col items-start group">
            <div className="bg-white/60 backdrop-blur-2xl p-6 md:p-8 rounded-[40px] rounded-tl-none shadow-xl border border-white/50 max-w-[90%] md:max-w-[75%] transition-transform hover:scale-[1.01]">
              <p className="text-base md:text-lg text-[#2F357D] font-medium leading-relaxed">
                Hello David! I'm your open space for thoughts today. There are no boxes here—just you and me. What's on your mind?
              </p>
            </div>
            <span className="text-[10px] text-[#2F357D]/50 mt-3 ml-6 font-black uppercase tracking-widest">EmoBot • Now</span>
          </div>

          {/* User Message Bubble */}
          <div className="flex flex-col items-end group">
            <div className="bg-[#2F357D] p-6 md:p-8 rounded-[40px] rounded-tr-none shadow-2xl max-w-[90%] md:max-w-[75%] text-white transition-transform hover:scale-[1.01]">
              <p className="text-base md:text-lg font-medium leading-relaxed italic">
                "I feel like the world is moving too fast and I just need a moment to breathe."
              </p>
            </div>
            <span className="text-[10px] text-[#2F357D]/50 mt-3 mr-6 font-black uppercase tracking-widest">You • Sent</span>
          </div>

          {/* Suggestions - Floating Buttons */}
          <div className="flex flex-wrap gap-3 pt-8 justify-center">
            {["Help me breathe", "Feeling overwhelmed", "I'm lonely", "Good news!"].map((txt, i) => (
              <button 
                key={i} 
                className="bg-white/40 backdrop-blur-lg hover:bg-[#2F357D] hover:text-white transition-all duration-500 py-3 px-8 rounded-full text-xs font-black text-[#2F357D] border border-white shadow-lg active:scale-95"
              >
                {txt}
              </button>
            ))}
          </div>

        </div>
      </main>

      {/* Floating Sticky Input Bar at Bottom */}
      <div className="fixed bottom-10 left-0 w-full px-4 md:px-[10%] z-50">
        <div className="max-w-4xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Type your heart out..." 
            className="w-full bg-white/70 backdrop-blur-3xl border border-white rounded-[35px] py-6 md:py-8 px-10 md:px-14 text-base md:text-lg text-[#2F357D] shadow-[0_20px_50px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-4 ring-blue-500/10 placeholder:text-[#2F357D]/30 transition-all" 
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#2F357D] hover:bg-indigo-900 w-12 h-12 md:w-16 md:h-16 rounded-full text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-90">
            <span className="text-2xl md:text-3xl transform -rotate-45 translate-x-1 -translate-y-1">➤</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chatbot;