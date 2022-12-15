import NavBar from './components/navbar/NavBar';
import React from 'react';
import './App.css';
import Suppliers from './pages/supplier/Suppliers';
import Inventory from './pages/inventory/Inventory';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className='app'>
        <Router>
          <NavBar/>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<Dashboard />}/>
              <Route path="/index.html" element={<Dashboard />}/>
              <Route path='/inventory' element={<Inventory/>}/>
              <Route path='/suppliers' element={<Suppliers/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
