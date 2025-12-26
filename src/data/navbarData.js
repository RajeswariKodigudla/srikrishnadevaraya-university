const navbarData = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    children: [
      { title: "About University" },
      { title: "Mission & Vision" },
      { title: "Acts and Statues" },
      { title: "Ordinance" },
      { title: "CCS (Conduct) Rules" },
      { title: "University MoU's" },
      { title: "RTI" },
      { title: "Budget Information" },
      { title: "Internal Quality Assurance Cell" },
      { title: "Institutional Academic Integrity Panel (IAIP)" },
      { title: "Institutional Ethics Review Board (IERB)" },
      { title: "The Institutional Biosafety Committee (IBSC)" },
      {
        title: "University Report",
        children: [
          { title: "Annual Report" },
          { title: "Annual Quality Assurance Report (AQAR)" },
          { title: "AISHE" },
          { title: "NIRF" }
        ]
      },
      {
        title: "Archives",
        children: [
          { title: "Archived News & Updates" },
          { title: "Result" },
          { title: "Recruitment" },
          { title: "Tender" }
        ]
      }
    ]
  },
  {
    title: "Administration",
    children: [
      { title: "Visitor" },
      { title: "Chief Rector" },
      { title: "Chancellor" },
      { title: "Vice Chancellor" },
      { title: "Deans" },
      { title: "Registrar" },
      { title: "Finance Officer" },
      { title: "PRO" },
      { title: "Legal Cell" },
      {
        title: "Statutory Bodies",
        children: [
          {
            title: "The Court"
          },
          {
            title: "Executive Council",
            children: [
              { title: "Minutes of Previous Executive Council Meetings" },
              { title: "Executive Council" }
            ]
          },
          {
            title: "Academic Council",
            children: [
              { title: "Minutes of Previous Academic Council Meetings" },
              { title: "List of Academic Council Members" }
            ]
          },
          {
            title: "Others",
            children: [
              { title: "International Students Advisor" }
            ]
          }
        ]
      },
      { title: "Head of Departments" },
      { title: "Proctor" },
      { title: "Librarian" },
      { title: "Controller of Examinations" },
      { title: "Directors/Coordinators" },
      { title: "Telephone Directory" },
      { title: "Rajbhasha Cell" },
      { title: "Purchase and Store Department" },
      { title: "Former Chancellors" },
      { title: "Former Vice Chancellors" }
    ]
  },
  {
    title: "Academics",
    children: [
      { title: "Departments" },
      { title: "Institutes" },
      { title: "Centres" },
      { title: "Faculties" },
      { title: "Courses" },
      { title: "Academic Calendar" },
      { title: "Downloads" }
    ]
  },
  {
    title: "Student",
    children: [
      { title: "ABC ID" },
      { title: "Admit Card" },
      { title: "Result" },
      { title: "Pay Fees" },
      { title: "Scholarships / Awards" },
      { title: "International Students" },
      { title: "Student Feedback Form" }
    ]
  },
  {
    title: "Research",
    children: [
      { title: "Research Projects" },
      { title: "Research Publications" },
      { title: "Book Published" },
      { title: "IPR/Patent" },
      { title: "Ph.D Data" }
    ]
  },
  {
    title: "Facilities",
    children: [
      { title: "Central Library" },
      { title: "Computer Centre" },
      { title: "Hostels Accommodation" },
      { title: "Health Centre" },
      { title: "Guest House" }
    ]
  },
  {
    title: "Gallery",
    children: [
      { title: "Photo Gallery" },
      { title: "Video Gallery" },
      { title: "Current Stories of UoA" }
    ]
  },
  {
    title: "Alumni",
    children: [
      { title: "Distinguished Alumni" },
      { title: "Alumni Meet 27-28 April 2024" },
      { title: "Wall of Donors" },
      { title: "Alumni Association" },
      { title: "Memorandum" }
    ]
  },
  {
    title: "Colleges",
    children: [
      { title: "Allahabad Degree College, Prayagraj" },
      { title: "Arya Kanya Degree College, Prayagraj" },
      { title: "Ewing Christian College, Prayagraj" }
    ]
  },
  { title: "Endowment" },
  { title: "IQAC" },
  { title: "News letter" },
  {
    title: "Convocation",
    children: [
      { title: "Convocation 2024" },
      { title: "Convocation 2021" }
    ]
  }
];

export default navbarData;
