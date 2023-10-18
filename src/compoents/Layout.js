import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../css/Layout.css";

export default function Layout() {
  return (
    <main className="main_layout">
      <Sidebar />
      <Outlet />
    </main>
  );
}
