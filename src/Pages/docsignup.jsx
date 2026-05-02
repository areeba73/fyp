import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/slices/authSlice'; // setLoading hata diya
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const DoctorSignup = () => {
  // Doctor specific states
  const [formData, setFormData] = useState({
    fullName: '',
    speciality: '',
    clinicName: '',
    experience: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // Page load hote hi purane errors saaf karein
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // dispatch(setLoading(true)); // Ye line error de rahi thi, isay nikal diya
    console.log("Doctor Registering:", formData);
    alert("Doctor Registration flow will be connected after User testing!");
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 font-sans"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-[950px] flex flex-col md:flex-row bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/80 overflow-hidden">
        
        <div className="w-full md:w-[58%] p-8 md:p-12">
          <div className="mb-8">
            <img src={logoImg} alt="EmoTrack Logo" className="w-44 h-auto object-contain" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">
            <span className="text-[#5390F5]">Join </span>
            <span className="text-[#2F357D]">EmoTrack</span>
            <span className="text-[#5390F5] block md:inline font-bold"> as a Doctor</span>
          </h2>

          {/* Error Message Display */}
          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center font-bold">
              {error}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <input name="fullName" onChange={handleChange} type="text" placeholder="Full Name" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" />
            <input name="speciality" onChange={handleChange} type="text" placeholder="Speciality" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" />
            <input name="clinicName" onChange={handleChange} type="text" placeholder="Clinic Name" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" />
            <input name="experience" onChange={handleChange} type="text" placeholder="Experience" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" />
            
            <input name="email" onChange={handleChange} type="email" placeholder="Email Address" required className="px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm focus:ring-2 focus:ring-blue-400" />
            <input name="password" onChange={handleChange} type="password" placeholder="Password" required className="px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm focus:ring-2 focus:ring-blue-400" />
            
            <button 
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full py-4 bg-[#2F357D] hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-200 transition-all active:scale-95 mt-2 disabled:opacity-70"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Already have an account?
            <Link to="/doclogin" className="ml-2 text-[#2F357D] font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex-col items-center justify-center p-10 border-l border-white/40 relative">
          <div className="relative group">
            <div className="absolute -inset-3 bg-blue-400/10 rounded-full blur-xl"></div>
            <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="doctor" className="relative w-48 h-48 rounded-full object-cover border-[8px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-8 right-6 bg-green-400 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
          </div>
          <div className="mt-10 text-center relative z-10">
             <h3 className="text-2xl font-black text-[#2F357D] tracking-tight">Premium Healthcare</h3>
             <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-[240px] mx-auto font-medium">Join 500+ professionals managing health data with end-to-end security.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;