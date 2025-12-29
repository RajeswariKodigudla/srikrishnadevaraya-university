import { Routes, Route, Navigate } from "react-router-dom";

import TopNotice from "./components/TopNotice";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutUniversity from "./pages/AboutUniversity";
import MissionVision from "./pages/MissionVision";
import History from "./pages/History";
import UniversityMoUs from "./pages/UniversityMoUs";

import Chancellor from "./pages/administration/Chancellor";
import ViceChancellor from "./pages/administration/ViceChancellor";
import Registrar from "./pages/administration/Registrar";
import ExecutiveCouncil from "./pages/administration/ExecutiveCouncil";
import AcademicSenate from "./pages/administration/AcademicSenate";
import Deans from "./pages/administration/Deans";
import Directors from "./pages/administration/Directors";
import Officials from "./pages/administration/Officials";

import Admissions from "./pages/academics/Admissions";
import CoursesOffered from "./pages/academics/CoursesOffered";
import Syllabus from "./pages/academics/Syllabus";
import AcademicCalendar from "./pages/academics/AcademicCalendar";
import Faculties from "./pages/academics/Faculties";
import Regulations from "./pages/academics/Regulations";

import PlacementCell from "./pages/facilities/PlacementCell";
import CentralLibrary from "./pages/facilities/CentralLibrary";
import HealthCenter from "./pages/facilities/HealthCenter";
import Hostel from "./pages/facilities/Hostel";
import NSS from "./pages/facilities/NSS";
import SportsGym from "./pages/facilities/SportsGym";



function App() {
  return (
    <>
      <TopNotice />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about/about-university" element={<AboutUniversity />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/university-mous" element={<UniversityMoUs />} />

        <Route
          path="/administration/chancellor"
          element={<Chancellor />}
        />

        <Route
          path="/administration/vice-chancellor"
          element={<ViceChancellor />}
        />

        <Route path="/administration/registrar" element={<Registrar />} />
<Route path="/administration/executive-council" element={<ExecutiveCouncil />} />
<Route path="/administration/academic-senate" element={<AcademicSenate />} />
<Route path="/administration/deans" element={<Deans />} />
<Route path="/administration/directors" element={<Directors />} />
<Route path="/administration/officials" element={<Officials />} />

<Route path="/academics/admissions" element={<Admissions />} />
<Route path="/academics/courses-offered" element={<CoursesOffered />} />
<Route path="/academics/syllabus" element={<Syllabus />} />
<Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
<Route path="/academics/faculties" element={<Faculties />} />
<Route path="/academics/regulations" element={<Regulations />} />

<Route path="/facilities/placement-cell" element={<PlacementCell />} />
<Route path="/facilities/central-library" element={<CentralLibrary />} />
<Route path="/facilities/health-center" element={<HealthCenter />} />
<Route path="/facilities/hostel" element={<Hostel />} />
<Route path="/facilities/nss" element={<NSS />} />
<Route path="/facilities/sports-gymnasium" element={<SportsGym />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
