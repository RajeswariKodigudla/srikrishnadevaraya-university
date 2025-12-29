import PageBanner from "../../components/PageBanner";

export default function Admissions() {
  return (
    <>
      <PageBanner
        title="Admissions"
        breadcrumb="Home / Academics / Admissions"
      />

      <div style={{ padding: "40px" }}>
        <h2>Admissions</h2>

        <p>
          The University offers admissions to various Undergraduate,
          Postgraduate, M.Phil and Ph.D programmes through entrance
          examinations and merit-based selection as per University norms.
        </p>

        <h3>Undergraduate Programmes</h3>
        <ul>
          <li>B.A / B.Sc / B.Com</li>
          <li>B.Tech / B.Pharmacy</li>
          <li>B.Ed / B.P.Ed</li>
        </ul>

        <h3>Postgraduate Programmes</h3>
        <ul>
          <li>M.A / M.Sc / M.Com</li>
          <li>M.Tech / M.Pharmacy</li>
          <li>MBA / MCA</li>
        </ul>

        <h3>Research Programmes</h3>
        <ul>
          <li>M.Phil</li>
          <li>Ph.D</li>
        </ul>
      </div>
    </>
  );
}
