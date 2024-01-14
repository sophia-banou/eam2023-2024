import React from "react"
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import Help_students from "./pages/Help_students";
import Help_dilosi from "./pages/Help_dilosi";
import Help_aithseis from "./pages/Help_aitiseis";
import Help_bathmos from "./pages/Help_bathmos";
import Help_mathima from "./pages/Help_mathima";
import Help_pistopoihtiko from "./pages/Help_pistopoihtiko";
import Help_profile from "./pages/Help_profile";

export default function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<HomePage />} /> 
      <Route path="/help" element = {<Help />} /> 
      <Route path="/help_students" element = {<Help_students />} /> 
      <Route path="/help_dilosi" element = {<Help_dilosi />} /> 
      <Route path="/help_bathmos" element = {<Help_bathmos />} /> 
      <Route path="/help_profile" element = {<Help_profile />} /> 
      <Route path="/help_aithseis" element = {<Help_aithseis />} /> 
      <Route path="/help_pistopoihtiko" element = {<Help_pistopoihtiko />} /> 
      <Route path="/help_mathima" element = {<Help_mathima />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
