// import React from 'react';

// const Section8 = () => {
//   return (
//     // min-h-screen hata kar py-10 (vertical padding) di hai taaki gap control mein rahe
//     <div className="w-full flex flex-col items-center justify-center py-10 px-8 font-sans text-white">
    
//       {/* SECTION 2: Glossy CTA Container */}
//       {/* mb-0 ya bohot chota margin rakha hai taaki niche wale section se gap kam ho */}
//       <div className="text-center w-full max-w-2xl px-6 py-10 rounded-[40px] bg-[#2F357D] border border-white shadow-inner my-4">
//         <h2 className="text-2xl font-semibold text-blue-300 md:text-4xl font-extralight mb-10 tracking-tight leading-relaxed">
//           Start your emotional journey today
//           <span className="inline-block ml-3 animate-pulse text-blue-300">💙</span>
//         </h2>
        
//         <button className="relative group/btn scale-100 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none">
//           {/* Button Glow Effect */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-30 group-hover/btn:opacity-100 transition duration-1000 group-hover/btn:duration-200"></div>
          
//           <div className="relative bg-[#2F357D] border border-white/30 px-16 py-6 rounded-2xl leading-none flex items-center">
//             <span className="text-white font-bold text-xl tracking-wide group-hover/btn:text-cyan-200 transition-colors duration-300">
//               Create Free Account
//             </span>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Section8;

import React from 'react';

const Section8 = () => {
  return (
    // Responsive padding logic
    <div className="w-full flex flex-col items-center justify-center pt-8 pb-4 md:pb-0 px-4 md:px-6 font-sans overflow-hidden">
      
      <div className="relative group max-w-3xl w-full">
        
        {/* Floating Heart Icon - Responsive positioning */}
        <div className="absolute -top-6 -right-2 md:-top-5 md:-right-10 animate-bounce transition-transform duration-1000 z-20">
          <span className="text-4xl md:text-6xl">
            💙
          </span>
        </div>

        {/* Glossy Container - Responsive rounding and padding */}
        <div className="relative overflow-hidden bg-transparent border border-white/80 rounded-[30px] md:rounded-[40px] px-6 py-10 md:px-8 md:py-12 text-center shadow-lg backdrop-blur-sm">
          
          {/* Background subtle glow inside container */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-400/10 to-transparent pointer-events-none"></div>

          {/* Responsive Heading */}
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F357D] mb-8 md:mb-10 tracking-tight leading-tight">
            Start your emotional <br className="md:hidden" /> journey today
          </h2>
          
          {/* Premium Glow Button - Responsive scaling */}
          <button className="relative group/btn transition-all duration-300 active:scale-95 w-full sm:w-auto">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 rounded-2xl blur-md opacity-60 group-hover/btn:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-[#2F357D] border border-white/50 px-6 md:px-12 py-4 md:py-5 rounded-2xl leading-none flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-lg md:text-xl tracking-wide group-hover/btn:text-blue-200 transition-colors">
                Create Free Account
              </span>
            </div>
          </button>
          
        </div>

        {/* Decorative sparkles effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-10 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        </div>

      </div>
    </div>
  );
};

export default Section8;