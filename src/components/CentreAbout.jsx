import { centreMenu } from "../data/centreMenuData";
import { aboutText } from "../data/centreAboutData";
import "../styles/centreAbout.css";

const CentreAbout = () => {
  return (
    <div className="centre-wrapper">
      
      {/* LEFT MENU */}
      <div className="centre-sidebar">
        {centreMenu.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item === "About" ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="centre-content">
        <h2>About</h2>
        <p>
          {aboutText.split("\n\n").map((para, i) => (
            <span key={i}>
              {para}
              <br /><br />
            </span>
          ))}
        </p>
      </div>

    </div>
  );
};

export default CentreAbout;
