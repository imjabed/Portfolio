import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Project from "./components/Project";
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;