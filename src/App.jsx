import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"
import Staff from "./components/Staff"
import Recipe from "./components/Recipe"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/recipes" element={<Recipe/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<AdminLogin/>}/>
          <Route path="/dashboard" element={<AdminDashboard/>}/>
          <Route path="/staff" element={<Staff/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App