import { Outlet } from "react-router-dom";
import FooterH from "../components/FooterH/FooterH";
import NavBarH from "../components/NavBarH/NavBarH";
import TopBanner from "../components/TopBanner/TopBanner";
import star from '../assets/images/TopBanner/icon/star-icon.png';
import arrow from '../assets/images/TopBanner/icon/Icon .png';
import logo from '../assets/images/nav/image/big-logo.svg';
import { nav } from "../data/navData";
import { footerInfo, footerSection, footerSocial } from "../data/footerData";
import ScrollToTopNM from "../components/ScrollToTopNM/ScrollToTopNM";
import { ToastProvider } from "../utils/toast";
import { useState } from "react";
import Intro from "../components/Intro/Intro";
export default function Layout() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="text-sm lg:text-base desktop:text-lg">
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <ScrollToTopNM />
      <TopBanner text1="Free Courses" text2="Sale Ends Soon, Get It Now" img1={star} img2={arrow} />
      <NavBarH
        logo={logo}
        navData={nav}
        className={`transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
      />
      <Outlet />
      <ToastProvider />
      <FooterH copyRight="© 2023 Skillbridge. All rights reserved." logo={logo} Info={footerInfo} Section={footerSection} Socila={footerSocial} />
    </div>
  );
}
