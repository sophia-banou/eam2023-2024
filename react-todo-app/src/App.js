import React from "react"
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { db } from './components/firebase';


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
import Help_bathmologio from "./pages/Help_bathmologio";
import Students from "./pages/Students";
import Help_teachers_profile from "./pages/Help_teachers_profile";
import Teachers from "./pages/Teachers";
import Register from './components/Register/index';
import Login from './components/Login';
import Courses from './components/Courses';
import Student_dilosi from './pages/Student_dilosi';
import Student_bathmologies from './pages/Student_bathmologies';
import Student_mathimata from './pages/Student_mathimata';
import Student_aitisi from './pages/Student_aitisi';
import Student_profile from './pages/Student_profile';
import Proswrinh1 from './pages/Proswrinh1';
import Oristikopoihsh1 from './pages/Oristikopoihsh1';
import Edit_profile from './pages/Edit_profile';
import Istoriko from './pages/Istoriko';
import Proeskopisi from './pages/Proeskopisi';
import Teacher_profile from './pages/Teacher_profile';
import Teacher_bathmologio from './pages/Teacher_bathhmologio';
import Teacher_mathimata from './pages/Teacher_mathimata';
import Teacher_create from './pages/Teacher_create';
import Edit_dilwsh from './pages/Edit_dilwsh';
import View_dilwsh from './pages/View_dilwsh';
import View_mathima from './pages/View_mathima';
import Proepiskopisi_aitisis from './pages/Proepiskopisi_aitisis';
import Oristikopoihsh2 from './pages/Oristikopoihsh2';
import Proswrinh2 from './pages/Proswrinh2';
import Oristikopoihsh3 from './pages/Oristikopoihsh3';
import Edit_teacher_profile from './pages/Edit_teacher_profile';
import Edit_grades from './pages/Edit_grades';

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
      <Route path="/help_bathmologio" element = {<Help_bathmologio />} /> 
      <Route path="/students" element = {<Students />} /> 
      <Route path="/help_teachers_profile" element = {<Help_teachers_profile />} /> 
      <Route path="/teachers" element = {<Teachers />} /> 
      <Route path="/login" element={<Login db={db} />} />
      <Route path="register" element={<Register db={db}/>} />
      <Route path="courses" element={<Courses db={db}/>} />
      <Route path="/student_dilosi" element={<Student_dilosi db={db}/>} />
      <Route path="/student_bathmologies" element={<Student_bathmologies db={db}/>} />
      <Route path="/student_mathimata" element={<Student_mathimata db={db}/>} />
      <Route path="/student_aitisi" element={<Student_aitisi db={db}/>} />
      <Route path="/student_profile" element={<Student_profile db={db}/>} />
      <Route path="/proswrinh1" element={<Proswrinh1 db={db}/>} />
      <Route path="/oristikopoihsh1" element={<Oristikopoihsh1 db={db}/>} />
      <Route path="/istoriko" element={<Istoriko db={db}/>} />
      <Route path="/proepiskopisi" element={<Proeskopisi db={db}/>} />
      <Route path="/teacher_profile" element={<Teacher_profile db={db}/>} />
      <Route path="/teacher_bathmologia" element={<Teacher_bathmologio db={db}/>} />
      <Route path="/teacher_mathimata" element={<Teacher_mathimata db={db}/>} />
      <Route path="/teacher_create" element={<Teacher_create db={db}/>} />
      <Route path="/edit_dilwsh" element={<Edit_dilwsh db={db}/>} />
      <Route path="/view_dilwsh" element={<View_dilwsh db={db}/>} />
      <Route path="/edit_profile" element={<Edit_profile db={db}/>} />
      <Route path="/view_mathima" element={<View_mathima db={db}/>} />
      <Route path="/proepiskopisi_aitisis" element={<Proepiskopisi_aitisis db={db}/>} />
      <Route path="/oristikopoihsh2" element={<Oristikopoihsh2 db={db}/>} />
      <Route path="/proswrinh2" element={<Proswrinh2 db={db}/>} />
      <Route path="/oristikopoihsh3" element={<Oristikopoihsh3 db={db}/>} />
      <Route path="/edit_teacher_profile" element={<Edit_teacher_profile db={db}/>} />
      <Route path="/edit_grades" element={<Edit_grades db={db}/>} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}
