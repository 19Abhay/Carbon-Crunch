
import React from 'react';
import './InfoSection.css';

const InfoSection = () => (
  <section className="info-section">
    <div className="button-wrapper">
      <button className="rounded-button">Why CarbonCrunch</button>
    </div>
    <h2>Leading Sustainability with CarbonCrunch</h2>
    <p>GHG Accounting is a framework used to measure and report greenhouse gas emissions.</p>
    <div className="card-container">
      {["Regulatory Compliance", "Sustainability Goals", "Cost Savings", "Investor Expectations", "Risk Management", "Brand Reputation"].map((title, index) => (
        <div key={index} className="info-card">
          <h3>{title}</h3>
          <p>Governments and regulatory bodies are implementing stricter climate policies.</p>
        </div>
      ))}
    </div>
  </section>
);

export default InfoSection;
