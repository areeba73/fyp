import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import bg from "../assets/bg.jpeg";

const UserDashboard = () => {
  const moodConfig = {
    happy: { label: "Happy", color: "from-green-400 to-green-600", emoji: "😊" },
    sad: { label: "Sad", color: "from-blue-400 to-blue-600", emoji: "😢" },
    angry: { label: "Angry", color: "from-red-400 to-red-600", emoji: "😠" },
    neutral: { label: "Neutral", color: "from-gray-400 to-gray-600", emoji: "😐" },
    fear: { label: "Fear", color: "from-purple-500 to-indigo-700", emoji: "😨" },
    surprise: { label: "Surprise", color: "from-yellow-400 to-orange-500", emoji: "😲" },
    disgust: { label: "Disgust", color: "from-emerald-600 to-green-900", emoji: "🤢" }
  };

  const moodData = [
    { day: "D1", type: "happy", value: 90 },
    { day: "D2", type: "neutral", value: 50 },
    { day: "D3", type: "sad", value: 40 },
    { day: "D4", type: "angry", value: 75 },
    { day: "D5", type: "surprise", value: 85 },
    { day: "D6", type: "fear", value: 60 },
    { day: "D7", type: "disgust", value: 35 },
    { day: "D8", type: "happy", value: 95 },
    { day: "D9", type: "neutral", value: 45 },
    { day: "D10", type: "happy", value: 80 },
    { day: "D11", type: "sad", value: 55 },
    { day: "D12", type: "surprise", value: 90 },
  ];

  return (
    <div className="min-h-screen relative font-sans text-blue-900 overflow-x-hidden">
      
      <div className="fixed inset-0 -z-10">
        <img src={bg} alt="bg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]"></div>
      </div>

      <Navbar />

      {/* Padding adjusted for mobile (pt-24) vs Desktop (pt-32) */}
      <main className="pt-24 md:pt-32 pb-12 px-4 md:px-8 lg:px-16 max-w-[1600px] mx-auto">
        
        <header className="mb-8 md:mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-blue-950">
            Welcome back, David! <span className="inline-block animate-bounce">✨</span>
          </h2>
          <p className="text-blue-800/70 mt-2 text-base md:text-lg font-medium">Tracking your 7 core emotions.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* 2. Graph - Adjusted gap and padding for mobile */}
          <div className="lg:col-span-2 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-white flex flex-col justify-between min-h-[400px] md:min-h-[450px]">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-center sm:text-left">Weekly Mood Flow</h3>
              <div className="flex flex-wrap justify-center gap-1 md:gap-2">
                 {Object.values(moodConfig).map((m, i) => (
                   <span key={i} className="text-base md:text-lg">{m.emoji}</span>
                 ))}
              </div>
            </div>
            
            {/* Bars container made scrollable on very small screens if needed */}
            <div className="flex-1 flex items-end justify-between gap-1 md:gap-2 px-1 overflow-x-hidden">
               {moodData.map((item, i) => (
                 <div key={i} className="group relative flex-1 flex flex-col items-center h-full justify-end">
                    
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-xl px-2 md:px-3 py-1 rounded-full border border-blue-50 z-20 pointer-events-none">
                       <span className="text-[8px] md:text-[10px] font-black uppercase text-blue-600 whitespace-nowrap">
                         {moodConfig[item.type].emoji} {item.type}
                       </span>
                    </div>

                    <div style={{ height: `${item.value}%` }} 
                      className={`w-full max-w-[30px] bg-gradient-to-t ${moodConfig[item.type].color} rounded-xl md:rounded-2xl shadow-lg transition-all duration-500 origin-bottom hover:brightness-110 cursor-pointer`}
                    ></div>
                    <span className="text-[8px] md:text-[9px] mt-2 md:mt-4 font-black text-blue-900/30 uppercase">{item.day}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* 3. Emotional Balance - Scale down on mobile */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 shadow-2xl border border-white flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-10 text-center">Overall Balance</h3>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[12px] md:border-[15px] border-blue-50 border-t-green-500 border-r-blue-500 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-black text-blue-950">78%</span>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-blue-500">Stable</p>
                </div>
            </div>
          </div>

          {/* 4. Recent Reflections */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-blue-950 ml-2">Recent Reflections</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { date: "April 12", text: "Had a great day enjoying the weather!", emoji: "😊" },
                { date: "April 11", text: "Feeling a bit tired but productive.", emoji: "😐" },
                { date: "April 10", text: "Unexpected meeting went really well!", emoji: "😲" }
              ].map((ref, i) => (
                <div key={i} className="bg-white/40 p-5 rounded-[2rem] border border-white/60 hover:bg-white/50 transition shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] md:text-xs text-blue-900 font-bold uppercase tracking-wider">{ref.date}</p>
                    <span className="text-xl">{ref.emoji}</span>
                  </div>
                  <p className="text-sm text-blue-700 leading-snug font-medium">
                    {ref.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;