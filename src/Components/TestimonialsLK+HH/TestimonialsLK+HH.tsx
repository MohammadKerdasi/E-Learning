import { useSelector } from "react-redux";
import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import CardLKHH from "./CardLK+HH";
import { RootState } from "../../redux/store";
import { datatest } from "../../interfaces";

export default function TestimonialsLKHH() {
  const cards: datatest[] = useSelector((state: RootState) => state.cards.cards.slice(0, 4));

  return (
    <div className="">
      <HomeBasicLK
        varwidth="w-full md:w-[73%]"
        text="Our Testimonials"
        par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        btn="View All"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 desktop:gap-7.5 pt-10 lg:pt-[60px] desktop:pt-20">
        {cards?.map((e,i) => (
          <CardLKHH key={i}
            id={e.id}
            par={e.par}
            btn={e.btn}
            theName={e.theName}
            imag={e.imag}
          />
        ))
        }
      </div>

    </div>
  );
}
