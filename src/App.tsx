import SingleProduct from "pages/productDetails/SingleProduct";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
