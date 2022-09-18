import React from 'react'
import Home from './Home'
import Cardinfo from './Cardinfo'
import Searched from './Searched'
import { Route, Routes } from "react-router-dom"

function Pages() {
  return (
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cardinfo/:card" element={<Cardinfo />}/>
            <Route path="/searched/:search" element={<Searched />}/>
        </Routes>
    
    
  )
}

export default Pages