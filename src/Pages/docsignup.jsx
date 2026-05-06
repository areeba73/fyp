import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerDoctor, clearError, setError } from '../store/slices/authSlice';
import bg from "../assets/bg.jpeg";
import logoImg from "../assets/logo.png";

const DoctorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    speciality: '',
    clinicName: '',
    mobile: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // --- VALIDATION START ---
    
    // 1. Check for empty fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim() || !formData.speciality.trim() || !formData.clinicName.trim() || !formData.mobile.trim()) {
      dispatch(setError("All fields are required!"));
      return;
    }

    // 2. Full Name validation (min 3 chars)
    if (formData.fullName.trim().length < 3) {
      dispatch(setError("Full name must be at least 3 characters!"));
      return;
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      dispatch(setError("Please enter a valid email address!"));
      return;
    }

    // 4. Password validation (min 6 chars)
    if (formData.password.length < 6) {
      dispatch(setError("Password must be at least 6 characters!"));
      return;
    }

    // 5. Mobile validation (11 digits - Pakistani format)
    // Accept: 03001234567 or 923001234567 or 03-00-123-4567
    const mobileRegex = /^(0\d{10}|92\d{10})$/; // 03XXXXXXXXX or 923XXXXXXXXX
    const mobileClean = formData.mobile.replace(/[-\s]/g, ''); // Remove dashes and spaces
    
    if (!mobileRegex.test(mobileClean)) {
      dispatch(setError("Please enter a valid 11-digit mobile number (e.g., 03001234567)!"));
      return;
    }

    // 6. Speciality validation (min 3 chars)
    if (formData.speciality.trim().length < 3) {
      dispatch(setError("Speciality must be at least 3 characters!"));
      return;
    }

    // 7. Clinic name validation (min 3 chars)
    if (formData.clinicName.trim().length < 3) {
      dispatch(setError("Clinic name must be at least 3 characters!"));
      return;
    }

    // --- VALIDATION END ---

    const resultAction = await dispatch(registerDoctor(formData));

    if (registerDoctor.fulfilled.match(resultAction)) {
      alert("Doctor Account created! Please check email for verification.");
      navigate('/doclogin'); 
    } else {
      console.log("Registration failed");
    }
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

          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 text-xs rounded-lg text-center font-bold">
              {error}
            </div>
          )}
          
          <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <input 
              name="fullName" 
              onChange={handleChange} 
              value={formData.fullName}
              type="text" 
              placeholder="Full Name" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              name="speciality" 
              onChange={handleChange} 
              value={formData.speciality}
              type="text" 
              placeholder="Speciality (e.g., phsycology)" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              name="clinicName" 
              onChange={handleChange} 
              value={formData.clinicName}
              type="text" 
              placeholder="Clinic Name" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              name="mobile" 
              onChange={handleChange} 
              value={formData.mobile}
              type="tel" 
              placeholder="Mobile (03001234567)" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm transition-all focus:ring-2 focus:ring-blue-400" 
            />            
            <input 
              name="email" 
              onChange={handleChange} 
              value={formData.email}
              type="email" 
              placeholder="Email Address" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              name="password" 
              onChange={handleChange} 
              value={formData.password}
              type="password" 
              placeholder="Password (Min 6 chars)" 
              required 
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-100 outline-none text-sm focus:ring-2 focus:ring-blue-400" 
            />
            
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

        <div className="hidden md:flex w-full md:w-[42%] bg-gradient-to-br from-blue-600/5 to-indigo-600/15 flex-col items-center justify-center p-10 border-l border-white/40 relative">
           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" alt="doctor" className="w-48 h-48 rounded-full object-cover border-[8px] border-white shadow-2xl" />
           <div className="mt-10 text-center">
              <h3 className="text-2xl font-black text-[#2F357D]">Premium Healthcare</h3>
              <p className="text-slate-500 text-sm mt-3">Join professionals managing health data securely.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;