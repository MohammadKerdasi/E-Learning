import { Link } from "react-router-dom";
import { LinkPropsHH } from "../../interfaces";

export default function LinkHH({data , arrow} : LinkPropsHH) {
  return (
    <div className="flex justify-center items-center mt-6  desktop:mt-7.5 lg:gap-3 gap-1.5">
       {data?.map((e,i)=> 
          <Link key={i} to={e.linkPath} className=" leading-27  desktop:text-lg md:text-base text-Grey/15">{e.ptext}
          <span className=" underline font-medium">{e.location}</span>
          </Link>
       )}
       {data?.map((e,i)=> 
       <Link key={i} to={e.linkPath} className=" leading-27  desktop:text-lg md:text-base text-Grey/15">
        <img src={arrow} alt='arrow' className="  desktop:w-6 w-5  desktop:h-6 h-5"/>
       </Link>
        )}
     
    </div>
  )
}
