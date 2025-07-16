import React from 'react'
import {Routes, Route } from 'react-router-dom'

import About from './pages/About'
import TermsAndCondition from './pages/TermsAndCondition'
import ShippingReturnRefunds from './pages/ShippingReturnRefunds'
import ShopAll from './pages/ShopAll'
import ProductDetails from './pages/ProductDetails'
import LandingPage  from './pages/LandingPage'    
import BestSeller from './pages/BestSeller'
import Hair from './pages/Hair'
import Skin from './pages/Skin'
import Health from './pages/Health'
import Mind from './pages/Mind'
import Lungs from './pages/Lungs'
import Liver from './pages/Liver'
import Ortho from './pages/Ortho'
import Heart from './pages/Heart'
import Kidney from './pages/Kidney'
import Stomach from './pages/Stomach'
import Sexual from './pages/Sexual'
import Immunity from './pages/Immunity'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/shopall' element={<ShopAll/>}/>
      <Route path='/bestseller' element={<BestSeller/>}/>
      <Route path='/hair' element={<Hair/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/skin' element={<Skin/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndCondition/>}/>
      <Route path='/shipping-return-refunds' element={<ShippingReturnRefunds/>}/>

      <Route path='/mind' element={<Mind />} />
      <Route path='/lungs' element={<Lungs />} />
      <Route path='/liver' element={<Liver />} />
      <Route path='/ortho' element={<Ortho />} />
      <Route path='/heart' element={<Heart />} />
      <Route path='/kidney' element={<Kidney />} />
      <Route path='/stomach' element={<Stomach />} />
      <Route path='/sexual' element={<Sexual />} />
      <Route path='/immunity' element={<Immunity />} />
    </Routes>
  )
  
}

export default App
