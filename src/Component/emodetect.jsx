import React from 'react';
import './emodetect.css'; // CSS file ko import karna mat bhooliye ga

const ScanMethods = () => {
  const methods = [
    { title: 'Face Emotion', btn: 'Scan Face', icon: '👤' },
    { title: 'Voice Emotion', btn: 'Record Voice', icon: '🎤' },
    { title: 'Text Emotion', btn: 'Analyze Text', icon: '📝' }
  ];

  return (
    <section className="scan-section">
      <h2 className="section-title">Emotion Scan</h2>
      <p className="section-desc">Choose a method to analyze your emotions.</p>
      
      <div className="scan-grid">
        {methods.map((item, index) => (
          <div className="scan-card" key={index}>
            <div className="scan-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            {/* Design ke mutabiq box */}
            <div className="placeholder-box"></div> 
            <button className="btn-scan">{item.btn}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Ye line sabse zaroori hai doosri files mein use karne ke liye
export default ScanMethods;