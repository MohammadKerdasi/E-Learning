import { benefit } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import TitleAsNumber from "./TitleAsNumber";
import TitleH3 from "./TitleH3";

export default function CardBenefit({ numberB, title, par, imag }: benefit) {
  return (
    <div className="bg-white rounded-[10px] 2xl:rounded-xl p-7.5 lg:p-10 2xl:p-13 text-neutral-800 flex flex-col justify-between">
      <TitleAsNumber numberB={numberB} />
      <div className="py-7.5 lg-py-10 desktop:py-12.5">
        <div className="pb-2.5 2xl:pb-3.5">
          <TitleH3 title={title} />
        </div>
        <PargraphCommonLK par={par} />
        <p className="text-Grey/30 font-normal text-sm lg:text-base 2xl:text-lg">
          {par}
        </p>
      </div>
      <div className="flex justify-end">
        <div className="size-13.8 2xl:size-18 rounded-md 2xl:rounded-lg flex justify-center items-center border border-White/95 bg-White/99">
          <img src={imag} className="w-6.8 2xl:w-auto" />
        </div>
      </div>
    </div>
  );
}
