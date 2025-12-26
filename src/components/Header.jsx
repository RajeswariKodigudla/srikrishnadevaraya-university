import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      {/* LEFT LOGO */}
      <img
        src={`${process.env.PUBLIC_URL}/images/logo-left.png`}
        alt="University Logo Left"
        className="logo-img"
      />

      {/* UNIVERSITY NAME */}
      <div className="title">
        <h1>इलाहाबाद विश्वविद्यालय</h1>
        <h2>UNIVERSITY OF ALLAHABAD</h2>
        <p>(A Central University)</p>
        <span>Accredited with A+ Grade by NAAC</span>
      </div>

      {/* RIGHT LOGO */}
      <img
        src={`${process.env.PUBLIC_URL}/images/logo-right.png`}
        alt="University Logo Right"
        className="logo-img"
      />
    </div>
  );
}
