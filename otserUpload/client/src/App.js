import NavBar from './components/navbar/NavBar';
import React, { useContext } from 'react';
import './App.css';
import Suppliers from './pages/supplier/Suppliers';
import Inventory from './pages/inventory/Inventory';
import Dashboard from './pages/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login/Login';
import { Context } from './context/Context';
import Add from './pages/add/Add';
import Menu from './pages/menu/menu';
import Cashier from './pages/cashier/Cashier';
import OrderList from './pages/order/OrderList';
import AddMenu from './pages/addMenu/AddMenu';


function App() {
  const{user} = useContext(Context)
  return (
    <div className='app'>
        <Router>
          {user?<NavBar/>:<></>}
          <div className='content'>
            <Routes>
              <Route exact path="/" element={user?user.admin?user.inventory?<Dashboard />:<Menu/>:<Cashier />:<Login/>}/>
              <Route path='/inventory' element={user?user.admin?user.inventory?<Inventory/>:<Menu/>:<Cashier />:<Login/>}/>
              <Route path='/suppliers' element={user?user.admin?user.inventory?<Suppliers/>:<Menu/>:<Cashier/>:<Login/>}/>
              <Route path="/login" element={user?user.admin?user.inventory?<Dashboard />:<Menu/>:<Cashier />:<Login/>}/>
              <Route path="/add" element={user?user.admin?user.inventory?<Add />:<Add/>:<Cashier />:<Login/>}/>
              <Route path="/menu" element={user?user.admin?!user.inventory?<Menu />:<Dashboard />:<Cashier />:<Login/>}/>
              <Route path="/addMenu" element={user?user.admin?user.inventory?<Menu />:<AddMenu/>:<Cashier />:<Login/>}/>
              <Route path="/cashier" element={user?<Cashier />:<Login/>}/>
              <Route path="/orders" element={user?user.admin?!user.inventory?<OrderList />:<Dashboard />:<Cashier />:<Login/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
