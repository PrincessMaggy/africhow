import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import './App.css';
import Footer from './components/Footer'
import Nav from "./components/nav"


function App() {

    return (
        <Router>
         
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
