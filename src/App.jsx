import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import './App.css';
import Nav from "./components/nav"


function App() {

    return (
        <Router>
         
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
