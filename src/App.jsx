import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PageTwo from './components/PageTwo'
import UseCases from './components/UseCases'
import Faq from './components/Faq'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PageTwo />
  <UseCases />
  <Features />
  <Faq />
  <Pricing />
  <Footer />
  
    </>
  );
}

export default App;
