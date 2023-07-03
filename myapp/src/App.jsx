import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Heading from "./components/Heading" 
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"

const App = () => {
    return (
        <Router>
        <Heading />
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} /> 
                <Route path="/" element={<Contact />} /> 
            </Routes>
        </Router>    
    );
}

export default App ; 