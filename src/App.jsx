import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofStrip from './components/ProofStrip';
import AboutStory from './components/AboutStory';
import ProjectShowcase from './components/ProjectShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import AwardsAndCerts from './components/AwardsAndCerts';
import ResumeSection from './components/ResumeSection';
import DisciplineTabs from './components/DisciplineTabs';
import TechArsenal from './components/TechArsenal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#060608] text-[#e4e4eb] bg-grid-pattern overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Stream */}
      <main id="main">
        <Hero />
        <ProofStrip />
        <TechArsenal />
        <AboutStory />
        <ProjectShowcase />
        <DisciplineTabs />
        <ExperienceTimeline />
        <EducationSection />
        <AwardsAndCerts />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
