import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Select from "./components/Select"
import SelectPokemon from "./components/SelectPokemon"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Select/>} path="/Select" />
        <Route element={<SelectPokemon/>} path="/Selectpokemon" />
        <Route element={<SelectPokemon/>} path="/Selectpokemon/:pokemon" />
      </Routes>
    </div>
  )
}

export default App