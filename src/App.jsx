import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
// import Footer from './components/Footer'
// import BelowNav from './components/BelowNav'
// import BelowCards from './components/BelowCards'
// import UseState from './components/UseState'
import Button from './components/Button'
import SignUp from './components/SignUp'
import Api from './components/Api'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Dash from './components/Van/Dash'
import Income from './components/Van/Income'
import Review from './components/Van/Review'
import VanLayout from './components/Van/VanLayout'
import Spotify from './components/Spotify/Spotify'

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}/>
          <Route path="/" element={<Home/>} />
          <Route path="/sign" element={<SignUp/>} />
          <Route path="/button" element={<Button/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/contacts" element={<Api/>} />
          <Route path="/music" element={<Spotify/>} />
        <Route/>
      {/* Nested Routes */}
        <Route path='/van' element={<VanLayout/>}>
          <Route path='/van' element={<Dash/>}/>
          <Route path='/van/income' element={<Income/>}/>
          <Route path='/van/review' element={<Review/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
