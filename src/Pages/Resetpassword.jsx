import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full max-w-[500px] bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 p-8 md:p-12">
        
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Logo" className="w-40 h-auto" />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Reset Password</h2>
          <p className="text-slate-500 text-sm mb-8">Set a strong password to secure your account.</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-600 ml-1 uppercase tracking-wider">New Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-600 ml-1 uppercase tracking-wider">Confirm Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm" />
          </div>
          
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;