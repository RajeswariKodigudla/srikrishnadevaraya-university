import PageBanner from "../../components/PageBanner";

export default function CoursesOffered() {
  return (
    <>
      <PageBanner
        title="Courses Offered"
        breadcrumb="Home / Academics / Courses Offered"
      />

      <div className="academics-grid">
        <div className="box">
          <h3>Under Graduation</h3>
          <ul>
            <li>B.Tech / B.Pharmacy</li>
            <li>BA / BSc / BCom / BBM</li>
            <li>B.Ed</li>
            <li>B.P.Ed</li>
          </ul>
        </div>

        <div className="box">
          <h3>Post Graduation</h3>
          <ul>
            <li>M.Tech / M.Pharmacy</li>
            <li>MCA / MBA</li>
            <li>MA / MSc / MCom / MPED / MSW / MLISc</li>
            <li>PGDISM</li>
          </ul>
        </div>

        <div className="box">
          <h3>M.Phil</h3>
          <ul><li>M.Phil</li></ul>
        </div>

        <div className="box">
          <h3>Ph.D</h3>
          <ul><li>Ph.D</li></ul>
        </div>
      </div>
    </>
  );
}
