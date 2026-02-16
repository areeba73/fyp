import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Icons install karein: npm install react-icons
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Dashboard', 'Doctors', 'Chatbot', 'Result', 'Scan'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-[5%] flex justify-between items-center
      ${scrolled 
        ? 'h-[70px] bg-white/80 backdrop-blur-xl shadow-sm border-b border-[#edf2f7]' 
        : 'h-[90px] bg-transparent border-b border-transparent'}`}> 
      
      {/* Logo */}
      <Link to="/" className="flex items-center z-[1100]">
        <img 
          src={logo} 
          alt="EmoTrack" 
          className={`transition-all duration-300 ${scrolled ? 'h-[40px] md:h-[45px]' : 'h-[50px] md:h-[55px]'}`} 
        />
      </Link>

      {/* Desktop Links (Hidden on Mobile) */}
      <div className={`hidden lg:flex items-center px-6 py-2 rounded-full border transition-all duration-500
        ${scrolled 
          ? 'border-transparent bg-transparent' 
          : 'border-white/40 bg-white/20 backdrop-blur-md'}`}>
        <ul className="flex gap-8 items-center">
          {navLinks.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li key={item}>
                <Link to={path} className={`text-sm font-bold transition-all ${isActive ? 'text-blue-500' : 'text-slate-700 hover:text-blue-500'}`}>
                  {item === 'Scan' ? 'Emotions Scan' : item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right Buttons & Mobile Toggle */}
      <div className="flex items-center gap-3 md:gap-4 z-[1100]">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#2F357D] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold shadow-lg shadow-blue-200 border border-gray-300 hover:bg-white hover:text-[#2F357D] transition-all flex items-center gap-2"
          >
            <span className="hidden sm:inline">Sign Up</span>
            <span className="sm:hidden">Join</span>
            <span className={`text-[8px] transition-transform ${showDropdown ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-3 w-40 md:w-44 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="flex flex-col py-1">
                <Link to="/docsignup" className="px-5 py-3 text-[11px] font-bold text-[#2F357D] hover:bg-slate-50 transition-all">👨‍⚕️ As a Doctor</Link>
                <div className="h-[1px] bg-slate-100 mx-3"></div>
                <Link to="/usersignup" className="px-5 py-3 text-[11px] font-bold text-[#2F357D] hover:bg-slate-50 transition-all">😊 As a Patient</Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-2xl text-[#2F357D] p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Sidebar Menu (Overlay) */}
      <div className={`fixed inset-0 bg-white z-[1050] lg:hidden transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black text-[#2F357D] hover:text-blue-500 transition-all"
            >
              {item === 'Scan' ? 'Emotions Scan' : item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;