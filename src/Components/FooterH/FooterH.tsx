import { Link } from "react-router-dom";
import { footerData } from "../../interfaces";
import IconBoxNM from "../SectionFormContactNM/IconBoxNM";


export default function FooterH({copyRight , Socila ,logo , Info , Section} : footerData) {
  return (
    <footer className=" bg-white desktop:px-40  px-5 lg:px-20">
      <div className=" md:pt-100 md:pb-12.5 pt-12.5 mb-5 gap-y-6 flex lg:flex-nowrap flex-wrap justify-between">
        <div className="flex flex-col md:gap-10 gap-7.5">
          <img src={logo} className="desktop:w-[54px] lg:w-11 w-10" alt="logo"  />
          <div>
          {Info.map((e,i) => (
          <div key={i} className=" flex gap-1.5 md:mb-5 mb-3">
            <img src={e.icon} className="w-6 h-6" alt={e.text} />
            <Link to="#" className="text-Grey/10 desktop:text-lg text-base">
             {e.text}
             </Link>
          </div>
          ))}
        </div>
        </div>
        <div className="flex lg:flex-nowrap  flex-wrap desktop:gap-7.5 md:gap-6 gap-7.5 desktop:w-1/2 lg:w-57">
          {Section.map((e,i) => (
            <div key={i} className="md:w-1/3 w-auto">
              <Link className="  desktop:text-xl font-semibold " to={e.path}>{e.title}</Link>
              <ul className="mt-3.5">
                {e.li.map((li , i) => 
                (<li className="mb-2 text-Grey/35 desktop:text-lg  tablet:text-base text-sm" key={i}>{li}</li>))}
              </ul>
            </div>
          ))}
             {Socila.map((e,i) => (
              <div key={i} className="md:w-1/3 w-full">
                <h3 className=" desktop:text-xl font-semibold mb-4">{e.title}</h3>
                <div className="flex gap-3.5">
                {e.icon.map((link, i) => (
                  <IconBoxNM key={i} src={link} />
               
                ))}
                </div>
              </div>
             ))}
        </div>
      </div>
      <div className="text-center md:pt-12.5 md:pb-7.5 pt-5 pb-6 border-t border-White/95 ">
        <p className=" text-Grey/40  desktop:text-lg text-sm font-normal leading-27">{copyRight}</p>
      </div>
    </footer>
  )
}
