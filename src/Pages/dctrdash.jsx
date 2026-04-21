import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bg.jpeg";
import logo from '../assets/logo.png';
import {
  HiOutlineUserCircle,
  HiOutlineClock,
  HiOutlineLogout,
  HiOutlineBell,
  HiOutlineCalendar
} from 'react-icons/hi';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [showPassword, setShowPassword] = useState(false);

  // Doctor Info State (Admin ki tarah)
  const [doctorData, setDoctorData] = useState({
    name: "Dr. Hamza Ali",
    email: "hamza.ali@emotrack.com",
    password: "Password@123",
    specialty: "Psychiatrist"
  });

  // Appointments State
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "David Miller", specialty: "Clinical Depression", date: "April 25, 2024", time: "10:30 AM", status: "pending" },
    { id: 2, patient: "Sarah Khan", specialty: "Anxiety Consultation", date: "April 26, 2024", time: "02:00 PM", status: "pending" }
  ]);

  const handleAccept = (id) => {
    setAppointments(prevAppts =>
      prevAppts.map(appt =>
        appt.id === id ? { ...appt, status: 'approved' } : appt
      )
    );
  };

  const menuItems = [
    { id: 'notifications', label: 'Notifications', icon: <HiOutlineBell /> },
    { id: 'availability', label: 'My Availability', icon: <HiOutlineClock /> },
    { id: 'settings', label: 'Account Settings', icon: <HiOutlineUserCircle /> },
  ];
  const [availability, setAvailability] = useState([
  { day: 'Monday', active: true, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Tuesday', active: true, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Wednesday', active: true, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Thursday', active: true, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Friday', active: true, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Saturday', active: false, slots: [{ start: '09:00', end: '17:00' }] },
  { day: 'Sunday', active: false, slots: [{ start: '09:00', end: '17:00' }] },
]);
// Din ko on/off karne ka function
const toggleDay = (index) => {
  const newAvail = [...availability];
  newAvail[index].active = !newAvail[index].active;
  setAvailability(newAvail);
};

// Naya slot add karne ka function (+)
const addSlot = (index) => {
  const newAvail = [...availability];
  newAvail[index].slots.push({ start: '09:00', end: '17:00' });
  setAvailability(newAvail);
};

  return (
    <div className="min-h-screen relative font-sans text-blue-900 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src={bg} alt="bg" className="w-full h-full object-cover" />
      </div>

      {/* Header/Logo */}
      <div className="pt-8 px-4 md:px-10 lg:px-20 max-w-[1600px] mx-auto">
        <Link to="/" className="flex items-center z-[1100] w-fit">
          <img src={logo} alt="EmoTrack Logo" className="h-[50px] md:h-[55px]" />
        </Link>
      </div>

      <main className="flex-grow pt-15 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* --- Sidebar --- */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-[30px] p-6 shadow-sm border border-slate-100 sticky top-28">
              <div className="flex flex-col items-center pb-8 border-b border-slate-50">
                <div className="w-20 h-20 rounded-full bg-[#2F357D] flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                  {doctorData.name.charAt(4)}
                </div>
                <h2 className="text-[#2F357D] font-bold text-xl">{doctorData.name}</h2>
                <p className="text-slate-400 text-sm">{doctorData.specialty}</p>
              </div>

              <nav className="mt-8 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all
                      ${activeTab === item.id ? 'bg-[#2F357D] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 mt-4">
                  <HiOutlineLogout className="text-xl" /> Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* --- Main Content --- */}
          <section className="lg:w-3/4">
            
            {/* 1. NOTIFICATIONS TAB */}
            {activeTab === 'notifications' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-xl font-bold text-[#2F357D] px-2">New Appointment Requests</h3>
                {appointments.map((notif) => (
                  <div key={notif.id} className="bg-white p-6 rounded-[2.5rem] border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-[#2F357D] rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <HiOutlineCalendar size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#2F357D]">{notif.patient}</h4>
                        <p className="text-sm text-blue-600 font-semibold">{notif.specialty}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                      <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100">
                        <HiOutlineCalendar size={16} className="text-[#2F357D]" />
                        <span className="text-sm font-bold text-[#2F357D]">{notif.date}</span>
                      </div>
                      
                      {notif.status === 'approved' ? (
                        <div className="flex items-center gap-2 bg-green-50 px-6 py-2 rounded-xl border border-green-200">
                          <span className="text-sm font-bold text-green-600">● Approved</span>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleAccept(notif.id)}
                          className="bg-[#2F357D] text-white px-8 py-2 rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors shadow-lg active:scale-95"
                        >
                          Accept
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. ACCOUNT SETTINGS TAB (Admin Style) */}
            {activeTab === 'settings' && (
              <div className="bg-white/80 rounded-[2.5rem] p-8 md:p-6 shadow-2xl border border-white animate-fadeIn max-w-2xl mx-auto">
                <h2 className="text-3xl font-black text-blue-950 mb-8 text-center">⚙️ Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-blue-900/60 ml-2 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      value={doctorData.name}
                      onChange={(e) => setDoctorData({...doctorData, name: e.target.value})}
                      className="w-full mt-1 px-5 py-4 bg-blue-50 border border-blue-100 rounded-2xl font-bold text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-blue-900/60 ml-2 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      value={doctorData.email}
                      onChange={(e) => setDoctorData({...doctorData, email: e.target.value})}
                      className="w-full mt-1 px-5 py-4 bg-blue-50 border border-blue-100 rounded-2xl font-bold text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold text-blue-900/60 ml-2 uppercase tracking-widest">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={doctorData.password}
                        onChange={(e) => setDoctorData({...doctorData, password: e.target.value})}
                        className="w-full mt-1 px-5 py-4 bg-blue-50 border border-blue-100 rounded-2xl font-bold text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-400"
                      >
                        {showPassword ? "👁️" : "👁️‍🗨️"}
                      </button>
                    </div>
                  </div>

                  <button 
                    className="w-full py-4 bg-[#2F357D] text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all"
                    onClick={() => alert('Profile Updated Successfully!')}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* 3. AVAILABILITY TAB */}
       {/* 3. AVAILABILITY TAB */}
{activeTab === 'availability' && (
  <div className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-[2.5rem] border border-white shadow-2xl animate-fadeIn">
    <div className="mb-3 text-center md:text-left px-2">
      <h3 className="text-2xl font-black text-[#2F357D]">Manage Availability</h3>
      <p className="text-sm text-slate-500 font-medium">Toggle days and add multiple shifts for your patients.</p>
    </div>

    <div className="space-y-4">
      {availability.map((item, index) => (
        <div key={item.day} className={`p-4 md:p-3 rounded-3xl border transition-all ${item.active ? 'bg-white border-blue-100 shadow-sm' : 'bg-slate-50/50 border-slate-200 opacity-70'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Day and Checkbox Section */}
            <div className="flex items-center gap-4 min-w-[140px] justify-between lg:justify-start">
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  checked={item.active}
                  onChange={() => toggleDay(index)}
                  className="w-6 h-6 accent-[#2F357D] cursor-pointer"
                />
                <span className={`font-bold text-lg ${item.active ? 'text-[#2F357D]' : 'text-slate-400'}`}>{item.day}</span>
              </div>
              {/* Mobile Active Badge */}
              {item.active && (
                <span className="lg:hidden text-[10px] font-black text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase">
                  Active
                </span>
              )}
            </div>

            {/* Slots Area */}
          {/* Slots Area */}
<div className="flex-grow w-full">
  {item.active ? (
    <div className="flex flex-col gap-3">
      {item.slots.map((slot, sIdx) => (
        <div 
          key={sIdx} 
          className="flex flex-wrap items-center gap-2 justify-center lg:justify-end animate-fadeIn"
        >
          {/* Input Group - Mobile par wrap ho jayega */}
          <div className="flex items-center gap-2 bg-blue-50/50 p-2 rounded-2xl border border-blue-100">
            <input 
              type="time" 
              defaultValue={slot.start} 
              className="w-[100px] sm:w-auto px-2 py-2 bg-transparent text-sm font-bold text-[#2F357D] outline-none" 
            />
            <span className="text-slate-400 font-bold text-[10px] uppercase">to</span>
            <input 
              type="time" 
              defaultValue={slot.end} 
              className="w-[100px] sm:w-auto px-2 py-2 bg-transparent text-sm font-bold text-[#2F357D] outline-none" 
            />
          </div>
          
          {/* Add Button */}
          {sIdx === 0 && (
            <button 
              onClick={() => addSlot(index)}
              className="w-10 h-10 flex items-center justify-center bg-[#2F357D] text-white rounded-full shadow-md active:scale-90 transition-all ml-1"
            >
              <span className="text-2xl mt-[-2px]">+</span>
            </button>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center lg:text-right py-2">
      <span className="text-[10px] font-black text-red-400 bg-red-50 px-4 py-2 rounded-full uppercase tracking-widest border border-red-100">
        Unavailable
      </span>
    </div>
  )}
</div>

            {/* Desktop Status Badge */}
            {item.active && (
              <div className="hidden lg:block ml-4">
                <span className="text-[10px] font-black text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase border border-green-100">
                  Active
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-col sm:flex-row justify-end gap-4 px-2">
       <button 
        onClick={() => alert('Schedule Published!')}
        className="w-full sm:w-auto bg-[#2F357D] text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-blue-800 active:scale-95 transition-all"
      >
        Save & Publish Schedule
      </button>
    </div>
  </div>
)}
            
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default DoctorDashboard;