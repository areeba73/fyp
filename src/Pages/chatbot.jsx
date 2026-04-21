import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Component/Navbar';
import bg from '../assets/bg.jpeg';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  // 🔥 FIRST BOT MESSAGE (MOOD BASED START MESSAGE)
  useEffect(() => {
    const savedChat = localStorage.getItem("chatHistory");

    if (savedChat && JSON.parse(savedChat).length > 0) {
      setMessages(JSON.parse(savedChat));
    } else {
      setMessages([
        {
          type: "bot",
          text: "😊 Hello! I sensed a calm mood around you. I'm here if you want to talk."
        }
      ]);
    }
  }, []);

  // SAVE HISTORY
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  // AUTO SCROLL
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { type: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        type: "bot",
        text: "I understand you 🤍 I'm listening..."
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col relative">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-blue-50/40 backdrop-blur-sm"></div>
      </div>

      <Navbar />

      {/* CHAT AREA */}
      <main className="flex-1 flex flex-col pt-24 md:pt-32 pb-28 px-4 md:px-[20%]">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <div className="flex items-center gap-3">
            <div className="text-3xl">🤖</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2F357D]">
                EmoBot
              </h2>
              <p className="text-xs text-blue-600 uppercase tracking-widest">
                AI Emotional Support
              </p>
            </div>
          </div>

          {/* 🎨 THEMED CLEAR BUTTON (SIDE + SMALL + CLEAN) */}
          <button
            onClick={() => {
              setMessages([]);
              localStorage.removeItem("chatHistory");
            }}
            className="text-xs md:text-sm font-bold px-4 py-2 rounded-full 
            bg-white/40 backdrop-blur-xl border border-white 
            text-[#2F357D] shadow-md hover:bg-[#2F357D] hover:text-white 
            transition active:scale-95 mt-10"
          >
            Clear Chat
          </button>

        </div>

        {/* MESSAGES */}
        <div className="flex-1 space-y-4 overflow-y-auto">

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] md:max-w-[60%] px-5 py-4 rounded-3xl shadow-md
                ${msg.type === "user"
                  ? "bg-[#2F357D] text-white rounded-tr-none"
                  : "bg-white/70 text-[#2F357D] backdrop-blur-xl border border-white rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* TYPING */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/70 px-5 py-3 rounded-3xl rounded-tl-none border border-white shadow flex items-center gap-2">

                <span className="text-sm text-[#2F357D] font-medium">
                  EmoBot is typing
                </span>

                <span className="w-2 h-2 bg-[#2F357D] rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-[#2F357D] rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-[#2F357D] rounded-full animate-bounce delay-300"></span>

              </div>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>
      </main>

      {/* INPUT */}
      <div className="fixed bottom-4 left-0 w-full px-3 md:px-[20%]">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-2xl rounded-full p-2 border border-white shadow-xl">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent px-4 py-3 outline-none text-[#2F357D]"
          />

          <button
            onClick={sendMessage}
            className="bg-[#2F357D] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            ➤
          </button>

        </div>
      </div>

    </div>
  );
};

export default Chatbot;