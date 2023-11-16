import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tooltip from "@mui/material/Tooltip";

export default function Footer() {
  return (
    <footer>
      <div className="background">
        <Tooltip title="Visit My LinkedIn" arrow>
          <a href="https://www.linkedin.com/in/nathangreeff">
            <LinkedInIcon className="icon" />
          </a>
        </Tooltip>
        <Tooltip title="Visit My Github" arrow>
          <a href="https://github.com/NateGreeff">
            <GitHubIcon className="icon" />
          </a>
        </Tooltip>
        <Tooltip title="Visit My YouTube Channel" arrow>
          <a href="https://www.youtube.com/channel/UCIwCO5H0NVQnPApCukIpShQ">
            <YouTubeIcon className="icon" />
          </a>
        </Tooltip>
      </div>
    </footer>
  );
}
