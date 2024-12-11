import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './Templates/Header';
import HeroContent from './Templates/HeroContent';
import SlideshowContent from './Templates/SlideshowContent';
import Merchandice from './Templates/Merchandice';
import Footer from './Templates/Footer';


function App() {

  return (
    <div className='App'>

    <Header />
    <HeroContent />
    <SlideshowContent />
    <Merchandice />
    <Footer />


    </div>
  )
}

export default App
