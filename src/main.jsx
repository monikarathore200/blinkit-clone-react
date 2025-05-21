import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Header from './common/Header.jsx'
import App from './App.jsx'
import Section from './Section.jsx'
import Product from './Product.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagenotfound from './Pagenotfound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<App/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
