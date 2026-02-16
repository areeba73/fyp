import React from 'react';
import bgg from '../assets/bgg.png'; 
import pur from '../assets/pur.png'; 

const Homeee = () => {
  return (
    <div 
      className="min-h-screen font-sans text-slate-800 overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bgg})` }}
    >
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-2xl text-indigo-900">
          <div className="w-8 h-8 bg-pink-400 rounded-full opacity-70 shadow-sm"></div>
          EmoTrack
        </div>
        <div className="hidden md:flex gap-10 font-medium text-slate-600">
          <a href="#" className="hover:text-purple-700 transition">Features</a>
          <a href="#" className="hover:text-purple-700 transition">Pricing</a>
          <a href="#" className="hover:text-purple-700 transition">FAQ</a>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-7 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-8 md:px-20 pt-16 pb-24 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-950 leading-[1.1] mb-6">
            Understand Your Emotions.<br />
            <span className="text-purple-600">Transform Your Life.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
            Track your moods, discover patterns, and connect with professionals — all in one safe space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-purple-200 transition-all">
              Get Started
            </button>
            <button className="bg-white/40 backdrop-blur-md px-10 py-4 rounded-full font-bold flex items-center gap-2 border border-white/50 hover:bg-white/60 transition">
              <span className="text-purple-600 text-xl">▶</span> Watch Demo
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative flex justify-center mt-12 md:mt-0">
          <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] relative flex items-center justify-center">
             <img src={pur} alt="Main Character" className="w-full h-full object-contain z-10" />
             <div className="absolute w-[80%] h-[80%] bg-purple-300/30 rounded-full blur-3xl -z-0"></div>
          </div>
          <div className="absolute top-0 right-10 text-5xl animate-bounce delay-100 z-20">😊</div>
          <div className="absolute top-20 -left-5 text-5xl opacity-80 z-20">😢</div>
          <div className="absolute bottom-10 right-0 text-5xl animate-pulse z-20">😍</div>
          <div className="absolute bottom-5 left-10 text-5xl z-20">😡</div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Wapsi add kiya) --- */}
      <section className="py-20 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-indigo-900/60 uppercase tracking-widest mb-12">— How EmoTrack Works —</h2>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { id: 1, title: 'Track', desc: 'Log your daily emotions.', color: 'blue' },
            { id: 2, title: 'Analyze', desc: 'AI detects emotional patterns.', color: 'blue' },
            { id: 3, title: 'Improve', desc: 'Connect with doctors & get insights.', color: 'pink' }
          ].map((item) => (
            <div key={item.id} className="bg-white/30 backdrop-blur-md p-10 rounded-[30px] border border-white/20 shadow-sm hover:shadow-md transition">
              <span className={`inline-block bg-${item.color}-100 text-${item.color}-600 rounded-full px-5 py-1.5 font-black text-lg mb-6`}>{item.id}</span>
              <h3 className="font-bold text-2xl text-indigo-950 mb-3">{item.title}</h3>
              <p className="text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US (Wapsi add kiya) --- */}
      <section className="py-20">
        <h2 className="text-center text-xl md:text-2xl font-bold text-indigo-900/60 uppercase tracking-widest mb-12">— Why Choose EmoTrack? —</h2>
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-6">
          {[
            { title: 'AI Mood Insights', icon: '💜' },
            { title: '100% Private', icon: '🔒' },
            { title: 'Professional Support', icon: '🛡️' },
            { title: 'Advanced Analytics', icon: '📊' },
            { title: 'Smart Journaling', icon: '📝' }
          ].map((feature, i) => (
            <div key={i} className="bg-white/30 backdrop-blur-md p-6 w-full sm:w-56 rounded-2xl flex flex-col items-center text-center border border-white/20">
              <div className="text-3xl mb-4 bg-white/50 w-14 h-14 flex items-center justify-center rounded-2xl shadow-inner">{feature.icon}</div>
              <h4 className="font-bold text-sm text-indigo-950">{feature.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- STATS & ROLES (Wapsi add kiya) --- */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div><div className="text-6xl font-black text-yellow-400 mb-2">775%</div><p className="text-indigo-900 font-medium">Improved Awareness</p></div>
          <div><div className="text-6xl font-black text-cyan-500 mb-2">60%</div><p className="text-indigo-900 font-medium">Reduced Stress</p></div>
          <div><div className="text-6xl font-black text-pink-500 mb-2">10k+</div><p className="text-indigo-900 font-medium">Daily Logs</p></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { role: 'For Users', color: 'bg-pink-400' },
            { role: 'For Doctors', color: 'bg-cyan-400' },
            { role: 'For Admin', color: 'bg-purple-400' }
          ].map((card, i) => (
            <div key={i} className="bg-white/20 backdrop-blur-lg p-8 rounded-[35px] border border-white/30 hover:translate-y-[-5px] transition">
               <div className={`w-20 h-20 ${card.color} mx-auto rounded-full mb-6 flex items-center justify-center text-2xl shadow-lg`}>👤</div>
               <h3 className="font-bold text-xl text-indigo-950">{card.role}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-24 text-center">
        <h2 className="text-2xl font-bold text-indigo-900 mb-8">Start your emotional journey today ❤️</h2>
        <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all">
          Create Free Account
        </button>
      </footer>

    </div>
  );
};

export default Homeee;