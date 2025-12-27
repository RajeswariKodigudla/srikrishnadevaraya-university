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
        <h1>శ్రీకృష్ణదేవరాయ విశ్వవిద్యాలయం</h1>
        <h2>SRI KRISHNADEVARAYA UNIVERSITY ANANTHAPUR</h2>
        <p>(A Central University)</p>
        <span>(Approved by AICTE & Accredited by NAAC)</span>
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
