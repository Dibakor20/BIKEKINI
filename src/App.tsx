import ProductDetails from "pages/productDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
