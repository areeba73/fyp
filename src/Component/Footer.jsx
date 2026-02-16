import React from 'react';
import logo from '../assets/LOGO.png';

const Footer = () => {
  return (
    <footer className="relative bg-white/5 backdrop-blur-md border-t border-white/20 px-[5%] pt-12 md:pt-20 pb-10 font-sans overflow-hidden">
      <div className="absolute inset-0 -z-10"></div>
      
      {/* Decorative Glows - Sizes adjusted for mobile */}
      <div className="absolute -top-10 left-10 w-40 h-40 md:w-72 md:h-72 bg-[#5390F5]/10 rounded-full blur-[60px] md:blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 md:w-72 md:h-72 bg-[#2F357D]/10 rounded-full blur-[60px] md:blur-[100px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Grid adjusted for 1 col on mobile and 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left">
            <div className="p-2 bg-white/10 backdrop-blur-lg rounded-2xl inline-block border border-white/10">
              <img src={logo} alt="EmoTrack" className="h-[50px] w-auto object-contain" />
            </div>
            <p className="text-[#2F357D]/70 leading-relaxed text-[1rem] font-medium max-w-[320px]">
              Empathic technology for a clearer mind. Your privacy and wellbeing are our top priorities.
            </p>
          </div>

          {/* Navigation - Glassy Style */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[#2F357D] text-[0.85rem] font-bold mb-8 tracking-[0.2em] uppercase opacity-80">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {['Home', 'Features', 'Doctors', 'About', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#2F357D]/60 text-[0.95rem] font-medium hover:text-[#5390F5] transition-all duration-300 flex items-center group justify-center md:justify-start">
                    <span className="hidden md:inline-block w-0 h-[1.5px] bg-[#5390F5] group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Glassy Style */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[#2F357D] text-[0.85rem] font-bold mb-8 tracking-[0.2em] uppercase opacity-80">
              Support
            </h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {['Help Center', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#2F357D]/60 text-[0.95rem] font-medium hover:text-[#5390F5] transition-all duration-300 flex items-center group">
                    <span className="hidden md:inline-block w-0 h-[1.5px] bg-[#5390F5] group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-[#2F357D]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-[#2F357D]/40 text-[0.85rem] font-medium">
            © 2026 <span className="text-[#2F357D]/80 font-bold">EmoTrack</span>. 
            <span className="hidden md:inline mx-2 opacity-30">|</span> 
            <br className="md:hidden" />
            Crafted for Mental Clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;