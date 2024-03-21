import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Department from './pages/Department';
import Events from './components/Events';
import Team from './pages/Team';
import FFCS21 from './pages/FFCS21';
import FFCS22 from './pages/FFCS22';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import Founding from './pages/Founding';
import BoardMembers from './pages/BoardMembers';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Home />
        <About />
        <Department />
        <Events />
        <Team />
        <Routes>
          <Route exact path='/ffcs21' element={<FFCS21 />} />
          <Route exact path='/ffcs22' element={<FFCS22 />} />
          <Route exact path='/founding-members' element={<Founding />} />
          <Route exact path='/board-members' element={<BoardMembers />} />
        </Routes>
        <Gallery />
        <JoinUs />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
