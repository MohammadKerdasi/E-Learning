import TitleLK from "../TitleLK/TitleLK";
import { DataPropsHeadline } from '../../interfaces'
export default function HeadlineNM({ data , addingData}: { data: DataPropsHeadline , addingData?:string}) {
    const { text, para } = data;
    return (
        <div className="flex flex-col lg:flex-row
        gap-4 lg:gap-20 desktop:gap-100px 
        pb-[30px] lg:pb-[40px] desktop:pb-paddingBottom50 
        border-b-[1px] border-b-White/90 mb-10 
        lg:mb-20 desktop:mb-100px px-0 lg:px-60 desktop:px-[132px]
        max-w-1860px m-auto items-center pt-10 lg:pt-20 desktop:pt-100px
        mx-4 lg:mx-5 desktop:mx-[30px]">
            <div className="w-full lg:w-[46.867679197%]">
                <TitleLK text={text} adding={addingData} />    
            </div>
            <p className="text-Grey/35 w-full lg:w-[46.867679197%]">
                {para}
            </p>
        </div>
    )
}
