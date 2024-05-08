import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import Home from './pages/Home';
import Form from './pages/Form';
import Submit from './pages/Submit';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/submit' element={<Submit/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App