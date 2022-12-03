import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
// import DATA from "./data/allQuestions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
