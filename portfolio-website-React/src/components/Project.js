import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import Button from "./Button";
import projectStyles from './Project.module.css';
import { DynamicGrid } from "./DynamicGrid";
export function Project() {

  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  let { id } = useParams();

  useEffect(function (){
    async function getProject(){
      try{
        setIsLoading(true);
        setLoadFailed(false);
        const res = await fetch(`https://jamescharnleyapi.azurewebsites.net/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
      } catch(err) {
        setLoadFailed(true);
      } finally{
        setIsLoading(false);
      }
      
    }
    
    getProject();
  }, [id]);

  let btnText = "";
  if (!isLoading && !loadFailed && project.externalUrl) {
    if (project.externalUrl.includes("git")) {
      btnText = "GitHub";
    } else if (project.externalUrl.includes("itch")) {
      btnText = "Itch.io";
    }
  }

  return (
    <>
      <NavBar />
      {loadFailed && <p>failed to fetch data 😢</p>}
      {isLoading && !loadFailed ? (
        <p>Loading...</p>
      ) : (
        <>
        <div className={projectStyles.flex_container}>
          <div
            style={{ backgroundImage: `url(${project.imageUrl})` }}
            className={projectStyles.image}
          ></div>
          <div className={projectStyles.info_text}>
            <h2 className={projectStyles.info_text_title}>{project.title}</h2>
            <p className={projectStyles.info_text_description}>
              {project.longDescription}
            </p>
            <ul className={projectStyles.contribution_list}>
              {project.contributions &&
                project.contributions.map((c) => (
                  <li className={projectStyles.contribution} key={c.id}>{c.contribution}</li>
                ))}
            </ul>
            <p className={projectStyles.skills}>{project.skills}</p>
            {project.externalUrl && (
              <Button href={project.externalUrl}>{btnText}</Button>
            )}
          </div>
        </div>
        {project.videoUrl && <div className={projectStyles.video_container}> <iframe className={projectStyles.embed_video} title={project.videoUrl} src={project.videoUrl}>
        </iframe></div>}
        <DynamicGrid />
        </>
      )}
    </>
  );
}
