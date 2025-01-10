import { NavLink } from "react-router-dom";
import Xmark from "../../assets/images/nav/icon/x-mark.png";
import { SideBarProps } from "../../interfaces";

export default function SideBar({ isMenuOpen, setIsMenuOpen, navData }: SideBarProps) {
  return (
    <>
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
          <ul className="lg:hidden flex flex-col items-center justify-center gap-5 flex-grow">
          {navData.map((e, i) => (
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
          <div className="py-5 flex justify-center">
            <button onClick={() => setIsMenuOpen(false)}>
              <img src={Xmark} alt="close" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
