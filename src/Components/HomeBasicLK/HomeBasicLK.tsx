import { BasicHome } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import TitleLK from "../TitleLK/TitleLK";



export default function HomeBasicLK({text,par,btn,varwidth}:BasicHome) {
  return (
    <div className="flex justify-between items-end">
        <div className={`flex flex-col ${varwidth}`}>
        <TitleLK text={text} />
        <PargraphCommonLK par={par}/>
        </div>
            {btn ? <button className="px-5 py-4 text-neutral-800 rounded-md bg-White/99 border">{btn}</button> : ''}
    </div>
  )
}
