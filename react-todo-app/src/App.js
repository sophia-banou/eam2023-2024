import React from "react"
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Help from "./pages/Help";
import Help_students from "./pages/Help_students";

export default function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<HomePage />} /> 
      <Route path="/help" element = {<Help />} /> 
      <Route path="/help_students" element = {<Help_students />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
