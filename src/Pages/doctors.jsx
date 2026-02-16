import React, { useState } from 'react';
import Navbar from '../Component/Navbar'; 
import Footer from '../Component/Footer'; 
import bg from '../assets/bg.jpeg'; 
import Doctor from "../assets/doctor.png"; 

const Doctors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    { 
      name: "Dr. Sarah Khan", 
      role: "Senior Psychologist", 
      img: Doctor, 
      phone: "+92 300 1234567",
      desc: "Specializing in cognitive behavioral therapy and emotional resilience." 
    },
    { 
      name: "Dr. Ahmed Ali", 
      role: "Clinical Therapist", 
      img: Doctor, 
      phone: "+92 321 7654321",
      desc: "Expert in stress management, anxiety relief, and mindfulness practices." 
    },
    { 
      name: "Dr. Ayrsha Malik", 
      role: "Mental Health Expert", 
      img: Doctor, 
      phone: "+92 345 9876543",
      desc: "Dedicated to helping individuals achieve mental clarity and life balance." 
    },
    { 
      name: "Dr. Zainab Abbas", 
      role: "Child Counselor", 
      img: Doctor, 
      phone: "+92 333 4445556",
      desc: "Helping children and teens navigate developmental and emotional challenges." 
    },
    { 
      name: "Dr. Hamza Siddiqui", 
      role: "Behavioral Specialist", 
      img: Doctor, 
      phone: "+92 312 9998887",
      desc: "Expert in analyzing and improving complex behavioral patterns in adults." 
    },
    { 
      name: "Dr. Mariam Jameel", 
      role: "Family Therapist", 
      img: Doctor, 
      phone: "+92 301 5556667",
      desc: "Focusing on resolving conflicts and strengthening familial bonds." 
    },
  ];

  const handleConsultClick = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => {
        setShowSuccess(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 z-[-10] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-blue-50/20 backdrop-blur-[2px]"></div>
      </div>

      <Navbar />

      <main className="flex-grow pt-36 pb-20 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 px-4">
            <h3 className="text-3xl font-black text-[#2F357D] tracking-tight uppercase">Certified Professionals</h3>
            <div className="w-24 h-2 bg-[#2F357D] rounded-full mt-2 shadow-lg shadow-blue-200"></div>
          </div>

          {/* Grid: Ab ye naturally cards ko niche shift karta rahega */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doc, idx) => (
              <div key={idx} className="group bg-white/70 backdrop-blur-2xl rounded-[50px] shadow-2xl border border-white/80 flex flex-col transition-all duration-500 hover:-translate-y-3 hover:bg-white/90 overflow-hidden min-h-[600px]">
                <div className="w-full relative bg-blue-50/30 border-b border-white/30" style={{ height: '300px' }}>
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-contain md:object-top transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="p-8 flex flex-col items-center text-center flex-grow justify-between">
                  <div className="space-y-4">
                    <h4 className="font-black text-[#2F357D] text-2xl tracking-tight leading-tight">{doc.name}</h4>
                    <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] bg-blue-50 inline-block px-3 py-1 rounded-md">{doc.role}</p>
                    
                    {/* Stars hata diye hain yahan se */}
                    
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{doc.desc}</p>
                    
                    <div className="pt-4 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-[#2F357D] font-bold text-sm">
                            <span className="bg-blue-100 p-1.5 rounded-full text-xs">📞</span>
                            <span>{doc.phone}</span>
                        </div>
                        <a 
                            href={`https://wa.me/${doc.phone.replace(/\s+/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-green-600 font-black text-[11px] uppercase tracking-wider hover:opacity-70 transition-opacity"
                        >
                            <span className="text-base">💬</span> Chat on WhatsApp
                        </a>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleConsultClick(doc)}
                    className="w-full mt-6 bg-[#2F357D] hover:bg-indigo-900 text-white text-xs font-black py-5 rounded-[28px] shadow-xl shadow-blue-900/20 transition-all active:scale-95 uppercase tracking-widest"
                  >
                    BOOK YOUR SESSION
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2F357D]/40 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white/90 backdrop-blur-3xl w-full max-w-md rounded-[40px] shadow-2xl border border-white p-8 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 text-[#2F357D] font-bold text-xl">✕</button>
            <h2 className="text-2xl font-black text-[#2F357D] mb-2">Book Appointment</h2>
            <p className="text-sm text-blue-600 font-bold mb-6">with {selectedDoctor?.name}</p>
            <form className="space-y-5" onSubmit={handleConfirmBooking}>
              <div>
                <label className="block text-[10px] font-black uppercase text-[#2F357D]/60 mb-2 ml-2">Select Date</label>
                <input required type="date" className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-3 outline-none focus:ring-2 ring-blue-400/50 text-[#2F357D] font-medium" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-[#2F357D]/60 mb-2 ml-2">Select Time Slot</label>
                <select className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-3 outline-none focus:ring-2 ring-blue-400/50 text-[#2F357D] font-medium">
                  <option>10:00 AM - 11:00 AM</option>
                  <option>12:00 PM - 01:00 PM</option>
                  <option>04:00 PM - 05:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase text-[#2F357D]/60 mb-2 ml-2">Your Email</label>
                <input required type="email" placeholder="example@mail.com" className="w-full bg-white border border-blue-100 rounded-2xl px-5 py-3 outline-none focus:ring-2 ring-blue-400/50 text-[#2F357D] font-medium" />
              </div>
              <button type="submit" className="w-full bg-[#2F357D] text-white font-black py-4 rounded-[22px] shadow-lg hover:bg-blue-800 transition-all mt-4">CONFIRM BOOKING</button>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-sm bg-white/95 backdrop-blur-xl border border-green-200 p-6 rounded-[30px] shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">✅</div>
            <h3 className="font-black text-[#2F357D] text-xl">Booking Requested!</h3>
            <p className="text-sm text-slate-500 font-medium mt-1">An email confirmation will be sent shortly.</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Doctors;