import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skill";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            <Home />
            <About />
            <Skill />
            <Blog />
            </>
          } />
          <Route path="/:id" element={
           <>
              <Header />
              <BlogDetails />
           </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
