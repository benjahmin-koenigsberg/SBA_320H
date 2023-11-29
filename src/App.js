
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Landing from './pages/Landing';
import Problem from './pages/Problem';
import YourChoice from './pages/YourChoice';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Foxes from './pages/Foxes';
import Ducks from './pages/Ducks'
import { useState } from 'react'


function App() {



  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/problem' element={<Problem />} />
        <Route path='/YourChoice' element={<YourChoice />} />
        <Route  path='/cats' element={<Cats />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/ducks' element={<Ducks />} />
        <Route path='/foxes' element={<Foxes />} />


      </Routes>
    </BrowserRouter>
  );

}

export default App;
