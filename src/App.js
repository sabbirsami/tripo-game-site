import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HeaderNavbar from "./Shared/HeaderNavbar";

import "./style.css";

function App() {
    return (
        <div style={{ backgroundColor: "#F6F4F0" }}>
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
