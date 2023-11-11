import "../botton-header/bottom-header.css";
import GitHubIcon from "../images/gitHub.png";
import Linkedin from "../images/linkedin.png";

const BottomHeader = () => {
  return (
    <div className="bottom-header">
      <div>
        <img
          className="logo-icon"
          src={GitHubIcon}
          alt="github icon"
          onClick={() => {
            window.open("https://github.com/196Sebastian", "_blank");
          }}
        />
      </div>

      <div>
        <img
          className="logo-icon"
          src={Linkedin}
          alt="linkedin icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/correa-sebastian/",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default BottomHeader;
