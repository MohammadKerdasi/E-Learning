import { Outlet } from "react-router-dom";
import FooterH from "../Components/FooterH/FooterH";
import NavBarH from "../Components/NavBarH/NavBarH";
import TopBanner from "../Components/TopBanner/TopBanner";
import star from '../assets/images/TopBanner/icon/star-icon.png'
import arrow from '../assets/images/TopBanner/icon/Icon .png'
import logo from '../assets/images/nav/image/big-logo.svg'
import { nav } from "../data/navData";
import { footerInfo, footerSection, footerSocial } from "../data/footerData";
import ScrollToTopNM from "../Components/ScrollToTopNM/ScrollToTopNM";

export default function Layout() {
  return (
    <div className="text-sm lg:text-base desktop:text-lg">
      <ScrollToTopNM />
      <TopBanner text1="Free Courses" text2="Sale Ends Soon, Get It Now" img1={star} img2={arrow}/>
      <NavBarH logo={logo} navData={nav}/>
      <Outlet/>
      <FooterH copyRight="© 2023 Skillbridge. All rights reserved." logo={logo} Info={footerInfo} Section={footerSection} Socila={footerSocial}/>
    </div>
  )
}