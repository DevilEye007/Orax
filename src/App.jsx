import React from 'react';
import Navbar from './components/navbar.jsx';
import HeroSection from './components/hero.jsx';
import ServicesSection from './components/serviceselection.jsx';
import TopDestinations from './components/topdestination.jsx';
import Efb from './components/easyfastbooking.jsx';
import Slider from './components/brandslider.jsx';
import Newsletter from './components/newsletter.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <TopDestinations/>
      <Efb/>
      <Slider/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
