import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Home from "./Components/Page/Home/Home";
import Appointment from "./Components/Page/Appointment/Appointment";
import ContactUs from "./Components/Page/Contact Us/ContactUs";
import Reviews from "./Components/Page/Reviews/Reviews";
import About from "./Components/Page/About/About";
import Login from "./Components/Page/Login/Login";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
