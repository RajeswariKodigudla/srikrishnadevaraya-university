import "./PageBanner.css";

export default function PageBanner({ title, breadcrumb }) {
  return (
    <div className="page-banner">
      <div className="page-banner-inner">
        <h1>{title}</h1>
        <p>{breadcrumb}</p>
      </div>
    </div>
  );
}
