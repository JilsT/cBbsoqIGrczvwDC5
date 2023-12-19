import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Bmi from './Pages/Bmi';

function App() {
  return (
    <Router>
      <Routes basename="cBbsoqIGrczvwDC5">
        <Route path ='/' element={<Home />}></Route>
        <Route path ='/bmi' element={<Bmi />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
