import React from "react"
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import Help_students from "./pages/Help_students";
import Help_dilosi from "./pages/Help_dilosi";

export default function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<HomePage />} /> 
      <Route path="/help" element = {<Help />} /> 
      <Route path="/help_students" element = {<Help_students />} /> 
      <Route path="/help_dilosi" element = {<Help_dilosi />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
