import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import React from 'react';

import Signup from './pages/Signup';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      );
    }

export default App;
