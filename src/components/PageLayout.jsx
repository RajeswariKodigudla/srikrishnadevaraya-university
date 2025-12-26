import "../styles/pageLayout.css";

export default function PageLayout({ title, breadcrumb, children }) {
  return (
    <>
      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="page-banner-inner">
          <h1>{title}</h1>
          <p>{breadcrumb}</p>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="page-content-wrapper">
        <div className="page-content">
          {children}
        </div>
      </div>
    </>
  );
}
