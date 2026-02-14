import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from '../components/HeroSection'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes