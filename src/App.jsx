import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Layouts/Navbar'
import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import WebFont from 'webfontloader';
import { ResumeProvider } from './Context'
import Main from './components/Main'

function App() {
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins','Prosto One', 'Rubik']
      }
    });
  }, []);

  return (
    <>
      <ResumeProvider >
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </>
  )
}

export default App
