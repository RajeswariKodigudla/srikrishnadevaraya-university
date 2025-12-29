import PageBanner from "../../components/PageBanner";

export default function HealthCenter() {
  return (
    <>
      <PageBanner
        title="Health Center"
        breadcrumb="Home / Facilities / Health Center"
      />

      <section className="content-section">
        <div className="content-grid">
          <div>
            <h2>Health Center</h2>
            <p>
              The Health Centre caters to the needs of students, teaching and
              non-teaching staff. Out-patient services and free drug dispensing
              facilities are available.
            </p>

            <ul>
              <li>Out-patient clinic</li>
              <li>Pregnancy & antenatal checkups</li>
              <li>Family planning services</li>
              <li>X-ray and ECG facilities</li>
              <li>Ambulance services</li>
            </ul>
          </div>

          <div>
            <h2>Health Center Members</h2>
            <div className="card-grid">
              <div className="info-card">
                Dr. C. Sreenivas Reddy – Medical Officer
              </div>
              <div className="info-card">
                Ambulance – Mobile: 949188202
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
