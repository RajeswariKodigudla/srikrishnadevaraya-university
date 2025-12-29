import PageBanner from "../../components/PageBanner";

export default function PlacementCell() {
  return (
    <>
      <PageBanner
        title="Placement Cell"
        breadcrumb="Home / Facilities / Placement Cell"
      />

      <div className="page-content two-col">
        <div>
          <img
            src="/images/placement.jpg"
            alt="Placement Cell"
            className="content-image"
          />
          <h4>Dr. J. Keziya Rani</h4>
          <p>Assistant Professor</p>
        </div>

        <div>
          <h2>Placement Cell</h2>
          <p>
            The Placement Cell is headed by Prof. Dr. J. Keziya Rani.
            Each department has a faculty advisor to coordinate between
            departments and the Training & Placement Cell.
          </p>
          <p>
            Student coordinators get ample opportunities to participate
            actively in all placement related activities.
          </p>
        </div>
      </div>
    </>
  );
}
