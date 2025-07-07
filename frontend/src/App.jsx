import React from 'react'
import {Routes, Route } from 'react-router-dom'

import About from './pages/About'
import TermsAndCondition from './pages/TermsAndCondition'
import ShippingReturnRefunds from './pages/ShippingReturnRefunds'
import ShopAll from './pages/ShopAll'
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<ShopAll/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndCondition/>}/>
      <Route path='/shipping-return-refunds' element={<ShippingReturnRefunds/>}/>
    </Routes>
  )
  
}

export default App
