import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
