import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import Apply from "./pages/Apply/Apply";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddEmployees from "./pages/Dashboard/EmployeeDashboard/AddEmployees";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard/UserDashboad";
import AddUser from "./pages/Dashboard/UserDashboard/AddUser";
import UpdateUser from "./pages/Dashboard/UserDashboard/UpdateUser";
import EmployeesDashboard from "./pages/Dashboard/EmployeeDashboard/EmployeesDashboard";
import UpdateEmployees from "./pages/Dashboard/EmployeeDashboard/UpdateEmployees";
import JobDashboard from "./pages/Dashboard/JobDashboard/JobDashboard";
import About from "./pages/About/About";
import Jobs from "./pages/Jobs/Jobs";
import PostJob from "./pages/PostJob/PostJob";
import Job from "./pages/Job/Job";
import Shpalljet from "./pages/Shpalljet/Shpalljet";
import Aplikimet from "./pages/Aplikimet/Aplikimet";
import Profili from "./pages/Profili/Profili";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Apply" element={<Apply />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AddEmployees" element={<AddEmployees />} />
            
            <Route path="/Dashboard/" element={<Dashboard />} />
            <Route path="/UserDashboard" element={<UserDashboard />} />
            <Route path="/EmployeesDashboard" element={<EmployeesDashboard />}/>
            <Route path="/JobDashboard" element={<JobDashboard />} />
            <Route path="/update/:id" element={<UpdateUser />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/updateEmployees/:id" element={<UpdateEmployees />} />
            <Route path="/About" element={<About />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Shpallje" element={<PostJob />} />
            <Route path="/Shpalljet" element={<Shpalljet />} />
            <Route path="/Aplikimet" element={<Aplikimet />} />
            <Route path="/Profili" element={<Profili />} />
            <Route path="/Shpallje/:id" element={<Job />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
};

export default App;
