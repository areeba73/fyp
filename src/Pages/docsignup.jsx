import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const DoctorSignup = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[950px] flex flex-col md:flex-row bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 overflow-hidden">
        
        {/* LEFT SIDE: Doctor Signup Form */}
        <div className="w-full md:w-[58%] p-8 md:p-12">
          <div className="mb-8">
            <img src={logoImg} alt="EmoTrack Logo" className="w-44 h-auto object-contain" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">
            <span className="text-slate-800">Join </span>
            <span className="text-blue-600">EmoTrack</span>
            <span className="text-slate-700 block md:inline font-bold"> as a Doctor</span>
          </h2>
          <p className="text-slate-400 text-sm mb-8 font-medium tracking-wide">
            Smart patient tracking & healthcare management
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            <input type="text" placeholder="Speciality" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            <input type="text" placeholder="Clinic Name" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            <input type="text" placeholder="Experience" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
            
            <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm" />
            <input type="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm" />
            
            <button className="md:col-span-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2">
              Register Account
            </button>
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Already have an account?
            <Link to="/doclogin" className="ml-2 text-blue-600 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE: Same Visuals */}
        <div className="w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex flex-col items-center justify-center p-10 border-l border-white/40 relative">
          <div className="relative group">
            <div className="absolute -inset-3 bg-blue-400/10 rounded-full blur-xl"></div>
            <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="doctor" className="relative w-48 h-48 rounded-full object-cover border-[8px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-8 right-6 bg-green-400 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
          <div className="mt-10 text-center relative z-10">
             <h3 className="text-2xl font-black text-slate-800 tracking-tight">Premium Healthcare</h3>
             <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">Join 500+ professionals managing health data with end-to-end security.</p>
             <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white shadow-sm">
                   <div className="p-1 bg-blue-100 rounded-lg"><svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 002 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div>
                   <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-white shadow-sm">
                   <div className="p-1 bg-green-100 rounded-lg"><svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                   <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">HIPAA Compliant Data</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;