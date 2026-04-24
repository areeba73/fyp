import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const UserSignup = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[950px] flex flex-col md:flex-row bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 overflow-hidden">
        
        {/* LEFT SIDE: Signup Form */}
        <div className="w-full md:w-[58%] p-8 md:p-12">
          <div className="mb-8">
            <img src={logoImg} alt="EmoTrack Logo" className="w-44 h-auto object-contain" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">
            <span className="text-[#5390F5]">Join </span>
            <span className="text-[#2F357D]">EmoTrack</span>
            <span className="text-[#5390F5] block md:inline font-bold"> Community</span>
          </h2>
          <p className="text-[#2F357D] text-sm mb-8 font-medium tracking-wide">
            Start tracking your emotions and progress today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="md:col-span-2 w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            
            <input type="email" placeholder="Email Address" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            
            <input type="password" placeholder="Password" className="md:col-span-2 px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            
            <button className="md:col-span-2 w-full py-4 bg-[#2F357D] hover:bg-white text-white hover:text-black rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2">
              Create Account
            </button>
          </div>

          <p className="mt-8 text-center text-[#2F357D] text-sm">
            Already have an account?
            <Link to="/userlogin" className="ml-2 text-[#2F357D] font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE (Same as before) */}
        <div className="w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex flex-col items-center justify-center p-10 border-l border-white/40 relative text-center">
          <div className="text-8xl mb-6 animate-bounce drop-shadow-lg">😊</div>
          <div className="relative z-10">
              <h3 className="text-2xl font-black text-[#2F357D] tracking-tight">Your Mind Matters</h3>
              <p className="text-[#2F357D] text-sm mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">
                Quickly access your personal mood tracker, daily insights, and emotional progress.
              </p>
              <div className="mt-10 flex items-center justify-center space-x-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                 <div className="h-[1px] w-8 bg-slate-300"></div>
                 <span>Privacy First</span>
                 <div className="h-[1px] w-8 bg-slate-300"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;