import { Outlet } from "react-router-dom";
import FooterH from "../components/FooterH/FooterH";
import NavBarH from "../components/NavBarH/NavBarH";


export default function Layout() {
  return (
    <div className="text-lg">
      <NavBarH/>
      <Outlet/>
      <FooterH/>
    </div>
  )
}
