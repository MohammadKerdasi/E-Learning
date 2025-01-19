import { Link } from "react-router-dom";
import { JoinProps } from "../../interfaces";

export const JoinSectionNA = ({ join }: { join: JoinProps }) => {
  return (
    <div className="bg-white rounded-xl p-20 flex justify-between items-center max-desktop:p-15 relative overflow-hidden max-md:flex-wrap max-md:p-7.5 max-md:gap-y-10">
      <div className="max-w-[1008px] z-10 max-1600:w-[70%] max-lg:w-9/12 max-md:w-full">
        <h2 className="max-desktop:text-4.5xl text-5xl font-semibold leading-12 max-md:leading-8.5 max-md:text-2.5xl relative">
          <span className="text-Orange/50 capitalize">{join.orangeText}</span>

          <span className="text-Grey/15">{join.text}</span>
        </h2>

        <p className="pt-5 text-Grey/30 text-lg max-desktop:text-base max-desktop:pt-4 max-md:text-sm">{join.desc}</p>
      </div>

      <Link to={join.link} className="bg-Orange/50 text-white capitalize w-[129px] max-desktop:w-[103px] py-4.5 z-10 text-lg rounded-lg font-semibold text-center max-desktop:text-sm  hover:bg-neutral-800 hover:text-White/97 transition duration-500 ease-in-out cursor-pointer"> {join.btn} </Link>

      <img src={join.img} alt="shape" className="absolute w-[500px] right-[9%] max-sm:w-[190px] max-sm:bottom-0 max-sm:-right-[4%]"/>
    </div>
  );
};
