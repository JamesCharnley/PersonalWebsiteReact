
import projectsStyles from './Projects.module.css';
import { DynamicGrid } from "./DynamicGrid";
import { NavBar } from "./NavBar";
import { useState } from 'react';

export default function Projects(){
  const [filter, setFilter] = useState("all");

  function handleFilterSelect(selection){
    setFilter(selection);
  }

  return (
    <>
      <NavBar />
      <div className={projectsStyles.filter}>
        <div
          onClick={() => handleFilterSelect("all")}
          className={`${projectsStyles.filter_all} ${
            filter === "all" ? projectsStyles.color_border : ""
          }`}
        >
          All
        </div>
        <div
          onClick={() => handleFilterSelect("web")}
          className={`${projectsStyles.filter_web} ${
            filter === "web" ? projectsStyles.color_border : ""
          }`}
        >
          Web Dev
        </div>
        <div
          onClick={() => handleFilterSelect("game")}
          className={`${projectsStyles.filter_game} ${
            filter === "game" ? projectsStyles.color_border : ""
          }`}
        >
          Game Dev
        </div>
      </div>
      <div className={projectsStyles.list_container}>
        <DynamicGrid filter={filter}/>
      </div>
    </>
  );
}
