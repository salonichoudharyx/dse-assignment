import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Navbar from "./Components/Navbar";
import Order from "./Pages/Order";
import Footer from "./Components/Footer/Footer";
import fulldata from "./Components/assets/data";
import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
export const dataContext = createContext();
export const logContext = createContext();

function App() {
  const [data, setdata] = useState(fulldata);
  const [login, setLogin] = useState(false);

  return (
    <div>
      <dataContext.Provider value={{ data, setdata }}>
        <BrowserRouter>
          <logContext.Provider value={{ login, setLogin }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order" element={<Order />} />
            </Routes>
            <Footer />
          </logContext.Provider>
        </BrowserRouter>
      </dataContext.Provider>
    </div>
  );
}

export default App;
