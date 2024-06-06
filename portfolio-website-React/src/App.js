import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects from './components/Projects';
import { Project } from "./components/Project";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


