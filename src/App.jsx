import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       
    </Router>
  );
}

export default App;
