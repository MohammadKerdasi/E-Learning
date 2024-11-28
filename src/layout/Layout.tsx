import { Outlet } from "react-router-dom";
import FooterH from "../Components/FooterH/FooterH";
import NavBarH from "../Components/NavBarH/NavBarH";


export default function Layout() {
  return (
    <>
      <NavBarH/>
      <Outlet/>
      <FooterH/>
    </>
  )
}
