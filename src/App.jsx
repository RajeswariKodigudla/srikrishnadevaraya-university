import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TopNotice from "./components/TopNotice";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UniversityMoUs from "./pages/UniversityMoUs";

import HomePage from "./pages/HomePage";
import AboutUniversity from "./pages/AboutUniversity";
import MissionVision from "./pages/MissionVision";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter basename="/srikrishnadevaraya-university">
      <TopNotice />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about/about-university" element={<AboutUniversity />} />
        <Route path="/about/mission-vision" element={<MissionVision />} />
        <Route path="/about/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" />} />
<Route
  path="/about/university-mous"
  element={<UniversityMoUs />}
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
