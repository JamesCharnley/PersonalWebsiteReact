import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import gridStyles from "./DynamicGrid.module.css";
import { GridItem } from "./GridItem";

export function DynamicGrid({filter}) {

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(function () {
    async function fetchProjects(){
      try{
        setLoadFailed(false);
        setIsLoading(true);
        const res = await fetch("https://jamescharnley.com/api/projects");
        const data = await res.json();
        setProjectList(data);
        
      } catch(err){
        setLoadFailed(true);
      } finally{
        setIsLoading(false);
      }
      
    }
    fetchProjects();
  }, []);

  let displayedProjects = [];
  if(!isLoading && !loadFailed)
    {
      if(filter === "web"){
        displayedProjects = projectList.filter(
          (p) =>
            p.skills.includes("Angular") ||
            p.skills.includes("React") ||
            p.skills.includes(".NET") ||
            p.skills.includes("SQL") ||
            p.skills.includes("Next.js")
        );
      }
      else if(filter === "game"){
        displayedProjects = projectList.filter((p) =>
          p.skills.includes("Unity") || 
          p.skills.includes("Unreal") || 
          p.skills.includes("SFML")
        );
      }
      else
      {
        displayedProjects = [...projectList]
      }
      
    }

  return (
    <>
    {loadFailed && <p>failed to fetch data 😢</p>}
    {isLoading && !loadFailed ? <p>Loading...</p> : <div className={gridStyles.grid}>
      {displayedProjects.map((p) => (
        <GridItem key={p.id}>
          <ProjectCard
            id={p.id}
            imageUrl={p.imageUrl}
            title={p.title}
            description={p.shortDescription}
            skills={p.skills}
          />
        </GridItem>
      ))}
    </div>}
    </>
  );
}
