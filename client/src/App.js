import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';
import Apply from './pages/Apply/Apply';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



  const App =()=>{
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />}/> 
        <Route path='/Employees' element={<Employees />}/>
        <Route path='/Apply' element={<Apply />} />
        <Route  path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />} />

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
