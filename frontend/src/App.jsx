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
import './App.css'


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/shopall' element={<ShopAll/>}/>
      <Route path='/bestseller' element={<BestSeller/>}/>
      <Route path='/hair' element={<Hair/>}/>
      <Route path='/health' element={<BestSeller/>}/>
      <Route path='/skin' element={<BestSeller/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndCondition/>}/>
      <Route path='/shipping-return-refunds' element={<ShippingReturnRefunds/>}/>
    </Routes>
  )
  
}

export default App
