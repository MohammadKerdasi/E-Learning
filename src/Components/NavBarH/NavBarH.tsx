import { NavLink } from "react-router-dom";
import { navProps } from "../../interfaces";
import { useEffect, useState } from "react";
import menu from "../../assets/images/nav/icon/toggle.svg";
import Xmark from "../../assets/images/nav/icon/x-mark.png";

export default function NavBarH({ logo, navData }: navProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("login");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0  desktop:pt-5 pt-4 pb-5  desktop:pb-6 flex items-center justify-between desktop:px-nav lg:px-60  transition-all duration-300 ${
        isScrolled ? "bg-White/95 tablet:mx-0 mx-0 shadow-lg px-4 desktop:mx-0" : "desktop:mx-7.5 tablet:mx-5 mx-4"
      }`}
    >
      <div className="flex justify-between gap-50 items-center">
        <img src={logo} className="desktop:w-54 tablet:w-11" alt="logo" />
        <ul className="lg:flex hidden">
          {navData.slice(0, 4).map((e, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "py-3.5 px-6 rounded-lg font-normal bg-White/95 h-full transition-all text-sm desktop:text-lg duration-300"
                    : "py-3.5 px-6 rounded-lg font-normal  h-full text-sm desktop:text-lg "
                }
                to={e.path}
              >
                {e.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-5">
        {navData.slice(5, 7).map((e, i) => (
          <NavLink
            key={i}
            to={e.path}
            onClick={() => setActiveButton(e.text.toLowerCase())}
            className={`${
              activeButton === e.text.toLowerCase()
                ? "bg-Orange/50 text-white  desktop:py-3.5  desktop:px-8.5 py-3 px-5"
                : ""
            }   desktop:text-lg text-sm font-normal transition-all duration-300 rounded-lg`}
          >
            {e.text}
          </NavLink>
        ))}
        <div className="lg:hidden block">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-White/95 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow flex flex-col items-center justify-center gap-5">
            {navData.map((e, i) => (
              <NavLink
                key={i}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "mr-3.5 font-normal text-lg lg:text-xl leading-6 bg-Orange/50 text-white px-6 py-3 rounded-lg"
                    : "mr-3.5 font-normal text-lg lg:text-xl leading-6 px-6 py-3 rounded-lg"
                }
                to={e.path}
              >
                {e.text}
              </NavLink>
            ))}
          </div>
          <div className="py-5 flex justify-center">
            <button onClick={() => setIsMenuOpen(false)}>
              <img src={Xmark} alt="close" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
