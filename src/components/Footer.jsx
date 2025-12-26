import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP FOOTER (already done earlier) */}
      <div className="footer-main">
        <div>
          <h4>Contact</h4>
          <p><b>University of Allahabad</b></p>
          <p>Senate House Campus,</p>
          <p>University Road, Old Katra,</p>
          <p>Prayagraj (Allahabad)</p>
          <p>Uttar Pradesh - 211002</p>
          <p>0532-2461083</p>

          <h4 className="mt">For Visitors</h4>
          <p>Address</p>
          <p>Map & Directions</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Directory</p>
          <p>NEP 2020</p>
          <p>Sankalpana</p>
          <p>Tender</p>
          <p>Academic Calendar</p>
          <p>Download Forms</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Pay Fees</p>
          <p>Admit Card</p>
          <p>Student Feedback Form</p>
          <p>Holidays - 2025</p>
          <p>Holidays - 2026</p>
          <p>Public Self-Disclosure</p>
          <p>Study in India</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Annual Report</p>
          <p>Alumni portal</p>
          <p>Contact Us</p>
          <p>Web Mail</p>
          <p>University Ranking</p>
          <p>NCTE, New Delhi</p>
          <p>Code Of Conduct</p>
        </div>
      </div>

      {/* 🔻 BOTTOM COPYRIGHT BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <span>
            ©Copyright University of Allahabad. All Rights Reserved.
          </span>

          <span className="visitor">
            Visitors: <b>11069529</b>
          </span>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
