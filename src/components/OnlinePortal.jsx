import { onlinePortals } from "../data/onlinePortalData";
import "../styles/onlinePortal.css";

const OnlinePortal = () => {
  return (
    <section className="online-portal">
      <h2>ONLINE PORTAL</h2>

      <div className="portal-grid">
        {onlinePortals.map((item, i) => (
          <div key={i} className="portal-card">
            {/* ICON – NO BACKGROUND */}
            <img src={item.icon} alt={item.label} />

            {/* TEXT – BROWN BACKGROUND */}
            <div className="portal-text">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlinePortal;
