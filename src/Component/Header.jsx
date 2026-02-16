import React from 'react';
import img1 from '../assets/img1.png'; 

const Header = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-[5%] py-10 lg:py-0 overflow-hidden mt-[-20px] md:mt-[-40px] lg:mt-[-50px]">
      
      {/* Hero Content */}
      <div className="flex-1 z-10 text-center lg:text-left mt-10 lg:mt-0 order-2 lg:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 leading-[1.1] tracking-tight">
          <span className=" text-[#2F357D]">Track Your </span>
          <br className="hidden lg:block" />
          <span className="bg-gradient-to-br from-[#5390F5] to-[#6D5DF1] bg-clip-text text-transparent">
            Inner Peace
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-500 leading-relaxed mb-10 font-medium max-w-lg mx-auto lg:mx-0">
          Advanced AI-powered emotional tracking to help you understand yourself better and connect with experts.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-5"> 
          <button className="bg-[#2F357D] text-white backdrop-blur-xl border-2 border-white hover:border-[#2F357D] hover:bg-transparent hover:text-[#2F357D] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold shadow-sm transition-all duration-300 text-sm md:text-base">
            Get Started
          </button>
          <button className="backdrop-blur-xl border border-white hover:text-white text-[#2F357D] px-8 md:px-10 py-3 md:py-4 rounded-2xl font-bold shadow-sm hover:bg-[#2F357D] transition-all duration-300 text-sm md:text-base">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="flex-[1.2] lg:flex-[1.9] flex justify-center lg:justify-end relative mt-5 lg:mt-0 lg:-mr-5 lg:translate-x-5 order-1 lg:order-2 w-full">
        <div className="relative group w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end items-center">
           {/* Glow Effect */}
           <div className="absolute -inset-5 md:-inset-10 bg-blue-400/15 blur-[60px] md:blur-[100px] rounded-full animate-pulse"></div>
           
           {/* Emojis - Responsive sizes and positions */}
           <div className="absolute top-[18%] left-[10%] lg:left-[28%] text-2xl md:text-3xl animate-[float_3s_ease-in-out_infinite] z-20">😊</div>
           <div className="absolute top-[12%] right-[5%] lg:right-[15%] text-2xl md:text-3xl animate-[float_5s_ease-in-out_infinite] z-20">😇</div>
           <div className="absolute top-[45%] left-[5%] lg:left-[18%] text-2xl md:text-3xl animate-[float_4s_ease-in-out_infinite] z-20">😌</div>
           
           <div className="absolute bottom-[28%] right-[5%] lg:right-[15%] text-2xl md:text-3xl animate-[float_3.5s_ease-in-out_infinite] z-20">😡</div>
           <div className="absolute bottom-[12%] right-[20%] lg:right-[32%] text-2xl md:text-3xl animate-[float_4.5s_ease-in-out_infinite] z-20">😨</div>

           <img 
            src={img1} 
            alt="Emotion Tracking AI" 
            className="w-[85%] sm:w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto z-10 drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]" 
          />
        </div>
      </div>

      {/* Floating Animation Style stays as is */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @media (min-width: 1024px) {
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-30px); }
            }
          }
        `}
      </style>
    </section>
  );
};

export default Header;