import announcements from "../data/announcementData";
import "../styles/topNotice.css";

const TopNotice = () => {
  return (
    <div className="notice-bar">
      <div className="notice-track">
        {announcements.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="notice-item"
          >
            🆕 {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNotice;
