import './App.css';
import Home from './componant/home/Home';
import Navbar from './Navbar';
import Concat from './componant/concat/Concat'
import About from './componant/about/About'
import Projects from './componant/projects/Projects';
import { AnimatePresence } from 'framer-motion';


import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="landing-page">
          <div className="overlay"></div>
            <div className="container">
              <Navbar />
              <AnimatePresence mode= 'wait'>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<><Home /></>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/concat" element={<Concat />} />
                </Routes>
              </AnimatePresence>
            </div>
      </div>
    </>
  )
}
export default App















