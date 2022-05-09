import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Page/Home/Home";
import About from "./Components/Page/About/About";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
