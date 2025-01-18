import { NavLink } from "react-router-dom";
import { navProps } from "../../interfaces";
import { useEffect, useState } from "react";
import menu from "../../assets/images/nav/icon/toggle.svg";
import SideBar from "../SideBar/SideBar";
import CurrentUser from "../CurrentUser/CurrentUser";


export default function NavBarH({ logo, navData }: navProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 desktop:pt-5 pt-4 pb-5 desktop:pb-6 flex items-center justify-between  transition-all duration-300 ${
        isScrolled
          ? "bg-White/97 tablet:mx-0 mx-0 shadow-lg px-4 desktop:mx-0 desktop:px-40 lg:px-20 "
          : " desktop:px-nav lg:px-15 desktop:mx-7.5 tablet:mx-5 mx-4 "
      }`}
    >
      <div className="flex justify-between gap-12.5 items-center">
        <img src={logo} className="desktop:w-[54px] lg:w-11 w-10" alt="logo" />
        <ul className="lg:flex hidden">
          {navData.map((e, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "py-3.5 px-5 rounded-lg font-normal  bg-White/95 h-full transition-all text-sm desktop:text-lg desktop:leading-6.5 duration-300"
                    : "py-3.5 px-5 rounded-lg font-normal  h-full text-sm desktop:text-lg "
                }
                to={e.path}
              >
                {e.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* user name and sign up login button */}
      <div className="flex items-center gap-5">
        <CurrentUser/>
        <div className="lg:hidden block">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      {/* side bar */}
      <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navData={navData} />
    </nav>
  );
}
