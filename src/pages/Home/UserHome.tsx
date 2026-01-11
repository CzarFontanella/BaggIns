import { Outlet } from "react-router-dom";
import SideBar from "../../components/Home/SideBar";

export default function UserHome() {
  return (
    <div className="flex flex-row min-h-[calc(100vh-107px)]">
      <SideBar />
      <section className="flex flex-col items-center p-8 flex-1">
        <Outlet />
      </section>
    </div>
  );
}
