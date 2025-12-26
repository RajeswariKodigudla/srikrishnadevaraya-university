const menuData = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    dropdown: [
      {
        title: "About University",
        path: "/about/about-university"
      },
      {
        title: "Mission & Vision",
        path: "/about/mission-vision"
      },
      {
        title: "Acts and Statutes",
        path: "/about/acts-statutes"
      },
      {
        title: "Ordinance",
        path: "/about/ordinance"
      },
      {
        title: "CCS (Conduct) Rules",
        path: "/about/ccs-rules"
      },
      {
        title: "University MoU's",
        path: "/about/mous"
      },
      {
        title: "RTI",
        path: "/about/rti"
      },
      {
        title: "Budget Information",
        path: "/about/budget"
      },
      {
        title: "Internal Quality Assurance Cell",
        path: "/about/iqac"
      },
      {
        title: "Institutional Academic Integrity Panel (IAIP)",
        path: "/about/iaip"
      },
      {
        title: "Institutional Ethics Review Board (IERB)",
        path: "/about/ierb"
      },
      {
        title: "The Institutional Biosafety Committee (IBSC)",
        path: "/about/ibsc"
      },
      {
        title: "University Report",
        subDropdown: [
          {
            title: "Annual Report",
            path: "/about/annual-report"
          },
          {
            title: "Annual Quality Assurance Report (AQAR)",
            path: "/about/aqar"
          },
          {
            title: "AISHE",
            path: "/about/aishe"
          },
          {
            title: "NIRF",
            path: "/about/nirf"
          }
        ]
      },
      {
        title: "Archives",
        subDropdown: [
          {
            title: "Archived News & Updates",
            path: "/about/archived-news"
          },
          {
            title: "Result",
            path: "/about/result"
          },
          {
            title: "Recruitment",
            path: "/about/recruitment"
          },
          {
            title: "Tender",
            path: "/about/tender"
          }
        ]
      }
    ]
  },
  { title: "Administration" },
  { title: "Academics" },
  { title: "Student" },
  { title: "Research" },
  { title: "Facilities" },
  { title: "Gallery" },
  { title: "Alumni" },
  { title: "Colleges" },
  { title: "Endowment" },
  { title: "IQAC" },
  { title: "News letter" },
  { title: "Convocation" }
];

export default menuData;
