import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import TitleLK from "../TitleLK/TitleLK";
import CustomSlider from "./CustomSlider";

export default function SliderSectionHH() {
  return (
    <div className=" lg:w-[51.82%] ">
      <div className=" desktop:mb-20 lg:mb-[60px] mb-10">
        <TitleLK text={"Students Testimonials"} fontSize={'leading-11 !text-2.5xl lg:!text-3xl lg:!leading-[45px] desktop:!text-4.5xl desktop:!leading-12 desktop:mb-1.5 mb-1 !font-medium '}  />
        <PargraphCommonLK changeColor={true} par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."/>
      </div>
       <CustomSlider/>
    </div>
  )
}
