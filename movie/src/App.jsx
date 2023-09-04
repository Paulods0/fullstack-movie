import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

import api from "./api/axiosConfig"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full flex flex-col justify-between bg-gradient-to-tr from-[#020024]  to-[#191948]">
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </section>
      <Footer />
    </div>
  )
}

export default App
