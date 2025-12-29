import PageBanner from "../../components/PageBanner";

export default function Hostel() {
  return (
    <>
      <PageBanner
        title="Hostel"
        breadcrumb="Home / Facilities / Hostel"
      />

      <section className="content-section">
        <div className="content-grid">
          <img
            src="/images/hostel.jpg"
            alt="Hostel"
            className="content-image"
          />

          <div>
            <h2>Hostel for Men / Women</h2>
            <p>
              Separate hostels for Men and Women students are available in the
              University. As accommodation is limited, admission into the
              college does not guarantee hostel accommodation.
            </p>
            <p>
              Hostel rules can be obtained from the Hostel Office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
