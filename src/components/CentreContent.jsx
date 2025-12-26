import centreContentData from "../data/centreContentData";
import "../styles/centre.css";

export default function CentreContent({ section }) {
  const data = centreContentData[section];

  return (
    <div className="centre-content">
      <h2>{data.title}</h2>
      {data.text.split("\n\n").map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
