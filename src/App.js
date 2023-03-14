import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Home, Navbar, ReactPure_comp, ReactHooks } from "./import";
import Home from "./Notes/Home";
import Navbar from "./Notes/Navbar/Nav";
import ReactPure_comp from "./Notes/React/ReactPure_comp";
import ReactHooks from "./Notes/React/ReactHooks";
import PythonNotes from "./Notes/Python/Python";
import Css from "./Notes/Css/Css";
import Javascript from "./Notes/JavaScript/javanotes";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web_notes/react" element={<ReactPure_comp />} />
          <Route path="/web_notes/react/reacthooks" element={<ReactHooks />} />
          <Route path="/web_notes/python" element={<PythonNotes />} />
          <Route path="/web_notes/css" element={<Css />} />
          <Route path="/web_notes/javascript" element={<Javascript />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
