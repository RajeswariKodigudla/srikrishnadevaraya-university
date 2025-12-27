<>
  <TopNotice />
  <Header />
  {/* <Navbar /> */}

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about/about-university" element={<AboutUniversity />} />
    <Route path="/about/mission-vision" element={<MissionVision />} />
    <Route path="/about/history" element={<History />} />
    <Route path="/about/university-mous" element={<UniversityMoUs />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>

  <Footer />
</>
