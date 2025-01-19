import { datatest } from "../../interfaces";
import PargraphCommonLK from "./../../components/PargraphCommonLK/PargraphCommonLK";

export default function CardLKHH({ par, imag, btn, theName }: datatest) {
  return (
    <div className="rounded-t-[10px] desktop:rounded-t-xl flex flex-col justify-between bg-white">
      <div className="p-7.5 lg:p-10 desktop:p-12.5 rounded-t-[10px]">
        <PargraphCommonLK par={par} />
      </div>
      <div className="border-t border-White/95 rounded-b-[10px] desktop:rounded-b-xl px-7.5 py-5 lg:px-10 lg:py-6 desktop:px-12.5 desktop:py-7.5 bg-White/99 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2.5 desktop:gap-[15px]">
          <img src={imag} alt={theName} />
          <p className="font-semibold md:text-base desktop:text-lg text-neutral-800">
            {theName}
          </p>
        </div>
        <button className="bg-White/97 px-4 py-3.5 desktop:px-6 desktop:py-4.5 border border-White/95 rounded-md  desktop:rounded-lg font-medium text-sm text-Grey/15 desktop:text-lg">
          {btn}
        </button>
      </div>
    </div>
  );
}
