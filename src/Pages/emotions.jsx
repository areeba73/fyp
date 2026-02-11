import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import './emotions.css';

const Result = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="stress-section">
        <div className="stress-card">
          {/* Header Section */}
          <h2 className="stress-heading">
            You're Feeling <span className="highlight-red">Stressed</span>
          </h2>

          {/* Emoji & Level */}
          <div className="emoji-container">
            <span className="stress-emoji">😟</span>
            <p className="stress-label">
              Stress Level: <strong>High</strong>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>

          {/* Action Card */}
          <div className="action-box">
            <p>You seem a bit stressed. Want to talk?</p>
            <div className="action-btns">
              <button className="btn-chat">💬 Talk to Chatbot</button>
              <button className="btn-view">View Suggestions</button>
              <button className="btn-doctor">Find a Doctor</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Result;
