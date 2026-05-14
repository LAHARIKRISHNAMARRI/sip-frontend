import Navbar from "../components/Navbar";

import SideBar from "../components/SideBar";

export default function DashboardLayout({
  children,
}) {

  return (

    <div className="flex">

      <SideBar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}