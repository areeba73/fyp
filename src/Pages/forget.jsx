import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans" style={{ backgroundImage: `url(${bg})` }}>
      <div className="w-full max-w-[500px] bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 p-8 md:p-12 text-center">
        
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Logo" className="w-40 h-auto" />
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Forgot Password?</h2>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          No worries! Enter your email and we'll send you a link to reset your password.
        </p>

        <div className="space-y-4 text-left">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-600 ml-1 uppercase tracking-wider">Email Address</label>
            <input type="email" placeholder="Enter your registered email" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none text-sm transition-all" />
          </div>
          
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95">
            Send Reset Link
          </button>
        </div>

        <div className="mt-8">
          <Link to="/userlogin" className="text-sm text-blue-600 font-bold hover:underline">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;