import { homeIcons } from "../data/homeIconsData";
import "../styles/homeIcons.css";

const HomeIcons = () => {
  return (
    <div className="home-icons">
      {homeIcons.map((item, index) => (
        <div key={index} className="icon-card">
          <div className="icon">
            <img src={item.icon} alt={item.label} />
          </div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeIcons;
