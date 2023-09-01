import React from 'react';
import NavBar from '../components/NavBar';
import MobileMenu from '@/components/MobileMenu';
import HeroSection from '@/components/HeroSection';
import EQOverIQ from '@/components/EQOverIQ';
import FamiliarSituations from '@/components/FamiliarSituations';
import MeetTheApp from '@/components/MeetTheApp';
import SelfImprovementSteps from '@/components/SelfImprovementSteps';
import BestWithEQ from '@/components/BestWithEQ';
import SocialSkillsChart from '@/components/SocialSkillsChart';
import TakeTheTest from '@/components/TakeTheTest';
import Vacancies from '@/components/Vacancies';
import Footer from '@/components/Footer';
import About from '@/components/About';

const Home = () => {
  return (
    <div>
      <NavBar />
      <MobileMenu />
      <HeroSection />
      <EQOverIQ />
      <FamiliarSituations />
      <MeetTheApp />
      <SelfImprovementSteps />
      <BestWithEQ />
      <SocialSkillsChart />
      <TakeTheTest />
      <About />
      <Vacancies />
      <Footer />
    </div>
  );
};

export default Home;
