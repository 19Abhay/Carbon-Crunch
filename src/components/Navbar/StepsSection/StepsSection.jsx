
import React from 'react';
import './StepsSection.css';

const StepsSection = () => (
  <section className="steps-section">
    <div className="button-wrapper">
      <button className="rounded-button">How it works?</button>
    </div>
    <h2>Getting Started is Easy</h2>
    <p>How CarbonCrunch SAAS works</p>
    <div className="step-container">
      {["Track & Manage", "Set Goals", "Monitor Progress"].map((step, index) => (
        <div key={index} className="step-card">
          <h3>{`0${index + 1}`} {step}</h3>
          <p>Set decarbonization targets and track emissions.</p>
        </div>
      ))}
    </div>
  </section>
);

export default StepsSection;
