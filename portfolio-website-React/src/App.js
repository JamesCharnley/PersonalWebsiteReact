import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Projects from './components/Projects';
import { Project } from "./components/Project";
import { useState } from "react";

export default function App() {
  const [projectsList, setProjectsList] = useState(); // eslint-disable-line no-use-before-define
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/projects"
          element={
            <Projects
              setProjectsList={setProjectsList}
              projectsList={projectsList}
            />
          }
        ></Route>
        <Route
          path="/project/:id"
          element={<Project projectsList={projectsList} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}


