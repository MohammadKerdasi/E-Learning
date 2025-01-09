import { NavLink } from "react-router-dom";
import { navProps } from "../../interfaces";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store"; // استبدل بمسار ملف Redux store
import { logout } from "../../redux/authSlice/index"; // إضافة دالة تسجيل الخروج من authSlice
import menu from "../../assets/images/nav/icon/toggle.svg";
import Button from "../HomeHero/Button";
import { data1, data2 } from "../../data/dataNavButtonHH";
import SideBar from "../SideBar/SideBar";

export default function NavBarH({ logo, navData }: navProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 desktop:pt-5 pt-4 pb-5 desktop:pb-6 flex items-center justify-between lg:px-60 transition-all duration-300 ${
        isScrolled
          ? "bg-White/97 tablet:mx-0 mx-0 shadow-lg px-4 desktop:mx-0 desktop:px-[162px]"
          : "desktop:px-nav desktop:mx-7.5 tablet:mx-5 mx-4"
      }`}
    >
      <div className="flex justify-between gap-50 items-center">
        <img src={logo} className="desktop:w-54 tablet:w-11" alt="logo" />
        <ul className="lg:flex hidden">
          {navData.map((e, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "py-3.5 px-5 rounded-lg font-normal bg-White/95 h-full transition-all text-sm desktop:text-lg duration-300"
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
      <div className="flex items-center gap-5">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="text-sm desktop:text-lg font-medium">
               {currentUser?.name}
            </span>
          </div>
        ) : (
          <>
            <Button data={data2} />
            <Button data={data1} />
          </>
        )}
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
