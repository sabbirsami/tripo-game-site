import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Careers from "./Components/Careers/Careers";
import Home from "./Components/Home/Home";
import Footer from "./Shared/Footer";
import HeaderNavbar from "./Shared/HeaderNavbar";

import "./style.css";

function App() {
    return (
        <div style={{ backgroundColor: "#F6F4F0" }}>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/careers" element={<Careers></Careers>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
