
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Problem from './pages/Problem';
import YourChoice from './pages/YourChoice';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Foxes from './pages/Foxes';
import Ducks from './pages/Ducks'
import CallToAction from './pages/CallToAction';
import Dominion from './pages/Dominion';


function App() {


  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/choice' element={<YourChoice />} />
        <Route path='/problem' element={<Problem />} />
        <Route path='/cats' element={<Cats />} />
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/foxes' element={<Foxes />} />
        <Route path='/ducks' element={<Ducks />} />
        <Route path='/cta' element={<CallToAction />} />
        <Route path='/dominion' element={<Dominion />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
