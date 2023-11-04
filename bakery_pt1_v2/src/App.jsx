import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Bread from "./components/Bread";
import Cake from "./components/Cake";
import Pastry from "./components/Pastry";
import ErrorPage from "./components/ErrorPage";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/pastry" element={<Pastry />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
