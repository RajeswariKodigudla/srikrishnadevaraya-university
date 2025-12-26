import PageBanner from "../components/PageBanner";

export default function AboutUniversity() {
  return (
    <>
      <PageBanner
        title="About University"
        breadcrumb="Home » About » About University"
      />

      <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        <p>
          The University of Allahabad, established in 1887, is one of the oldest
          modern universities in India and has played a pivotal role in shaping
          higher education in the country.
        </p>
      </div>
    </>
  );
}

