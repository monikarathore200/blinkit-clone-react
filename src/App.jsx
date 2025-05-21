import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './common/Header'
import Banner from './Banner'
import React from 'react'
import Slider from './Slider'
import Footer from './common/Footer'
function App() {
 

  return (
    <>
      <Header/>
      <Banner/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
