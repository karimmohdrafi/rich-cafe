import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Shawarma from "./pages/Shawarma";
import FriedChicken from "./pages/FriedChicken";
import ChickenPizza from "./pages/ChickenPizza";
import ChickenBurger from "./pages/ChickenBurger";
import ChickenSandwich from "./pages/ChickenSandwich";
import FrenchFries from "./pages/FrenchFries";
import FriedMomos from "./pages/FriedMomos";
import GrilledChicken from "./pages/GrilledChicken";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shawarma" element={<Shawarma />} />
          <Route path="/fried-chicken" element={<FriedChicken />} />
          <Route path="/chicken-pizza" element={<ChickenPizza />} />
          <Route path="/chicken-burger" element={<ChickenBurger />} />
          <Route path="/chicken-sandwich" element={<ChickenSandwich />} />
          <Route path="/french-fries" element={<FrenchFries />} />
          <Route path="/fried-momos" element={<FriedMomos />} />
          <Route path="/grilled-chicken" element={<GrilledChicken />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="*"
            element={
              <main className="not-found-page">
                <h1>404</h1>
                <p>Oops! This page could not be found.</p>
                <a href="/">Back to Home</a>
              </main>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;