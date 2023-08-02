import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotels/Hotel";
import Sign from "./pages/Register/Sign";
import Fhome from "./pages/Fhome/Fhome";
import Thome from "./pages/Thome/Thome"
import Payment from "./pages/Payment/Payment";



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Sign/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/flight" element={<Fhome/>}/>
      <Route path="/train" element={<Thome/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
