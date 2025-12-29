import PageBanner from "../../components/PageBanner";

export default function AcademicSenate() {
  return (
    <>
      <PageBanner
        title="Academic Senate"
        breadcrumb="Home / Administration / Academic Senate"
      />

      <div style={{ padding: "40px" }}>
        <h2>Academic Senate</h2>

        <p>
          The Academic Senate is the principal academic body of the University.
          It is responsible for maintaining academic standards, framing academic
          policies, and advising the Executive Council on all academic matters.
        </p>

        <p>
          The Senate plays a vital role in curriculum development, examination
          reforms, research policies, and overall academic governance of the
          University.
        </p>
      </div>
    </>
  );
}
