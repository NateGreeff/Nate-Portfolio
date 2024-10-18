import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';


function Project(props) {
  const { name, image, github, live } = props;
  return (
    <div className="project background">
      <a href={live} target='_blank' rel='noreferrer'>
        <img src={image} alt={name} />
      </a>
      <div className="projectInfo">
        <h3>{name}</h3>
        {github && (
        <Tooltip title="Visit Repo" arrow>
          <a href={github} target='_blank' rel='noreferrer'><GitHubIcon className="githubIcon" fontSize='large'/></a>
        </Tooltip>
        )}
      </div>
    </div>
  );
}

export default Project;