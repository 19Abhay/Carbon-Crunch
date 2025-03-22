
import React, { Suspense } from "react";
import "./App.css";

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import StepsSection from './components/StepsSection/StepsSection';

const Dashboard3D = React.lazy(() => import('./components/Dashboard3D/Dashboard3D'));

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <InfoSection />
    <StepsSection />
    <Suspense fallback={<div className="loading">Loading 3D Dashboard...</div>}>
      <Dashboard3D />
    </Suspense>
  </div>
);

export default App;
