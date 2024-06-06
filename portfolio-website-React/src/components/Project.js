import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        const res = await fetch(`https://www.jamescharnley.com/api/projects/${id}`);
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

  return (
    <>
      {loadFailed && <p>failed to fetch data 😢</p>}
      {isLoading && !loadFailed ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{project.title}</p>
        </div>
      )}
    </>
  );
}
