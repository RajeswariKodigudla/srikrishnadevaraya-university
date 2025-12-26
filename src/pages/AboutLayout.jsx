import { Outlet } from "react-router-dom";

export default function AboutLayout() {
  return (
    <>
      <div className="banner">About University</div>
      <Outlet />
    </>
  );
}
