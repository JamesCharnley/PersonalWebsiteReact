import Button from './Button';
import projectStyles from './ProjectCard.module.css';

export default function ProjectCard({id, imageUrl, title, description, skills, externalUrls}){
  const projectId= id;
  return (
    <div className={projectStyles.project_container}>
      {/*<img src={imageUrl} alt="Avatar" />*/}
      <a className={projectStyles.a_wrapper} href={`/project/${projectId}`}>
        <div
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
          className={projectStyles.image}
        ></div>
      </a>
      <div className={projectStyles.text_container}>
        <h1 className={projectStyles.project_title}>{title}</h1>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Skills:</strong> {skills}
        </p>
      </div>
      <div className={projectStyles.links_container}>
        {externalUrls &&
          externalUrls.map((e) => (
            <Button key={e.id} href={e.externalUrl}>
              {e.displayText}
            </Button>
          ))}
      </div>
    </div>
  );
}