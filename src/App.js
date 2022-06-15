import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './screens/Dashboard';
import Details from './screens/Details';
import Login from './screens/Login';
import Portfolio from './screens/Portfolio';
import Teams from './screens/Teams';
import ClinicianDetails from "./screens/ClinicianDetails"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/cliniciandetails" element={<ClinicianDetails/>}/>
    <Route path="/details" element={<Details/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App