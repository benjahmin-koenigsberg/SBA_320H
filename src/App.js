
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Wolves from './pages/Wolves';
import Ducks from './pages/Ducks'
import { useState } from 'react'


function App() {



  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path='/cats' element={<Cats />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/ducks' element={<Ducks />} />
        <Route path='/wolves' element={<Wolves />} />


      </Routes>
    </BrowserRouter>
  );

}

export default App;
