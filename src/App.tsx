import Cart from "pages/cart/Cart";
import SingleProduct from "pages/productDetails/SingleProduct";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
