import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = () => {
    return (
        <div id="project" className="project">
            <FontAwesomeIcon icon={faFolderOpen} />
            <h2>
            <a 
                className="projectLink" 
                href="https://finalproject-1-ax9d.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                MY PROJECTS
            </a>

            </h2>

        </div>
    );
}

export default Project;
