import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer"
import Contact from './screens/contact/Contact'
import About from './screens/about/About'
import GymBenefits from './screens/gymbenefits/GymBenefits'
import Membership from './screens/membership/Membership'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/benefits" element={<GymBenefits />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
