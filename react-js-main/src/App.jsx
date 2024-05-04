import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Students from './components/Students'
import Admin from './components/Admin'

function App() {
  

  return (
       
      <Router>
        <div className="flex flex-col h-screen w-screen">
              <Header />
                <div className="flex flex-1">
                  <Sidebar />
                    <Routes>
                      <Route exact path="/" element={
                        <div className="flex justify-center items-center p-60 h-full">
                          <h1 className="bg-orange-600 text-white font-bold text-4xl">Welcome to the Student Portal</h1>
                        </div>
                      } /> 
                      <Route exact path="/dashboard" element={<Dashboard />} />
                      <Route exact path="/admin" element={<Admin />} />
                      <Route exact path="/students" element={<Students/>} />
                    </Routes>
                </div>
              <Footer />
          </div>
       </Router>
  )
}

export default App
