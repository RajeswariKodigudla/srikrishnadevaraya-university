import PageBanner from "../../components/PageBanner";

export default function Deans() {
  return (
    <>
      <PageBanner
        title="Deans"
        breadcrumb="Home / Administration / Deans"
      />

      <div style={{ padding: "40px" }}>
        <h2>Deans of the University</h2>

        <p>
          Deans are the academic heads of various faculties. They are responsible
          for academic planning, faculty development, and implementation of
          academic policies within their respective faculties.
        </p>

        <p>
          Deans play a crucial role in maintaining academic quality and fostering
          research and innovation.
        </p>
      </div>
    </>
  );
}
