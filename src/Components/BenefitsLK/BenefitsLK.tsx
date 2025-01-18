import { useDispatch, useSelector } from "react-redux";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import { useEffect, useState } from "react";
import { sliceBenefites } from "../../redux/slice";
import { RootState } from "../../redux/store";
import CardBenefit from "./CardBenefit";

export default function BenefitsLK() {
  const [viewAll, setviewAll] = useState(false);
  const partBenefite = useSelector(
    (state: RootState) => state.courses.fewBenefite
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (viewAll === true) {
      dispatch(sliceBenefites({ count: 9 }));
    } else {
      dispatch(sliceBenefites({ count: 6 }));
    }
  }, [viewAll, dispatch]);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-y-5">
        <HomeBasicLK
          varwidth="w-full md:w-9/12"
          text="Benefits"
          par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        />
        <button
          onClick={() => setviewAll(!viewAll)}
          className="px-4 desktop:px-5 py-3.5 desktop:py-4 text-sm leading-5.6 desktop:text-lg font-medium desktop:leading-6.5 text-neutral-800 rounded-md bg-White/99 border hover:bg-neutral-800 hover:text-White/97 hover:border-White/97 ransition duration-500 ease-in-out whitespace-nowrap"
        >
          {viewAll ? "view Less" : "view All"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-10 lg:pt-15 2xl:pt-20">
        {partBenefite.map((item, index) => {
          return (
            <CardBenefit
              imag={item.imag}
              title={item.title}
              numberB={item.numberB}
              key={index}
              par={item.par}
            />
          );
        })}
      </div>
    </div>
  );
}
