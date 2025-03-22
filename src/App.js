import React from "react";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">CarbonCrunch</div>
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>
    <div className="nav-buttons">
      <button className="login-btn">Login</button>
      <button className="book-demo-btn">Book Demo</button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <h1>GHG Accounting<br/>Scope 1, Scope 2, Scope 3</h1>
    <p>Track, minimize, offset, and report your carbon emissions effortlessly.</p>
  </section>
);

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

const DashboardImage = () => (
  <section className="dashboard-section">
    <img src="/abc.png" alt="Employee Dashboard" className="dashboard-image" />
  </section>
);


const App = () => (
  <div>
    <Navbar />
    <Hero />
    <InfoSection />
    <StepsSection />
    <DashboardImage />
  </div>
);

export default App;
