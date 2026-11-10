import { Route, Routes } from "react-router"
import Nav from "./components/nav"
import Home from "./pages/Home"
import CustomPizza from "./pages/customPizza"

import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
const App = () => {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/build" element={<CustomPizza />}/>
        <Route path="/orders" element={<Orders />}/>

      </Routes>
    </div>
  )
}

export default App
