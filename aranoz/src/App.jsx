import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Pages from './pages/Page'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Errorpage from './pages/Errorpage'
import Footer from './layouts/Footer'

function App() {

  return (
    <>
    <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/pages" element={<Pages/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/contact" element={<Errorpage/>}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App
