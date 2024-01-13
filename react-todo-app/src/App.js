import React from "react"
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<HomePage />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  )
}
