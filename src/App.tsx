import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import './GlobalStyled'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
