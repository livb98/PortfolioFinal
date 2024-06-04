import './App.css'
import Home from './features/HomePage/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Project from './features/Projects/Project';
import Contact from './features/Contact/Contact';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/#project' element={<Project/>}/>
      <Route path='/#contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
