import { benefit } from "../../interfaces";

export default function CardBenefit({numberB,title,par,imag}:benefit) {
  return (
    <div className="bg-white rounded-[10px] 2xl:rounded-xl p-7.5 lg:p-[40px] 2xl:p-13 text-neutral-800 lg:h-[370px] 2xl:h-[464px] flex flex-col justify-between">
         <div className="flex justify-end">
          <h2 className="text-5.5xl leading-10 lg:text-6xl 2xl:text-7.5xl font-bold 2xl:font-extrabold 2xl:leading-[65px]">{numberB}</h2>
         </div>
         <div className="py-7.5 lg:py-0">
         <h3 className="leading-8 text-xl 2xl:text-2xl 2xl:leading-9 font-semibold pb-2.5 2xl:pb-3.5">{title}</h3>
         <p className="text-Grey/30 font-normal text-sm lg:text-base 2xl:text-lg">{par}</p>
         </div>
         <div className="flex justify-end">
            <div className="size-13.8 2xl:size-18 rounded-md 2xl:rounded-lg flex justify-center items-center border border-White/95 bg-White/99">
                <img src={imag} className="w-6.8 2xl:w-auto"/>
            </div>
         </div>
    </div>
  )
}
