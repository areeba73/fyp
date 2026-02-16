import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import bg from "../assets/bg.jpeg";
import Face from "../assets/face.png"; 

const ScanMethods = () => {
  const methods = [
    { 
      title: 'Face Emotion', 
      btn: 'Scan Face', 
      img: Face, 
      isImage: true 
    },
    { 
      title: 'Voice Emotion', 
      btn: 'Record Voice', 
      icon: '🎤', 
      isImage: false 
    },
    { 
      title: 'Text Emotion', 
      btn: 'Analyze Text', 
      icon: '📝', 
      isImage: false 
    }
  ];

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-fixed bg-center relative overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Padding Top ko pt-32 se badha kar pt-48 kiya hai taake Navbar se gap mile */}
      <main className="relative z-10 pt-48 pb-20">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          
          {/* Header Section */}
          <div className="mb-16"> 
            <h2 className="text-3xl md:text-5xl font-bold text-[#2F357D] mb-4 tracking-tight">
              Emotion Scan
            </h2>
            <p className="text-[#718096] text-lg font-medium max-w-2xl">
              Choose a method to analyze your emotions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {methods.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/60 backdrop-blur-2xl border border-white p-8 rounded-[40px] shadow-xl flex flex-col items-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-[#2F357D] text-xl font-semibold mb-8">{item.title}</h3>
                
                <div className="w-full h-[220px] bg-white/40 rounded-[35px] mb-8 border border-white/50 flex items-center justify-center relative overflow-hidden shadow-inner">
                  {item.isImage ? (
                    <img 
                      src={item.img} 
                      alt="Face Scan" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-7xl drop-shadow-md">{item.icon}</span>
                      <div className="mt-5 w-14 h-1.5 bg-[#5390F5]/20 rounded-full"></div>
                    </div>
                  )}
                  {/* Glass Stroke Effect */}
                  <div className="absolute inset-3 border border-white/30 rounded-[28px] pointer-events-none"></div>
                </div> 
                
                <button className="w-full py-4.5 px-6 rounded-2xl bg-[#2F357D] hover:bg-[#3b7ae0] text-white font-semibold text-lg shadow-[0_10px_25px_rgba(83,144,245,0.4)] transition-all transform active:scale-95">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScanMethods;