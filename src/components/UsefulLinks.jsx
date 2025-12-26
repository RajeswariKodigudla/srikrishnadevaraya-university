import { usefulLinks } from "../data/usefulLinksData";
import "../styles/usefulLinks.css";

const UsefulLinks = () => {
  return (
    <div className="useful-links">
      <h2>USEFUL LINKS</h2>
      <div className="links-row">
        {usefulLinks.map((item, i) => (
          <div key={i} className="logo-box">
            <img src={item.logo} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
