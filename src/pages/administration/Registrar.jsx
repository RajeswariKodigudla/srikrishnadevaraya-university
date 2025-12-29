import PageBanner from "../../components/PageBanner";

export default function Registrar() {
  return (
    <>
      <PageBanner
        title="Registrar"
        breadcrumb="Home / Administration / Registrar"
      />

      <div style={{ padding: "40px" }}>
        <h2>Registrar Office</h2>
        <p>
          The Registrar is the administrative head of the university
          and is responsible for day-to-day operations.
        </p>
      </div>
    </>
  );
}
