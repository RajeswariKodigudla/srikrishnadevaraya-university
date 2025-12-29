import PageBanner from "../../components/PageBanner";

export default function CentralLibrary() {
  return (
    <>
      <PageBanner
        title="Central Library"
        breadcrumb="Home / Facilities / Central Library"
      />

      <section className="content-section">
        <div className="content-grid">
          <div>
            <h2>Central Library</h2>
            <img
              src="/images/central-library.jpg"
              alt="Central Library"
              className="content-image"
            />
          </div>

          <div>
            <h2>Central Library</h2>
            <p>
              The Central Library of the University is provided with a rich and
              varied collection of about 1,14,000 books, 190 periodicals and
              magazines. The open access facility is available from 8:30 AM to
              8:30 PM on working days.
            </p>
            <p>
              The library has SC/ST Book Bank, Competitive Examination Cell,
              INFLIBNET facility and reprographic services. Every student is
              provided with borrowing cards.
            </p>
          </div>
        </div>

        <h2 className="section-title">Central Library Members</h2>
        <div className="card-grid">
          <div className="info-card">Dr. K. Ramasubbaiah – Assistant Librarian</div>
          <div className="info-card">Dr. G. Gangadharaiah – Information Scientist</div>
          <div className="info-card">Dr. P. Balakrishna – Technical Assistant</div>
          <div className="info-card">S. Md. Isaak Basha – Library Assistant</div>
        </div>
      </section>
    </>
  );
}
