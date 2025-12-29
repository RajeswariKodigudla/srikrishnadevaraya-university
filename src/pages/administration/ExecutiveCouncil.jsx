import PageBanner from "../../components/PageBanner";

export default function ExecutiveCouncil() {
  return (
    <>
      <PageBanner
        title="Executive Council"
        breadcrumb="Home / Administration / Executive Council"
      />

      <div style={{ padding: "40px" }}>
        <h2>Executive Council</h2>
        <p>
          The Executive Council is the principal executive body
          of the University and is responsible for administration,
          finance, and policy decisions.
        </p>
      </div>
    </>
  );
}
