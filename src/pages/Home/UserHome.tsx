import { Outlet } from "react-router-dom";
import SideBar from "../../components/Home/SideBar";

export default function UserHome() {
  return (
    <div className="flex flex-row min-h-[calc(100vh-123px)]">
      <SideBar />
      <section className="flex flex-col absolute left-1/2 -translate-x-1/2 p-8 flex-1">
        <Outlet />
      </section>
    </div>
  );
}
