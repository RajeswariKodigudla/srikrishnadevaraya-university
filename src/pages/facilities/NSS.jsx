import PageBanner from "../../components/PageBanner";

export default function NSS() {
  return (
    <>
      <PageBanner
        title="National Service Scheme"
        breadcrumb="Home / Facilities / NSS"
      />

      <section className="content-section">
        <div className="content-grid">
          <div>
            <h2>Dr. D. Muralidhara Rao</h2>
            <p><strong>NSS Coordinator</strong></p>
            <p>Sri Krishnadevaraya University</p>
            <p>Email: nsssku@yahoo.com</p>
          </div>

          <div>
            <h2>National Service Scheme</h2>
            <p>
              NSS motivates students for community service, blood donation
              camps, health awareness programmes and social responsibility.
            </p>
            <p>
              Regular camps and special programmes are conducted every year.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
