import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import AdminLogin from "./components/AdminLogin"
import AdminDashboard from "./components/AdminDashboard"
import Recipe from "./components/Recipe"
import AddRecipe from "./components/AddRecipe"
import ManageRecipe from "./components/ManageRecipe"

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
          <Route path="/manage" element={<ManageRecipe/>}/>
          <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App