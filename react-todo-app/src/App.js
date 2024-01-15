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
import Help_teachers from "./pages/Help_teachers";
import Help_dhmiourgia from "./pages/Help_dhmiourgia";
import Help_mathimata_didaskontwn from "./pages/Help_mathimata_didaskontwn";
import Help_bathologio from "./pages/Help_bathologio";

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
      <Route path="/help_teachers" element = {<Help_teachers />} /> 
      <Route path="/help_dhmiourgia" element = {<Help_dhmiourgia />} /> 
      <Route path="/help_mathimata_didaskontwn" element = {<Help_mathimata_didaskontwn />} /> 
      <Route path="/help_bathmologio" element = {<Help_bathologio />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
