import PageBanner from "../../components/PageBanner";

export default function Gymnasium() {
  return (
    <>
      <PageBanner
        title="Gymnasium"
        breadcrumb="Home / Facilities / Sports - Gymnasium"
      />

      <section className="content-section">
        <div className="content-grid">
          <img
            src="/images/gymnasium.jpg"
            alt="Gymnasium"
            className="content-image"
          />

          <div>
            <h2>Sports – Gymnasium</h2>
            <p>
              The University provides facilities for a wide range of sports and
              games. The modern gymnasium is equipped with latest fitness
              equipment.
            </p>
            <p>
              Indoor games, weightlifting, athletics and coaching camps are
              conducted regularly.
            </p>
          </div>
        </div>

        <h2 className="section-title">Sports Board Members</h2>
        <div className="card-grid">
          <div className="info-card">Prof. M. Ramakrishna Reddy – Vice Chancellor</div>
          <div className="info-card">Prof. K. Krishna Naik – Rector</div>
          <div className="info-card">Dr. Aluru Krishna Kumari – Registrar</div>
          <div className="info-card">Prof. G. Balasubramanyam – Principal</div>
        </div>
      </section>
    </>
  );
}
