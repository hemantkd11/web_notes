import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Notes/Home";
import Navbar from "./Notes/Navbar/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/web_notes" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
