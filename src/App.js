
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './components/Card';
import InfoCard from './components/InfoCard';
import { landingPage, problemPage, choicePage, cat, dog, fox, duck, actionPage, dominionPage } from './data'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InfoCard props={landingPage} />} />
        <Route path='/choice' element={<InfoCard props={problemPage} />} />
        <Route path='/problem' element={<InfoCard props={choicePage} />} />
        <Route path='/cats' element={<Card props={cat} />} />
        <Route path='/dogs' element={<Card props={dog} />} />
        <Route path='/foxes' element={<Card props={fox} />} />
        <Route path='/ducks' element={<Card props={duck} />} />
        <Route path='/action' element={<InfoCard props={actionPage} />} />
        <Route path='/dominion' element={<InfoCard props={dominionPage} />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
