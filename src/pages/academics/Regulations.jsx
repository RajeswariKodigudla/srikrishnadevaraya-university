import PageBanner from "../../components/PageBanner";

export default function Regulations() {
  return (
    <>
      <PageBanner
        title="Regulations"
        breadcrumb="Home / Academics / Regulations"
      />

      <div className="academics-wrapper">
        <div className="academics-grid">

          {/* Under Graduation */}
          <div className="academics-box">
            <h3>Under Graduation</h3>
            <ul>
              <li>B.Tech / B.Pharmacy</li>
              <li>BA / BSc / BCom / BBM</li>
              <li>B.Ed</li>
              <li>B.P.Ed</li>
            </ul>
          </div>

          {/* Post Graduation */}
          <div className="academics-box">
            <h3>Post Graduation</h3>
            <ul>
              <li>M.Tech / M.Pharmacy</li>
              <li>MCA / MBA</li>
              <li>MA / MSc / MCom / MPED / MSW / MLIBSC</li>
            </ul>
          </div>

          {/* M.Phil */}
          <div className="academics-box">
            <h3>Master of Philosophy</h3>
            <ul>
              <li>M.Phil</li>
            </ul>
          </div>

          {/* Ph.D */}
          <div className="academics-box">
            <h3>Doctor of Philosophy</h3>
            <ul>
              <li>Ph.D</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
