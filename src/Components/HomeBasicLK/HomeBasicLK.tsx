import { Link } from "react-router-dom";
import { BasicHome } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import TitleLK from "../TitleLK/TitleLK";



export default function HomeBasicLK({text,par,btn,varwidth,fontSize,flex,href}:BasicHome) {
  return (
    <div className="flex justify-between items-end flex-wrap gap-y-5">
        <div className={`flex flex-col ${varwidth}`}>
        <TitleLK text={text} fontSize={fontSize}  />
        <PargraphCommonLK par={par} changeColor={true}/>
        </div>
        <div className={`${flex}`}>
            {btn ? <Link to={`${href}`} className={`px-4 desktop:px-5 py-3.5 desktop:py-4 text-sm leading-5.6 desktop:text-lg font-medium desktop:leading-6.5 text-neutral-800 rounded-md bg-White/99 border hover:bg-neutral-800 hover:text-White/97 hover:border-White/97 ransition duration-500 ease-in-out`}>{btn}</Link> : ''}
            </div>
    </div>
  );
}
