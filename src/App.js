import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import HeaderNavbar from "./Shared/HeaderNavbar";

import "./style.css";

function App() {
    return (
        <div style={{ backgroundColor: "#F6F4F0" }}>
            <HeaderNavbar></HeaderNavbar>
            <Home></Home>
        </div>
    );
}

export default App;
