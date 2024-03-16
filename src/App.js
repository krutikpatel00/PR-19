import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Casual from './Components/Casual/Casual';
import Card from './Components/Card/Card';
import 'animate.css';
const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/product/:myId' element={<Products />} />
        <Route path='/casual' element={<Casual />} />
        <Route path='/card' element={<Card />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;