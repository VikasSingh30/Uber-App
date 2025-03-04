import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaptainSignup from './pages/Captainsignup'
import CaptainLogin from './pages/CaptainLogin'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/captainsignup" element={<CaptainSignup />} />
        <Route path="/captainlogin" element={<CaptainLogin />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    </div>
  )
}

export default App