import PageBanner from "../../components/PageBanner";

export default function Faculties() {
  return (
    <>
      <PageBanner
        title="Faculties"
        breadcrumb="Home / Academics / Faculties"
      />

      <div className="faculties-wrapper">

        <div className="faculties-grid">

          {/* Languages & Literature */}
          <div className="faculty-box">
            <h3>Languages & Literature</h3>
            <p>
              The Faculty of Languages & Literature at the University is divided
              into three departments, where research and teaching are carried
              out in the fields of English & Comparative Literature, Telugu and
              Hindi. The faculty offers Post Graduate courses and Research in
              the fields of English & Comparative Literature, Telugu and Hindi.
            </p>
          </div>

          {/* Social Sciences */}
          <div className="faculty-box">
            <h3>Faculty of Social Sciences</h3>
            <p>
              The Faculty of Social Sciences at the University is divided into
              eight departments, where research and teaching are carried out in
              the fields of Adult & Continuing Education, Economics, History,
              Political Science & Public Administration, Rural Development &
              Social Work, Sociology, Education and Library & Information
              Science.
            </p>
          </div>

          {/* Physical Sciences */}
          <div className="faculty-box">
            <h3>Faculty of Physical Sciences</h3>
            <p>
              The Faculty of Physical Sciences at the University is divided into
              nine departments, where research and teaching are carried out in
              the fields of Chemistry, Computer Science, Electronics,
              Instrumentation, Mathematics, Physics, Physical Education &
              Sports, Polymer Science & Technology and Statistics.
            </p>
          </div>

          {/* Life Sciences */}
          <div className="faculty-box">
            <h3>Faculty of Life Sciences</h3>
            <p>
              The Faculty of Life Sciences at the University is divided into
              eight departments, where research and teaching are carried out in
              the fields of Botany, Bio-Chemistry, Bio-Technology, Microbiology,
              Sericulture, Zoology, Geography and Pharmacy.
            </p>
          </div>

          {/* Law */}
          <div className="faculty-box">
            <h3>Faculty of Law</h3>
            <p>
              The Faculty of Law at the University is having one department,
              where research and teaching are carried out in the field of Law.
              The faculty offers Post Graduate courses and Research in the
              fields of Law.
            </p>
          </div>

          {/* Commerce & Management */}
          <div className="faculty-box">
            <h3>Faculty of Commerce and Management</h3>
            <p>
              The Faculty of Commerce & Management at the University is divided
              into two departments, where research and teaching are carried out
              in the fields of Commerce and Management. The faculty offers Post
              Graduate courses and Research in the fields of Commerce and
              Management.
            </p>
          </div>

        </div>

        {/* Engineering – full width */}
        <div className="faculty-box full-width">
          <h3>Faculty of Engineering</h3>
          <p>
            The Faculty of Engineering and Technology at the University is
            divided into five departments, where teaching is carried out in the
            fields Civil Engineering, Computer Science & Engineering, Electrical
            & Electronics Engineering, Electronics & Communication Engineering
            and Mechanical Engineering. The faculty offers Under Graduate and
            Post Graduate courses in the fields Civil Engineering, Computer
            Science & Engineering, Electrical & Electronics Engineering,
            Electronics & Communication Engineering and Mechanical Engineering.
          </p>
        </div>

      </div>
    </>
  );
}
